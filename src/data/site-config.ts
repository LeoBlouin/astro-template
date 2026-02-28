export const SITE_CONFIG = {
  siteName: 'Michel Plomberie',
  description: "Expert en plomberie à Rennes. Plus de 27 ans d'expérience.",
  lang: 'fr',
  author: 'Léo Blouin',
  url: 'https://michel-plomberie.vercel.app/', // Important pour les balises OG et Sitemap
  image: '/default-og-image.jpg', // Image par défaut dans public/

  // Coordonnées pour le Footer et la page Contact
  contact: {
    email: 'contact@michel-plomberie.fr',
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
    title: 'Plombier Chauffagiste à Rennes | Dépannage 7j/7',
    description:
      'Intervention rapide pour fuites, débouchage et installation de chaudières. Devis gratuit et garantie décennale.',
    badge: 'Artisan Local Certifié',
    cta1: 'Demander mon Devis Gratuit',
    cta2: 'Découvrir mes Services',
    guarantee1: 'Garantie 10 ans',
    guarantee2: 'Intervention rapide',
  },
};
