"use client";

export default function DribbbleShowcase() {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-600 min-h-screen py-16 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-white opacity-90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Content Area */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl relative">
          
          {/* Top Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            {/* Left - Main Title */}
            <div className="lg:col-span-1">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-6">
                TOP ON<br />
                DRIBBBLE
              </h1>
              
              {/* 7M Views Badge */}
              <div className="bg-black rounded-lg px-4 py-3 inline-flex items-center gap-3 mb-8">
                <span className="text-white text-2xl">🏀</span>
                <span className="text-white font-bold">7M VIEWS MONTHLY</span>
              </div>
            </div>
            
            {/* Center - Description */}
            <div className="lg:col-span-1 flex items-center">
              <p className="text-gray-800 text-xl leading-relaxed">
                Our company offers personalized design and development solutions that prioritize user experience.
              </p>
            </div>
            
            {/* Right - CTA Button */}
            <div className="lg:col-span-1 flex items-center justify-center lg:justify-end">
              <button className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-pink-600 transition">
                GET<br />
                INSPIRED
              </button>
            </div>
          </div>
          
          {/* Bottom Section - Stats and Mockups */}
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            
            {/* Left - Stats */}
            <div>
              <div className="text-8xl font-bold text-gray-800 mb-4">1,000+</div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Impressive Dribbble shots, showcasing our design expertise and prowess
              </p>
            </div>
            
            {/* Right - UI Mockups Collage */}
            <div className="relative h-96">
              
              {/* Purple/Green App Interface */}
              <div className="absolute top-0 left-0 w-48 h-32 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-4 shadow-lg transform rotate-3">
                <div className="text-white text-sm font-bold mb-2">WHICH CA APP OR SMART DE</div>
                <div className="bg-green-400 rounded px-2 py-1 text-xs font-bold mb-2">LET'S TRY</div>
                <div className="text-white text-xs">John D</div>
                <div className="text-white text-xs">Q GET THE APP</div>
              </div>
              
              {/* READ & App */}
              <div className="absolute top-8 right-0 w-52 h-40 bg-white rounded-lg p-4 shadow-lg transform -rotate-2">
                <div className="text-gray-800 text-2xl font-bold mb-2">READ &</div>
                <div className="text-gray-600 text-sm mb-2">95% more reading</div>
                <div className="text-gray-600 text-sm mb-2">Books & podcasts in 15 min</div>
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs">Start free trial</button>
                <div className="flex gap-2 mt-2">
                  <div className="bg-green-500 text-white px-2 py-1 rounded text-xs">THE ASK</div>
                  <div className="bg-pink-500 text-white px-2 py-1 rounded text-xs">DEEP WORK FREE!</div>
                </div>
              </div>
              
              {/* Payroll Interface */}
              <div className="absolute bottom-16 left-8 w-44 h-28 bg-gray-800 rounded-lg p-3 shadow-lg transform rotate-1">
                <div className="text-white text-sm font-bold mb-1">Payroll, benefits & more.</div>
                <div className="text-gray-300 text-xs mb-2">We provide document management solutions</div>
                <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs inline-block">iF EDITORS' CHOICE</div>
              </div>
              
              {/* Dark Navigation */}
              <div className="absolute bottom-8 right-8 w-48 h-24 bg-gray-900 rounded-lg p-3 shadow-lg transform -rotate-1">
                <div className="flex justify-between text-white text-xs mb-2">
                  <span>SECTIONS</span>
                  <span>PRODUCTS</span>
                  <span>BLOG</span>
                  <span>SUPPORT</span>
                </div>
                <button className="bg-red-500 text-white px-3 py-1 rounded text-xs">JOIN COMMUNITY</button>
              </div>
              
              {/* Duh! Card */}
              <div className="absolute bottom-0 right-16 w-32 h-20 bg-white rounded-lg p-3 shadow-lg transform rotate-2">
                <div className="text-gray-800 text-2xl font-bold mb-1">Duh!</div>
                <div className="text-gray-600 text-xs">4.98 BEST REVIEWS</div>
                <div className="text-gray-600 text-xs">digital designers</div>
              </div>
              
              {/* Pink Mouth Illustration */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center transform rotate-12">
                <div className="text-white text-2xl">😮</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


