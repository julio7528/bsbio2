import React from 'react';
import { Play } from 'lucide-react';
import videoBg from './ui/video1.jpg';

export const VideoEmbed: React.FC = () => {
  return (
    <div className="w-full px-4 mb-8">
      <div className="relative w-full aspect-[9/16] max-h-[500px] mx-auto rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-black">
        {/* Placeholder for actual video source since none was provided in valid format */}
        <div className="absolute inset-0">
             <img 
            src={videoBg}
            alt="Video Cover" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
          />
        </div>
       
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <div className="w-16 h-16 bg-brand-orange/90 rounded-full flex items-center justify-center pl-1 shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
            <Play fill="white" size={32} />
          </div>
          <p className="mt-4 font-bold text-lg tracking-wide text-center drop-shadow-md">
            Conheça a BS Construtora
          </p>
          <span className="text-xs font-light mt-1 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">Assistir Comercial</span>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
             <div className="bg-brand-orange text-white text-[10px] font-bold px-2 py-1 rounded">INSTITUCIONAL</div>
        </div>
      </div>
    </div>
  );
};