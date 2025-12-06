import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SocialLink } from '../types';

export const LinkButton: React.FC<SocialLink> = ({ name, icon: Icon, url, primary }) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group flex items-center justify-between w-full p-4 mb-3 rounded-xl transition-all duration-300
        ${primary 
          ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30 hover:bg-[#E05A2B] hover:-translate-y-1' 
          : 'bg-white text-brand-dark border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-orange/30 hover:-translate-y-0.5'
        }
      `}
    >
      <div className="flex items-center gap-4">
        <div className={`
          p-2 rounded-lg 
          ${primary ? 'bg-white/20' : 'bg-gray-50 text-brand-orange'}
        `}>
          <Icon size={20} />
        </div>
        <span className="font-semibold text-base">{name}</span>
      </div>
      <ChevronRight size={18} className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 ${primary ? 'text-white' : 'text-brand-orange'}`} />
    </a>
  );
};