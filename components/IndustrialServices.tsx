import React from 'react';
import { Warehouse, Building2, Component } from 'lucide-react'; // Using icons that resemble the concepts
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Galpões Pré-Moldados',
    description: 'Estruturas de alta resistência e rapidez na montagem.',
    icon: Warehouse,
  },
  {
    id: '2',
    title: 'Incorporação',
    description: 'Desenvolvimento imobiliário completo e eficiente.',
    icon: Building2,
  },
  {
    id: '3',
    title: 'Artefatos de Concreto',
    description: 'Blocos, paver e tubos com qualidade certificada.',
    icon: Component, // Abstract icon for artifacts
  }
];

export const IndustrialServices: React.FC = () => {
  return (
    <div className="py-2">
      <h2 className="text-xl font-bold text-brand-dark mb-4 pl-1 border-l-4 border-brand-orange ml-4">
        Soluções Industriais
      </h2>
      <div className="px-4 space-y-3">
        {services.map((service) => (
          <div key={service.id} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-2.5 bg-brand-dark rounded-lg text-brand-orange mr-4 shrink-0">
              <service.icon size={24} />
            </div>
            <div>
              <h3 className="font-bold text-brand-dark text-sm">{service.title}</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
        
        <button className="w-full mt-2 py-3 text-sm font-semibold text-gray-500 hover:text-brand-orange transition-colors flex items-center justify-center gap-1 group">
          Ver todos os serviços
          <span className="block w-1.5 h-1.5 border-t border-r border-current rotate-45 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};