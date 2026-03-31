"use client";

import IPhoneFrame from "@/components/IPhoneFrame";
import Navbar from "@/components/Navbar";

export default function DownloadPage() {
  return (
    <div className="relative min-h-screen bg-[#0b0b0f] text-white overflow-hidden">
      <Navbar />
      
      <div className="container mx-auto px-4 h-screen flex flex-col lg:flex-row items-center justify-between gap-12 pt-20">
        <div className="flex-1 space-y-8 text-center lg:text-left max-w-2xl lg:-mt-10 lg:pl-12 xl:pl-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Get <span className="text-primary">One Info</span> on your device
          </h1>
          <p className="text-xl text-gray-400">
            Download our mobile app to start automating your social media interactions and turn conversations into consistent revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a 
              href="https://play.google.com/store/apps/details?id=com.gadgetspidy.oneinfo" 
              className="flex items-center gap-3 px-8 py-4 bg-[#121217] hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl transition-all w-full sm:w-auto"
            >
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 21V3L19 12L5 21Z" />
              </svg>
              <div className="text-left flex flex-col justify-center">
                <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Get it on</span>
                <span className="text-[15px] font-bold tracking-wide leading-none">GOOGLE PLAY</span>
              </div>
            </a>
            
            <a 
              href="https://apps.apple.com/in/app/oneinfo-ai-assistant/id6517354494" 
              className="flex items-center gap-3 px-8 py-4 bg-[#121217] hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl transition-all w-full sm:w-auto"
            >
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.48.26 3.64 1.95-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.86zM15.02 4.22c.69-.87 1.15-2.08.98-3.27-1.06.05-2.39.73-3.1 1.6-.58.68-1.14 1.92-.93 3.08 1.18.1 2.37-.58 3.05-1.41z"/>
              </svg>
              <div className="text-left flex flex-col justify-center">
                <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Download on the</span>
                <span className="text-[15px] font-bold tracking-wide leading-none">APP STORE</span>
              </div>
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end w-full lg:-translate-y-8">
          <IPhoneFrame>
            <div className="w-full h-full bg-[#0b0b0f] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/15 to-transparent pointer-events-none" />
              
              <img 
                src="/logos/oneinfoLOGO.png" 
                alt="One Info Logo" 
                className="w-24 h-24 rounded-[1.25rem] shadow-[0_12px_44px_rgba(168,85,247,0.5)] mb-8 z-10"
              />
              
              <h2 className="text-3xl font-bold text-white tracking-tight mb-3 z-10">
                One<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Info</span>
              </h2>
              
              <p className="text-[15px] leading-relaxed text-gray-400 z-10 px-4">
                The AI Operating System for Creators
              </p>
            </div>
          </IPhoneFrame>
        </div>
      </div>
    </div>
  );
}
