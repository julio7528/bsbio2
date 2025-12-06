import { ArrowUp, MapPin } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { CookieConsent } from './components/CookieConsent';
import { IndustrialServices } from './components/IndustrialServices';
import { LinkButton } from './components/LinkButton';
import { ProductCard } from './components/ProductCard';
import { ProfileSection } from './components/ProfileSection';
import { Stats } from './components/Stats';
import fundoBg from './components/ui/fundo1.jpg';
import { VideoEmbed } from './components/VideoEmbed';
import { HOUSES, SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f8fafc]">
      
      {/* LEFT COLUMN: Desktop Branding (Fixed) */}
      <div className="hidden md:flex md:w-1/2 lg:w-3/5 relative bg-brand-dark overflow-hidden flex-col justify-between p-12 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={fundoBg} 
            alt="Construction Site" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-y-0 left-0 w-full max-w-2xl bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent" />
        </div>

        {/* Branding Content */}
        <div className="relative z-10 max-w-xl animate-fade-in-up">
          <div className="mb-8">
            <h2 className="text-5xl font-extrabold leading-tight mb-4">
              Construindo o futuro <br/>
              <span className="text-brand-orange">com solidez.</span>
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-md">
              Soluções completas em engenharia civil e industrial. Da casa dos sonhos ao galpão logístico.
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="px-6 py-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
              <span className="block text-3xl font-bold text-brand-orange">26+</span>
              <span className="text-sm text-gray-300 uppercase tracking-wider">Anos de História</span>
            </div>
            <div className="px-6 py-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
              <span className="block text-3xl font-bold text-brand-orange">500+</span>
              <span className="text-sm text-gray-300 uppercase tracking-wider">Obras Concluídas</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-sm text-gray-500">
          © {new Date().getFullYear()} BS Construtora. Sorriso-MT.
        </div>
      </div>

      {/* RIGHT COLUMN: Mobile/Interactable Content */}
      <div className="w-full md:w-1/2 lg:w-2/5 h-screen overflow-y-auto hex-bg relative">
        <div className="max-w-md mx-auto min-h-full flex flex-col">
          
          {/* Header */}
          <ProfileSection />

          {/* Main CTAs */}
          <div className="px-4 mb-6 space-y-2">
            {SOCIAL_LINKS.map((link) => (
              <LinkButton key={link.name} {...link} />
            ))}
          </div>

          {/* Stats (Mobile only mostly, or simplified) */}
          <Stats />

          {/* Commercial Video */}
          <VideoEmbed />

          {/* Modular Homes Section */}
          <div className="px-4 mb-8">
            <h2 className="text-xl font-bold text-brand-dark mb-4 pl-1 border-l-4 border-brand-orange ml-1">
              Casas Modulares <span className="text-brand-orange font-normal text-sm ml-2">Em Oferta</span>
            </h2>
            <div className="grid gap-5">
              {HOUSES.map((house) => (
                <div key={house.id} className="h-full">
                  <ProductCard home={house} />
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-3 bg-white border border-gray-200 text-brand-dark font-medium rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
              Conheça Nossa Fábrica
            </button>
          </div>

          {/* Industrial Services */}
          <div className="mb-8">
            <IndustrialServices />
          </div>

          {/* Location / Footer */}
          <div className="mt-auto bg-brand-dark text-white p-8 rounded-t-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <img 
                  src="https://scontent.fsmt2-1.fna.fbcdn.net/v/t39.30808-6/295025276_479045087554865_8497308618203280758_n.png?_nc_cat=111&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0ouHJ8Gi8RulkK2wowJrzbT_cDLo_Hc5tP9wMuj8dzhcu_dfoIpsyJ_M70PfnlmE&_nc_ohc=AjxUAHTFDCQQ7kNvwH-3NfT&_nc_oc=AdmHzzOKkciN33gN-_OoGrC4-G40p2m_jvLYlIp7VGmk0wHN6lQHD9lhT53XVDtJ7B4&_nc_zt=23&_nc_ht=scontent.fsmt2-1.fna&_nc_gid=-DJdVaQSThJjT2ltJy5-kg&oh=00_AfkJE0hDupDc3EDWFaNOb3dxlZvsmLSep9Sd5ongGMbi0A&oe=6939D90D" 
                  alt="BS Logo Overlay" 
                  className="w-32 h-32 invert"
                />
            </div>

            <h3 className="text-xl font-bold mb-4">Onde Estamos</h3>
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="text-brand-orange mt-1 shrink-0" />
              <p className="text-gray-300 text-sm leading-relaxed">
                Av. Blumenau Sul, 1234<br/>
                Rota do Sol<br/>
                Sorriso - MT, 78890-000
              </p>
            </div>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="block w-full py-3 text-center bg-white/90 hover:bg-white/20 backdrop-blur border border-white/10 rounded-xl transition-all font-semibold flex items-center justify-center gap-3"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Google_Maps_Logo_2020.svg" 
                alt="Google Maps" 
                className="h-10 w-auto"
              />
              <span className="text-brand-orange font-bold text-sm ml-2">Veja no Google Maps</span>
            </a>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
              Produto de demonstração. Desenvolvido para fins comercias provados respeitando a LGPD - Todos conteúdo foi extraído de fontes públicas da internet e utilizada com edição de LLMs.
            </div>
          </div>
        </div>

        {/* Floating Scroll Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-3 bg-brand-orange text-white rounded-full shadow-lg z-50 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        >
          <ArrowUp size={20} />
        </button>
      </div>

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
};

export default App;