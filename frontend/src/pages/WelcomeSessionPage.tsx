import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Globe,
  Video,
  CheckCircle2,
  ExternalLink,
  AlertCircle,
  HelpCircle,
  Laptop,
  Users2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { getUpcomingSession } from '../services/api';
import { UpcomingSessionResponse } from '../types';

export const WelcomeSessionPage: React.FC = () => {
  const [data, setData] = useState<UpcomingSessionResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    getUpcomingSession()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.error('Error fetching session:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  const formatSchedule = (isoString: string) => {
    try {
      const date = new Date(isoString);
      const optionsDate: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const optionsTime: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
      };

      const localDateStr = new Intl.DateTimeFormat('fr-FR', optionsDate).format(date);
      const localTimeStr = new Intl.DateTimeFormat('fr-FR', optionsTime).format(date);

      return {
        dateStr: localDateStr,
        timeStr: localTimeStr,
      };
    } catch {
      return { dateStr: isoString, timeStr: '' };
    }
  };

  const session = data?.session;
  const hasTeamsUrl = Boolean(session?.teams_join_url && session.teams_join_url.startsWith('https://'));
  const scheduleFormatted = session?.start_time ? formatSchedule(session.start_time) : null;

  return (
    <div className="py-12 lg:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Video className="w-3.5 h-3.5 text-brand-600" />
            <span>Rencontre en Visioconférence</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Session d'Accueil en Ligne
          </h1>
          <p className="mt-3 text-slate-600 text-base">
            Participez à notre réunion d'accueil interactive sur Microsoft Teams pour faire connaissance avec l'Association Cap Entrepreneurs.
          </p>
        </div>

        {/* Live Session Status Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 sm:p-10">
            {loading ? (
              <div className="py-12 text-center text-slate-500 text-sm">
                Chargement des informations de la prochaine session...
              </div>
            ) : session && session.is_published ? (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Session confirmée</span>
                  </div>
                  <div className="text-xs text-slate-500 flex items-center">
                    <Globe className="w-3.5 h-3.5 mr-1" />
                    Votre fuseau horaire détecté : <strong className="ml-1 text-slate-700">{userTimezone}</strong>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {session.title}
                  </h2>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {session.description}
                  </p>
                </div>

                {/* Schedule details grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Date de la session</div>
                      <div className="text-sm font-bold text-slate-900 capitalize">
                        {scheduleFormatted?.dateStr}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Heure locale</div>
                      <div className="text-sm font-bold text-slate-900">
                        {scheduleFormatted?.timeStr}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                      <Users2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Durée prévue</div>
                      <div className="text-sm font-bold text-slate-900">
                        {session.duration_minutes} minutes
                      </div>
                    </div>
                  </div>
                </div>

                {/* Microsoft Teams Join Section */}
                <div className="pt-6 border-t border-slate-100">
                  {hasTeamsUrl ? (
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                      <div className="space-y-1 text-center sm:text-left">
                        <div className="text-xs font-semibold uppercase tracking-wider text-brand-200">
                          Salle de réunion en ligne
                        </div>
                        <div className="text-lg font-bold">
                          Microsoft Teams
                        </div>
                        <p className="text-xs text-slate-300 max-w-md">
                          Rejoignez la réunion directement depuis votre navigateur ou l'application Teams.
                        </p>
                      </div>

                      <a
                        href={session.teams_join_url!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-md hover:shadow-lg transition group flex-shrink-0"
                      >
                        <Video className="w-4 h-4 mr-2 text-brand-600" />
                        <span>Rejoindre la Réunion Teams</span>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  ) : (
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-sm flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900">
                          Lien Microsoft Teams en cours de finalisation
                        </div>
                        <p className="mt-1 text-xs text-slate-600">
                          Le lien de connexion sera activé quelques heures avant la séance et envoyé directement par email à tous les inscrits.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Fallback message required by prompt when no session is scheduled */
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 mx-auto flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Prochaine session en cours de programmation
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  “Our next online welcome session will be announced soon. Please register to receive updates and an email invitation.”
                </p>
                <div className="pt-2">
                  <Link
                    to="/join"
                    className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-sm"
                  >
                    <span>S'inscrire pour être averti</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* What to Expect Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-brand-600" />
              Ce qui se passe pendant la session
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Présentation de Cap Entrepreneurs :</strong> notre mission, notre histoire et nos valeurs.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Tour de table convivial :</strong> brève introduction de chaque participant et de ses attentes.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Opportunités d'engagement :</strong> groupes de travail, mentorat, organisation d'ateliers et bénévolat.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Session questions / réponses :</strong> échange ouvert avec les animateurs de l'association.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center">
              <Laptop className="w-5 h-5 mr-2 text-brand-600" />
              Instructions de connexion Teams
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="font-bold text-brand-600 mr-2">1.</span>
                <span><strong>Aucun compte payant requis :</strong> vous pouvez participer en tant qu'invité gratuit.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-brand-600 mr-2">2.</span>
                <span><strong>Navigateur web supporté :</strong> Chrome, Edge, Safari ou Firefox sans téléchargement.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-brand-600 mr-2">3.</span>
                <span><strong>Caméra & Microphone :</strong> recommandés pour faciliter les échanges, mais non obligatoires.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-brand-600 mr-2">4.</span>
                <span><strong>Ponctualité :</strong> nous ouvrons la salle 5 minutes avant l'horaire annoncé.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical help banner */}
        <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <HelpCircle className="w-6 h-6 text-slate-500 flex-shrink-0" />
            <div className="text-xs sm:text-sm text-slate-700">
              <strong className="block text-slate-900">Difficultés techniques pour rejoindre ?</strong>
              Écrivez-nous à <span className="font-mono text-brand-700">contact@capentrepreneurs.org</span> ou via notre formulaire.
            </div>
          </div>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 flex-shrink-0 shadow-xs"
          >
            Assistance Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
