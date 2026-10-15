import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck } from 'lucide-react';
import { DossierFormData } from '../types';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<DossierFormData>({
    fullName: '',
    email: '',
    phone: '',
    cityState: '',
    relationshipToTheme: 'Pesquisador / Acadêmico',
    accommodationType: 'double',
    participantsCount: '1 participante',
    observations: '',
    lgpdConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Por favor, informe seu nome completo.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Por favor, informe um endereço de e-mail válido.';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Por favor, informe um telefone ou WhatsApp com DDD.';
    }
    if (!formData.cityState.trim()) {
      errs.cityState = 'Por favor, informe sua cidade e estado.';
    }
    if (!formData.lgpdConsent) {
      errs.lgpdConsent = 'É necessário consentir com o tratamento dos dados conforme a LGPD.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Clean service layer: simulate local persistence and prepare for backend integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      // Store safely in localStorage for persistence without fictional backend
      const stored = JSON.parse(localStorage.getItem('colegio_iniciatico_leads') || '[]');
      stored.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('colegio_iniciatico_leads', JSON.stringify(stored));

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch {
      setIsSubmitting(false);
      setErrors({ form: 'Ocorreu um erro ao registrar sua manifestação. Tente novamente.' });
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-[#050708]/90 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#071923] border border-[#A7A29A]/20 shadow-2xl p-6 sm:p-10 z-10 max-h-[92vh] overflow-y-auto my-auto text-[#F0E9DC]">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 text-[#A7A29A] hover:text-[#C49A45] transition-colors p-1"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#C49A45]/20 flex items-center justify-center text-[#C49A45]">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#C49A45] font-medium mb-2">
                Manifestação Registrada com Sucesso
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F0E9DC] font-light">
                Obrigado pelo seu interesse.
              </h3>
            </div>

            <p className="text-sm text-[#A7A29A] max-w-md mx-auto leading-relaxed font-light">
              Recebemos suas informações com rigor e discrição. A coordenação do <strong className="text-[#F0E9DC]">Colégio Iniciático</strong> enviará o dossiê detalhado da excursão para <span className="text-[#C49A45]">{formData.email}</span> assim que os bloqueios operacionais forem formalizados.
            </p>

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-8 py-3 bg-[#C49A45] text-[#050708] hover:bg-[#DFC07D] font-sans text-xs tracking-[0.2em] font-bold uppercase transition-colors"
              >
                Concluir
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-8">
              <div className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium mb-2">
                Excursão França Retificada 2027
              </div>
              <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl text-[#F0E9DC] font-light">
                Solicitação do Dossiê Completo
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A29A] mt-2 font-light leading-relaxed">
                Cadastre seus dados para receber o caderno analítico com detalhes de itinerário, bibliografia recomendada e opções de pagamento.
              </p>
            </div>

            {errors.form && (
              <div className="p-3 mb-6 bg-red-950/40 border border-red-500/40 text-red-200 text-xs">
                {errors.form}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nome completo */}
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[#F0E9DC]/80 mb-1.5 font-medium">
                  Nome Completo <span className="text-[#C49A45]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Ex.: Dr. Carlos Eduardo Silva"
                  className="w-full bg-[#050708] border border-[#A7A29A]/30 focus:border-[#C49A45] px-4 py-3 text-sm text-[#F0E9DC] placeholder-[#A7A29A]/40 outline-none transition-colors"
                />
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Email & Telefone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-[#F0E9DC]/80 mb-1.5 font-medium">
                    E-mail <span className="text-[#C49A45]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu.email@exemplo.com"
                    className="w-full bg-[#050708] border border-[#A7A29A]/30 focus:border-[#C49A45] px-4 py-3 text-sm text-[#F0E9DC] placeholder-[#A7A29A]/40 outline-none transition-colors"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-[#F0E9DC]/80 mb-1.5 font-medium">
                    Telefone / WhatsApp <span className="text-[#C49A45]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 98765-4321"
                    className="w-full bg-[#050708] border border-[#A7A29A]/30 focus:border-[#C49A45] px-4 py-3 text-sm text-[#F0E9DC] placeholder-[#A7A29A]/40 outline-none transition-colors"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Cidade / Estado */}
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[#F0E9DC]/80 mb-1.5 font-medium">
                  Cidade e Estado <span className="text-[#C49A45]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.cityState}
                  onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                  placeholder="Ex.: São Paulo — SP"
                  className="w-full bg-[#050708] border border-[#A7A29A]/30 focus:border-[#C49A45] px-4 py-3 text-sm text-[#F0E9DC] placeholder-[#A7A29A]/40 outline-none transition-colors"
                />
                {errors.cityState && <p className="text-red-400 text-xs mt-1">{errors.cityState}</p>}
              </div>

              {/* Relação com o tema */}
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[#F0E9DC]/80 mb-1.5 font-medium">
                  Relação com o Tema
                </label>
                <select
                  value={formData.relationshipToTheme}
                  onChange={(e) => setFormData({ ...formData, relationshipToTheme: e.target.value })}
                  className="w-full bg-[#050708] border border-[#A7A29A]/30 focus:border-[#C49A45] px-4 py-3 text-sm text-[#F0E9DC] outline-none transition-colors"
                >
                  <option value="Pesquisador / Acadêmico">Pesquisador / Acadêmico</option>
                  <option value="Membro da Maçonaria">Membro da Maçonaria</option>
                  <option value="Estudioso do Regime Escocês Retificado">Estudioso do Regime Escocês Retificado</option>
                  <option value="Entusiasta de História das Religiões">Entusiasta de História das Religiões e Filosofia</option>
                  <option value="Outro interesse cultural">Outro interesse cultural</option>
                </select>
              </div>

              {/* Acomodação & Participantes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-[#F0E9DC]/80 mb-1.5 font-medium">
                    Acomodação Desejada
                  </label>
                  <select
                    value={formData.accommodationType}
                    onChange={(e) => setFormData({ ...formData, accommodationType: e.target.value as any })}
                    className="w-full bg-[#050708] border border-[#A7A29A]/30 focus:border-[#C49A45] px-4 py-3 text-sm text-[#F0E9DC] outline-none transition-colors"
                  >
                    <option value="double">Quarto Duplo Compartilhado</option>
                    <option value="single">Quarto Individual (Single)</option>
                    <option value="undecided">Ainda a Definir</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-[#F0E9DC]/80 mb-1.5 font-medium">
                    Nº de Participantes
                  </label>
                  <select
                    value={formData.participantsCount}
                    onChange={(e) => setFormData({ ...formData, participantsCount: e.target.value })}
                    className="w-full bg-[#050708] border border-[#A7A29A]/30 focus:border-[#C49A45] px-4 py-3 text-sm text-[#F0E9DC] outline-none transition-colors"
                  >
                    <option value="1 participante">1 participante</option>
                    <option value="2 participantes">2 participantes</option>
                    <option value="3 ou mais">3 ou mais participantes</option>
                  </select>
                </div>
              </div>

              {/* Observações opcionais */}
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[#F0E9DC]/80 mb-1.5 font-medium">
                  Observações ou Dúvidas Específicas <span className="text-xs text-[#A7A29A] font-normal font-sans">(opcional)</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.observations}
                  onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                  placeholder="Informações adicionais sobre preferências de voo ou interesses de pesquisa..."
                  className="w-full bg-[#050708] border border-[#A7A29A]/30 focus:border-[#C49A45] px-4 py-3 text-sm text-[#F0E9DC] placeholder-[#A7A29A]/40 outline-none transition-colors resize-none"
                />
              </div>

              {/* LGPD Consent */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.lgpdConsent}
                    onChange={(e) => setFormData({ ...formData, lgpdConsent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded-none bg-[#050708] border-[#A7A29A]/40 text-[#C49A45] focus:ring-0 accent-[#C49A45]"
                  />
                  <span className="text-xs text-[#A7A29A] leading-relaxed font-light">
                    Concordo com o tratamento dos dados fornecidos estritamente para comunicação institucional sobre a excursão França 2027, conforme a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                  </span>
                </label>
                {errors.lgpdConsent && <p className="text-red-400 text-xs mt-1 pl-7">{errors.lgpdConsent}</p>}
              </div>

              {/* Legal disclaimer note */}
              <div className="p-3 bg-[#050708] border border-[#A7A29A]/15 text-[11px] text-[#A7A29A] leading-relaxed font-light">
                <span className="text-[#C49A45] font-medium uppercase tracking-wider block mb-0.5">Nota Importante:</span>
                O valor de referência é estimativo e estará sujeito a confirmação e reajuste conforme a disponibilidade e tarifas dos prestadores de serviços (companhias aéreas, hotéis, restaurantes, museus e transporte). O cadastro não gera compromisso financeiro vinculante.
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] text-[#A7A29A] font-light">
                  <ShieldCheck className="w-4 h-4 text-[#C49A45]" />
                  <span>Seus dados permanecem confidenciais</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-[#C49A45] hover:bg-[#DFC07D] text-[#050708] font-sans text-xs tracking-[0.2em] font-bold uppercase transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Registrando...' : 'Enviar Solicitação'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
