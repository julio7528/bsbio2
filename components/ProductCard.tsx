import React from 'react';
import { ModularHome } from '../types';
import { BedDouble, Bath, Ruler, ArrowRight } from 'lucide-react';

export const ProductCard: React.FC<{ home: ModularHome }> = ({ home }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            Oferta Especial
          </span>
        </div>
        <img 
          src={home.image} 
          alt={home.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        <div className="absolute bottom-3 left-3 text-white">
          <p className="text-xs font-light opacity-90">Modelo Modular</p>
          <h3 className="text-lg font-bold">{home.name}</h3>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4 text-gray-500 text-xs">
          <div className="flex items-center gap-1">
            <Ruler size={14} className="text-brand-orange" />
            <span>{home.specs.area}</span>
          </div>
          <div className="flex items-center gap-1">
            <BedDouble size={14} className="text-brand-orange" />
            <span>{home.specs.rooms} qts</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={14} className="text-brand-orange" />
            <span>{home.specs.bathrooms} ban</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="mb-3">
             <span className="text-xs text-gray-400 block">A partir de</span>
             <span className="text-xl font-extrabold text-brand-dark">
               R$ {home.price.toLocaleString('pt-BR')}
             </span>
          </div>
          
          <button className="w-full py-2.5 rounded-lg border border-brand-orange text-brand-orange text-sm font-bold hover:bg-brand-orange hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
            Ver Detalhes <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};