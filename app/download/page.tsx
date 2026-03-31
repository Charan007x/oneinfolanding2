"use client";

import IPhoneFrame from "@/components/IPhoneFrame";
import Navbar from "@/components/Navbar";

export default function DownloadPage() {
  return (
    <div className="relative min-h-screen bg-[#0b0b0f] text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-16 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="flex-1 space-y-8 text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Get <span className="text-primary">One Info</span> on your device
          </h1>
          <p className="text-xl text-gray-400">
            Download our mobile app to start automating your social media interactions and turn conversations into consistent revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a 
              href="https://play.google.com/store/apps/details?id=com.gadgetspidy.oneinfo" 
              className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all w-full sm:w-auto"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.34l-9.157-5.188L.48 4.675v14.654l7.886-5.474 9.157-5.187V8.66zm1.187-6.023l3.655 2.07c.84.475.84 1.706 0 2.18l-3.655 2.071L12.56 12l6.15-2.683zM1.777 20.4l7.005-4.86 3.12 3.12-10.125 1.74zm0-16.8l10.124 1.74-3.12 3.12-7.004-4.86zM13.435 12l-1.07-1.07 4.098-4.098 1.07 1.07-4.098 4.098z"/>
              </svg>
              <div className="text-left flex flex-col justify-center">
                <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Get it on</span>
                <span className="text-lg font-bold">Google Play</span>
              </div>
            </a>
            
            <a 
              href="https://apps.apple.com/in/app/oneinfo-ai-assistant/id6517354494" 
              className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all w-full sm:w-auto"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.365 21.493c-1.542 0-2.313-1.01-4.032-1.01-1.688 0-2.616 1.01-4.032 1.01-1.722 0-3.35-1.745-4.482-3.327C1.498 14.945-.333 9.47 1.144 6.898c.732-1.282 2.022-2.115 3.442-2.137 1.638-.028 3.168 1.096 3.996 1.096.828 0 2.658-1.284 4.542-1.085 1.944.202 3.702 1.157 4.72 2.766-4.092 2.502-3.414 8.01 1.026 9.873-1.014 2.822-3.084 5.923-5.26 5.923M15.424 4.51C16.275 3.483 16.86 2.043 16.7 0c-1.747.07-3.364 1.158-4.25 2.185-.785.894-1.464 2.37-1.278 4.316 1.936.148 3.402-.958 4.252-1.99"/>
              </svg>
              <div className="text-left flex flex-col justify-center">
                <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Download on the</span>
                <span className="text-lg font-bold">App Store</span>
              </div>
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <IPhoneFrame>
            <div className="w-full h-full bg-[#0b0b0f] flex flex-col items-center justify-center p-6 text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                One Info
              </h2>
              <p className="text-sm text-gray-400 mb-8">
                Your AI-Powered Automation Assistant
              </p>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-secondary animate-pulse" />
            </div>
          </IPhoneFrame>
        </div>
      </div>
    </div>
  );
}
