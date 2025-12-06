import { Facebook, Instagram, MessageCircle, MapPin, Globe } from 'lucide-react';
import { SocialLink, ModularHome } from './types';
import casa1 from './components/ui/casa1.jpg';
import casa2 from './components/ui/casa2.png';
import casa3 from './components/ui/casa3.png';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Fale com Especialista',
    url: 'https://wa.me/5566999999999', // Placeholder
    icon: MessageCircle,
    primary: true
  },
  {
    name: 'Visite nosso Site',
    url: 'https://bsconstrutora.com.br', // Placeholder
    icon: Globe,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/bsconstrutora',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/bsconstrutora',
    icon: Facebook,
  },
];

export const HOUSES: ModularHome[] = [
  {
    id: 'h1',
    name: 'Casa Essencial',
    price: 99000,
    image: casa1,
    specs: { area: '42m²', rooms: 2, bathrooms: 1 }
  },
  {
    id: 'h2',
    name: 'Casa Conforto',
    price: 110000,
    image: casa2,
    specs: { area: '56m²', rooms: 2, bathrooms: 1 }
  },
  {
    id: 'h3',
    name: 'Casa Premium',
    price: 138000,
    image: casa3,
    specs: { area: '70m²', rooms: 3, bathrooms: 2 }
  }
];