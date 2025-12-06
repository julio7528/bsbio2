import { LucideIcon } from 'lucide-react';

export interface ModularHome {
  id: string;
  name: string;
  price: number;
  image: string;
  specs: {
    area: string;
    rooms: number;
    bathrooms: number;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  primary?: boolean;
}