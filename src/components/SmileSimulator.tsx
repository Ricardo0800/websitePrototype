import { GoogleGenAI } from "@google/genai";
import { useState, useRef } from "react";
import { Image as ImageIcon, Loader2, Download, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type ImageSize = "1K" | "2K" | "4K";

interface GeneratedImage {
  url: string;
  prompt: string;
  timestamp: Date;
}

export default function SmileSimulator() {
  const [history] = useState<GeneratedImage[]>([
    {
      url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000",
      prompt: "Perfect Hollywood smile with porcelain veneers, natural white shade, professional lighting",
      timestamp: new Date()
    },
    {
      url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000",
      prompt: "Invisalign progress visualization, perfectly aligned upper and lower teeth, crystal clear detail",
      timestamp: new Date()
    },
    {
      url: "https://images.unsplash.com/photo-1593022356769-11f09a79a5cc?auto=format&fit=crop&q=80&w=1000",
      prompt: "Dental implant restoration, seamless integration with natural teeth, high-end aesthetic result",
      timestamp: new Date()
    }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section id="ai-visualization" className="py-32 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4" />
            Smile Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Our <span className="text-indigo-500">Aesthetic Results</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Explore the possibilities of modern cosmetic dentistry. From veneers to complete smile makeovers.
          </p>
        </div>

        <div className="bg-white/[0.02] rounded-[60px] shadow-2xl overflow-hidden border border-white/10 p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            {/* Carousel Display */}
            <div className="relative">
              <div className="relative aspect-video bg-white/5 rounded-[40px] flex items-center justify-center border border-white/10 overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full relative"
                  >
                    <img 
                      src={history[currentIndex].url} 
                      alt="Smile result" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                      <h3 className="text-white text-2xl font-bold mb-2">Aesthetic Transformation</h3>
                      <p className="text-gray-300 text-lg italic">"{history[currentIndex].prompt}"</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows - Enhanced */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                  <button 
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`pointer-events-auto w-16 h-16 flex items-center justify-center bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10 hover:bg-indigo-600 hover:border-indigo-400 hover:scale-110 active:scale-95 transition-all shadow-2xl ${currentIndex === 0 ? 'opacity-0' : 'opacity-100'}`}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    disabled={currentIndex === history.length - 1}
                    className={`pointer-events-auto w-16 h-16 flex items-center justify-center bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10 hover:bg-indigo-600 hover:border-indigo-400 hover:scale-110 active:scale-95 transition-all shadow-2xl ${currentIndex === history.length - 1 ? 'opacity-0' : 'opacity-100'}`}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </div>
              </div>

              {/* Thumbnails / History Bar */}
              <div className="mt-10 flex justify-center gap-4 overflow-x-auto pb-4 no-scrollbar">
                {history.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      currentIndex === idx ? "border-indigo-500 scale-110 shadow-lg shadow-indigo-500/20" : "border-transparent opacity-40 hover:opacity-100"
                    }`}
                  >
                    <img src={img.url} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
