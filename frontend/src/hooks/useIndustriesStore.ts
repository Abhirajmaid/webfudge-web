"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { defaultIndustries, type Industry } from "@/data/industries";

const STORAGE_KEY = "admin-industries";

const hydrateIndustries = (): Industry[] => {
  if (typeof window === "undefined") return defaultIndustries;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultIndustries;
    const parsed = JSON.parse(raw) as Industry[];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return defaultIndustries;
    }
    return parsed;
  } catch {
    return defaultIndustries;
  }
};

const persistIndustries = (industries: Industry[]) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(industries));
};

const generateIndustryId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `IND-${crypto.randomUUID().slice(-4).toUpperCase()}`;
  }
  return `IND-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
};

export type IndustryInput = Omit<Industry, "id" | "createdAt" | "updatedAt">;

export function useIndustriesStore() {
  const [industries, setIndustries] = useState<Industry[]>(defaultIndustries);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initial = hydrateIndustries();
    setIndustries(initial);
    setIsReady(true);
  }, []);

  const setWithPersist = useCallback((next: Industry[]) => {
    setIndustries(next);
    persistIndustries(next);
  }, []);

  const addIndustry = useCallback(
    (input: IndustryInput) => {
      const now = new Date().toISOString();
      const industry: Industry = {
        id: generateIndustryId(),
        createdAt: now,
        updatedAt: now,
        ...input,
      };
      setWithPersist([industry, ...industries]);
      return industry;
    },
    [industries, setWithPersist],
  );

  const updateIndustry = useCallback(
    (id: string, updates: IndustryInput) => {
      const now = new Date().toISOString();
      setWithPersist(
        industries.map((industry) =>
          industry.id === id
            ? { ...industry, ...updates, updatedAt: now, id }
            : industry,
        ),
      );
    },
    [industries, setWithPersist],
  );

  const deleteIndustry = useCallback(
    (id: string) => {
      setWithPersist(industries.filter((industry) => industry.id !== id));
    },
    [industries, setWithPersist],
  );

  const resetIndustries = useCallback(() => {
    setWithPersist(defaultIndustries);
  }, [setWithPersist]);

  const getIndustryById = useCallback(
    (id: string) => industries.find((industry) => industry.id === id),
    [industries],
  );

  return useMemo(
    () => ({
      industries,
      isReady,
      addIndustry,
      updateIndustry,
      deleteIndustry,
      resetIndustries,
      getIndustryById,
    }),
    [
      industries,
      isReady,
      addIndustry,
      updateIndustry,
      deleteIndustry,
      resetIndustries,
      getIndustryById,
    ],
  );
}

