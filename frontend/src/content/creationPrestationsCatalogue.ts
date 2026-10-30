export interface CatalogueItem {
  id: string;
  number?: number;
  title: string;
  subtitle?: string;
  badge?: string;
  items: string[];
}

export interface CatalogueCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: {
    title: string;
    description?: string;
    details?: string[];
  }[];
}

export interface AssistanceProgramStage {
  step: string;
  title: string;
  description: string;
  badge: string;
}

export interface AssistanceProgramFormat {
  id: string;
  title: string;
  badge: string;
  description: string;
}

export interface AssistanceProgramData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  interviewTitle: string;
  interviewDuration: string;
  interviewPoints: string[];
  stages: AssistanceProgramStage[];
  formats: AssistanceProgramFormat[];
  ctaButton: string;
  guaranteeText: string;
}

export interface EnterpriseCreationCatalogueData {
  title: string;
  documentDate: string;
  author: string;
  authorRole: string;
  badge: string;
  intro: string;
  mainServicesTitle: string;
  mainServicesSubtitle: string;
  additionalServicesTitle: string;
  additionalServicesSubtitle: string;
  valiseHighlightTitle: string;
  valiseHighlightDescription: string;
  ctaRequest: string;
  ctaDownloadOrShare: string;
  assistanceProgram: AssistanceProgramData;
  mainServices: CatalogueItem[];
  additionalCategories: CatalogueCategory[];
}

