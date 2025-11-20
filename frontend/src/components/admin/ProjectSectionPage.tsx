"use client";

import { useMemo, useState } from "react";
import AdminShell from "./AdminShell";
import type { SectionConfig } from "@/app/admin/projects/sectionConfigs";

type Entry = Record<string, string> & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

type Props = {
  config: SectionConfig;
};

const createInitialForm = (config: SectionConfig) =>
  config.fields.reduce<Record<string, string>>((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

const sampleEntriesToState = (config: SectionConfig): Entry[] =>
  config.sampleEntries.map((entry, index) => {
    const stamp = new Date(Date.now() - index * 345000).toISOString();
    return {
      ...entry,
      id: `sample-${config.key}-${index + 1}`,
      createdAt: stamp,
      updatedAt: stamp,
    };
  });

const generateId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `entry-${Math.random().toString(36).slice(2, 10)}`;
};

export default function ProjectSectionPage({ config }: Props) {
  const [entries, setEntries] = useState<Entry[]>(() => sampleEntriesToState(config));
  const [formState, setFormState] = useState<Record<string, string>>(() =>
    createInitialForm(config),
  );
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");

  const currentAction = editingId ? "Update" : "Create";

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormState(createInitialForm(config));
    setEditingId(null);
    setShowForm(false);
  };

  const handleCreate = () => {
    resetForm();
    setShowForm(true);
  };

  const handleSubmit = () => {
    if (editingId) {
      setEntries((prev) =>
        prev.map((entry) =>
          entry.id === editingId
            ? { ...entry, ...formState, updatedAt: new Date().toISOString() }
            : entry,
        ),
      );
    } else {
      setEntries((prev) => {
        const now = new Date().toISOString();
        return [
          {
            id: generateId(),
            createdAt: now,
            updatedAt: now,
            ...formState,
          },
          ...prev,
        ];
      });
    }
    resetForm();
  };

  const handleEdit = (entry: Entry) => {
    setEditingId(entry.id);
    setFormState(
      config.fields.reduce<Record<string, string>>((acc, field) => {
        acc[field.name] = entry[field.name] ?? "";
        return acc;
      }, {}),
    );
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteClick = (id: string) => {
    setDeleteConfirmId(id);
    setDeleteConfirmText("");
  };

  const handleDeleteConfirm = () => {
    if (deleteConfirmText === "DELETE" && deleteConfirmId) {
      setEntries((prev) => prev.filter((entry) => entry.id !== deleteConfirmId));
      if (editingId === deleteConfirmId) {
        resetForm();
      }
      setDeleteConfirmId(null);
      setDeleteConfirmText("");
    }
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmId(null);
    setDeleteConfirmText("");
  };

  const handleView = (entry: Entry) => {
    // Navigate to public project page
    // For now, we'll use a placeholder route structure
    window.open(`/projects/${config.slug}/${entry.id}`, "_blank");
  };

  const fieldOrder = useMemo(() => config.fields.map((field) => field.name), [config.fields]);

  const getPrimaryField = (entry: Entry) => {
    const firstField = fieldOrder[0];
    return entry[firstField] || "Untitled";
  };

  const getSecondaryField = (entry: Entry) => {
    const secondField = fieldOrder[1];
    return entry[secondField] || "";
  };

  return (
    <AdminShell>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl flex-1">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">{config.tagline}</p>
            <h1 className="pt-2 text-4xl font-semibold text-white">{config.title}</h1>
            <p className="pt-4 text-sm text-white/70">{config.description}</p>
            <div
              className={`mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r ${config.gradient}`}
            />
          </div>
          {!showForm && (
            <button
              type="button"
              onClick={handleCreate}
              className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 transition hover:scale-[1.01] h-fit"
            >
              + Create
            </button>
          )}
        </div>

        {/* Form Section - Only shown when creating or editing */}
        {showForm && (
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                  {currentAction} Entry
                </p>
                <h2 className="text-2xl font-semibold text-white">
                  {currentAction} {config.title} project
                </h2>
              </div>
              {editingId && (
                <div className="rounded-2xl border border-amber-400/40 px-4 py-2 text-xs text-amber-200">
                  Editing existing record
                </div>
              )}
            </div>
            <form
              className="mt-6 grid gap-6 md:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
            >
              {config.fields.map((field) => {
                const spanClass = field.fullWidth ? "md:col-span-2" : "";
                const sharedClasses =
                  "w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-purple-400 focus:outline-none";
                return (
                  <label key={field.name} className={`flex flex-col gap-2 ${spanClass}`}>
                    <span className="text-xs uppercase tracking-[0.1em] text-white/50">
                      {field.label}
                    </span>
                    {field.type === "textarea" ? (
                      <textarea
                        rows={5}
                        className={`${sharedClasses} min-h-[140px] resize-y`}
                        placeholder={field.placeholder}
                        value={formState[field.name]}
                        onChange={(event) => handleChange(field.name, event.target.value)}
                      />
                    ) : (
                      <input
                        type={field.type}
                        className={sharedClasses}
                        placeholder={field.placeholder}
                        value={field.type === "file" ? undefined : formState[field.name]}
                        onChange={(event) => handleChange(field.name, event.target.value)}
                      />
                    )}
                    {field.helper && <span className="text-xs text-white/40">{field.helper}</span>}
                  </label>
                );
              })}
              <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 transition hover:scale-[1.01]"
                >
                  {currentAction} Entry
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Entries List */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Entries</p>
            <h2 className="text-2xl font-semibold text-white">
              {entries.length} {entries.length === 1 ? "project" : "projects"}
            </h2>
          </div>

          {entries.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm text-white/50 mb-4">No entries yet.</p>
              <button
                type="button"
                onClick={handleCreate}
                className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 transition hover:scale-[1.01]"
              >
                + Create First Project
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 hover:bg-black/40 transition flex flex-col"
                >
                  {/* Entry Content */}
                  <div className="flex-1 mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">
                      {getPrimaryField(entry)}
                    </h3>
                    {getSecondaryField(entry) && (
                      <p className="text-sm text-white/60 mb-3 line-clamp-3">
                        {getSecondaryField(entry)}
                      </p>
                    )}
                    <div className="flex flex-col gap-1 text-xs text-white/40">
                      <span>
                        Updated: {new Date(entry.updatedAt).toLocaleDateString()}
                      </span>
                      <span className="truncate">ID: {entry.id}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => handleView(entry)}
                      className="w-full rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-white hover:text-white"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() => handleEdit(entry)}
                      className="w-full rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-white hover:text-white"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteClick(entry.id)}
                      className="w-full rounded-full border border-red-400/60 px-4 py-2 text-xs font-semibold text-red-200 transition hover:border-red-300 hover:text-white"
                    >
                      Delete
                    </button>
                  </div>

                  {/* Delete Confirmation Dialog */}
                  {deleteConfirmId === entry.id && (
                    <div className="mt-4 rounded-2xl border border-red-400/40 bg-red-500/10 p-4">
                      <p className="text-sm font-semibold text-red-200 mb-3">
                        Do you want to delete this permanently?
                      </p>
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={deleteConfirmText}
                          onChange={(e) => setDeleteConfirmText(e.target.value)}
                          placeholder="Type DELETE to confirm"
                          className="w-full rounded-xl border border-red-400/40 bg-black/40 px-4 py-2 text-sm text-white placeholder-white/40 focus:border-red-400 focus:outline-none"
                        />
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={handleDeleteConfirm}
                            disabled={deleteConfirmText !== "DELETE"}
                            className="flex-1 rounded-xl bg-red-500/20 border border-red-400/60 px-4 py-2 text-xs font-semibold text-red-200 transition hover:bg-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Yes, Delete
                          </button>
                          <button
                            type="button"
                            onClick={handleDeleteCancel}
                            className="flex-1 rounded-xl border border-white/20 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-white hover:text-white"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminShell>
  );
}

