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
        title: "3M Consulting | Conseil aux entreprises à Yaoundé",
        desc: "3M Consulting à Yaoundé : création d'entreprise, recherche de locaux, agréments & licences, fiscalité & CNPS, montage de DSF et DAO pour les marchés publics.",
      },
      services: {
        title: "Nos Domaines d'Expertise | 3M Consulting SARL",
        desc: "Découvrez nos 7 domaines d'expertise par excellence : création de société, aménagement de locaux, licences, déclarations fiscales et CNPS, montage DSF et DAO.",
      },
      about: {
        title: "À Propos de Nous | 3M Consulting & PDG M. Monroi Maya Michael",
        desc: "Qui sommes-nous ? Découvrez l'histoire de 3M Consulting, notre vision et le parcours de notre PDG M. Monroi Maya Michael au Cameroun.",
      },
      join: {
        title: "Rejoignez-Nous | Clients & Consultants 3mconsulting.digital",
        desc: "Devenez client ou consultant chez 3M Consulting en 4 étapes simples via notre portail officiel 3mconsulting.digital.",
      },
      contact: {
        title: "Contactez-Nous | 3M Consulting Yaoundé",
        desc: "Contactez 3M Consulting à Omnisport Rue Foé, Yaoundé. Téléphone : +237 698 66 87 61 / 6 73 84 18 21. Email : contact@3mconsultingsarl.com.",
      },
      privacy: {
        title: "Politique de Confidentialité | 3M Consulting SARL",
        desc: "Mentions légales et politique de confidentialité de 3M Consulting SARL au Cameroun.",
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
      ctaAssistance: "Demander un accompagnement ↗",
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
      badge: "Ce que nous vous offrons",
      heading: "Une intermédiation et une assistance d'excellence",
      intro: "Chez 3M Consulting le service d'intermédiation prend une toute autre forme. Un service d'assistance à la hauteur de vos attentes. Pour tous vos besoins, 3M Consulting fait de vos barrières des escaliers vers une réussite entrepreneuriale.",
      title: "Nos domaines d'expertise par excellence",
      viewAllCta: "Découvrir nos 7 domaines d'expertise ↗",
      services: [
        {
          id: "creation-entreprise",
          title: "Création d'entreprise / succursale / filiale",
          summary: "3M Consulting fournit un accompagnement complet pour la création d'entreprises, de succursales ou de filiales, aidant les clients à structurer leur activité et à se conformer aux exigences légales et réglementaires.",
          description: "Prise en charge intégrale de la constitution juridique (SARL, SAS, SA, Établissement, succursale étrangère) : rédaction des statuts, RCCM, carte de contribuable et immatriculation complète.",
          deliverables: [
            "Rédaction des statuts et actes constitutifs conformes OHADA",
            "Immatriculation au Registre du Commerce et du Crédit Mobilier (RCCM)",
            "Obtention de la Carte de Contribuable et Attestation d'Immatriculation",
            "Ouverture du dossier fiscal et délivrance du quitus initial",
          ],
          documentsRequired: ["Pièces d'identité des associés", "Plan de localisation du siège", "Bail commercial ou contrat de domiciliation"],
          badge: "Création & Filiales",
          iconName: "Building2",
        },
        {
          id: "recherche-locaux",
          title: "Recherche et aménagement des locaux",
          summary: "Le cabinet peut assister dans la recherche de locaux adaptés aux besoins des entreprises clientes et dans leur aménagement pour une installation efficace et fonctionnelle.",
          description: "Recherche ciblée d'emplacements stratégiques à Yaoundé et dans les grands centres urbains, négociation des baux commerciaux, agencement ergonomique et aménagement d'espaces professionnels.",
          deliverables: [
            "Sélection d'espaces professionnels adaptés à votre cahier des charges",
            "Négociation contractuelle et sécurisation du bail commercial",
            "Coordination de l'aménagement intérieur et installation technique",
            "Mise en service opérationnelle immédiate",
          ],
          documentsRequired: ["Cahier des charges de surface", "Zone géographique souhaitée", "Budget prévisionnel"],
          badge: "Implantation & Locaux",
          iconName: "MapPin",
        },
        {
          id: "agrements-licences",
          title: "Assistance dans les démarches liées à l'obtention d'agréments et de licences",
          summary: "3M Consulting guide les entreprises à travers les démarches nécessaires pour obtenir les agréments et licences obligatoires pour exercer leur activité légale et réglementaire.",
          description: "Constitution rigoureuse des dossiers de demande d'agréments sectoriels, licences d'exploitation ministérielles et autorisations administratives pour tout secteur régulé au Cameroun.",
          deliverables: [
            "Audit des prérequis réglementaires selon le secteur d'activité",
            "Montage complet du dossier technique et administratif",
            "Suivi proactif auprès des ministères et autorités de régulation",
            "Obtention formelle de la licence ou de l'agrément d'exercice",
          ],
          documentsRequired: ["Diplômes ou qualifications des dirigeants", "Dossier technique d'exploitation", "Quitus fiscal à jour"],
          badge: "Agréments & Licences",
          iconName: "ShieldCheck",
        },
        {
          id: "fiscalite-cnps",
          title: "Déclarations fiscales et CNPS",
          summary: "Le cabinet prend en charge les formalités fiscales et sociales, aidant les entreprises à respecter leurs obligations en matière de déclarations fiscales et de contributions à la Caisse Nationale de Prévoyance Sociale (CNPS).",
          description: "Assistance continue pour sécuriser vos obligations déclaratives : TVA mensuelle, acomptes IS, télédéclarations DGI, immatriculation employeur CNPS et téléversement des cotisations sociales.",
          deliverables: [
            "Préparation et dépôt des télédéclarations fiscales mensuelles",
            "Gestion des déclarations sociales nominatives et cotisations CNPS",
            "Délivrance des attestations de régularité fiscale (ARF) et pour solde CNPS",
            "Assistance lors des contrôles fiscaux ou sociaux de routine",
          ],
          documentsRequired: ["Chiffre d'affaires mensuel", "Livre de paie / registre du personnel", "Déclarations antérieures"],
          badge: "Fiscalité & CNPS",
          iconName: "Receipt",
        },
        {
          id: "montage-dsf",
          title: "Accompagnement dans le montage de DSF",
          summary: "3M Consulting offre un soutien dans l'élaboration et la présentation de la Déclaration Statistique et Fiscale (DSF) et dossiers d'aides pour les entreprises qui souhaitent obtenir des financements ou des facilités.",
          description: "Élaboration méticuleuse de la liasse DSF OHADA révisée (système normal ou allégé), fiabilisation des tableaux annexes, cohérence des bilans et présentation aux bailleurs ou banques partenaires.",
          deliverables: [
            "Revue de cohérence de la balance générale de clôture",
            "Montage complet des états financiers OHADA et tableaux DSF",
            "Dépôt et téléversement certifié auprès de l'administration fiscale",
            "Production du dossier financier d'appui pour banques ou subventions",
          ],
          documentsRequired: ["Grand livre et balance générale définitive", "Relevés bancaires et états de rapprochement", "Tableaux d'amortissement"],
          badge: "DSF & Financement",
          iconName: "FileSpreadsheet",
        },
        {
          id: "montage-dao",
          title: "Assistance dans le montage de DAO pour les projets / programmes / structures",
          summary: "3M Consulting offre un service d'accompagnement pour la conception et la rédaction des Dossiers d'Appel d'Offres (DAO) destinés aux projets, programmes ou infrastructures. Cette assistance vise à garantir la qualité, la conformité et la pertinence des documents préparés pour les appels d'offres.",
          description: "Rédaction spécialisée pour donneurs d'ordre, institutions et programmes de développement : définition des termes de référence, critères d'éligibilité, spécifications techniques et clauses administratives particulières.",
          deliverables: [
            "Rédaction méthodique des Termes de Référence (TDR)",
            "Élaboration du Règlement Particulier d'Appel d'Offres (RPAO)",
            "Définition des critères d'évaluation et de notation",
            "Conformité avec les standards nationaux et des bailleurs internationaux",
          ],
          documentsRequired: ["Descriptif du programme / projet", "Budget alloué", "Calendrier d'exécution prévu"],
          badge: "Conception de DAO",
          iconName: "FileCheck",
        },
        {
          id: "marches-publics",
          title: "Montage des dossiers d'offre dans le cadre des marchés publics pour les entreprises privées",
          summary: "Le cabinet propose une expertise dans l'élaboration des dossiers d'offre pour les entreprises privées soumissionnant à des marchés publics. Cette assistance comprend la préparation des documents requis, la conformité aux exigences des appels d'offres publics et la présentation approfondie des offres pour maximiser les chances de succès.",
          description: "Préparation rigoureuse de vos soumissions pour remporter des commandes publiques au Cameroun : rassemblement des pièces éliminatoires, rédaction de la note méthodologique et structuration de l'offre financière.",
          deliverables: [
            "Collecte et ordonnancement des pièces administratives éliminatoires (quitus, CNPS, caution)",
            "Structuration percutante de l'offre technique et de la méthodologie",
            "Mise en forme du bordereau des prix unitaires et devis quantitatif estimatif",
            "Scellage et conditionnement conforme aux règlements de consultation",
          ],
          documentsRequired: ["Cahier des charges / RPAO de l'appel d'offres", "Références de réalisations comparables", "Caution bancaire de soumission"],
          badge: "Marchés Publics",
          iconName: "TrendingUp",
        },
      ],
    },
    howWeWork: {
      badge: "Comment travaillons-nous ?",
      heading: "Un accompagnement sur mesure à chaque étape",
      mandelaQuote: "« Nous ne savons pas tout, mais nous savons où tout savoir se trouve. »",
      mandelaAuthor: "N. Mandela",
      intro: "Chez 3M Consulting, nous mettons à votre disposition des experts qui vous accompagneront tout au long de votre procédure selon le besoin initié. Nous possédons diverses connaissances pour vous apporter une assistance dès la création de votre entreprise avec un accompagnement dans le montage de dossier fiscal et administratif tout au long de votre parcours entrepreneurial. De ce fait, des experts vous seront alloués pour vous aider dans la recherche de potentiels investisseurs pour l'extension de votre entreprise, la fusion ou la vente de votre entité.",
      steps: [
        {
          number: "01",
          name: "Écoute",
          title: "Écoute & Cadrage",
          description: "Nous identifions précisément la nature de votre besoin, vos objectifs et vos échéances prioritaires.",
        },
        {
          number: "02",
          name: "Analyse",
          title: "Analyse Réglementaire",
          description: "Nous structurons la démarche, définissons la liste des pièces nécessaires et anticipons les exigences administratives.",
        },
        {
          number: "03",
          name: "Accompagnement",
          title: "Accompagnement Opérationnel",
          description: "Nos experts prennent en charge la constitution rigoureuse et le dépôt de vos dossiers auprès des entités compétentes.",
        },
        {
          number: "04",
          name: "Extension",
          title: "Partenaires & Investisseurs",
          description: "Nous vous accompagnons dans la durée, jusqu'à la recherche de partenaires ou investisseurs pour accélérer votre croissance.",
        },
      ],
    },
    whyChooseUs: {
      badge: "Pourquoi nous choisir ?",
      heading: "Faire de vos barrières des escaliers vers le succès",
      tagline: "Une expertise éprouvée, une réactivité constante et un ancrage camerounais solide.",
      pillars: [
        {
          title: "Service d'intermédiation réinventé",
          description: "Un service d'assistance de haute qualité qui transforme chaque obstacle administratif en opportunité.",
          iconName: "ShieldCheck",
        },
        {
          title: "Experts dédiés",
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
      heading: "À Propos de 3M Consulting",
      lead: "Nous sommes 3M Consulting et nous vous proposons une large gamme de services professionnels pour répondre à vos besoins. Nous nous engageons à vous fournir chaque service avec le sourire et à votre plus grande satisfaction.",
      missionTitle: "Notre Mission & Notre Engagement",
      missionDesc: "3M Consulting se positionne comme un cabinet spécialisé dans les domaines clés liés à la création, à la structuration et au développement d'entreprises au Cameroun. Notre vocation est de faire de vos barrières des escaliers vers une réussite entrepreneuriale pérenne.",
      missionDetails: "Grâce à une maîtrise pointue des réglementations locales (OHADA, Code Général des Impôts, CNPS, Code des marchés publics), notre équipe simplifie vos démarches et vous permet de vous concentrer sur votre cœur de métier.",
      ceoTitle: "PDG & Fondateur",
      ceoName: "M. MONROI MAYA MICHAEL",
      ceoBio: "De sa formation de comptable à sa formation en finances publiques, le jeune entrepreneur a décidé de faire de son rêve ultime 3M CONSULTING une réalité. Né dans les années 90, il a grandi dans un environnement entrepreneurial, ce qui a grandement nourri son désir de le devenir. Diplômé en banque et finance, comptabilité et fiscalité, le jeune entrepreneur ne s'est pas arrêté là et a décidé de se former aux finances publiques. Après avoir travaillé pendant plus de 5 ans sur différents projets, il décide de créer sa propre entreprise, 3M CONSULTING. Visionnaire, jeune et pragmatique, son objectif est de fournir des services dans tous les domaines et à tous les niveaux possibles, d'où l'idée de créer l'application 3mconsulting.digital, destinée à faciliter l'accès à de meilleurs services et prestations en un seul clic. Associé et consultant dans plusieurs entreprises, il met son expertise à votre disposition pour une meilleure expérience entrepreneuriale.",
      presenceTitle: "Siège Social à Yaoundé",
      presenceDesc: "Situé à Omnisport Rue Foé à Yaoundé, 3M Consulting bénéficie d'une proximité immédiate avec les ministères, directions générales, greffes et chambres consulaires.",
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
      badge: "Rejoignez-Nous",
      heading: "COMMENT NOUS REJOINDRE ?",
      intro: "3M Consulting vous propose des solutions telles que 3mconsulting.digital où nous accueillons les clients et recrutons des consultants en permanence dans divers domaines. Rejoignez-nous dès maintenant !",
      client: {
        tag: "Espace Client",
        title: "Vous êtes Client ?",
        description: "Bénéficiez d'une assistance professionnelle pour créer votre entreprise, monter vos dossiers fiscaux, trouver vos locaux ou remporter des marchés.",
        btn: "S'enregistrer en tant que Client",
        perks: [
          "Prise en charge personnalisée par nos experts",
          "Orientation vers les démarches administratives appropriées",
          "Tarification transparente et respect rigoureux des délais",
        ],
      },
      consultant: {
        tag: "Espace Consultant",
        title: "Vous êtes Consultant ?",
        description: "Rejoignez notre réseau multidisciplinaire d'experts et participez à des missions d'accompagnement stimulantes au Cameroun.",
        btn: "S'enregistrer en tant que Consultant",
        perks: [
          "Missions régulières auprès d'entreprises clientes",
          "Synergie avec une communauté d'experts pluridisciplinaires",
          "Valorisation de vos compétences en finance, droit et gestion",
        ],
      },
      digitalPlatformNote: "La plateforme 3mconsulting.digital accueille clients et consultants en continu à travers un parcours simplifié en 4 étapes.",
      digitalPlatformBtn: "Accéder au portail 3mconsulting.digital ↗",
    },
    easiestWay: {
      badge: "La manière la plus simple de commencer",
      heading: "Rejoignez-nous en suivant ces 4 étapes :",
      subheading: "Une démarche fluide, rapide et assistée pour démarrer sans attendre.",
      hoursNote: "Nos horaires : 3M Consulting est ouvert de lundi à vendredi de 7h30 à 17h30 et le samedi de 8h à 14h30.",
      joinTitle: "COMMENT NOUS REJOINDRE ? 3M consulting, vous propose des solutions telles que 3mconsulting.digital où nous accueillons les clients et recrutons des consultants en permanence dans diverses domaines. Alors, rejoignez nous en suivant ces quatre étapes :",
      steps: [
        {
          stepNumber: "1",
          action: "S'enregistrer",
          detail: "en tant que Consultant ou Client",
        },
        {
          stepNumber: "2",
          action: "Choisir sa catégorie",
          detail: "selon votre secteur d'activité",
        },
        {
          stepNumber: "3",
          action: "Choisir un service",
          detail: "parmi nos expertises disponibles",
        },
        {
          stepNumber: "4",
          action: "Suivre la procédure",
          detail: "avec l'assistance de nos experts",
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
        phones: ["+237 698 66 87 61", "+237 673 84 18 21"],
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
        socialWhatsAppUrl: "https://wa.me/237698668761",
        socialTelegramUrl: "https://t.me/+237698668761",
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
        title: "3M Consulting | Business Consulting in Yaoundé, Cameroon",
        desc: "3M Consulting in Yaoundé: company formation, office sourcing, licensing, tax declarations, CNPS, DSF compilation, and public tender DAO preparation.",
      },
      services: {
        title: "Our Practice Areas | 3M Consulting SARL",
        desc: "Explore our 7 key areas of excellence: business incorporation, office fitting, licensing, tax & CNPS compliance, DSF financial reports, and tender DAO preparation.",
      },
      about: {
        title: "About Us | 3M Consulting & CEO M. Monroi Maya Michael",
        desc: "Who are we? Discover 3M Consulting's mission, background, and the entrepreneurial vision of our CEO M. Monroi Maya Michael in Cameroon.",
      },
      join: {
        title: "Join Us | Clients & Consultants at 3mconsulting.digital",
        desc: "Join 3M Consulting as a client or consultant through our 4-step streamlined onboarding on 3mconsulting.digital.",
      },
      contact: {
        title: "Contact Us | 3M Consulting Yaoundé",
        desc: "Reach 3M Consulting at Omnisport Rue Foé, Yaoundé. Phone: +237 698 66 87 61 / 6 73 84 18 21. Email: contact@3mconsultingsarl.com.",
      },
      privacy: {
        title: "Privacy Policy | 3M Consulting SARL",
        desc: "Legal notices and data privacy policy of 3M Consulting SARL in Cameroon.",
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
      ctaAssistance: "Request Assistance ↗",
      languageToggle: "FR",
      admin: "Admin Space",
      callUs: "Direct call:",
    },
    hero: {
      badge: "Business Consulting & Corporate Advisory Firm",
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
      badge: "What We Offer",
      heading: "Intermediation and Corporate Assistance of Excellence",
      intro: "At 3M Consulting, intermediation takes on a whole new dimension. An advisory service tailored to your highest expectations. For all your corporate needs, 3M Consulting turns your barriers into stepping stones toward entrepreneurial success.",
      title: "Our Practice Areas of Excellence",
      viewAllCta: "Explore our 7 practice areas in detail ↗",
      services: [
        {
          id: "creation-entreprise",
          title: "Business Formation / Branch / Subsidiary",
          summary: "3M Consulting provides comprehensive assistance for setting up companies, branches, or subsidiaries, helping clients structure operations and comply with legal and regulatory mandates.",
          description: "Full end-to-end guidance covering legal structure selection, statutory drafting, and official registration for companies, subsidiaries, or branches in Cameroon under OHADA uniform acts.",
          deliverables: [
            "Drafting articles of association and constitutional acts",
            "RCCM commercial court registration",
            "Taxpayer card and certificate of registration issuance",
            "Tax folder initialization and start-up clearances",
          ],
          documentsRequired: ["IDs of directors & shareholders", "Location map of registered office", "Commercial lease agreement"],
          badge: "Formation & Subsidiaries",
          iconName: "Building2",
        },
        {
          id: "recherche-locaux",
          title: "Office Sourcing & Premises Fitting",
          summary: "The firm assists clients in locating premises tailored to their operational needs and fitting them out for efficient and functional business operations.",
          description: "Targeted location scouting in prime commercial districts of Yaoundé, lease negotiations, ergonomic spatial layouts, and turn-key workplace installation.",
          deliverables: [
            "Curated selection of compliant commercial spaces",
            "Lease contract vetting and legal protection",
            "Interior setup coordination and utility connections",
            "Immediate operational handover",
          ],
          documentsRequired: ["Premises specification sheet", "Desired geographical area", "Estimated budget"],
          badge: "Offices & Premises",
          iconName: "MapPin",
        },
        {
          id: "agrements-licences",
          title: "Support in Securing Regulatory Licenses and Approvals",
          summary: "3M Consulting guides companies through the necessary procedures to obtain mandatory licenses and permits required to operate legally under sector regulations.",
          description: "Systematic compilation of ministerial authorization files, commercial operating licenses, and special sector certifications across Cameroon.",
          deliverables: [
            "Regulatory compliance audit for specific business sectors",
            "Full compilation of technical and administrative applications",
            "Proactive engagement with ministries and supervisory agencies",
            "Issuance and receipt of valid operating authorizations",
          ],
          documentsRequired: ["Executive diplomas and professional qualifications", "Technical operational brief", "Updated tax clearance certificate"],
          badge: "Licenses & Approvals",
          iconName: "ShieldCheck",
        },
        {
          id: "fiscalite-cnps",
          title: "Tax Declarations and CNPS Social Security Compliance",
          summary: "The firm handles tax and social compliance procedures, assisting businesses in meeting their obligations regarding tax filings and CNPS social security contributions.",
          description: "Continuous compliance support: monthly VAT declarations, corporate tax prepayments, digital DGI filings, CNPS employer registration, and social contributions management.",
          deliverables: [
            "Preparation and submission of monthly tax declarations",
            "Management of nominal social declarations and CNPS contributions",
            "Issuance of Tax Clearance Certificates (ARF) and CNPS debt-free certificates",
            "Technical representation during routine tax or social audits",
          ],
          documentsRequired: ["Monthly revenue statements", "Payroll registers / staff listings", "Previous tax filing records"],
          badge: "Tax & CNPS",
          iconName: "Receipt",
        },
        {
          id: "montage-dsf",
          title: "Support in Compiling DSF Statistical & Tax Returns",
          summary: "3M Consulting provides hands-on support in compiling and presenting Statistical and Tax Returns (DSF) and financial aid packages for companies seeking financing or grant support.",
          description: "Meticulous preparation of revised OHADA annual financial statements, verification of appendix schedules, balance sheet consistency, and presentation to lending partners.",
          deliverables: [
            "Consistency audit of trial balances and closing entries",
            "Compilation of complete OHADA financial statements and DSF tables",
            "Certified electronic filing with the tax administration",
            "Financial dossier preparation for banks and development funds",
          ],
          documentsRequired: ["Final general ledger and trial balance", "Bank statements and reconciliation sheets", "Fixed asset depreciation schedules"],
          badge: "DSF & Financing",
          iconName: "FileSpreadsheet",
        },
        {
          id: "montage-dao",
          title: "Support in Formulating Tender Documents (DAO) for Projects & Programs",
          summary: "3M Consulting offers drafting and formulation support for Tender Documents (DAO) dedicated to projects, development programs, or corporate institutions, ensuring quality, compliance, and strategic relevance.",
          description: "Specialized drafting services for contracting authorities and institutional programs: terms of reference, bidding guidelines, qualification criteria, and specific contract clauses.",
          deliverables: [
            "Methodological drafting of Terms of Reference (ToR)",
            "Drafting of Instructions to Bidders and Specific Tender Rules (RPAO)",
            "Definition of evaluation matrices and scoring guidelines",
            "Full compliance with national procurement codes and multilateral donor standards",
          ],
          documentsRequired: ["Program / project overview brief", "Approved budget envelope", "Implementation timeframe"],
          badge: "Tender Formulation (DAO)",
          iconName: "FileCheck",
        },
        {
          id: "marches-publics",
          title: "Bidding File Formulation for Public Procurement and Private Enterprises",
          summary: "The firm offers expert guidance in preparing tender bids for private companies bidding on public contracts, covering documentation completeness, regulatory compliance, and rigorous presentation to maximize winning odds.",
          description: "Rigorous preparation of your tender submissions: gathering qualifying administrative records, crafting winning technical methodologies, and structuring financial bid breakdowns.",
          deliverables: [
            "Collection and ordering of eliminatory administrative records (tax clearances, CNPS, bid bonds)",
            "Strategic structure of technical proposals and work plans",
            "Detailed pricing schedule and bills of quantities review",
            "Tamper-proof sealed packaging strictly compliant with tender rules",
          ],
          documentsRequired: ["Tender dossier (DAO / RPAO) guidelines", "Corporate past performance references", "Tender bid bond from approved bank"],
          badge: "Public Procurement",
          iconName: "TrendingUp",
        },
      ],
    },
    howWeWork: {
      badge: "How We Work",
      heading: "Tailored Guidance Every Step of the Way",
      mandelaQuote: "“We do not know everything, but we know where all knowledge is found.”",
      mandelaAuthor: "N. Mandela",
      intro: "At 3M Consulting, we connect you with dedicated experts who support you throughout your procedures according to your initiated needs. We possess multidisciplinary knowledge to assist you from entity creation through administrative and tax filing across your entrepreneurial path. Dedicated experts will be assigned to help you scout potential investors for company expansion, mergers, or business acquisitions.",
      steps: [
        {
          number: "01",
          name: "Listening",
          title: "Listening & Scoping",
          description: "We carefully define your exact needs, corporate objectives, and operational timelines.",
        },
        {
          number: "02",
          name: "Analysis",
          title: "Regulatory Analysis",
          description: "We structure the administrative pathway, compile required documentation, and anticipate regulatory checks.",
        },
        {
          number: "03",
          name: "Execution",
          title: "Operational Support",
          description: "Our specialists prepare, verify, and submit your dossiers directly with competent authorities.",
        },
        {
          number: "04",
          name: "Growth",
          title: "Partners & Investors",
          description: "We remain your ongoing partner, connecting you with investors and strategic growth opportunities.",
        },
      ],
    },
    whyChooseUs: {
      badge: "Why Choose Us?",
      heading: "Turning Barriers into Stepping Stones",
      tagline: "Proven expertise, continuous responsiveness, and deep grounding in the Cameroonian market.",
      pillars: [
        {
          title: "Reinvented Intermediation",
          description: "A premium assistance service that turns every administrative obstacle into an entrepreneurial stepping stone.",
          iconName: "ShieldCheck",
        },
        {
          title: "Dedicated Specialists",
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
      heading: "About 3M Consulting",
      lead: "We are 3M Consulting and we offer a comprehensive range of professional services to meet your corporate needs. We are committed to delivering every service with a smile and to your utmost satisfaction.",
      missionTitle: "Our Mission & Commitment",
      missionDesc: "3M Consulting stands as a premier advisory firm specialized in core fields related to corporate formation, structuring, and business development in Cameroon. Our purpose is to turn your barriers into stepping stones toward sustainable entrepreneurial success.",
      missionDetails: "Leveraging in-depth command of local frameworks (OHADA, Tax Code, CNPS, Public Procurement Code), our team simplifies complex workflows so you can focus entirely on running your business.",
      ceoTitle: "CEO & Founder",
      ceoName: "M. MONROI MAYA MICHAEL",
      ceoBio: "From his training in accounting to public finance, this dynamic entrepreneur decided to make his ultimate dream—3M CONSULTING—a living reality. Born in the 1990s and raised in an entrepreneurial environment, his ambition to lead was nurtured early. Holding qualifications in banking and finance, accounting, and taxation, he further expanded his expertise in public finance. After over 5 years of hands-on experience managing complex projects, he launched 3M CONSULTING. Visionary, youthful, and pragmatic, his vision is to provide high-quality services across all fields and levels, sparking the creation of the 3mconsulting.digital application designed to provide one-click access to top-tier advisory. As a partner and consultant in several enterprises, he puts his proven expertise at your service for an elevated entrepreneurial experience.",
      presenceTitle: "Headquarters in Yaoundé",
      presenceDesc: "Located at Omnisport Rue Foé in Yaoundé, 3M Consulting enjoys immediate proximity to key government ministries, court registries, and commercial chambers.",
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
      badge: "Join Us",
      heading: "HOW TO JOIN US?",
      intro: "3M Consulting offers digital solutions such as 3mconsulting.digital where we welcome clients and continuously recruit consultants across multiple fields. Join us today!",
      client: {
        tag: "Client Space",
        title: "Are you a Client?",
        description: "Receive high-level assistance to incorporate your company, manage tax obligations, source premises, or win public tenders.",
        btn: "Register as a Client",
        perks: [
          "Personalized onboarding with our dedicated consultants",
          "Direct guidance toward required administrative procedures",
          "Transparent fixed pricing and predictable project delivery",
        ],
      },
      consultant: {
        tag: "Consultant Space",
        title: "Are you a Consultant?",
        description: "Join our multidisciplinary advisory network and participate in rewarding corporate consulting missions across Cameroon.",
        btn: "Register as a Consultant",
        perks: [
          "Consistent advisory opportunities with corporate clients",
          "Collaboration with a dynamic community of experts",
          "Showcase your talents in finance, legal, and operational strategy",
        ],
      },
      digitalPlatformNote: "The 3mconsulting.digital portal welcomes clients and consultants continuously through a straightforward 4-step onboarding journey.",
      digitalPlatformBtn: "Access 3mconsulting.digital Portal ↗",
    },
    easiestWay: {
      badge: "The Easiest Way to Get Started",
      heading: "Join Us by Following These 4 Steps:",
      subheading: "A smooth, rapid, and assisted onboarding process to launch without delay.",
      hoursNote: "Our Business Hours: 3M Consulting is open Monday to Friday from 7:30 AM to 5:30 PM, and Saturday from 8:00 AM to 2:30 PM.",
      joinTitle: "HOW TO JOIN US? 3M Consulting provides solutions such as 3mconsulting.digital where we welcome clients and recruit consultants continuously in various fields. Join us in 4 easy steps:",
      steps: [
        {
          stepNumber: "1",
          action: "Register",
          detail: "as a Consultant or Client",
        },
        {
          stepNumber: "2",
          action: "Select Category",
          detail: "according to your industry sector",
        },
        {
          stepNumber: "3",
          action: "Choose Service",
          detail: "from our available practice areas",
        },
        {
          stepNumber: "4",
          action: "Follow Procedure",
          detail: "with guidance from our specialists",
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
        phones: ["+237 698 66 87 61", "+237 673 84 18 21"],
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
        socialWhatsAppUrl: "https://wa.me/237698668761",
        socialTelegramUrl: "https://t.me/+237698668761",
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
