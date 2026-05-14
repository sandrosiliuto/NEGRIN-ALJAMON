/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'es' | 'en' | 'it' | 'fr' | 'ru' | 'zh';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      gallery: 'Galería',
      about: 'Sobre Mí',
      contact: 'Contacto',
    },
    hero: {
      title: 'El Arte del Corte a Cuchillo',
      subtitle: 'Cortador profesional de jamón ibérico para eventos exclusivos en Tenerife y todo el archipiélago. Eleva tu celebración con un show gastronómico único.',
      cta: 'Reservar para Eventos',
    },
    services: {
      title: 'Servicios Premium',
      wedding: {
        title: 'Eventos Exclusivos',
        desc: 'Bodas, comuniones y celebraciones privadas con un toque de distinción y elegancia.',
      },
      fairs: {
        title: 'Ferias y Stands',
        desc: 'Presencia de marca impactante para atraer clientes con el mejor sabor de nuestra tierra.',
      },
      tastings: {
        title: 'Catas y Formación',
        desc: 'Experiencias privadas para aprender el arte del corte y degustar las mejores piezas.',
      },
      pricingTitle: 'Nuestros Jamones y Tarifas',
      hams: [
        { name: 'Jamón bellota 100% raza ibérica', price: '46,90€/kg', note: '(Piezas de 8 a 10 kg)' },
        { name: 'Jamón bellota 50% raza ibérica', price: '41,50€/kg' },
        { name: 'Jamón cebo campo 50% raza ibérica', price: '29,00€/kg' },
        { name: 'Jamón cebo 50% raza ibérica', price: '27,00€/kg' },
        { name: 'Jamón duroc gran reserva', price: '20,00€/kg' },
        { name: 'Jamón serrano gran reserva', price: '14,60€/kg' },
      ],
      serviceRates: [
        { zone: 'Zona Sur de la isla', rate: '180€ + IGIC', additional: '+100€ por jamón adicional' },
        { zone: 'Zona Norte y Santa Cruz - Laguna', rate: '230€ + IGIC', additional: '+100€ por jamón adicional' },
      ]
    },
    about: {
      title: 'Maestro Cortador',
      text: 'Soy un apasionado del mundo del jamón ibérico, dedicado a extraer lo mejor de cada pieza. Como freelance, me desplazo a cualquier punto de la isla de Tenerife con mi propio equipo profesional, garantizando un espectáculo de sabor, precisión y elegancia en cada loncha.',
    },
    contact: {
      title: 'Contacto',
      location: 'Tenerife, Islas Canarias',
      whatsapp: 'Contactar por WhatsApp',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      gallery: 'Gallery',
      about: 'About Me',
      contact: 'Contact',
    },
    hero: {
      title: 'The Art of Knife Cutting',
      subtitle: 'Professional Iberian ham cutter for exclusive events in Tenerife and the entire archipelago. Elevate your celebration with a unique gastronomic show.',
      cta: 'Book for Events',
    },
    services: {
      title: 'Premium Services',
      wedding: {
        title: 'Exclusive Events',
        desc: 'Weddings, communions and private celebrations with a touch of distinction and elegance.',
      },
      fairs: {
        title: 'Fairs and Stands',
        desc: 'Impactful brand presence to attract customers with the best flavor of our land.',
      },
      tastings: {
        title: 'Tastings and Training',
        desc: 'Private experiences to learn the art of cutting and taste the best pieces.',
      },
    },
    about: {
      title: 'Master Cutter',
      text: 'I am passionate about the world of Iberian ham, dedicated to extracting the best from each piece. As a freelancer, I move to any point on the island of Tenerife with my own professional equipment, guaranteeing a show of flavor, precision, and elegance in each slice.',
    },
    contact: {
      title: 'Contact',
      location: 'Tenerife, Canary Islands',
      whatsapp: 'Contact via WhatsApp',
    },
    footer: {
      rights: 'All rights reserved.',
    }
  },
  it: {
    nav: {
      home: 'Inizio',
      services: 'Servizi',
      gallery: 'Galleria',
      about: 'Chi Sono',
      contact: 'Contatto',
    },
    hero: {
      title: "L'Arte del Taglio al Coltello",
      subtitle: 'Tagliatore professionista di prosciutto iberico per eventi esclusivi a Tenerife e in tutto l\'arcipelago. Eleva la tua celebrazione con uno spettacolo gastronomico unico.',
      cta: 'Prenota per Eventi',
    },
    services: {
      title: 'Servizi Premium',
      wedding: {
        title: 'Eventi Esclusivi',
        desc: 'Matrimoni, comunioni e celebrazioni private con un tocco di distinzione ed eleganza.',
      },
      fairs: {
        title: 'Fiere e Stand',
        desc: 'Presenza di marchio impattante per attirare i clienti con il miglior sapore della nostra terra.',
      },
      tastings: {
        title: 'Degustazioni e Formazione',
        desc: 'Esperienze private per imparare l\'arte del taglio e degustare i pezzi migliori.',
      },
    },
    about: {
      title: 'Maestro Tagliatore',
      text: 'Sono un appassionato del mondo del prosciutto iberico, dedito a estrarre il meglio da ogni pezzo. Come freelance, mi sposto in qualsiasi punto dell\'isola di Tenerife con la mia attrezzatura professionale, garantendo uno spettacolo di sapore, precisione ed eleganza in ogni fetta.',
    },
    contact: {
      title: 'Contatto',
      location: 'Tenerife, Isole Canarie',
      whatsapp: 'Contatta su WhatsApp',
    },
    footer: {
      rights: 'Tutti i diritti riservati.',
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      gallery: 'Galerie',
      about: 'À Propos',
      contact: 'Contact',
    },
    hero: {
      title: 'L\'Art de la Découpe au Couteau',
      subtitle: 'Coupeur professionnel de jambon ibérique pour des événements exclusifs à Tenerife et dans tout l\'archipel. Élevez votre célébration avec un spectacle gastronomique unique.',
      cta: 'Réserver pour des Événements',
    },
    services: {
      title: 'Services Premium',
      wedding: {
        title: 'Événements Exclusifs',
        desc: 'Mariages, communions et célébrations privées avec une touche de distinction et d\'élégance.',
      },
      fairs: {
        title: 'Salons et Stands',
        desc: 'Présence de marque percutante pour attirer les clients avec la meilleure saveur de notre terre.',
      },
      tastings: {
        title: 'Dégustations et Formation',
        desc: 'Expériences privées pour apprendre l\'art de la découpe et déguster les meilleures pièces.',
      },
    },
    about: {
      title: 'Maître Coupeur',
      text: 'Je suis passionné par le monde du jambon ibérique, dédié à extraire le meilleur de chaque pièce. En tant que freelance, je me déplace n\'importe où sur l\'île de Tenerife avec mon propre équipement professionnel, garantissant un spectacle de saveur, de précision et d\'élégance dans chaque tranche.',
    },
    contact: {
      title: 'Contact',
      location: 'Tenerife, Îles Canaries',
      whatsapp: 'Contactez par WhatsApp',
    },
    footer: {
      rights: 'Tous droits réservés.',
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      gallery: 'Галерея',
      about: 'Обо мне',
      contact: 'Контакт',
    },
    hero: {
      title: 'Искусство нарезки ножом',
      subtitle: 'Профессиональный нарезчик иберийского хамона для эксклюзивных мероприятий на Тенерифе и всем архипелаге. Украсьте свой праздник уникальным гастрономическим шоу.',
      cta: 'Забронировать',
    },
    services: {
      title: 'Премиальные услуги',
      wedding: {
        title: 'Эксклюзивные мероприятия',
        desc: 'Свадьбы, причастия и частные праздники с оттенком изысканности и элегантности.',
      },
      fairs: {
        title: 'Выставки и стенды',
        desc: 'Впечатляющее присутствие бренда для привлечения клиентов лучшим вкусом нашей земли.',
      },
      tastings: {
        title: 'Дегустации и обучение',
        desc: 'Частный опыт изучения искусства нарезки и дегустации лучших образцов.',
      },
    },
    about: {
      title: 'Мастер нарезки',
      text: 'Я увлечен миром иберийского хамона и стремлюсь извлечь лучшее из каждого куска. Как фрилансер, я выезжаю в любую точку острова Тенерифе со своим профессиональным оборудованием, гарантируя шоу вкуса, точности и элегантности в каждом ломтике.',
    },
    contact: {
      title: 'Контакт',
      location: 'Тенерифе, Канарские острова',
      whatsapp: 'Связаться через WhatsApp',
    },
    footer: {
      rights: 'Все права защищены.',
    }
  },
  zh: {
    nav: {
      home: '首页',
      services: '服务',
      gallery: '画廊',
      about: '关于我',
      contact: '联系我们',
    },
    hero: {
      title: '刀工艺术',
      subtitle: '特内里费岛及整个群岛专属活动的专业伊比利亚火腿切割师。通过独特的美食表演提升您的庆祝活动。',
      cta: '预订活动',
    },
    services: {
      title: '至尊服务',
      wedding: {
        title: '专属活动',
        desc: '婚礼、圣餐和私人庆祝活动，带有一丝尊贵和优雅。',
      },
      fairs: {
        title: '展览和展位',
        desc: '极具影响力的品牌展示，以我们土地上最好的风味吸引客户。',
      },
      tastings: {
        title: '品鉴与培训',
        desc: '学习切割艺术并品尝最佳部位的私人体验。',
      },
    },
    about: {
      title: '切割大师',
      text: '我热爱伊比利亚火腿的世界，致力于从每一块火腿中提取精华。作为一名自由职业者，我带着自备的专业设备前往特内里费岛的任何地方，保证每一片火腿都展现出色泽、精度和优雅的表演。',
    },
    contact: {
      title: '联系我们',
      location: '特内里费岛，加那利群岛',
      whatsapp: '通过WhatsApp联系',
    },
    footer: {
      rights: '版权所有。',
    }
  }
};
