import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Users,
  Calendar,
  AlertTriangle,
  RefreshCw,
  Search,
  Filter,
  Download,
  Plus,
  ExternalLink,
  CheckCircle2,
  Clock,
  LogOut,
  Mail,
  Video,
  FileText,
  Shield,
  ChevronRight,
  X,
  Save,
  Trash2,
} from 'lucide-react';
import {
  getAdminStats,
  getAdminRegistrations,
  updateAdminRegistration,
  exportRegistrationsCsvUrl,
  getAdminSessions,
  createAdminSession,
  updateAdminSession,
  deleteAdminSession,
  getAdminIntegrationLogs,
  retryAdminIntegrationLog,
  getAdminContactMessages,
  updateAdminContactStatus,
  adminLogoutApi,
} from '../services/api';
import {
  AdminStats,
  RegistrationAdminDetail,
  IntegrationLogEntry,
  ContactMessageEntry,
} from '../types';
import { clearAdminSession, getStoredAdminUser } from '../services/auth';

const REGISTRATION_STATUSES = [
  'Received',
  'Contacted',
  'Welcome session scheduled',
  'Follow-up required',
  'Completed',
  'Closed',
];

export const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = getStoredAdminUser();

  const [activeTab, setActiveTab] = useState<'registrations' | 'sessions' | 'integrations' | 'contacts'>('registrations');
  const [stats, setStats] = useState<AdminStats | null>(null);

  // Registrations state
  const [registrations, setRegistrations] = useState<RegistrationAdminDetail[]>([]);
  const [regLoading, setRegLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedReg, setSelectedReg] = useState<RegistrationAdminDetail | null>(null);
  const [editStatus, setEditStatus] = useState('');
  const [editNotes, setEditNotes] = useState('');
  const [savingReg, setSavingReg] = useState(false);

  // Sessions state
  const [sessions, setSessions] = useState<any[]>([]);
  const [showSessionModal, setShowSessionModal] = useState(false);
  const [sessionForm, setSessionForm] = useState({
    id: null as number | null,
    title: 'Online Discovery & Welcome Session',
    description: 'An interactive 60-minute session welcoming newcomers to Association Cap Entrepreneurs.',
    start_time: '',
    display_timezone: 'Europe/Paris',
    duration_minutes: 60,
    teams_join_url: '',
    is_published: true,
  });

  // Integration Logs state
  const [logs, setLogs] = useState<IntegrationLogEntry[]>([]);
  const [retryingLogId, setRetryingLogId] = useState<number | null>(null);

  // Contact messages state
  const [contactMessages, setContactMessages] = useState<ContactMessageEntry[]>([]);

  // Load Initial Data
  const loadStats = () => {
    getAdminStats().then(setStats).catch(console.error);
  };

  const loadRegistrations = () => {
    setRegLoading(true);
    getAdminRegistrations({
      page: currentPage,
      per_page: 15,
      status: selectedStatus || undefined,
      search: searchTerm || undefined,
    })
      .then((res) => {
        setRegistrations(res.items);
        setTotalPages(res.pages);
      })
      .catch(console.error)
      .finally(() => setRegLoading(false));
  };

  const loadSessions = () => {
    getAdminSessions().then(setSessions).catch(console.error);
  };

  const loadLogs = () => {
    getAdminIntegrationLogs().then(setLogs).catch(console.error);
  };

  const loadContacts = () => {
    getAdminContactMessages().then(setContactMessages).catch(console.error);
  };

  useEffect(() => {
    loadStats();
    loadRegistrations();
    loadSessions();
    loadLogs();
    loadContacts();
  }, []);

  useEffect(() => {
    loadRegistrations();
  }, [currentPage, selectedStatus]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    loadRegistrations();
  };

  const handleLogout = async () => {
    try {
      await adminLogoutApi();
    } catch { }
    clearAdminSession();
    navigate('/admin/login');
  };

  // Open Registration Modal
  const openRegModal = (reg: RegistrationAdminDetail) => {
    setSelectedReg(reg);
    setEditStatus(reg.status);
    setEditNotes(reg.internal_notes || '');
  };

  const saveRegChanges = async () => {
    if (!selectedReg) return;
    setSavingReg(true);
    try {
      const updated = await updateAdminRegistration(selectedReg.id, {
        status: editStatus,
        internal_notes: editNotes,
      });
      setSelectedReg(updated);
      setRegistrations(registrations.map((r) => (r.id === updated.id ? updated : r)));
      loadStats();
    } catch (err) {
      alert('Erreur lors de la mise à jour de l’inscription');
    } finally {
      setSavingReg(false);
    }
  };

  // Session Modal Handlers
  const openNewSessionModal = () => {
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 7);
    nextDate.setHours(18, 0, 0, 0);

    setSessionForm({
      id: null,
      title: 'Online Discovery & Welcome Session',
      description: 'An interactive 60-minute session welcoming newcomers to Association Cap Entrepreneurs.',
      start_time: nextDate.toISOString().slice(0, 16),
      display_timezone: 'Europe/Paris',
      duration_minutes: 60,
      teams_join_url: '',
      is_published: true,
    });
    setShowSessionModal(true);
  };

  const openEditSessionModal = (sess: any) => {
    setSessionForm({
      id: sess.id,
      title: sess.title,
      description: sess.description,
      start_time: sess.start_time ? sess.start_time.slice(0, 16) : '',
      display_timezone: sess.display_timezone,
      duration_minutes: sess.duration_minutes,
      teams_join_url: sess.teams_join_url || '',
      is_published: sess.is_published,
    });
    setShowSessionModal(true);
  };

  const saveSession = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (sessionForm.id) {
        await updateAdminSession(sessionForm.id, sessionForm);
      } else {
        await createAdminSession(sessionForm);
      }
      setShowSessionModal(false);
      loadSessions();
      loadStats();
    } catch (err: any) {
      alert(err.response?.data?.error || 'Erreur lors de la sauvegarde de la session');
    }
  };

  const handleDeleteSession = async (id: number) => {
    if (window.confirm('Voulez-vous vraiment supprimer cette session ?')) {
      await deleteAdminSession(id);
      loadSessions();
      loadStats();
    }
  };

  // Retry integration log
  const handleRetryLog = async (logId: number) => {
    setRetryingLogId(logId);
    try {
      const res = await retryAdminIntegrationLog(logId);
      alert(res.message);
      loadLogs();
      loadStats();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Échec du nouvel essai');
    } finally {
      setRetryingLogId(null);
    }
  };

  // Update contact message status
  const handleContactStatus = async (id: number, newStatus: string) => {
    try {
      await updateAdminContactStatus(id, newStatus);
      loadContacts();
      loadStats();
    } catch { }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Received':
        return 'bg-blue-100 text-blue-800';
      case 'Contacted':
        return 'bg-indigo-100 text-indigo-800';
      case 'Welcome session scheduled':
        return 'bg-amber-100 text-amber-800';
      case 'Follow-up required':
        return 'bg-rose-100 text-rose-800 font-bold';
      case 'Completed':
        return 'bg-emerald-100 text-emerald-800';
      case 'Closed':
        return 'bg-slate-100 text-slate-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Admin Top Navigation */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center font-bold text-white text-sm">
              CE
            </div>
            <span className="font-bold text-sm sm:text-base tracking-tight">
              Cap Entrepreneurs - Administration
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs text-slate-400 hidden sm:inline">
              Connecté en tant que <strong>{currentUser?.name || 'Administrateur'}</strong>
            </span>
            <Link
              to="/"
              className="text-xs text-slate-300 hover:text-white underline hidden md:inline"
            >
              Voir le site public
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
            >
              <LogOut className="w-3.5 h-3.5 mr-1.5" />
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8 flex-grow">
        {/* KPI Summary Cards */}
        {stats && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Total Inscriptions
                </div>
                <div className="text-2xl font-black text-slate-900 mt-1">
                  {stats.total_registrations}
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Sessions Planifiées
                </div>
                <div className="text-2xl font-black text-emerald-600 mt-1">
                  {stats.upcoming_published_sessions}
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Alertes Intégration
                </div>
                <div className={`text-2xl font-black mt-1 ${stats.failed_integrations > 0 ? 'text-rose-600' : 'text-slate-900'}`}>
                  {stats.failed_integrations}
                </div>
              </div>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stats.failed_integrations > 0 ? 'bg-rose-50 text-rose-600' : 'bg-slate-50 text-slate-400'}`}>
                <AlertTriangle className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Nouveaux Messages
                </div>
                <div className="text-2xl font-black text-slate-900 mt-1">
                  {stats.new_contact_messages}
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-white rounded-t-2xl px-4 pt-2 space-x-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('registrations')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'registrations'
                ? 'border-brand-600 text-brand-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
          >
            Inscriptions ({stats?.total_registrations || 0})
          </button>

          <button
            onClick={() => setActiveTab('sessions')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'sessions'
                ? 'border-brand-600 text-brand-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
          >
            Sessions Teams ({sessions.length})
          </button>

          <button
            onClick={() => setActiveTab('integrations')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition flex items-center ${activeTab === 'integrations'
                ? 'border-brand-600 text-brand-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
          >
            <span>Power Automate & Logs</span>
            {stats && stats.failed_integrations > 0 && (
              <span className="ml-2 px-1.5 py-0.5 rounded-full text-xs bg-rose-600 text-white font-bold">
                {stats.failed_integrations}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('contacts')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'contacts'
                ? 'border-brand-600 text-brand-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
          >
            Messages reçus ({contactMessages.length})
          </button>
        </div>

        {/* TAB 1: REGISTRATIONS */}
        {activeTab === 'registrations' && (
          <div className="bg-white rounded-b-2xl shadow-sm border border-slate-200 border-t-0 p-6 space-y-6">
            {/* Filters Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2 flex-grow max-w-md">
                <div className="relative w-full">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Recherche par nom, email, réf, pays..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-slate-800"
                >
                  Filtrer
                </button>
              </form>

              <div className="flex items-center space-x-3">
                <select
                  value={selectedStatus}
                  onChange={(e) => {
                    setSelectedStatus(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="px-3 py-2 border border-slate-300 rounded-xl text-xs sm:text-sm bg-white text-slate-700"
                >
                  <option value="">Tous les statuts</option>
                  {REGISTRATION_STATUSES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>

                <a
                  href={exportRegistrationsCsvUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 transition shadow-xs"
                >
                  <Download className="w-4 h-4 mr-1.5" />
                  Exporter CSV
                </a>
              </div>
            </div>

            {/* Registrations Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-700 uppercase tracking-wider text-[11px] border-y border-slate-200">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Référence</th>
                    <th className="py-3 px-4 font-semibold">Nom & Prénom</th>
                    <th className="py-3 px-4 font-semibold">Courriel</th>
                    <th className="py-3 px-4 font-semibold">Pays / Rôle</th>
                    <th className="py-3 px-4 font-semibold">Statut</th>
                    <th className="py-3 px-4 font-semibold">Date</th>
                    <th className="py-3 px-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {regLoading ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-slate-400">
                        Chargement des dossiers...
                      </td>
                    </tr>
                  ) : registrations.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-slate-400">
                        Aucune inscription trouvée.
                      </td>
                    </tr>
                  ) : (
                    registrations.map((reg) => (
                      <tr key={reg.id} className="hover:bg-slate-50/80 transition">
                        <td className="py-3 px-4 font-mono font-bold text-slate-900">
                          {reg.reference}
                        </td>
                        <td className="py-3 px-4 font-medium text-slate-900">
                          {reg.first_name} {reg.last_name}
                        </td>
                        <td className="py-3 px-4">{reg.email}</td>
                        <td className="py-3 px-4">
                          <div>{reg.country}</div>
                          {reg.professional_role && (
                            <div className="text-[11px] text-slate-400">{reg.professional_role}</div>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${getStatusColor(
                              reg.status
                            )}`}
                          >
                            {reg.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-xs text-slate-400">
                          {new Date(reg.created_at).toLocaleDateString('fr-FR')}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => openRegModal(reg)}
                            className="px-3 py-1 rounded-lg bg-brand-50 text-brand-700 hover:bg-brand-100 font-semibold text-xs transition"
                          >
                            Gérer
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-between items-center pt-4 border-t border-slate-100 text-xs">
                <div>Page {currentPage} sur {totalPages}</div>
                <div className="space-x-2">
                  <button
                    disabled={currentPage <= 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 disabled:opacity-50"
                  >
                    Précédent
                  </button>
                  <button
                    disabled={currentPage >= totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 disabled:opacity-50"
                  >
                    Suivant
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: WELCOME SESSIONS */}
        {activeTab === 'sessions' && (
          <div className="bg-white rounded-b-2xl shadow-sm border border-slate-200 border-t-0 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">
                  Sessions d'Accueil Microsoft Teams
                </h3>
                <p className="text-xs text-slate-500">
                  Gérez le planning, le statut de publication et le lien officiel de réunion Microsoft Teams.
                </p>
              </div>
              <button
                onClick={openNewSessionModal}
                className="inline-flex items-center px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition"
              >
                <Plus className="w-4 h-4 mr-1.5" />
                Programmer une session
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sessions.map((sess) => (
                <div
                  key={sess.id}
                  className={`p-6 rounded-2xl border transition ${sess.is_published
                      ? 'border-slate-200 bg-white shadow-xs'
                      : 'border-slate-200 bg-slate-50 opacity-80'
                    }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${sess.is_published
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-200 text-slate-600'
                        }`}
                    >
                      {sess.is_published ? 'Publiée' : 'Brouillon'}
                    </span>
                    <span className="text-xs text-slate-400">
                      Fuseau : {sess.display_timezone}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-base mb-2">
                    {sess.title}
                  </h4>
                  <p className="text-xs text-slate-600 mb-4 line-clamp-2">
                    {sess.description}
                  </p>

                  <div className="text-xs text-slate-700 space-y-1 mb-4">
                    <div>
                      <strong>Date & Heure :</strong>{' '}
                      {new Date(sess.start_time).toLocaleString('fr-FR')} ({sess.duration_minutes} min)
                    </div>
                    <div className="truncate">
                      <strong>Lien Teams :</strong>{' '}
                      {sess.teams_join_url ? (
                        <a
                          href={sess.teams_join_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-600 underline font-mono text-[11px]"
                        >
                          {sess.teams_join_url}
                        </a>
                      ) : (
                        <span className="text-amber-600 italic">Non configuré</span>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => openEditSessionModal(sess)}
                      className="text-xs font-semibold text-brand-600 hover:underline"
                    >
                      Modifier / Configurer lien
                    </button>
                    <button
                      onClick={() => handleDeleteSession(sess.id)}
                      className="text-xs font-semibold text-red-600 hover:underline inline-flex items-center"
                    >
                      <Trash2 className="w-3.5 h-3.5 mr-1" />
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: INTEGRATION AUDIT & RETRY */}
        {activeTab === 'integrations' && (
          <div className="bg-white rounded-b-2xl shadow-sm border border-slate-200 border-t-0 p-6 space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">
                Journal d'Intégration & Alertes Power Automate
              </h3>
              <p className="text-xs text-slate-500">
                Chaque événement de notification est journalisé. En cas d'indisponibilité de Power Automate ou du webhook, l'inscription est conservée et vous pouvez réexécuter la notification en un clic.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 text-slate-700 uppercase tracking-wider text-[11px] border-y border-slate-200">
                  <tr>
                    <th className="py-3 px-4 font-semibold">ID</th>
                    <th className="py-3 px-4 font-semibold">Événement</th>
                    <th className="py-3 px-4 font-semibold">Statut</th>
                    <th className="py-3 px-4 font-semibold">HTTP Code</th>
                    <th className="py-3 px-4 font-semibold">Message d'erreur</th>
                    <th className="py-3 px-4 font-semibold">Essais</th>
                    <th className="py-3 px-4 font-semibold">Horodatage</th>
                    <th className="py-3 px-4 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {logs.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="py-8 text-center text-slate-400">
                        Aucun journal d'intégration enregistré.
                      </td>
                    </tr>
                  ) : (
                    logs.map((log) => (
                      <tr key={log.id} className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-mono font-bold">#{log.id}</td>
                        <td className="py-3 px-4 font-medium text-slate-900">{log.event_type}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${log.status === 'success'
                                ? 'bg-emerald-100 text-emerald-800'
                                : log.status === 'failed'
                                  ? 'bg-rose-100 text-rose-800'
                                  : log.status === 'retried'
                                    ? 'bg-indigo-100 text-indigo-800'
                                    : 'bg-amber-100 text-amber-800'
                              }`}
                          >
                            {log.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono">{log.response_status || '-'}</td>
                        <td className="py-3 px-4 max-w-xs truncate text-red-600 text-xs">
                          {log.error_message || 'OK'}
                        </td>
                        <td className="py-3 px-4">{log.retry_count}</td>
                        <td className="py-3 px-4 text-slate-400">
                          {new Date(log.created_at).toLocaleString('fr-FR')}
                        </td>
                        <td className="py-3 px-4 text-right">
                          {log.status === 'failed' && (
                            <button
                              disabled={retryingLogId === log.id}
                              onClick={() => handleRetryLog(log.id)}
                              className="px-2.5 py-1 rounded bg-rose-50 text-rose-700 hover:bg-rose-100 font-semibold text-xs inline-flex items-center disabled:opacity-50"
                            >
                              <RefreshCw className={`w-3 h-3 mr-1 ${retryingLogId === log.id ? 'animate-spin' : ''}`} />
                              Réessayer
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: CONTACT MESSAGES */}
        {activeTab === 'contacts' && (
          <div className="bg-white rounded-b-2xl shadow-sm border border-slate-200 border-t-0 p-6 space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Messages & Inquiétudes Reçus</h3>
              <p className="text-xs text-slate-500">
                Messages transmis par les nouveaux arrivants ou partenaires via le formulaire de contact.
              </p>
            </div>

            <div className="space-y-4">
              {contactMessages.length === 0 ? (
                <div className="py-10 text-center text-slate-400 text-sm">
                  Aucun message en attente.
                </div>
              ) : (
                contactMessages.map((msg) => (
                  <div key={msg.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                      <div className="font-bold text-slate-900 text-sm">
                        {msg.subject} <span className="font-normal text-slate-500">- de {msg.name} ({msg.email})</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select
                          value={msg.status}
                          onChange={(e) => handleContactStatus(msg.id, e.target.value)}
                          className="text-xs border border-slate-300 rounded-lg px-2 py-1 bg-white"
                        >
                          <option value="New">Nouveau</option>
                          <option value="Read">Lu</option>
                          <option value="Replied">Répondu</option>
                          <option value="Archived">Archivé</option>
                        </select>
                        <span className="text-xs text-slate-400">
                          {new Date(msg.created_at).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                      {msg.message}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </main>

      {/* REGISTRATION DETAIL MODAL */}
      {selectedReg && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                  {selectedReg.reference}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  {selectedReg.first_name} {selectedReg.last_name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedReg(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="text-slate-400 block">Courriel :</span>
                <span className="font-semibold text-slate-800">{selectedReg.email}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Localisation :</span>
                <span className="font-semibold text-slate-800">
                  {selectedReg.country} {selectedReg.city ? `(${selectedReg.city})` : ''}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Rôle :</span>
                <span className="font-semibold text-slate-800">
                  {selectedReg.professional_role || 'Non précisé'}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Organisation :</span>
                <span className="font-semibold text-slate-800">
                  {selectedReg.organization || 'Non précisée'}
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-slate-400 block">Centres d'intérêt :</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {selectedReg.interests && selectedReg.interests.length > 0 ? (
                    selectedReg.interests.map((it) => (
                      <span key={it} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                        {it}
                      </span>
                    ))
                  ) : (
                    <span className="text-slate-500 italic">Aucun sélectionné</span>
                  )}
                </div>
              </div>
              {selectedReg.reason_for_joining && (
                <div className="col-span-2">
                  <span className="text-slate-400 block">Raison pour rejoindre :</span>
                  <p className="mt-1 p-3 rounded-xl bg-slate-50 text-slate-700 text-xs">
                    {selectedReg.reason_for_joining}
                  </p>
                </div>
              )}
            </div>

            {/* Update Status & Notes Section */}
            <div className="pt-4 border-t border-slate-100 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Statut du dossier d'accueil
                </label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white"
                >
                  {REGISTRATION_STATUSES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Notes de suivi interne (Confidentiel équipe)
                </label>
                <textarea
                  rows={3}
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  placeholder="Notes sur la session d'accueil, prise de contact, besoins particuliers..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedReg(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Fermer
                </button>
                <button
                  type="button"
                  disabled={savingReg}
                  onClick={saveRegChanges}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 inline-flex items-center shadow-xs"
                >
                  <Save className="w-3.5 h-3.5 mr-1.5" />
                  <span>{savingReg ? 'Sauvegarde...' : 'Enregistrer les modifications'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SESSION CREATE/EDIT MODAL */}
      {showSessionModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={saveSession}
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold text-slate-900">
                {sessionForm.id ? 'Modifier la session' : 'Nouvelle session de bienvenue'}
              </h3>
              <button
                type="button"
                onClick={() => setShowSessionModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Titre de la session *</label>
                <input
                  type="text"
                  required
                  value={sessionForm.title}
                  onChange={(e) => setSessionForm({ ...sessionForm, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Description</label>
                <textarea
                  rows={2}
                  value={sessionForm.description}
                  onChange={(e) => setSessionForm({ ...sessionForm, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Date & Heure (UTC/Locale) *</label>
                  <input
                    type="datetime-local"
                    required
                    value={sessionForm.start_time}
                    onChange={(e) => setSessionForm({ ...sessionForm, start_time: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Durée (minutes)</label>
                  <input
                    type="number"
                    min="15"
                    max="180"
                    value={sessionForm.duration_minutes}
                    onChange={(e) => setSessionForm({ ...sessionForm, duration_minutes: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Fuseau horaire d'affichage</label>
                <input
                  type="text"
                  value={sessionForm.display_timezone}
                  onChange={(e) => setSessionForm({ ...sessionForm, display_timezone: e.target.value })}
                  placeholder="Europe/Paris"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Lien officiel Microsoft Teams (URL sécurisée HTTPS)
                </label>
                <input
                  type="url"
                  placeholder="https://teams.microsoft.com/l/meetup-join/..."
                  value={sessionForm.teams_join_url}
                  onChange={(e) => setSessionForm({ ...sessionForm, teams_join_url: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono text-xs"
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  Laissez vide pour publier la date en attendant la génération du lien Teams.
                </p>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="pub_check"
                  checked={sessionForm.is_published}
                  onChange={(e) => setSessionForm({ ...sessionForm, is_published: e.target.checked })}
                  className="w-4 h-4 text-brand-600 rounded"
                />
                <label htmlFor="pub_check" className="font-semibold text-slate-800 text-xs">
                  Publier immédiatement cette session sur le site public
                </label>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowSessionModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-xs"
              >
                Enregistrer la session
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
