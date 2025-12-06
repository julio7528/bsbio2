import React from 'react';
import { BadgeCheck } from 'lucide-react';

export const ProfileSection: React.FC = () => {
  return (
    <div className="text-center pt-8 pb-6 px-4 relative z-10">
      <div className="relative mx-auto w-40 h-40 mb-4 group">
        <div className="absolute inset-0 bg-brand-orange rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="relative w-full h-full rounded-full border-2 border-brand-orange/20 shadow-xl overflow-hidden">
          <img 
            src="https://scontent.fsmt2-1.fna.fbcdn.net/v/t39.30808-6/295025276_479045087554865_8497308618203280758_n.png?_nc_cat=111&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0ouHJ8Gi8RulkK2wowJrzbT_cDLo_Hc5tP9wMuj8dzhcu_dfoIpsyJ_M70PfnlmE&_nc_ohc=AjxUAHTFDCQQ7kNvwH-3NfT&_nc_oc=AdmHzzOKkciN33gN-_OoGrC4-G40p2m_jvLYlIp7VGmk0wHN6lQHD9lhT53XVDtJ7B4&_nc_zt=23&_nc_ht=scontent.fsmt2-1.fna&_nc_gid=-DJdVaQSThJjT2ltJy5-kg&oh=00_AfkJE0hDupDc3EDWFaNOb3dxlZvsmLSep9Sd5ongGMbi0A&oe=6939D90D" 
            alt="BS Construtora Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-1 right-1 bg-brand-orange text-white p-1.5 rounded-full border-2 border-white shadow-sm" title="Verificado">
          <BadgeCheck size={16} />
        </div>
      </div>

      <h1 className="text-2xl font-extrabold text-brand-dark mb-1 tracking-tight">
        BS Construtora
      </h1>
      <p className="text-sm font-medium text-brand-orange uppercase tracking-wider mb-3">
        Construção Civil & Soluções Industriais
      </p>
      
      <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
        Transformamos concreto em soluções. <br/>
        <span className="font-semibold text-brand-dark">Agilidade, tecnologia e solidez</span> para sua obra em Sorriso-MT.
      </p>
    </div>
  );
};