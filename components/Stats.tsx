import React from 'react';

export const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-2 px-4 py-6">
      <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
        <span className="block text-2xl font-extrabold text-brand-orange">26+</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase">Anos de Mercado</span>
      </div>
      <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
        <span className="block text-2xl font-extrabold text-brand-orange">500+</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase">Obras Entregues</span>
      </div>
      <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
        <span className="block text-2xl font-extrabold text-brand-orange">4</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase">Sedes Próprias</span>
      </div>
    </div>
  );
};