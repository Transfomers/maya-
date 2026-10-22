import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  registrationSchema,
  RegistrationFormData,
} from '../schemas/registrationSchema';
import { submitRegistration, getPublicConfig } from '../services/api';
import {
  User,
  Mail,
  Globe,
  Briefcase,
  Building,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Shield,
  FileText,
  Sparkles,
} from 'lucide-react';

const SUGGESTED_ROLES = [
  'Entrepreneur',
  'Business professional',
  'Student or emerging entrepreneur',
  'Mentor',
  'Volunteer',
  'Organization or institutional representative',
  'Partner',
  'Other',
];

const SUGGESTED_INTERESTS = [
  'Entrepreneurship',
  'Networking',
  'Mentorship',
  'Business development',
  'Training and learning',
  'Partnerships',
  'Volunteering',
  'Innovation',
  'Community projects',
];

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const [msFormsUrl, setMsFormsUrl] = useState<string | null>(null);
  const [useMsForms, setUseMsForms] = useState<boolean>(false);

  useEffect(() => {
    getPublicConfig()
      .then((cfg) => {
        if (cfg.features.enable_ms_forms_mode && cfg.features.ms_forms_embed_url) {
          setMsFormsUrl(cfg.features.ms_forms_embed_url);
        }
      })
      .catch(() => {});
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      country: 'France',
      city: '',
      professional_role: '',
      organization: '',
      interests: [],
      reason_for_joining: '',
      preferred_way_to_participate: '',
      preferred_language: 'fr',
      privacy_consent: undefined,
      honeypot: '',
    },
  });

  const selectedInterests = watch('interests') || [];
  const currentLang = watch('preferred_language');

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setValue(
        'interests',
        selectedInterests.filter((i) => i !== interest)
      );
    } else {
      setValue('interests', [...selectedInterests, interest]);
    }
  };

  const onSubmit = async (data: RegistrationFormData) => {
    setServerError(null);
    try {
      const result = await submitRegistration(data);
      // Navigate to /welcome with reference
      navigate(`/welcome?ref=${encodeURIComponent(result.reference)}`);
    } catch (err: any) {
      if (err.response?.data?.details) {
        setServerError(`Erreur de validation: ${err.response.data.details}`);
      } else if (err.response?.data?.error) {
        setServerError(err.response.data.error);
      } else {
        setServerError(
          "Une erreur réseau est survenue. Veuillez vérifier votre connexion et réessayer."
        );
      }
    }
  };

  return (
    <div className="py-12 lg:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Rejoindre la Communauté</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Formulaire d'Intérêt & d'Accueil
          </h1>
          <p className="mt-3 text-slate-600 text-base max-w-xl mx-auto">
            Partagez vos coordonnées et vos aspirations. Nous vous contacterons pour vous convier à notre prochaine session d'accueil en ligne.
          </p>

          {/* Toggle for Microsoft Forms mode if configured */}
          {msFormsUrl && (
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setUseMsForms(!useMsForms)}
                className="text-xs text-brand-600 hover:text-brand-800 underline"
              >
                {useMsForms
                  ? "Revenir au formulaire standard"
                  : "Préférer le formulaire Microsoft Forms"}
              </button>
            </div>
          )}
        </div>

        {/* Microsoft Forms Embed view if active */}
        {useMsForms && msFormsUrl ? (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6">
            <iframe
              src={msFormsUrl}
              width="100%"
              height="800px"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Microsoft Forms Onboarding"
              className="rounded-xl border border-slate-100"
            >
              Chargement...
            </iframe>
          </div>
        ) : (
          /* Custom React Form with Zod */
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10">
            {serverError && (
              <div className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start space-x-3 text-red-800 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
                <div>
                  <div className="font-semibold">Une erreur est survenue</div>
                  <div>{serverError}</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
              {/* Bot Honeypot (hidden from human users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="honeypot">Ne pas remplir</label>
                <input
                  id="honeypot"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register('honeypot')}
                />
              </div>

              {/* Section 1: Coordonnées obligatoires */}
              <div>
                <h2 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6 flex items-center">
                  <User className="w-4 h-4 mr-2 text-brand-600" />
                  1. Informations personnelles / Personal details
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                      Prénom / First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Jean"
                      {...register('first_name')}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition ${
                        errors.first_name ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.first_name && (
                      <p className="mt-1 text-xs text-red-600 font-medium">
                        {errors.first_name.message}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                      Nom / Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Dupont"
                      {...register('last_name')}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition ${
                        errors.last_name ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.last_name && (
                      <p className="mt-1 text-xs text-red-600 font-medium">
                        {errors.last_name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                      Adresse email / Email address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="jean.dupont@example.com"
                        {...register('email')}
                        className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                      <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 font-medium">
                        {errors.email.message}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-slate-500">
                      Vous recevrez votre confirmation d'accueil et le lien Teams à cette adresse.
                    </p>
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                      Pays de résidence / Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="France, Canada, Belgique..."
                      {...register('country')}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition ${
                        errors.country ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.country && (
                      <p className="mt-1 text-xs text-red-600 font-medium">
                        {errors.country.message}
                      </p>
                    )}
                  </div>

                  {/* City (optional) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                      Ville / City <span className="text-slate-400 font-normal">(Optionnel)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Paris, Montréal, Bruxelles..."
                      {...register('city')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
                    />
                  </div>

                  {/* Preferred Language */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                      Langue préférée pour les échanges / Preferred language <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label
                        className={`cursor-pointer p-3.5 rounded-xl border flex items-center justify-between text-sm font-medium transition ${
                          currentLang === 'fr'
                            ? 'border-brand-600 bg-brand-50/70 text-brand-900'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="fr"
                            {...register('preferred_language')}
                            className="text-brand-600 focus:ring-brand-500"
                          />
                          <span>Français</span>
                        </div>
                        <span className="text-xs text-slate-500">French</span>
                      </label>

                      <label
                        className={`cursor-pointer p-3.5 rounded-xl border flex items-center justify-between text-sm font-medium transition ${
                          currentLang === 'en'
                            ? 'border-brand-600 bg-brand-50/70 text-brand-900'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="en"
                            {...register('preferred_language')}
                            className="text-brand-600 focus:ring-brand-500"
                          />
                          <span>English</span>
                        </div>
                        <span className="text-xs text-slate-500">Anglais</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Profil & Activité (Optionnel) */}
              <div>
                <h2 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6 flex items-center">
                  <Briefcase className="w-4 h-4 mr-2 text-brand-600" />
                  2. Profil & Intérêts / Professional background (Optionnel)
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Role */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                      Rôle professionnel / Professional role
                    </label>
                    <select
                      {...register('professional_role')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
                    >
                      <option value="">Sélectionnez un rôle / Select a role</option>
                      {SUGGESTED_ROLES.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                      Organisation ou Entreprise / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Nom de l'entreprise ou projet"
                      {...register('organization')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
                    />
                  </div>

                  {/* Interests Chips */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                      Domaines d'intérêt / Areas of interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SUGGESTED_INTERESTS.map((interest) => {
                        const isSelected = selectedInterests.includes(interest);
                        return (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => toggleInterest(interest)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                              isSelected
                                ? 'bg-brand-600 text-white shadow-sm'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 inline mr-1" />}
                            {interest}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Reason for joining */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                      Pourquoi souhaitez-vous nous rejoindre ? / Reason for joining
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Décrivez vos attentes, vos objectifs ou vos projets..."
                      {...register('reason_for_joining')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
                    />
                  </div>

                  {/* Preferred way to participate */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                      Comment souhaitez-vous participer ? / Preferred way to participate
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Assister aux ateliers, mentorat, bénévole..."
                      {...register('preferred_way_to_participate')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Consentement & Confidentialité */}
              <div className="pt-4 border-t border-slate-200">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy_consent"
                        type="checkbox"
                        {...register('privacy_consent')}
                        className="w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500"
                      />
                    </div>
                    <div className="ml-3 text-xs text-slate-600 leading-normal">
                      <label htmlFor="privacy_consent" className="font-medium text-slate-800">
                        J'accepte la politique de traitement des données personnelles <span className="text-red-500">*</span>
                      </label>
                      <p className="mt-0.5">
                        J'autorise l'Association Cap Entrepreneurs à enregistrer mes informations pour le suivi de mon accueil et l'envoi des invitations aux réunions de bienvenue. Les données ne sont jamais vendues ni cédées. Pour en savoir plus, consultez notre{' '}
                        <Link to="/privacy" target="_blank" className="text-brand-600 underline font-medium">
                          Politique de confidentialité
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                  {errors.privacy_consent && (
                    <p className="text-xs text-red-600 font-medium pl-7">
                      {errors.privacy_consent.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center py-4 px-6 rounded-xl font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      <span>Enregistrement en cours...</span>
                    </>
                  ) : (
                    <span>Valider mon inscription</span>
                  )}
                </button>
                <p className="mt-3 text-center text-xs text-slate-500">
                  Un email avec votre référence unique vous sera envoyé immédiatement après validation.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