export const CREATION_CATALOGUE_FR: EnterpriseCreationCatalogueData = {
  title: "Catalogue des Prestations – Création d'Entreprise",
  documentDate: "30 Octobre 2026",
  author: "@MAYA MICHAEL",
  authorRole: "Fondateur & Directeur Général, 3M Consulting SARL",
  badge: "Catalogue Officiel & Tarification Préférentielle",
  intro: "Consultez le référentiel exhaustif des prestations assurées par 3M Consulting pour la constitution légale, la mise en service opérationnelle et le suivi stratégique de votre entreprise au Cameroun et en zone CEMAC.",
  mainServicesTitle: "Prestations Principales Clés en Main",
  mainServicesSubtitle: "Le parcours complet d'immatriculation, d'identité institutionnelle et d'opérationnalisation en 6 volets majeurs.",
  additionalServicesTitle: "Prestations Additionnelles & Accompagnement Stratégique",
  additionalServicesSubtitle: "Des solutions sur mesure pour la préparation, le démarrage, l'implantation internationale, la vie sociale et les restructurations.",
  valiseHighlightTitle: "La Valise d'Entreprise 3M Consulting",
  valiseHighlightDescription: "À la clôture de la mission, chaque chef d'entreprise reçoit sa mallette exécutive sécurisée regroupant l'ensemble des originaux légaux, les cachets officiels, les supports de communication et le guide fiscal.",
  ctaRequest: "Solliciter cette prestation",
  ctaDownloadOrShare: "Obtenir le catalogue chiffré",
  assistanceProgram: {
    badge: "Programme d'Assistance & Entretien d'Accueil",
    title: "Le Programme d'Accompagnement 3M : De l'Entretien Diagnostic au Démarrage",
    subtitle: "Chaque projet d'entreprise fait l'objet d'un entretien préalable approfondi pour éliminer tout risque juridique et sécuriser vos investissements.",
    description: "Parce que créer une entreprise ne se résume pas à remplir des formulaires, notre équipe vous prend en charge à travers un protocole d'assistance structuré en 3 étapes clés, animé par des juristes d'affaires et experts-comptables.",
    interviewTitle: "L'Entretien Stratégique Diagnostic & Cadrage (30 à 45 min)",
    interviewDuration: "30 - 45 min",
    interviewPoints: [
      "Audit de viabilité et cadrage de votre projet d'activité au Cameroun.",
      "Arbitrage sur mesure de la forme sociétaire (SARL, SAS, SA, Ets, GIE) selon vos associés et votre capital.",
      "Diagnostic fiscal personnalisé : choix du régime d'imposition le plus avantageux et simulation des charges.",
      "Identification des agréments sectoriels, licences et pièces administratives obligatoires.",
      "Remise d'une feuille de route claire avec calendrier de réalisation sous 72h."
    ],
    stages: [
      {
        step: "01",
        badge: "Cadrage Initial",
        title: "Entretien Diagnostic & Orientation",
        description: "Échange individuel en présentiel à Yaoundé ou en visioconférence pour analyser votre besoin, vos objectifs et définir la stratégie juridique."
      },
      {
        step: "02",
        badge: "Pilotage Dédié",
        title: "Programme d'Assistance Clés en Main",
        description: "Votre conseiller senior dédié prend en charge l'intégralité des formalités (CFCE, Greffe RCCM, DGI, CNPS, Notaire, Banque) sans aucune démarche fastidieuse pour vous."
      },
      {
        step: "03",
        badge: "Remise & Lancement",
        title: "Session de Remise & Valise d'Entreprise",
        description: "Séance solennelle de restitution avec remise de votre Valise d'Entreprise complète, formation aux obligations fiscales mensuelles et lancement opérationnel."
      }
    ],
    formats: [
      {
        id: "office",
        title: "Entretien en Présentiel",
        badge: "Siège Yaoundé",
        description: "Au cabinet 3M Consulting, Omnisport Rue Foé, dans un cadre confidentiel et professionnel."
      },
      {
        id: "visio",
        title: "Entretien en Visioconférence",
        badge: "Teams / Meet / Zoom",
        description: "Idéal pour les membres de la diaspora, les investisseurs internationaux et les créateurs hors Yaoundé."
      },
      {
        id: "call",
        title: "Entretien Téléphonique & WhatsApp",
        badge: "Direct & Immédiat",
        description: "Échange interactif immédiat au +237 673 84 18 21 avec un conseiller disponible sans attendre."
      }
    ],
    ctaButton: "Réserver mon Entretien Diagnostic",
    guaranteeText: "Entretien confidentiel, sans engagement et directement orienté résultats."
  },
  mainServices: [
    {
      id: "constitution-legale",
      number: 1,
      title: "Création d'entreprise",
      subtitle: "Constitution juridique & formalités administratives intégrales",
      badge: "Fondation Légale",
      items: [
        "Conseil sur le choix de la forme juridique adaptée : Établissement (Ets), SARL, SARLU, SAS, SASU, SA, GIE.",
        "Vérification rigoureuse de la disponibilité du nom commercial auprès du greffe et de l'OAPI.",
        "Rédaction sur mesure des statuts sociaux conformes à l'OHADA et du procès-verbal de nomination des dirigeants.",
        "Établissement de la Déclaration de Souscription et de Versement du capital (DSV).",
        "Liaison et coordination avec le notaire lorsque l'acte notarié est requis par la loi.",
        "Dépôt du dossier complet au Centre de Formalités de Création d'Entreprises (CFCE) et immatriculation au RCCM.",
        "Obtention immédiate du Numéro d'Identifiant Unique (NIU) et de la carte de contribuable sécurisée.",
        "Publication officielle de l'avis de constitution dans un journal d'annonces légales habilité (JAL)."
      ]
    },
    {
      id: "immatriculation-cnps",
      number: 2,
      title: "Immatriculation CNPS",
      subtitle: "Sécurisation sociale de l'employeur et des collaborateurs",
      badge: "Conformité Sociale",
      items: [
        "Constitution et dépôt du dossier d'immatriculation employeur auprès du centre de prévoyance sociale compétent.",
        "Obtention et notification du numéro officiel employeur CNPS.",
        "Déclaration légale d'embauche des premiers salariés et constitution du fichier social initial.",
        "Information complète du client sur les taux de cotisations applicables et le calendrier strict des échéances de télédéclaration."
      ]
    },
    {
      id: "compte-bancaire",
      number: 3,
      title: "Ouverture de compte bancaire",
      subtitle: "Accompagnement bancaire & bancarisation professionnelle",
      badge: "Finances & Dépôt",
      items: [
        "Orientation stratégique vers l'institution bancaire la plus adaptée au secteur et au profil de l'entreprise.",
        "Préparation méticuleuse du dossier d'ouverture : statuts certifiés, RCCM, NIU, plans de localisation et pièces d'identité des dirigeants.",
        "Accompagnement direct pour le dépôt du capital social et obtention sans délai de l'attestation de dépôt de capital.",
        "Suivi relationnel avec la direction de l'agence bancaire jusqu'à l'activation définitive du compte et délivrance du RIB."
      ]
    },
    {
      id: "charte-graphique",
      number: 4,
      title: "Charte graphique avec papier en-tête",
      subtitle: "Identité de marque & crédibilité commerciale",
      badge: "Image de Marque",
      items: [
        "Conception professionnelle du logo vectoriel (fichiers sources HD, déclinaisons web & print).",
        "Définition de la charte de couleurs officielles (codes HEX, CMJN, Pantone) et choix des typographies officielles.",
        "Création du papier en-tête institutionnel aux normes légales avec mention du RCCM, du NIU, du capital social et de l'adresse du siège.",
        "Design et impression des cartes de visite professionnelles haut de gamme pour les dirigeants.",
        "Conception des modèles bureautiques éditables : factures proforma, factures définitives, devis et bons de commande.",
        "Configuration de la signature électronique normalisée pour les boîtes de messagerie et emails professionnels."
      ]
    },
    {
      id: "cachets-officiels",
      number: 5,
      title: "Cachets d'entreprise",
      subtitle: "Outils d'authentification et de validation légale",
      badge: "Authentification",
      items: [
        "Conception et gravure du Cachet Rond officiel de la société (sceau de représentation morale).",
        "Conception et gravure du Cachet Rectangulaire avec dénomination sociale, forme juridique, adresse, RCCM et NIU.",
        "Fourniture du cachet dateur professionnel, ainsi que du pack de cachets fonctionnels : « Payé », « Reçu » et « Copie conforme ».",
        "Tampon personnalisé de signature du gérant / directeur général (disponible en option)."
      ]
    },
    {
      id: "valise-entreprise",
      number: 6,
      title: "Valise d'entreprise",
      subtitle: "Pack exécutif de clôture remis en main propre",
      badge: "Livrable Signature",
      items: [
        "Les statuts enregistrés et certifiés conformes, accompagnés du PV officiel de nomination des dirigeants.",
        "L'extrait original du RCCM et l'attestation formelle d'immatriculation au greffe du tribunal.",
        "La carte de contribuable officielle portant le Numéro d'Identifiant Unique (NIU) délivrée par la DGI.",
        "L'attestation d'immatriculation employeur délivrée par la CNPS.",
        "L'attestation officielle d'ouverture de compte bancaire professionnel.",
        "Le coffret complet des cachets officiels (rond, rectangulaire, dateur, mentions comptables).",
        "Les supports physiques et numériques de la charte graphique : rames de papier en-tête imprimé, cartes de visite, modèles bureautiques et clé USB sécurisée contenant tous les fichiers sources haute définition.",
        "Le Guide méthodologique exclusif 3M Consulting sur les obligations fiscales, comptables et sociales en République du Cameroun."
      ]
    }
  ],
  additionalCategories: [
    {
      id: "conseil-preparation",
      title: "Conseil et préparation",
      description: "Études en amont, cadrage stratégique, structuration financière et protection juridique préventive.",
      iconName: "Compass",
      items: [
        {
          title: "Diagnostic du projet et étude de faisabilité",
          description: "Analyse préalable de viabilité technique, commerciale, réglementaire et concurrentielle de votre activité au Cameroun."
        },
        {
          title: "Business plan et prévisionnel financier",
          description: "Modélisation financière rigoureuse sur 3 à 5 ans, compte de résultat prévisionnel, plan de trésorerie et seuil de rentabilité."
        },
        {
          title: "Conseil fiscal sur le choix du régime d'imposition",
          description: "Arbitrage stratégique entre Régime de l'Impôt Libératoire, Régime Simplifié ou Régime du Réel selon votre modèle d'affaires."
        },
        {
          title: "Dépôt de marque à l'OAPI",
          description: "Protection de votre dénomination, marque de produits/services, nom commercial et logo auprès de l'Organisation Africaine de la Propriété Intellectuelle (17 États membres)."
        },
        {
          title: "Obtention des agréments et licences sectorielles",
          description: "Montage technique et soutenance de dossiers pour secteurs régulés (transport, mines, santé, import-export, sécurité, agroalimentaire, télécoms)."
        },
        {
          title: "Pacte d'associés",
          description: "Rédaction d'accords d'actionnaires confidentiels régissant la gouvernance, les clauses d'agrément, de préemption, de sortie conjointe et de non-concurrence."
        }
      ]
    },
    {
      id: "demarrage",
      title: "Démarrage opérationnel",
      description: "Mise en place des infrastructures fiscales, comptables, RH et administratives dès le premier jour.",
      iconName: "Rocket",
      items: [
        {
          title: "Domiciliation d'entreprise",
          description: "Mise à disposition d'une adresse de siège social prestigieuse à Yaoundé (Omnisport) avec gestion et numérisation du courrier."
        },
        {
          title: "Mise en place de la comptabilité selon le SYSCOHADA",
          description: "Déploiement du plan comptable général SYSCOHADA révisé, paramétrage logiciel et organisation des procédures de classement des pièces."
        },
        {
          title: "Calendrier fiscal et première déclaration",
          description: "Établissement du planning annuel de conformité DGI/CNPS et prise en charge intégrale de votre toute première télédéclaration d'impôts."
        },
        {
          title: "Attestation de conformité fiscale et plan de localisation",
          description: "Élaboration du plan de localisation visé par les impôts, constat du centre divisionnaire des impôts (CDI) et obtention de l'attestation de régularité."
        },
        {
          title: "Rédaction des contrats de travail",
          description: "Rédaction de contrats conformes au Code du travail camerounais (CDI, CDD, contrats de stage, temps partiel) et clauses de confidentialité."
        },
        {
          title: "Constitution du dossier administratif pour les marchés publics",
          description: "Montage du classeur administratif complet pré-qualifié pour soumissionner aux appels d'offres publics et privés (ARMP, Ministères, Bailleurs)."
        }
      ]
    },
    {
      id: "implantation",
      title: "Implantation internationale",
      description: "Accompagnement des investisseurs étrangers, multinationales et membres de la diaspora camerounaise.",
      iconName: "Globe",
      items: [
        {
          title: "Création de succursale pour une société étrangère",
          description: "Enregistrement d'établissement secondaire sans personnalité morale distincte au greffe RCCM selon l'Acte Uniforme OHADA."
        },
        {
          title: "Création de filiale",
          description: "Constitution d'une société de droit camerounais avec capital autonome détenue majoritairement par un groupe international."
        },
        {
          title: "Ouverture de bureau de liaison ou de représentation",
          description: "Installation d'une antenne de prospection et de veille commerciale sans activité marchande directe."
        },
        {
          title: "Accompagnement des investisseurs étrangers",
          description: "Conseil en investissement direct étranger (IDE), formalités de change BEAC, visas d'affaires et régimes incitatifs de la loi de promotion des investissements."
        }
      ]
    },
    {
      id: "vie-sociale",
      title: "Vie sociale & Gouvernance",
      description: "Secrétariat juridique permanent, évolutions statutaires et modifications au registre du commerce.",
      iconName: "Users",
      items: [
        {
          title: "Transfert de siège",
          description: "Formalisation juridique, modification des statuts, publicité légale et mise à jour de l'immatriculation au RCCM."
        },
        {
          title: "Augmentation ou réduction du capital",
          description: "Réalisation des opérations sur capital social (apports nouveaux, incorporation de réserves ou apurement des pertes) avec enregistrement fiscal."
        },
        {
          title: "Cession de parts ou d'actions",
          description: "Rédaction des actes de cession, respect du droit de préemption, purge de l'enregistrement fiscal et notification au greffe commercial."
        },
        {
          title: "Changement de dirigeant, de dénomination ou d'objet social",
          description: "Procès-verbal de changement de gérant ou directeur général, extension de l'objet d'activité et mise en conformité des registres."
        },
        {
          title: "Transformation de la société",
          description: "Passage d'une forme juridique à une autre (ex: SARL en SAS ou SA, Ets en SARLU) sans rupture de la personnalité morale."
        },
        {
          title: "Tenue des assemblées générales",
          description: "Convocation, préparation des rapports de gestion, rédaction des procès-verbaux d'AGO (approbation des comptes annuels) et d'AGE."
        }
      ]
    },
    {
      id: "restructuration-fin",
      title: "Restructuration et fin d'activité",
      description: "Opérations juridiques complexes de fusion, mise en veille et radiation définitive de la société.",
      iconName: "Layers",
      items: [
        {
          title: "Fusion, scission, apport partiel d'actifs",
          description: "Structuration et exécution d'opérations de concentration d'entreprises, traités de fusion et audits de transmission patrimoniale."
        },
        {
          title: "Mise en sommeil",
          description: "Gel temporaire légal de l'activité commerciale auprès du greffe et des services fiscaux pour préserver la structure sans pénalités."
        },
        {
          title: "Dissolution, liquidation et radiation du RCCM",
          description: "Désignation du liquidateur, apurement du passif, clôture des comptes de liquidation, quitus fiscal de cessation et radiation définitive au greffe."
        }
      ]
    }
  ]
};

