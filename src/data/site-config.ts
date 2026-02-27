export const SITE_CONFIG = {
  siteName: 'Mon Agence Web',
  description: "Expert en [Métier] à [Ville]. Plus de 10 ans d'expérience.",
  lang: 'fr',
  author: 'Léo Blouin',
  url: 'https://www.monsite-client.fr', // Important pour les balises OG et Sitemap
  image: '/default-og-image.jpg', // Image par défaut dans public/

  // Coordonnées pour le Footer et la page Contact
  contact: {
    email: 'contact@client.fr',
    phone: '01 23 45 67 89',
    address: '123 rue de la Paix, 75000 Paris',
    googleMapsLink: 'https://goo.gl/maps/...',
  },

  // Réseaux sociaux
  social: {
    facebook: 'https://facebook.com/client',
    instagram: 'https://instagram.com/client',
  },

  // HERO
  seo: {
    title: 'Plombier Chauffagiste à Châteaubourg | Dépannage 7j/7',
    description:
      'Intervention rapide pour fuites, débouchage et installation de chaudières. Devis gratuit et garantie décennale.',
    badge: 'Artisan Local Certifié',
    cta1: 'Demander mon Devis Gratuit',
    cta2: 'Découvrir nos Services',
    guarantee1: 'Garantie 10 ans',
    guarantee2: 'Intervention rapide',
  },
};
