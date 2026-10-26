export type Language = 'fr' | 'en';

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  documentsRequired: string[];
  badge: string;
  iconName: string;
}

export interface TranslationData {
  seo: {
    home: { title: string; desc: string };
    services: { title: string; desc: string };
    about: { title: string; desc: string };
    join: { title: string; desc: string };
    contact: { title: string; desc: string };
    privacy: { title: string; desc: string };
  };
  navbar: {
    brandName: string;
    tagline: string;
    home: string;
    services: string;
    about: string;
    join: string;
    contact: string;
    ctaAssistance: string;
    languageToggle: string;
    admin: string;
    callUs: string;
  };
  hero: {
    badge: string;
    title: string;
    body: string;
    tagline: string;
    ctaServices: string;
    ctaAssistance: string;
    stats: {
      stat1Value: string;
      stat1Label: string;
      stat2Value: string;
      stat2Label: string;
      stat3Value: string;
      stat3Label: string;
    };
    badges: string[];
  };
  whatWeOffer: {
    badge: string;
    heading: string;
    intro: string;
    title: string;
    viewAllCta: string;
    services: ServiceItem[];
  };
  howWeWork: {
    badge: string;
    heading: string;
    intro: string;
    mandelaQuote: string;
    mandelaAuthor: string;
    steps: {
      number: string;
      name: string;
      title: string;
      description: string;
    }[];
  };
  whyChooseUs: {
    badge: string;
    heading: string;
    tagline: string;
    pillars: {
      title: string;
      description: string;
      iconName: string;
    }[];
  };
  aboutPage: {
    badge: string;
    heading: string;
    lead: string;
    missionTitle: string;
    missionDesc: string;
    missionDetails: string;
    ceoTitle: string;
    ceoName: string;
    ceoBio: string;
    presenceTitle: string;
    presenceDesc: string;
  };
  canEvent: {
    badge: string;
    title: string;
    desc: string;
    packagesTitle: string;
    learnMore: string;
    packages: {
      name: string;
      subtitle: string;
      features: string[];
    }[];
  };
  joinUs: {
    badge: string;
    heading: string;
    intro: string;
    client: {
      tag: string;
      title: string;
      description: string;
      btn: string;
      perks: string[];
    };
    consultant: {
      tag: string;
      title: string;
      description: string;
      btn: string;
      perks: string[];
    };
    digitalPlatformNote: string;
    digitalPlatformBtn: string;
  };
  easiestWay: {
    badge: string;
    heading: string;
    subheading: string;
    hoursNote: string;
    joinTitle: string;
    steps: {
      stepNumber: string;
      action: string;
      detail: string;
    }[];
  };
  contact: {
    badge: string;
    heading: string;
    intro: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successMsg: string;
      errorMsg: string;
    };
    coordinates: {
      title: string;
      addressLabel: string;
      addressValue: string;
      emailLabel: string;
      emailValue: string;
      copyEmailBtn: string;
      copiedEmailBtn: string;
      phoneLabel: string;
      phones: string[];
      hoursLabel: string;
      hoursWeekday: string;
      hoursSaturday: string;
      hoursSunday: string;
      officialWebsiteLabel: string;
      officialWebsiteValue: string;
      socialFacebookLabel: string;
      socialFacebookUrl: string;
      socialTwitterUrl: string;
      socialLinkedInUrl: string;
      socialWhatsAppUrl: string;
      socialTelegramUrl: string;
      socialTikTokUrl: string;
    };
  };
  footer: {
    brandMotto: string;
    aboutSummary: string;
    navigationHeader: string;
    servicesHeader: string;
    coordinatesHeader: string;
    rightsReserved: string;
    legalNotice: string;
    privacyPolicy: string;
    officialWebsite: string;
    facebookPage: string;
    digitalPlatform: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  fr: {
    seo: {
      home: {
        title: "3M Consulting SARL | Conseil aux Entreprises & Affaires à Yaoundé",
        desc: "Cabinet d'accompagnement de référence à Yaoundé : création d'entreprise, recherche de locaux, agréments ministériels, fiscalité & CNPS, montage DSF et DAO.",
      },
      services: {
        title: "Domaines d'Expertise & Solutions d'Affaires | 3M Consulting Yaoundé",
        desc: "Découvrez nos 7 services clés : création d'entreprise en 72h, baux & locaux, agréments d'exploitation, déclarations fiscales & CNPS, montage DSF et DAO marchés publics.",
      },
      about: {
        title: "À Propos de Nous | Cabinet 3M Consulting & Vision de M. Monroi Maya Michael",
        desc: "Qui sommes-nous ? Cabinet conseil fondé par M. Monroi Maya Michael à Yaoundé. Expertise financière, rigueur juridique et innovation avec 3mconsulting.digital.",
      },
      join: {
        title: "Rejoignez-Nous | Espace Clients & Réseau de Consultants | 3M Consulting",
        desc: "Lancez votre projet d'entreprise ou rejoignez notre communauté d'experts consultants à Yaoundé. Inscription simple et accompagnement sur mesure.",
      },
      contact: {
        title: "Contactez le Cabinet | 3M Consulting SARL Omnisport Yaoundé",
        desc: "Prenez rendez-vous avec nos consultants au siège à Omnisport Rue Foé, Yaoundé. Tél : +237 673 84 18 21. Email : contact@3mconsultingsarl.com.",
      },
      privacy: {
        title: "Mentions Légales & Confidentialité | 3M Consulting SARL",
        desc: "Engagements de confidentialité et mentions légales de 3M Consulting SARL au Cameroun.",
      },
    },
    navbar: {
      brandName: "3M CONSULTING",
      tagline: "We Take the Next Step Together.",
      home: "Accueil",
      services: "Domaines",
      about: "À Propos de Nous",
      join: "Rejoignez-Nous",
      contact: "Contact",
      ctaAssistance: "Demander un accompagnement",
      languageToggle: "EN",
      admin: "Espace Admin",
      callUs: "Appel direct :",
    },
    hero: {
      badge: "Cabinet d'accompagnement & conseil d'affaires",
      title: "Votre partenaire pour entreprendre et réussir au Cameroun.",
      body: "3M Consulting fait de vos barrières des escaliers vers une réussite entrepreneuriale. Un service d'assistance et d'intermédiation à la hauteur de vos attentes.",
      tagline: "We take the next step together.",
      ctaServices: "Nos Domaines d'Expertise",
      ctaAssistance: "Demander un accompagnement",
      stats: {
        stat1Value: "7",
        stat1Label: "Domaines d'expertise clés",
        stat2Value: "100%",
        stat2Label: "Engagement & accompagnement",
        stat3Value: "Yaoundé",
        stat3Label: "Omnisport Rue Foé",
      },
      badges: ["Création d'entreprise", "Fiscalité & DSF", "CNPS", "Appels d'offres", "Locaux"],
    },
    whatWeOffer: {
      badge: "Solutions & Domaines d'Expertise",
      heading: "Des solutions concrètes pour chaque étape de votre entreprise",
      intro: "Fini la complexité administrative. Chez 3M Consulting, nous prenons en charge l'ensemble de vos démarches juridiques, fiscales et opérationnelles avec une équipe d'experts dédiée pour accélérer vos résultats.",
      title: "Nos 7 Domaines d'Intervention Stratégique",
      viewAllCta: "Découvrir toutes nos solutions d'affaires ↗",
      services: [
        {
          id: "creation-entreprise",
          title: "Création d'Entreprise, Filiale & Succursale",
          summary: "Immatriculez et sécurisez votre société sans tracas en un temps record. Nous pilotons l'intégralité du processus de constitution légale.",
          description: "De la rédaction personnalisée des statuts conformes OHADA jusqu'à l'obtention du RCCM, de la carte de contribuable et du quitus fiscal, notre équipe prend tout en main pour un démarrage serein.",
          deliverables: [
            "Rédaction sur mesure des statuts et actes constitutifs OHADA",
            "Immatriculation officielle au Greffe du Tribunal (RCCM)",
            "Attestation d'immatriculation fiscale et carte de contribuable",
            "Ouverture du dossier fiscal et délivrance du quitus initial",
          ],
          documentsRequired: ["Pièces d'identité en cours de validité des associés", "Plan de localisation du siège social", "Bail commercial ou contrat de domiciliation"],
          badge: "Création Clés en Main",
          iconName: "Building2",
        },
        {
          id: "recherche-locaux",
          title: "Recherche & Aménagement de Locaux Professionnels",
          summary: "Trouvez l'emplacement idéal pour votre activité à Yaoundé et installez vos équipes sans perdre de temps.",
          description: "Nous identifions les meilleurs locaux commerciaux selon vos critères, négocions les conditions de bail à votre avantage et supervisons l'aménagement pour une exploitation immédiate.",
          deliverables: [
            "Sélection ciblée de locaux conformes à vos besoins",
            "Négociation et sécurisation juridique du bail commercial",
            "Coordination des travaux d'aménagement et mise en place technique",
            "Remise des clés et démarrage opérationnel immédiat",
          ],
          documentsRequired: ["Cahier des charges de surface", "Zone géographique ciblée à Yaoundé", "Budget prévisionnel"],
          badge: "Bureaux & Implantation",
          iconName: "MapPin",
        },
        {
          id: "agrements-licences",
          title: "Agréments Ministériels & Licences d'Exploitation",
          summary: "Décrochez vos autorisations légales pour exercer en toute conformité dans votre secteur d'activité au Cameroun.",
          description: "Chaque secteur régulé exige des autorisations strictes. Nous montons vos dossiers techniques de A à Z et assurons le suivi direct auprès des ministères et commissions de régulation.",
          deliverables: [
            "Diagnostic préalable des critères réglementaires de votre secteur",
            "Montage exhaustif du dossier technique et administratif",
            "Suivi direct et soutenance auprès des ministères compétents",
            "Délivrance officielle de l'agrément ou licence d'exploitation",
          ],
          documentsRequired: ["Diplômes ou qualifications professionnelles requises", "Descriptif technique des activités", "Attestation de régularité fiscale à jour"],
          badge: "Autorisations Officielles",
          iconName: "ShieldCheck",
        },
        {
          id: "fiscalite-cnps",
          title: "Gestion Fiscale Mensuelle & Déclarations CNPS",
          summary: "Sécurisez vos obligations fiscales et sociales chaque mois. Accompagnement rigoureux, suivi déclaratif et assistance à la conformité DGI et CNPS.",
          description: "Ne laissez plus la fiscalité freiner votre entreprise. Nos spécialistes gèrent vos télédéclarations de TVA, acomptes IS, cotisations CNPS et vous défendent en cas de contrôle.",
          deliverables: [
            "Préparation et dépôt ponctuel des télédéclarations fiscales mensuelles",
            "Calcul et déclaration des cotisations sociales du personnel à la CNPS",
            "Obtention rapide des Attestations de Régularité Fiscale (ARF)",
            "Assistance et défense technique lors des contrôles fiscaux ou sociaux",
          ],
          documentsRequired: ["Chiffre d'affaires mensuel et facturier", "État de paie et registre du personnel", "Déclarations du mois précédent"],
          badge: "Assistance Fiscale & Sociale",
          iconName: "Receipt",
        },
        {
          id: "montage-dsf",
          title: "Montage de DSF (Liasse Fiscale) & Dossiers de Crédit",
          summary: "Valorisez vos comptes annuels et facilitez vos demandes de financement auprès des banques et bailleurs de fonds.",
          description: "Nous réalisons votre Déclaration Statistique et Fiscale (DSF) selon les normes OHADA révisées et structurons des dossiers financiers solides pour soutenir vos projets d'expansion.",
          deliverables: [
            "Vérification de la balance générale de clôture et inventaires",
            "Élaboration complète des états financiers OHADA et liasses DSF",
            "Téléversement certifié sur la plateforme de l'administration fiscale",
            "Constitution du dossier financier pour partenaires bancaires",
          ],
          documentsRequired: ["Grand livre et balance générale définitive", "Relevés bancaires et états de rapprochement", "Tableau d'amortissement des immobilisations"],
          badge: "Bilan & Financement",
          iconName: "FileSpreadsheet",
        },
        {
          id: "montage-dao",
          title: "Conception de Dossiers d'Appel d'Offres (DAO) & TDR",
          summary: "Rédigez des cahiers des charges et dossiers de consultation conformes aux standards nationaux et internationaux.",
          description: "Destiné aux institutions, projets de développement et maîtres d'ouvrage, nous concevons des DAO rigoureux qui garantissent une sélection transparente et performante des prestataires.",
          deliverables: [
            "Rédaction claire des Termes de Référence (TDR) et spécifications techniques",
            "Élaboration du Règlement Particulier d'Appel d'Offres (RPAO)",
            "Grille d'évaluation technique et financière objective",
            "Conformité avec le Code des Marchés Publics et normes bailleurs",
          ],
          documentsRequired: ["Descriptif du programme ou marché", "Budget alloué", "Calendrier prévisionnel d'exécution"],
          badge: "Ingénierie de Marchés",
          iconName: "FileCheck",
        },
        {
          id: "marches-publics",
          title: "Montage d'Offres Gagnantes aux Marchés Publics",
          summary: "Maximisez vos chances de remporter des marchés publics et privés d'envergure au Cameroun grâce à une offre irréprochable.",
          description: "La moindre omission disqualifie une offre. Nous assemblons méticuleusement toutes vos pièces éliminatoires, rédigeons une méthodologie technique convaincante et optimisons votre offre de prix.",
          deliverables: [
            "Vérification minutieuse de l'ensemble des pièces administratives éliminatoires",
            "Rédaction stratégique de la méthodologie technique d'intervention",
            "Montage et contrôle du cadre des prix et devis quantitatif estimatif",
            "Conditionnement et scellage conformes au règlement de consultation",
          ],
          documentsRequired: ["Dossier d'Appel d'Offres (DAO / RPAO)", "Attestations de bonne fin d'exécution et références", "Caution bancaire de soumission"],
          badge: "Succès Appels d'Offres",
          iconName: "TrendingUp",
        },
      ],
    },
    howWeWork: {
      badge: "Notre Méthode d'Intervention",
      heading: "Un accompagnement sur mesure à chaque étape",
      mandelaQuote: "« Nous ne savons pas tout, mais nous savons où tout savoir se trouve. »",
      mandelaAuthor: "N. Mandela",
      intro: "Chez 3M Consulting, nous allouons des consultants chevronnés à votre dossier dès le premier jour. Nous vous apportons une assistance continue, de la constitution initiale jusqu'à la gestion fiscale et à la recherche d'investisseurs pour accélérer votre croissance.",
      steps: [
        {
          number: "01",
          name: "Écoute",
          title: "Cadrage & Diagnostic Rapide",
          description: "Nous ciblons vos priorités, analysons votre situation et définissons la feuille de route idéale.",
        },
        {
          number: "02",
          name: "Stratégie",
          title: "Constitution & Montage du Dossier",
          description: "Nos spécialistes rassemblent, rédigent et valident chaque document selon les exigences officielles.",
        },
        {
          number: "03",
          name: "Dépôt",
          title: "Dépôt & Suivi Direct",
          description: "Nous assurons le suivi auprès des administrations, ministères et guichets uniques pour un résultat rapide.",
        },
        {
          number: "04",
          name: "Succès",
          title: "Développement & Partenariats",
          description: "Nous restons à vos côtés pour développer votre activité, décrocher des marchés et attirer des investisseurs.",
        },
      ],
    },
    whyChooseUs: {
      badge: "Pourquoi Choisir 3M Consulting ?",
      heading: "Faire de vos barrières des escaliers vers le succès",
      tagline: "Une expertise éprouvée, une réactivité constante et un ancrage camerounais solide.",
      pillars: [
        {
          title: "Service d'intermédiation réinventé",
          description: "Un service d'assistance de haute qualité qui transforme chaque obstacle administratif en opportunité.",
          iconName: "ShieldCheck",
        },
        {
          title: "Experts dédiés & interlocuteur unique",
          description: "Des spécialistes chevronnés alloués à votre projet selon la nature spécifique de votre besoin.",
          iconName: "Headphones",
        },
        {
          title: "Réseau d'investisseurs & partenaires",
          description: "Un appui précieux pour la recherche d'investisseurs, l'extension d'activité, la fusion ou la cession d'entreprise.",
          iconName: "TrendingUp",
        },
        {
          title: "Solutions digitales via 3mconsulting.digital",
          description: "Une plateforme interactive fluide pour initier vos demandes et suivre vos dossiers en un clic.",
          iconName: "CheckCircle2",
        },
      ],
    },
    aboutPage: {
      badge: "Qui sommes-nous ?",
      heading: "À Propos de 3M Consulting SARL",
      lead: "Un cabinet d'affaires de référence basé à Yaoundé, engagé aux côtés des entrepreneurs, des dirigeants et des investisseurs pour transformer chaque défi réglementaire en véritable levier de croissance.",
      missionTitle: "Notre Mission : Simplifier & Accélérer",
      missionDesc: "Créer, gérer et développer une entreprise en Afrique centrale exige une maîtrise parfaite des rouages juridiques, fiscaux et institutionnels. Notre mission est d'éliminer la lenteur et l'incertitude pour vous offrir une trajectoire d'affaires fluide, sécurisée et rentable.",
      missionDetails: "Grâce à notre équipe d'experts pluridisciplinaires (juristes d'affaires, fiscalistes, spécialistes des marchés publics) et à notre implantation stratégique à Yaoundé Omnisport, nous vous assurons une réactivité immédiate auprès de toutes les administrations clés.",
      ceoTitle: "PDG & Fondateur",
      ceoName: "M. MONROI MAYA MICHAEL",
      ceoBio: "Financier pragmatique et entrepreneur passionné, M. Monroi Maya Michael allie une solide formation en comptabilité et fiscalité à une spécialisation de haut niveau en finances publiques. Fort de plus de 5 ans de pilotage de projets d'envergure, il a fondé 3M CONSULTING pour apporter aux chefs d'entreprise un conseil moderne, accessible et résolument orienté résultats. Convaincu que la transformation digitale est le moteur de l'économie moderne, il est également l'initiateur de la plateforme 3mconsulting.digital, qui permet d'accéder aux services d'assistance et d'intermédiation en un clic.",
      presenceTitle: "Siège Stratégique à Yaoundé",
      presenceDesc: "Implanté à Omnisport Rue Foé, le cabinet bénéficie d'une proximité directe avec les ministères, les greffes des tribunaux et les directions générales pour un traitement ultra-rapide de vos dossiers.",
    },
    canEvent: {
      badge: "Offre Événementielle & Accueil",
      title: "Accompagnement Événements & Séjours — CAN TotalEnergies",
      desc: "3M Consulting vous accompagne pour vos séjours professionnels et événementiels en Côte d'Ivoire et dans la sous-région. Pour cela, nous vous proposons différents packages d'hébergement et de services pour un séjour agréable et sécurisé.",
      packagesTitle: "Nos 4 Formules Packages",
      learnMore: "Demander des informations sur les packages ↗",
      packages: [
        {
          name: "Package Jongleur",
          subtitle: "Formule découverte économique & agile",
          features: ["Hébergement sélectionné", "Assistance logistique de base", "Orientation locale quotidienne"],
        },
        {
          name: "Package Supporter",
          subtitle: "Formule confort & animation",
          features: ["Hébergement tout confort", "Transferts aéroport & sites", "Assistance dédiée sur place"],
        },
        {
          name: "Package Middle",
          subtitle: "Formule business & sérénité",
          features: ["Hôtel de standing supérieur", "Chauffeur privé & conciergerie", "Accès privilégié aux événements"],
        },
        {
          name: "Package Premium",
          subtitle: "Formule VIP tout inclus",
          features: ["Hébergement haut de gamme 5*", "Accompagnement protocolaire complet", "Service personnalisé 24h/24"],
        },
      ],
    },
    joinUs: {
      badge: "Rejoignez l'Écosystème 3M",
      heading: "Donnez Une Nouvelle Dimension à Vos Projets",
      intro: "Que vous souhaitiez créer ou développer votre entreprise avec l'appui de nos experts, ou que vous soyez un consultant indépendant désireux d'intégrer nos missions d'excellence, 3M Consulting est votre tremplin.",
      client: {
        tag: "Espace Client & Entreprise",
        title: "Vous Êtes Porteur de Projet ou Dirigeant ?",
        description: "Gagnez un temps précieux et évitez les erreurs coûteuses. Nous gérons vos formalités de A à Z avec un interlocuteur unique et un suivi transparent.",
        btn: "Démarrer mon accompagnement",
        perks: [
          "Prise en charge intégrale par un consultant senior dédié",
          "Sécurisation juridique et fiscale de chaque étape",
          "Délais garantis et transparence totale sur les coûts",
        ],
      },
      consultant: {
        tag: "Espace Consultant & Expert",
        title: "Vous Êtes Consultant ou Spécialiste ?",
        description: "Mettez vos compétences au service de projets ambitieux. Intégrez notre vivier d'experts à Yaoundé et participez à des missions à forte valeur ajoutée.",
        btn: "Rejoindre le Réseau d'Experts",
        perks: [
          "Accès régulier à des missions d'accompagnement qualifiées",
          "Rémunération attractive et cadre de travail collaboratif",
          "Collaboration avec un réseau d'experts pluridisciplinaires réputé",
        ],
      },
      digitalPlatformNote: "Notre plateforme 3mconsulting.digital permet une mise en relation fluide et un démarrage rapide de votre dossier en 4 étapes simples.",
      digitalPlatformBtn: "Accéder au portail 3mconsulting.digital ↗",
    },
    easiestWay: {
      badge: "Parcours Simple & Rapide",
      heading: "Démarrez en 4 étapes simples :",
      subheading: "Un processus clair et efficace pour lancer votre démarche sans délai.",
      hoursNote: "Horaires du cabinet : Lundi à vendredi de 7h30 à 17h30 · Samedi de 8h00 à 14h30.",
      joinTitle: "Comment démarrer avec 3M Consulting ? Choisissez votre profil et lancez-vous immédiatement :",
      steps: [
        {
          stepNumber: "1",
          action: "Remplir le formulaire",
          detail: "en tant que Client ou Consultant",
        },
        {
          stepNumber: "2",
          action: "Définir votre besoin",
          detail: "selon votre secteur ou expertise",
        },
        {
          stepNumber: "3",
          action: "Échange avec notre expert",
          detail: "cadrage personnalisé sous 24h",
        },
        {
          stepNumber: "4",
          action: "Démarrage immédiat",
          detail: "avec suivi rigoureux de votre dossier",
        },
      ],
    },
    contact: {
      badge: "Contactez-nous à tout moment",
      heading: "Une équipe à votre écoute pour concrétiser vos projets",
      intro: "Vous souhaitez échanger sur votre projet ou obtenir un devis personnalisé ? Remplissez le formulaire ci-dessous ou joignez-nous directement par téléphone ou email.",
      form: {
        nameLabel: "Nom complet",
        namePlaceholder: "Votre nom et prénom",
        emailLabel: "Adresse e-mail",
        emailPlaceholder: "votre.email@exemple.com",
        phoneLabel: "Numéro de téléphone",
        phonePlaceholder: "+237 6XX XX XX XX",
        serviceLabel: "Service recherché",
        servicePlaceholder: "Sélectionnez un domaine d'expertise",
        messageLabel: "Votre message",
        messagePlaceholder: "Décrivez vos besoins, votre structure et vos attentes...",
        submitBtn: "Envoyer ma demande",
        submittingBtn: "Envoi en cours...",
        successMsg: "Merci ! Votre message a été transmis avec succès. Notre équipe vous recontactera rapidement.",
        errorMsg: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous appeler directement.",
      },
      coordinates: {
        title: "Adresses & Coordonnées",
        addressLabel: "Adresse physique",
        addressValue: "Omnisport Rue Foé, Yaoundé, Cameroun",
        emailLabel: "Email officiel",
        emailValue: "contact@3mconsultingsarl.com",
        copyEmailBtn: "Copier",
        copiedEmailBtn: "Copié",
        phoneLabel: "Téléphones directs",
        phones: ["+237 673 84 18 21", "+237 698 66 87 61"],
        hoursLabel: "Nos horaires d'ouverture",
        hoursWeekday: "Lundi à vendredi : 7h30 à 17h30",
        hoursSaturday: "Samedi : 8h00 à 14h30",
        hoursSunday: "Dimanche : fermé",
        officialWebsiteLabel: "Site officiel",
        officialWebsiteValue: "3mconsultingsarl.com",
        socialFacebookLabel: "Facebook",
        socialFacebookUrl: "https://www.facebook.com/profile.php?id=100095136727288",
        socialTwitterUrl: "https://twitter.com",
        socialLinkedInUrl: "https://linkedin.com",
        socialWhatsAppUrl: "https://wa.me/237673841821",
        socialTelegramUrl: "https://t.me/+237673841821",
        socialTikTokUrl: "https://tiktok.com",
      },
    },
    footer: {
      brandMotto: "We take the next step together.",
      aboutSummary: "3M Consulting SARL est un cabinet d'accompagnement et de conseil aux entreprises basé à Yaoundé, Omnisport Rue Foé. De la création d'entreprise à la fiscalité, nous transformons vos barrières en escaliers vers la réussite.",
      navigationHeader: "Navigation",
      servicesHeader: "Nos Domaines",
      coordinatesHeader: "Bureau de Yaoundé",
      rightsReserved: "Tous droits réservés.",
      legalNotice: "Mentions Légales",
      privacyPolicy: "Politique de Confidentialité",
      officialWebsite: "3mconsultingsarl.com",
      facebookPage: "Page Facebook officielle",
      digitalPlatform: "Portail 3mconsulting.digital",
    },
  },
  en: {
    seo: {
      home: {
        title: "3M Consulting SARL | Corporate Business Advisory in Yaoundé, Cameroon",
        desc: "Leading business consulting firm in Yaoundé: company formation, office scouting, ministerial licensing, tax & CNPS compliance, DSF reports, and tender DAO bids.",
      },
      services: {
        title: "Practice Areas & Corporate Solutions in Yaoundé | 3M Consulting SARL",
        desc: "Explore our 7 core business solutions: 72h company formation, commercial leases, operating licenses, monthly tax & CNPS filings, DSF statements, and winning tender bids.",
      },
      about: {
        title: "About Us | 3M Consulting SARL & CEO M. Monroi Maya Michael",
        desc: "Who are we? Premier corporate advisory firm founded by M. Monroi Maya Michael in Yaoundé. Financial expertise, legal rigor, and digital innovation via 3mconsulting.digital.",
      },
      join: {
        title: "Join Us | Client Onboarding & Elite Consultant Network | 3M Consulting",
        desc: "Launch your business or join our vetted network of advisory consultants in Yaoundé. Streamlined onboarding, dedicated guidance, and high-impact corporate missions.",
      },
      contact: {
        title: "Contact the Firm | 3M Consulting SARL Omnisport Yaoundé",
        desc: "Schedule a consultation with our senior advisors at Omnisport Rue Foé, Yaoundé. Phone: +237 673 84 18 21. Email: contact@3mconsultingsarl.com.",
      },
      privacy: {
        title: "Privacy Policy & Legal Terms | 3M Consulting SARL",
        desc: "Privacy policy and official legal statements of 3M Consulting SARL in Cameroon.",
      },
    },
    navbar: {
      brandName: "3M CONSULTING",
      tagline: "We Take the Next Step Together.",
      home: "Home",
      services: "Our Services",
      about: "About Us",
      join: "Join Us",
      contact: "Contact",
      ctaAssistance: "Request Assistance",
      languageToggle: "FR",
      admin: "Admin Space",
      callUs: "Direct call:",
    },
    hero: {
      badge: "Corporate Business Advisory Firm",
      title: "Your Partner to Start and Succeed in Cameroon.",
      body: "3M Consulting turns your barriers into stepping stones toward entrepreneurial success. High-level corporate assistance and intermediation tailored to your highest expectations.",
      tagline: "We take the next step together.",
      ctaServices: "Explore Our Practice Areas",
      ctaAssistance: "Request Assistance",
      stats: {
        stat1Value: "7",
        stat1Label: "Key Practice Areas",
        stat2Value: "100%",
        stat2Label: "Dedication & Support",
        stat3Value: "Yaoundé",
        stat3Label: "Omnisport Rue Foé",
      },
      badges: ["Business Formation", "Tax & DSF", "CNPS Social Security", "Tenders", "Offices"],
    },
    whatWeOffer: {
      badge: "Solutions & Practice Areas",
      heading: "Tangible Business Solutions for Every Stage of Growth",
      intro: "End administrative hurdles for good. At 3M Consulting, we handle your complete legal, tax, and operational requirements with a dedicated team of senior specialists.",
      title: "Our 7 Core Strategic Solutions",
      viewAllCta: "Explore All Business Solutions ↗",
      services: [
        {
          id: "creation-entreprise",
          title: "Business Incorporation, Subsidiary & Branch",
          summary: "Register and legally protect your company in record time. We manage the entire corporate constitution process from start to finish.",
          description: "From tailored OHADA articles of association to obtaining the RCCM court registration, taxpayer ID card, and start-up tax clearance, we handle every step seamlessly.",
          deliverables: [
            "Tailored drafting of OHADA constitutional bylaws",
            "Official registration at the Commercial Court (RCCM)",
            "Taxpayer card and official certificate of registration",
            "Tax folder initialization and start-up clearances",
          ],
          documentsRequired: ["Valid IDs of directors & shareholders", "Registered office location sketch", "Commercial lease agreement or domiciliation"],
          badge: "Turn-Key Formation",
          iconName: "Building2",
        },
        {
          id: "recherche-locaux",
          title: "Office Sourcing & Commercial Space Fitting",
          summary: "Secure the ideal address for your business in Yaoundé and move your team in without delay.",
          description: "We scout premium commercial locations matching your requirements, negotiate lease conditions in your favor, and oversee fit-out works for immediate operations.",
          deliverables: [
            "Curated shortlist of compliant commercial properties",
            "Commercial lease negotiation and legal protection",
            "Supervision of interior layout works and technical setup",
            "Key handover and immediate business readiness",
          ],
          documentsRequired: ["Space requirement brief", "Target neighborhood in Yaoundé", "Projected budget"],
          badge: "Offices & Premises",
          iconName: "MapPin",
        },
        {
          id: "agrements-licences",
          title: "Ministerial Approvals & Operating Licenses",
          summary: "Obtain official authorizations to operate legally in your regulated industry across Cameroon.",
          description: "Regulated industries require strict approvals. We build comprehensive technical applications and follow up directly with relevant ministries and regulatory agencies.",
          deliverables: [
            "Regulatory pre-audit of sector requirements",
            "End-to-end compilation of technical and administrative dossiers",
            "Direct ministry representation and application follow-up",
            "Official issuance of operating license or ministerial approval",
          ],
          documentsRequired: ["Required professional credentials or diplomas", "Technical activity brief", "Up-to-date tax clearance certificate"],
          badge: "Official Approvals",
          iconName: "ShieldCheck",
        },
        {
          id: "fiscalite-cnps",
          title: "Monthly Tax Management & CNPS Compliance",
          summary: "Streamline your corporate tax and social obligations each month. Rigorous filing support, monitoring, and compliance guidance for DGI and CNPS.",
          description: "Do not let tax burdens slow your growth. Our experts manage your monthly VAT returns, corporate income tax advances, CNPS social security filings, and represent you in audits.",
          deliverables: [
            "On-time preparation and digital filing of monthly taxes",
            "Calculation and declaration of employee social contributions to CNPS",
            "Expedited issuance of Tax Clearance Certificates (ARF)",
            "Technical representation and defense during routine audits",
          ],
          documentsRequired: ["Monthly revenue statements & invoice records", "Payroll register and staff listings", "Previous month's tax returns"],
          badge: "Tax & Social Compliance",
          iconName: "Receipt",
        },
        {
          id: "montage-dsf",
          title: "DSF Annual Tax Statements & Financing Packages",
          summary: "Maximize the credibility of your financial accounts and facilitate business loans with banks and investors.",
          description: "We prepare your certified Annual Statistical and Tax Returns (DSF) in full accordance with revised OHADA standards and construct bankable credit dossiers.",
          deliverables: [
            "Reconciliation of general ledger trial balance and year-end inventory",
            "Full compilation of revised OHADA financial statements and DSF tables",
            "Certified digital submission to the tax administration",
            "Financial presentation dossiers for banking partners and investors",
          ],
          documentsRequired: ["Final general ledger and closing trial balance", "Bank statements and monthly reconciliations", "Fixed asset depreciation schedules"],
          badge: "Financial Statements",
          iconName: "FileSpreadsheet",
        },
        {
          id: "montage-dao",
          title: "Tender Documentation (DAO) & Terms of Reference",
          summary: "Formulate rigorous tender guidelines compliant with national procurement codes and multilateral donor standards.",
          description: "Designed for public institutions, NGOs, and corporate contracting authorities: we craft comprehensive DAO documents ensuring transparent, competitive bidder selection.",
          deliverables: [
            "Clear formulation of Terms of Reference (ToR) and technical specs",
            "Drafting of Specific Bidding Regulations (RPAO)",
            "Objective technical and financial evaluation matrices",
            "Full compliance with Public Procurement Codes and donor standards",
          ],
          documentsRequired: ["Project / program overview", "Allocated budget envelope", "Implementation timeline"],
          badge: "Procurement Engineering",
          iconName: "FileCheck",
        },
        {
          id: "marches-publics",
          title: "Winning Tender Bid Submissions (Public & Private)",
          summary: "Maximize your chances of winning major public and private contracts in Cameroon with a flawless proposal.",
          description: "Any missing administrative document results in immediate rejection. We assemble all qualifying records, draft a persuasive technical methodology, and optimize your pricing bid.",
          deliverables: [
            "Thorough check of all mandatory eliminatory administrative records",
            "Strategic drafting of the technical approach and work plan",
            "Preparation and cross-verification of unit price schedules and bills of quantities",
            "Strict compliant packaging and tamper-evident sealing",
          ],
          documentsRequired: ["Tender Dossier (DAO / RPAO) requirements", "Past execution performance certificates", "Bank bid bond"],
          badge: "Tender Success",
          iconName: "TrendingUp",
        },
      ],
    },
    howWeWork: {
      badge: "Our Advisory Approach",
      heading: "Tailored Guidance Every Step of the Way",
      mandelaQuote: "“We do not know everything, but we know where all knowledge is found.”",
      mandelaAuthor: "N. Mandela",
      intro: "At 3M Consulting, seasoned consultants are assigned to your project from day one. We provide ongoing advisory support, from initial company incorporation to tax optimization and connecting you with strategic investors.",
      steps: [
        {
          number: "01",
          name: "Scoping",
          title: "Fast Assessment & Scoping",
          description: "We pinpoint your priorities, analyze your operational situation, and outline an optimal action plan.",
        },
        {
          number: "02",
          name: "Strategy",
          title: "Application Compilation",
          description: "Our specialists gather, draft, and validate every piece of documentation per official guidelines.",
        },
        {
          number: "03",
          name: "Submission",
          title: "Direct Submission & Follow-up",
          description: "We engage directly with ministries, court registries, and tax offices for prompt resolution.",
        },
        {
          number: "04",
          name: "Growth",
          title: "Scale & Strategic Partnerships",
          description: "We stand with you over time to help you win tenders, scale operations, and secure funding.",
        },
      ],
    },
    whyChooseUs: {
      badge: "Why Choose 3M Consulting?",
      heading: "Turning Barriers into Stepping Stones",
      tagline: "Proven expertise, continuous responsiveness, and deep grounding in the Cameroonian market.",
      pillars: [
        {
          title: "Reinvented Intermediation",
          description: "A premium assistance service that turns every administrative obstacle into an entrepreneurial stepping stone.",
          iconName: "ShieldCheck",
        },
        {
          title: "Dedicated Specialists & Single Point of Contact",
          description: "Experienced consultants assigned specifically based on the unique nature of your requirements.",
          iconName: "Headphones",
        },
        {
          title: "Investor & Partner Network",
          description: "Active assistance in sourcing investors, managing business extensions, mergers, and corporate sales.",
          iconName: "TrendingUp",
        },
        {
          title: "Digital Access via 3mconsulting.digital",
          description: "A streamlined digital ecosystem to initiate requests and track progress with complete ease.",
          iconName: "CheckCircle2",
        },
      ],
    },
    aboutPage: {
      badge: "Who We Are",
      heading: "About 3M Consulting SARL",
      lead: "A leading corporate advisory firm in Yaoundé, dedicated to supporting entrepreneurs, executives, and investors in transforming regulatory requirements into genuine competitive growth drivers.",
      missionTitle: "Our Mission: Simplify & Accelerate",
      missionDesc: "Creating, running, and scaling a business in Central Africa requires commanding legal, fiscal, and institutional frameworks. Our mission is to eliminate delay and friction to offer you a smooth, secure, and profitable business path.",
      missionDetails: "With our multidisciplinary team (corporate attorneys, tax specialists, public procurement experts) and strategic location in Yaoundé Omnisport, we deliver immediate responsiveness across all government entities.",
      ceoTitle: "CEO & Founder",
      ceoName: "M. MONROI MAYA MICHAEL",
      ceoBio: "A pragmatic financial strategist and passionate entrepreneur, M. Monroi Maya Michael combines solid accounting and tax credentials with advanced public finance training. Backed by over 5 years of leading major projects, he established 3M CONSULTING to deliver modern, accessible, and results-focused advisory services. Firmly convinced that digital technology powers modern business, he also pioneered 3mconsulting.digital, providing instant online access to corporate services in one click.",
      presenceTitle: "Strategic Headquarters in Yaoundé",
      presenceDesc: "Located at Omnisport Rue Foé, the firm is situated in immediate proximity to government ministries, commercial court registries, and regulatory bodies for ultra-fast processing of client files.",
    },
    canEvent: {
      badge: "Event Hospitality & Concierge",
      title: "Event Hospitality & Travel Packages — CAN TotalEnergies",
      desc: "3M Consulting supports your corporate and event stays in Ivory Coast and across the region during major sporting and business events. We offer dedicated hospitality and support packages for an enjoyable, seamless journey.",
      packagesTitle: "Our 4 Curated Packages",
      learnMore: "Request Information on Packages ↗",
      packages: [
        {
          name: "Juggler Package",
          subtitle: "Agile & smart discovery package",
          features: ["Selected accommodation", "Essential ground logistics", "Daily orientation support"],
        },
        {
          name: "Supporter Package",
          subtitle: "Comfort & full event immersion",
          features: ["Comfortable hotel stay", "Airport & venue transfers", "Dedicated on-site host"],
        },
        {
          name: "Middle Package",
          subtitle: "Premium business convenience",
          features: ["High-end business hotel", "Private driver & concierge", "Priority access to venues"],
        },
        {
          name: "Premium Package",
          subtitle: "All-inclusive VIP experience",
          features: ["5-Star luxury accommodation", "Complete protocol assistance", "Personalized 24/7 concierge"],
        },
      ],
    },
    joinUs: {
      badge: "Join the 3M Ecosystem",
      heading: "Accelerate Your Business Growth",
      intro: "Whether you are looking to launch or scale your company with expert guidance, or you are an independent consultant eager to join our top-tier assignments, 3M Consulting is your launchpad.",
      client: {
        tag: "Client & Enterprise Space",
        title: "Are You an Entrepreneur or Executive?",
        description: "Save critical time and avoid costly regulatory errors. We manage your procedures from A to Z with a single dedicated advisor and transparent updates.",
        btn: "Start My Consultation",
        perks: [
          "Complete end-to-end guidance from a senior dedicated consultant",
          "Comprehensive legal and tax safeguarding at every stage",
          "Guaranteed turnaround times and full pricing transparency",
        ],
      },
      consultant: {
        tag: "Consultant & Expert Space",
        title: "Are You a Consultant or Specialist?",
        description: "Apply your expertise to high-impact projects. Join our vetted network of specialists in Yaoundé and take on rewarding corporate consulting missions.",
        btn: "Join Our Expert Network",
        perks: [
          "Consistent access to qualified advisory assignments",
          "Attractive compensation and a supportive collaborative team",
          "Synergy with an established multidisciplinary expert network",
        ],
      },
      digitalPlatformNote: "Our 3mconsulting.digital platform provides smooth onboarding and rapid initiation of your application in 4 straightforward steps.",
      digitalPlatformBtn: "Access 3mconsulting.digital Portal ↗",
    },
    easiestWay: {
      badge: "Simple & Rapid Onboarding",
      heading: "Get Started in 4 Easy Steps:",
      subheading: "A clear and efficient process to launch your project without delay.",
      hoursNote: "Office Hours: Monday to Friday from 7:30 AM to 5:30 PM · Saturday from 8:00 AM to 2:30 PM.",
      joinTitle: "How to begin with 3M Consulting? Select your profile and get started immediately:",
      steps: [
        {
          stepNumber: "1",
          action: "Submit Form",
          detail: "as a Client or Consultant",
        },
        {
          stepNumber: "2",
          action: "Select Practice Area",
          detail: "matching your sector or specialty",
        },
        {
          stepNumber: "3",
          action: "Consult with Our Expert",
          detail: "tailored scoping call within 24h",
        },
        {
          stepNumber: "4",
          action: "Immediate Execution",
          detail: "with dedicated, rigorous file tracking",
        },
      ],
    },
    contact: {
      badge: "Contact Us at Any Time",
      heading: "A Dedicated Team Ready to Bring Your Projects to Life",
      intro: "Want to discuss your corporate venture or request a tailored estimate? Complete the form below or contact us directly via phone, WhatsApp, or email.",
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "Your full name",
        emailLabel: "Email Address",
        emailPlaceholder: "your.email@example.com",
        phoneLabel: "Phone Number",
        phonePlaceholder: "+237 6XX XX XX XX",
        serviceLabel: "Service of Interest",
        servicePlaceholder: "Select a practice area",
        messageLabel: "Your Message",
        messagePlaceholder: "Briefly explain your company's needs and timeline...",
        submitBtn: "Send My Request",
        submittingBtn: "Sending...",
        successMsg: "Thank you! Your inquiry has been sent successfully. Our team will get back to you shortly.",
        errorMsg: "An error occurred while sending your request. Please try again or give us a direct call.",
      },
      coordinates: {
        title: "Addresses & Contact Info",
        addressLabel: "Physical Office",
        addressValue: "Omnisport Rue Foé, Yaoundé, Cameroon",
        emailLabel: "Official Email",
        emailValue: "contact@3mconsultingsarl.com",
        copyEmailBtn: "Copy",
        copiedEmailBtn: "Copied",
        phoneLabel: "Direct Phone Lines",
        phones: ["+237 673 84 18 21", "+237 698 66 87 61"],
        hoursLabel: "Business Opening Hours",
        hoursWeekday: "Monday to Friday: 7:30 AM to 5:30 PM",
        hoursSaturday: "Saturday: 8:00 AM to 2:30 PM",
        hoursSunday: "Sunday: Closed",
        officialWebsiteLabel: "Official Website",
        officialWebsiteValue: "3mconsultingsarl.com",
        socialFacebookLabel: "Facebook",
        socialFacebookUrl: "https://www.facebook.com/profile.php?id=100095136727288",
        socialTwitterUrl: "https://twitter.com",
        socialLinkedInUrl: "https://linkedin.com",
        socialWhatsAppUrl: "https://wa.me/237673841821",
        socialTelegramUrl: "https://t.me/+237673841821",
        socialTikTokUrl: "https://tiktok.com",
      },
    },
    footer: {
      brandMotto: "We take the next step together.",
      aboutSummary: "3M Consulting SARL is a corporate advisory and business facilitation firm located at Omnisport Rue Foé, Yaoundé. From business formation to taxation and public procurement, we turn your barriers into stepping stones toward success.",
      navigationHeader: "Navigation",
      servicesHeader: "Practice Areas",
      coordinatesHeader: "Yaoundé Office",
      rightsReserved: "All rights reserved.",
      legalNotice: "Legal Notices",
      privacyPolicy: "Privacy Policy",
      officialWebsite: "3mconsultingsarl.com",
      facebookPage: "Official Facebook Page",
      digitalPlatform: "3mconsulting.digital Portal",
    },
  },
};
