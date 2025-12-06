import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "./ui/Dialog";
import { Switch } from "./ui/Switch";
import { Label } from "./ui/Label";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: true
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  const handleSaveConfig = () => {
    localStorage.setItem("cookie-consent", "custom");
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    setShowConfig(false);
    setIsVisible(false);
  };

  if (!isVisible && !showConfig) return null;

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-2xl animate-slide-up">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-brand-dark mb-2">🍪 Sua privacidade é importante</h3>
              <p className="text-gray-600 text-sm">
                Utilizamos cookies para melhorar sua experiência em nosso site. 
                Ao continuar navegando, você concorda com nossa política de privacidade.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => setShowConfig(true)}>
                Configurar
              </Button>
              <Button variant="secondary" onClick={handleReject}>
                Recusar
              </Button>
              <Button variant="primary" onClick={handleAccept}>
                Aceitar Todos
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={showConfig} onOpenChange={setShowConfig}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Configuração de Cookies</DialogTitle>
            <DialogDescription>
              Gerencie suas preferências de privacidade.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="essential" className="flex flex-col space-y-1">
                <span className="font-semibold">Essenciais</span>
                <span className="font-normal text-xs text-gray-500">Necessários para o funcionamento do site.</span>
              </Label>
              <Switch id="essential" checked={true} disabled />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="analytics" className="flex flex-col space-y-1">
                <span className="font-semibold">Analíticos</span>
                <span className="font-normal text-xs text-gray-500">Para melhorar nosso site.</span>
              </Label>
              <Switch 
                id="analytics" 
                checked={preferences.analytics}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, analytics: checked }))}
              />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="marketing" className="flex flex-col space-y-1">
                <span className="font-semibold">Marketing</span>
                <span className="font-normal text-xs text-gray-500">Para anúncios personalizados.</span>
              </Label>
              <Switch 
                id="marketing" 
                checked={preferences.marketing}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, marketing: checked }))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSaveConfig}>Salvar Preferências</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
