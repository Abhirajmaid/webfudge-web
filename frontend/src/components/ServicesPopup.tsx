"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ServicesPopup({ onOpenChange }: { onOpenChange?: (isOpen: boolean) => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const handleServiceClick = (slug: string) => {
    setIsVisible(false);
    router.push(`/services/${slug}`);
  };

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden';
      onOpenChange?.(true);
    } else {
      // Re-enable body scroll when popup is closed
      document.body.style.overflow = 'unset';
      onOpenChange?.(false);
    }

    return () => {
      document.body.style.overflow = 'unset';
      onOpenChange?.(false);
    };
  }, [isVisible, onOpenChange]);

  const designServices = [
    { name: "UI/UX design", icon: "🎨", slug: "ui-ux-design" },
    { name: "Product audit", icon: "📋", slug: "product-audit" },
    { name: "Branding", icon: "🏷️", slug: "branding" },
    { name: "Rebranding", icon: "🔄", slug: "rebranding" },
    { name: "Web design", icon: "💻", slug: "web-design" }
  ];

  const developmentServices = [
    { name: "Web development", icon: "🌐", slug: "web-development" },
    { name: "Webflow development", icon: "< />", slug: "webflow-development" },
    { name: "MVP development", icon: "⚙️", slug: "mvp-development" },
    { name: "CMS development", icon: "📚", slug: "cms-development" },
    { name: "Software development", icon: "{ }", slug: "software-development" }
  ];

  return (
    <>
      {/* Trigger Button */}
      <button 
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="flex items-center gap-1 text-white hover:text-gray-300 transition"
      >
        SERVICES
        <span className="text-xs">^</span>
      </button>

      {/* Popup Overlay */}
      {isVisible && (
        <div 
          className={`fixed inset-0 z-50 transition-all duration-300 ${
            isAnimating ? 'bg-black/50 opacity-100' : 'bg-black/0 opacity-0'
          }`}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          <div className={`bg-[#100C2A] min-h-screen transition-all duration-500 ${
            isAnimating ? 'transform translate-y-0' : 'transform translate-y-full'
          }`}>
            
            {/* Main Services Card */}
            <div className="flex items-center justify-center min-h-screen p-8">
              <div className={`bg-white rounded-3xl p-12 shadow-2xl max-w-6xl w-full transition-all duration-700 delay-200 ${
                isAnimating ? 'transform translate-y-0 opacity-100 scale-100' : 'transform translate-y-8 opacity-0 scale-95'
              }`}>
                
                {/* Services Grid */}
                <div className="grid lg:grid-cols-2 gap-16">
                  
                  {/* Left Column - Design Services */}
                  <div className="space-y-8">
                    <h2 className="text-gray-400 font-bold text-lg uppercase tracking-wider">DESIGN</h2>
                    
                    <div className="space-y-6">
                      {designServices.map((service, index) => (
                        <div 
                          key={index}
                          onClick={() => handleServiceClick(service.slug)}
                          className={`flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-300 group ${
                            isAnimating ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-4 opacity-0'
                          }`}
                          style={{ transitionDelay: `${300 + index * 100}ms` }}
                        >
                          {/* Blue Outline Icon */}
                          <div className="w-12 h-12 border-2 border-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-all duration-300 group-hover:scale-110">
                            <span className="text-blue-500 text-lg">{service.icon}</span>
                          </div>
                          
                          {/* Service Name */}
                          <span className="text-black font-medium text-lg group-hover:text-blue-600 transition-all duration-300">
                            {service.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Development Services */}
                  <div className="space-y-8">
                    <h2 className="text-gray-400 font-bold text-lg uppercase tracking-wider">DEVELOPMENT</h2>
                    
                    <div className="space-y-6">
                      {developmentServices.map((service, index) => (
                        <div 
                          key={index}
                          onClick={() => handleServiceClick(service.slug)}
                          className={`flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-300 group ${
                            isAnimating ? 'transform translate-x-0 opacity-100' : 'transform translate-x-4 opacity-0'
                          }`}
                          style={{ transitionDelay: `${300 + index * 100}ms` }}
                        >
                          {/* Blue Outline Icon */}
                          <div className="w-12 h-12 border-2 border-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-all duration-300 group-hover:scale-110">
                            <span className="text-blue-500 text-lg font-mono">{service.icon}</span>
                          </div>
                          
                          {/* Service Name */}
                          <span className="text-black font-medium text-lg group-hover:text-blue-600 transition-all duration-300">
                            {service.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