export const CREATION_CATALOGUE_EN: EnterpriseCreationCatalogueData = {
  title: "Service Catalogue – Business Incorporation & Corporate Setup",
  documentDate: "October 30, 2026",
  author: "@MAYA MICHAEL",
  authorRole: "Founder & Managing Director, 3M Consulting SARL",
  badge: "Official Catalogue & Turnkey Formation Schedule",
  intro: "Explore the comprehensive framework of services provided by 3M Consulting for company incorporation, commercial launch, and corporate governance in Cameroon and the CEMAC region.",
  mainServicesTitle: "Core Turnkey Incorporation Packages",
  mainServicesSubtitle: "The complete 6-stage journey from legal formation to corporate identity and fully operational readiness.",
  additionalServicesTitle: "Additional & Strategic Corporate Services",
  additionalServicesSubtitle: "Bespoke solutions for feasibility, startup operations, foreign investment, corporate secretarial and restructuring.",
  valiseHighlightTitle: "The 3M Executive Corporate Briefcase",
  valiseHighlightDescription: "Upon assignment completion, every executive receives our signature secured corporate briefcase containing all original certificates, official stamps, corporate stationery and the tax compliance handbook.",
  ctaRequest: "Request This Service",
  ctaDownloadOrShare: "Request Full Priced Catalogue",
  assistanceProgram: {
    badge: "Assistance Program & Intake Interview",
    title: "The 3M Corporate Assistance Program: From Intake Diagnostic to Launch",
    subtitle: "Every business setup begins with a comprehensive diagnostic interview to de-risk legal choices and safeguard your investment.",
    description: "Incorporating in Cameroon goes beyond paperwork. Our structured assistance program provides high-touch guidance led by senior corporate attorneys and tax advisors.",
    interviewTitle: "Strategic Intake Diagnostic Interview (30 to 45 mins)",
    interviewDuration: "30 - 45 min",
    interviewPoints: [
      "Project feasibility assessment and operating scope review in Cameroon.",
      "Optimal legal entity selection (LLC/SARL, Simplified Joint-Stock/SAS, Corporation/SA, Sole Prop).",
      "Personalized tax regime scoping: selecting the lowest tax-friction scheme and estimating obligations.",
      "Mapping required sector licenses, regulatory permits, and mandatory paperwork.",
      "Clear delivery roadmap committing to a 72-hour turnkey incorporation."
    ],
    stages: [
      {
        step: "01",
        badge: "Intake Scoping",
        title: "Diagnostic Intake Interview",
        description: "One-on-one session at our Yaoundé headquarters or via video call to evaluate your goals, shareholders, and structure."
      },
      {
        step: "02",
        badge: "Hands-Off Execution",
        title: "Turnkey Assistance Program",
        description: "Your dedicated senior corporate advisor handles all procedures (CFCE, RCCM Court Registry, Tax Office, CNPS, Notary, Bank) on your behalf."
      },
      {
        step: "03",
        badge: "Handover & Readiness",
        title: "Executive Handover & Briefcase Delivery",
        description: "Formal closeout session with physical delivery of your complete Corporate Briefcase, compliance briefing, and operational readiness."
      }
    ],
    formats: [
      {
        id: "office",
        title: "In-Person Executive Interview",
        badge: "Yaoundé Headquarters",
        description: "At 3M Consulting offices, Omnisport Rue Foé, in a fully confidential boardroom setting."
      },
      {
        id: "visio",
        title: "Online Video Conference",
        badge: "Teams / Meet / Zoom",
        description: "Tailored for international investors, multinational leaders, and Cameroonian diaspora members."
      },
      {
        id: "call",
        title: "Direct Phone & WhatsApp Call",
        badge: "Instant Priority",
        description: "Immediate direct conversation at +237 673 84 18 21 with a dedicated corporate advisor."
      }
    ],
    ctaButton: "Book My Diagnostic Interview",
    guaranteeText: "Confidential, zero-commitment diagnostic oriented towards rapid, tangible execution."
  },
  mainServices: [
    {
      id: "constitution-legale",
      number: 1,
      title: "Company Formation & Registration",
      subtitle: "End-to-end legal constitution & statutory registrations",
      badge: "Legal Foundation",
      items: [
        "Advisory on selecting the optimal legal form: Sole Proprietorship (Ets), LLC (SARL/SARLU), Simplified Joint-Stock (SAS/SASU), Corporation (SA), or GIE.",
        "Official commercial name availability and reservation check with the Commercial Registry and OAPI.",
        "Tailored drafting of OHADA-compliant Articles of Association and Executive Appointment Minutes.",
        "Preparation of the Declaration of Subscription and Capital Payment (DSV).",
        "Liaison and coordination with licensed notaries whenever notarial deeds are required by law.",
        "Submission at the Business Creation Centre (CFCE) and registration with the Commercial Registry (RCCM).",
        "Immediate procurement of the Unique Taxpayer Identification Number (NIU) and official Taxpayer ID Card.",
        "Official publication of the notice of incorporation in an authorized Legal Gazette (JAL)."
      ]
    },
    {
      id: "immatriculation-cnps",
      number: 2,
      title: "CNPS Social Security Registration",
      subtitle: "Employer and workforce social security compliance",
      badge: "Social Compliance",
      items: [
        "Preparation and submission of the employer registration dossier to the competent CNPS social welfare center.",
        "Procurement and official notification of the employer CNPS affiliation number.",
        "Legal employment declaration of initial team members and baseline social record creation.",
        "Client briefing on statutory contribution rates, employer deductions, and monthly filing deadlines."
      ]
    },
    {
      id: "compte-bancaire",
      number: 3,
      title: "Corporate Bank Account Opening",
      subtitle: "Commercial banking relationship & deposit management",
      badge: "Banking & Capital",
      items: [
        "Strategic banking recommendations tailored to the company's business model and operating sector.",
        "Comprehensive compilation of account opening file: bylaws, RCCM extract, NIU, location plan, and director KYC files.",
        "Hands-on assistance for depositing statutory share capital and securing the official deposit certificate.",
        "Follow-up with bank relationship managers through to account activation and issuance of official banking details (RIB)."
      ]
    },
    {
      id: "charte-graphique",
      number: 4,
      title: "Brand Identity & Official Stationery",
      subtitle: "Corporate brand guidelines & market credibility",
      badge: "Brand Identity",
      items: [
        "Professional vector logo design (HD source files, print and digital vector formats).",
        "Definition of corporate color palette (HEX, CMYK, Pantone) and official typography standards.",
        "Compliant corporate letterhead design featuring mandatory RCCM, NIU, share capital, and registered office address.",
        "Design and premium printing of executive business cards for founders and executives.",
        "Editable business document templates: quotation, proforma invoice, commercial invoice, and purchase order.",
        "Standardized executive email signature setup for corporate email accounts."
      ]
    },
    {
      id: "cachets-officiels",
      number: 5,
      title: "Official Corporate Stamps",
      subtitle: "Document verification and legal stamping tools",
      badge: "Authentication",
      items: [
        "Design and precision engraving of the official Round Company Seal.",
        "Rectangular business stamp with trade name, legal form, address, RCCM, and NIU tax details.",
        "Heavy-duty dater stamp and functional accounting stamps: 'PAID', 'RECEIVED', and 'CERTIFIED TRUE COPY'.",
        "Custom managing director facsimile signature stamp (available on request)."
      ]
    },
    {
      id: "valise-entreprise",
      number: 6,
      title: "Corporate Briefcase (Valise d'Entreprise)",
      subtitle: "Turnkey executive handover kit delivered at mission close",
      badge: "Signature Deliverable",
      items: [
        "Original registered bylaws and executive appointment minutes.",
        "Original RCCM Commercial Registry extract and official certificate of incorporation.",
        "Official Taxpayer Identification Card (NIU) issued by the Directorate General of Taxation.",
        "Employer registration certificate issued by CNPS social security.",
        "Official confirmation certificate of corporate bank account opening.",
        "Complete set of engraved official corporate stamps in protective case.",
        "Complete brand assets: printed luxury letterhead reams, executive business cards, templates, and secured USB drive with all high-resolution source files.",
        "The exclusive 3M Consulting practical guide to corporate tax, accounting, and social obligations in Cameroon."
      ]
    }
  ],
  additionalCategories: [
    {
      id: "conseil-preparation",
      title: "Advisory & Project Preparation",
      description: "Pre-incorporation assessment, strategic scoping, financial modelling, and preventive legal shielding.",
      iconName: "Compass",
      items: [
        {
          title: "Project diagnostic & feasibility assessment",
          description: "Technical, commercial, regulatory, and competitive feasibility analysis for Cameroon and CEMAC markets."
        },
        {
          title: "Business plan & 5-year financial forecast",
          description: "Robust financial projections, profit & loss statements, cash flow budgets, and break-even calculations."
        },
        {
          title: "Tax regime selection advisory",
          description: "Strategic arbitrage between Basic Discharge Tax, Simplified Scheme, and Actual Real Tax Regime."
        },
        {
          title: "OAPI trademark registration",
          description: "Legal protection for your brand name, trademarks, trade name, and logo across all 17 OAPI member states."
        },
        {
          title: "Sector licenses & regulatory permits",
          description: "Comprehensive dossier preparation for regulated sectors (logistics, mining, health, trade, security, agro-food, telecoms)."
        },
        {
          title: "Shareholders' agreement",
          description: "Drafting confidential covenants governing governance, preemption, tag-along/drag-along rights, and non-compete clauses."
        }
      ]
    },
    {
      id: "demarrage",
      title: "Operational Startup",
      description: "Immediate deployment of fiscal, accounting, HR, and public tender infrastructures from day one.",
      iconName: "Rocket",
      items: [
        {
          title: "Business address & corporate domiciliation",
          description: "Prestigious registered head office address in Yaoundé (Omnisport) with mail management and digital scanning."
        },
        {
          title: "SYSCOHADA accounting framework setup",
          description: "Implementation of revised OHADA chart of accounts, accounting software configuration, and receipt workflow setup."
        },
        {
          title: "Tax compliance calendar & first filing",
          description: "Annual statutory deadline planning and full management of your first monthly corporate tax declaration."
        },
        {
          title: "Tax location certificate & compliance report",
          description: "Official location sketch endorsed by tax authorities, physical tax office inspection, and tax regularity clearance."
        },
        {
          title: "Employment contract drafting",
          description: "Compliant labor agreements under Cameroon Labor Code (permanent, fixed-term, internships) with IP protection clauses."
        },
        {
          title: "Administrative public procurement folder",
          description: "Turnkey, pre-qualified administrative binder ready for bidding on public tenders and multilateral project tenders."
        }
      ]
    },
    {
      id: "implantation",
      title: "Inward Investment & Expansion",
      description: "Support for foreign multinational corporations, international investors, and the Cameroonian diaspora.",
      iconName: "Globe",
      items: [
        {
          title: "Foreign company branch establishment",
          description: "Registration of foreign corporate branch without separate legal personality under OHADA Uniform Act."
        },
        {
          title: "Subsidiary incorporation",
          description: "Formation of an autonomous Cameroonian legal entity controlled by an international parent corporation."
        },
        {
          title: "Liaison or representative office setup",
          description: "Establishment of a non-commercial market observation and trade liaison outpost."
        },
        {
          title: "Foreign investor advisory",
          description: "Advisory on foreign direct investment (FDI), BEAC foreign exchange regulations, business visas, and investment charter incentives."
        }
      ]
    },
    {
      id: "vie-sociale",
      title: "Corporate Secretarial & Lifecycle",
      description: "Ongoing legal administration, statutory amendments, and commercial court registry updates.",
      iconName: "Users",
      items: [
        {
          title: "Registered office relocation",
          description: "Statutory amendments, legal gazette notices, and commercial registry updating."
        },
        {
          title: "Share capital increase or reduction",
          description: "Execution of capital adjustments (fresh cash injections, reserve capitalization, or loss absorption) with tax clearance."
        },
        {
          title: "Transfer of shares or stock",
          description: "Drafting share transfer agreements, preemption rights compliance, fiscal registration, and court registry notification."
        },
        {
          title: "Executive appointment & corporate purpose amendment",
          description: "Director change minutes, business activity extension, and legal register synchronization."
        },
        {
          title: "Company transformation",
          description: "Converting corporate legal status (e.g. LLC to Joint-Stock) without breaking corporate continuity."
        },
        {
          title: "Annual & extraordinary general meetings",
          description: "Convening notices, management report drafting, and statutory approval of financial statements minutes."
        }
      ]
    },
    {
      id: "restructuration-fin",
      title: "Restructuring & Wind-Down",
      description: "Complex structural realignments, corporate hibernation, and orderly liquidation.",
      iconName: "Layers",
      items: [
        {
          title: "Mergers, demergers & asset contributions",
          description: "Structuring and executing business consolidations, merger treaties, and asset handover audits."
        },
        {
          title: "Dormant status filing (Mise en sommeil)",
          description: "Legal temporary suspension of trading notified to court and tax authorities to preserve legal entity safely."
        },
        {
          title: "Dissolution, liquidation & RCCM deregistration",
          description: "Liquidator appointment, asset realization, creditor settlement, final accounts, and official court deregistration."
        }
      ]
    }
  ]
};
