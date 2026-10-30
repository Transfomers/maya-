import React, { useState } from 'react';
import {
  Building2,
  Briefcase,
  ShieldCheck,
  CreditCard,
  Palette,
  FileCheck2,
  FolderArchive,
  Compass,
  Rocket,
  Globe,
  Users,
  Layers,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Search,
  ChevronDown,
  ChevronUp,
  FileText,
  BadgeCheck,
  HelpCircle,
  Copy,
  Check,
  Video,
  Calendar,
  Clock,
  Target,
  UserCheck,
  MessageSquare,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  CREATION_CATALOGUE_FR,
  CREATION_CATALOGUE_EN,
  CatalogueItem,
  CatalogueCategory,
} from '../content/creationPrestationsCatalogue';

interface CompanyCreationCatalogueProps {
  onSelectService?: (serviceName: string) => void;
  compact?: boolean;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Compass,
  Rocket,
  Globe,
  Users,
  Layers,
  Building2,
  ShieldCheck,
  CreditCard,
  Palette,
  FileCheck2,
  FolderArchive,
};

export const CompanyCreationCatalogue: React.FC<CompanyCreationCatalogueProps> = ({
  onSelectService,
  compact = false,
}) => {
  const { language } = useLanguage();
  const data = language === 'fr' ? CREATION_CATALOGUE_FR : CREATION_CATALOGUE_EN;

  const [activeTab, setActiveTab] = useState<'all' | 'program' | 'main' | 'additional'>('all');
  const [activeAdditionalCategory, setActiveAdditionalCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    'constitution-legale': true,
    'valise-entreprise': true,
  });
  const [copiedNotification, setCopiedNotification] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allIds: Record<string, boolean> = {};
    data.mainServices.forEach((s) => (allIds[s.id] = true));
    data.additionalCategories.forEach((c) => (allIds[c.id] = true));
    setExpandedItems(allIds);
  };

  const collapseAll = () => {
    setExpandedItems({});
  };

  const handleAction = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    } else {
      window.location.href = `tel:+237673841821`;
    }
  };

  const handleCopySummary = () => {
    const summary = `${data.title} (${data.documentDate} - ${data.author})\n\n` +
      `PRESTATIONS PRINCIPALES :\n` +
      data.mainServices.map((s) => `${s.number}. ${s.title} : ${s.items.join(', ')}`).join('\n') +
      `\n\nPRESTATIONS ADDITIONNELLES :\n` +
      data.additionalCategories
        .map((c) => `${c.title} : ${c.items.map((i) => i.title).join(', ')}`)
        .join('\n');

    navigator.clipboard.writeText(summary);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  // Filtering
  const filteredMainServices = data.mainServices.filter((s) => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      s.title.toLowerCase().includes(term) ||
      (s.subtitle && s.subtitle.toLowerCase().includes(term)) ||
      s.items.some((item) => item.toLowerCase().includes(term))
    );
  });

  const filteredCategories = data.additionalCategories
    .filter((cat) => {
      if (activeAdditionalCategory !== 'all' && cat.id !== activeAdditionalCategory) {
        return false;
      }
      return true;
    })
    .map((cat) => {
      if (!searchTerm) return cat;
      const term = searchTerm.toLowerCase();
      const matchingItems = cat.items.filter(
        (item) =>
          item.title.toLowerCase().includes(term) ||
          (item.description && item.description.toLowerCase().includes(term))
      );
      if (cat.title.toLowerCase().includes(term) || cat.description.toLowerCase().includes(term)) {
        return cat;
      }
      return matchingItems.length > 0 ? { ...cat, items: matchingItems } : null;
    })
    .filter((cat): cat is CatalogueCategory => cat !== null);

  const getServiceIcon = (index: number) => {
    switch (index) {
      case 1:
        return Building2;
      case 2:
        return ShieldCheck;
      case 3:
        return CreditCard;
      case 4:
        return Palette;
      case 5:
        return FileCheck2;
      case 6:
        return FolderArchive;
      default:
        return Briefcase;
    }
  };

  return (
    <div className="w-full bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
      {/* Top Luxury Banner / Author Endorsement */}
      <div className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 border-b border-white/10 px-6 sm:px-10 py-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-jevelin-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-jevelin-orange/20 text-jevelin-orange border border-jevelin-orange/40">
                {data.badge}
              </span>
              <span className="text-slate-400 text-xs font-semibold">
                {data.documentDate}
              </span>
              <span className="text-slate-600">·</span>
              <span className="inline-flex items-center text-xs font-bold text-accent-300">
                <BadgeCheck className="w-4 h-4 mr-1 text-jevelin-orange" />
                {data.author}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              {data.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              {data.intro}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 transition"
              title="Copier le catalogue"
            >
              {copiedNotification ? (
                <>
                  <Check className="w-4 h-4 mr-2 text-emerald-400" />
                  <span>{language === 'fr' ? 'Copié !' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2 text-jevelin-orange" />
                  <span>{language === 'fr' ? 'Copier la synthèse' : 'Copy Summary'}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => handleAction("Catalogue des Prestations - Création d'entreprise")}
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-xs font-extrabold font-heading uppercase tracking-wider bg-jevelin-orange hover:bg-jevelin-orangeHover text-white shadow-md transition"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              <span>{data.ctaRequest}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Control Bar: Tabs + Search */}
      <div className="bg-slate-950/70 border-b border-white/10 px-6 sm:px-10 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setActiveTab('all');
              setActiveAdditionalCategory('all');
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition ${
              activeTab === 'all'
                ? 'bg-jevelin-orange text-white shadow'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            {language === 'fr' ? 'Tout le Catalogue (11 Volets)' : 'All Catalogue (11 Pillars)'}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('program')}
            className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition flex items-center ${
              activeTab === 'program'
                ? 'bg-jevelin-orange text-white shadow'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-accent-300" />
            <span>{language === 'fr' ? 'Programme & Entretien' : 'Assistance & Intake'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('main')}
            className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition ${
              activeTab === 'main'
                ? 'bg-jevelin-orange text-white shadow'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            {language === 'fr' ? '1. Prestations Principales (1 à 6)' : '1. Core Packages (1 to 6)'}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('additional')}
            className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition ${
              activeTab === 'additional'
                ? 'bg-jevelin-orange text-white shadow'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            {language === 'fr' ? '2. Prestations Additionnelles' : '2. Additional Services'}
          </button>
        </div>

        {/* Search & Collapse Controls */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={language === 'fr' ? 'Rechercher une formalité...' : 'Search requirement...'}
              className="w-full bg-slate-900 border border-white/15 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-jevelin-orange transition"
            />
          </div>

          <button
            type="button"
            onClick={expandAll}
            className="hidden sm:inline-flex text-[11px] font-semibold text-slate-400 hover:text-white"
          >
            {language === 'fr' ? 'Tout déplier' : 'Expand all'}
          </button>
          <span className="hidden sm:inline text-slate-600">/</span>
          <button
            type="button"
            onClick={collapseAll}
            className="hidden sm:inline-flex text-[11px] font-semibold text-slate-400 hover:text-white"
          >
            {language === 'fr' ? 'Replier' : 'Collapse'}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-10 space-y-12">
        {/* PROGRAMME D'ASSISTANCE & ENTRETIEN DIAGNOSTIC INITIAL */}
        {(activeTab === 'all' || activeTab === 'program') && (
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-navy-900 to-slate-950 border-2 border-jevelin-orange/50 p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8">
            <div className="absolute top-0 right-0 w-80 h-80 bg-jevelin-orange/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-white/10 pb-6 relative z-10">
              <div className="space-y-3">
                <div className="flex items-center space-x-2.5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-jevelin-orange text-slate-950 font-heading">
                    {data.assistanceProgram.badge}
                  </span>
                  <span className="text-xs text-accent-300 font-semibold flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-jevelin-orange" />
                    {data.assistanceProgram.interviewDuration}
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                  {data.assistanceProgram.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                  {data.assistanceProgram.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => handleAction("Entretien Diagnostic - Création d'Entreprise")}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-heading font-extrabold text-xs uppercase tracking-wider bg-jevelin-orange hover:bg-jevelin-orangeHover text-slate-950 shadow-lg hover:shadow-xl transition transform active:scale-95"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{data.assistanceProgram.ctaButton}</span>
                </button>
              </div>
            </div>

            {/* 3 Step Journey */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {data.assistanceProgram.stages.map((stage) => (
                <div
                  key={stage.step}
                  className="bg-slate-800/80 rounded-2xl p-6 border border-white/10 hover:border-jevelin-orange/40 transition space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-heading text-jevelin-orange">
                      {stage.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-slate-300">
                      {stage.badge}
                    </span>
                  </div>
                  <h5 className="text-base font-bold text-white font-heading">
                    {stage.title}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Diagnostic Focus Points & Meeting Formats */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 pt-2">
              {/* Left: What we audit in the interview */}
              <div className="lg:col-span-7 bg-slate-950/70 rounded-2xl p-6 border border-white/10 space-y-4">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-jevelin-orange" />
                  <h5 className="text-sm font-bold uppercase tracking-wider text-white">
                    {data.assistanceProgram.interviewTitle}
                  </h5>
                </div>
                <ul className="space-y-2.5">
                  {data.assistanceProgram.interviewPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 mr-2.5 mt-0.5 text-jevelin-orange flex-shrink-0" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Available Formats */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center space-x-2 px-1">
                  <Video className="w-4 h-4 text-accent-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    {language === 'fr' ? 'Formats de Rendez-vous Disponibles' : 'Available Interview Formats'}
                  </span>
                </div>
                {data.assistanceProgram.formats.map((fmt) => (
                  <div
                    key={fmt.id}
                    onClick={() => handleAction(`Entretien Diagnostic (${fmt.title})`)}
                    className="bg-slate-800/80 hover:bg-slate-800 rounded-xl p-4 border border-white/10 hover:border-jevelin-orange/50 transition cursor-pointer flex items-start justify-between gap-3 group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-white group-hover:text-accent-300 transition">
                          {fmt.title}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 text-slate-400">
                          {fmt.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {fmt.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-jevelin-orange group-hover:translate-x-1 transition flex-shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Guarantee */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400 pt-4 border-t border-white/10 gap-2">
              <span className="text-accent-300 font-medium flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-jevelin-orange inline" />
                {data.assistanceProgram.guaranteeText}
              </span>
              <span className="text-slate-500">
                {language === 'fr'
                  ? 'Prise en charge directe par les juristes 3M Consulting'
                  : 'Direct engagement by senior 3M Consulting attorneys'}
              </span>
            </div>
          </div>
        )}

        {/* SECTION 1: PRESTATIONS PRINCIPALES (1 à 6) */}
        {(activeTab === 'all' || activeTab === 'main') && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between border-b border-white/10 pb-4 gap-2">
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-accent-400 block font-heading">
                  PARTIE 1 · CLÉS EN MAIN
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  {data.mainServicesTitle}
                </h4>
              </div>
              <p className="text-xs text-slate-400 max-w-md">
                {data.mainServicesSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredMainServices.map((service) => {
                const isExpanded = expandedItems[service.id] ?? false;
                const Icon = getServiceIcon(service.number || 1);
                const isValise = service.id === 'valise-entreprise';

                return (
                  <div
                    key={service.id}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isValise
                        ? 'bg-gradient-to-br from-slate-900 via-navy-900 to-slate-950 border-jevelin-orange/50 shadow-xl lg:col-span-2'
                        : 'bg-slate-800/70 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Header */}
                    <div
                      onClick={() => toggleExpand(service.id)}
                      className="p-5 sm:p-6 cursor-pointer flex items-start justify-between gap-4 select-none"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center font-extrabold flex-shrink-0 ${
                            isValise
                              ? 'bg-jevelin-orange text-slate-950 shadow-lg'
                              : 'bg-white/10 text-jevelin-orange'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-black tracking-wider text-accent-400 uppercase">
                              #{service.number}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-slate-300">
                              {service.badge}
                            </span>
                          </div>
                          <h5 className="text-base sm:text-lg font-bold font-heading text-white mt-1">
                            {service.title}
                          </h5>
                          {service.subtitle && (
                            <p className="text-xs text-slate-400 mt-0.5">
                              {service.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <button
                          type="button"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/5 space-y-4">
                        {isValise && (
                          <div className="p-4 rounded-xl bg-jevelin-orange/10 border border-jevelin-orange/30 text-xs text-slate-200 flex items-start space-x-3 mb-4">
                            <Sparkles className="w-5 h-5 text-jevelin-orange flex-shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-white block font-heading text-sm">
                                {data.valiseHighlightTitle}
                              </strong>
                              <span>{data.valiseHighlightDescription}</span>
                            </div>
                          </div>
                        )}

                        <ul className="space-y-2.5">
                          {service.items.map((item, idx) => (
                            <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-300">
                              <CheckCircle2
                                className={`w-4 h-4 mr-2.5 mt-0.5 flex-shrink-0 ${
                                  isValise ? 'text-jevelin-orange' : 'text-emerald-400'
                                }`}
                              />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-3 flex items-center justify-between border-t border-white/5 text-xs">
                          <span className="text-slate-400">
                            {language === 'fr'
                              ? 'Pris en charge à 100% par l’équipe 3M'
                              : '100% Handled by 3M Consulting Experts'}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAction(`${service.number}. ${service.title}`);
                            }}
                            className="inline-flex items-center font-bold text-accent-300 hover:text-white transition"
                          >
                            <span>{data.ctaRequest}</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 2: PRESTATIONS ADDITIONNELLES */}
        {(activeTab === 'all' || activeTab === 'additional') && (
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between border-b border-white/10 pb-4 gap-2">
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-accent-400 block font-heading">
                  PARTIE 2 · CROISSANCE & STRATÉGIE
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  {data.additionalServicesTitle}
                </h4>
              </div>
              <p className="text-xs text-slate-400 max-w-md">
                {data.additionalServicesSubtitle}
              </p>
            </div>

            {/* Sub-Category Filter Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveAdditionalCategory('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                  activeAdditionalCategory === 'all'
                    ? 'bg-white text-slate-900'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {language === 'fr' ? 'Toutes les catégories' : 'All Categories'}
              </button>
              {data.additionalCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveTab('additional');
                    setActiveAdditionalCategory(cat.id);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                    activeAdditionalCategory === cat.id
                      ? 'bg-jevelin-orange text-white'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Categories List */}
            <div className="space-y-6">
              {filteredCategories.map((category) => {
                const Icon = CATEGORY_ICONS[category.iconName] || Briefcase;

                return (
                  <div
                    key={category.id}
                    className="bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-4">
                      <div className="flex items-center space-x-3.5">
                        <div className="w-10 h-10 rounded-xl bg-accent-500/15 text-jevelin-orange flex items-center justify-center font-bold">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-lg font-bold font-heading text-white">
                            {category.title}
                          </h5>
                          <p className="text-xs text-slate-400">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAction(`Prestations Additionnelles : ${category.title}`)}
                        className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-jevelin-orange hover:text-accent-200 transition"
                      >
                        <span>{data.ctaRequest}</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </button>
                    </div>

                    {/* Detailed Items in Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-900/80 rounded-xl p-4 border border-white/5 hover:border-jevelin-orange/40 transition group flex flex-col justify-between"
                        >
                          <div className="space-y-2">
                            <div className="flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-jevelin-orange mt-2 flex-shrink-0" />
                              <h6 className="text-xs sm:text-sm font-bold text-white group-hover:text-accent-300 transition">
                                {item.title}
                              </h6>
                            </div>
                            {item.description && (
                              <p className="text-xs text-slate-400 leading-relaxed pl-3.5">
                                {item.description}
                              </p>
                            )}
                          </div>

                          <div className="pt-3 mt-2 border-t border-white/5 pl-3.5">
                            <button
                              type="button"
                              onClick={() => handleAction(item.title)}
                              className="text-[11px] font-semibold text-slate-400 group-hover:text-white transition flex items-center"
                            >
                              <span>{language === 'fr' ? 'Démarrer' : 'Get started'}</span>
                              <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Executive Signature Strip */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-jevelin-orange/20 border border-jevelin-orange/40 flex items-center justify-center font-bold text-jevelin-orange">
              3M
            </div>
            <div>
              <span className="text-white font-bold block">{data.author}</span>
              <span>{data.authorRole}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+237673841821"
              className="text-white font-bold hover:text-jevelin-orange transition flex items-center"
            >
              <PhoneCall className="w-3.5 h-3.5 mr-1.5 text-jevelin-orange" />
              +237 673 84 18 21
            </a>
            <span>·</span>
            <span>Omnisport Rue Foé, Yaoundé, Cameroun</span>
          </div>
        </div>
      </div>
    </div>
  );
};
