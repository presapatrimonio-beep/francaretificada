import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, FileText, Sparkles } from 'lucide-react';
import { DossierFormData } from '../types';

export type DossierModalMode = 'cotacao' | 'interesse';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: DossierModalMode;
  onModeChange?: (mode: DossierModalMode) => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({
  isOpen,
  onClose,
  mode: initialMode = 'cotacao',
  onModeChange,
}) => {
  const [activeMode, setActiveMode] = useState<DossierModalMode>(initialMode);

  useEffect(() => {
    setActiveMode(initialMode);
  }, [initialMode]);

  const handleSwitchMode = (m: DossierModalMode) => {
    setActiveMode(m);
    if (onModeChange) onModeChange(m);
  };

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
      errs.phone = 'Por favor, informe um telefone ou WhatsApp válido com DDD.';
    }
    // cityState only mandatory for full cotação
    if (activeMode === 'cotacao' && !formData.cityState.trim()) {
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

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const stored = JSON.parse(localStorage.getItem('franca_retificada_leads') || '[]');
      stored.push({
        ...formData,
        actionType: activeMode,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('franca_retificada_leads', JSON.stringify(stored));

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch {
      setIsSubmitting(false);
      setErrors({ form: 'Ocorreu um erro ao registrar suas informações. Tente novamente.' });
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  const isInteresse = activeMode === 'interesse';

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
      <div className="relative w-full max-w-2xl bg-[#080507] border border-[#C49A45]/40 shadow-2xl p-5 sm:p-10 z-10 max-h-[92vh] overflow-y-auto my-auto text-[#F0E9DC]">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#A7A29A] hover:text-[#C49A45] transition-colors p-2 cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#C49A45]/20 border border-[#C49A45] flex items-center justify-center text-[#DFC07D]">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#C49A45] font-medium mb-2">
                {isInteresse ? 'Manifestação Registrada' : 'Solicitação Recebida'}
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F0E9DC] font-light">
                {isInteresse ? 'Interesse Registrado com Sucesso' : 'Cotação em Processamento'}
              </h3>
            </div>

            <p className="text-sm text-[#A7A29A] max-w-md mx-auto leading-relaxed font-light">
              Recebemos suas informações com rigor e discrição. A coordenação da <strong className="text-[#F0E9DC]">Expedição França Retificada 2027</strong> entrará em contato pelo e-mail <span className="text-[#DFC07D] font-mono">{formData.email}</span> e telefone informado.
            </p>

            <div className="p-3.5 bg-[#050305] border border-[#A7A29A]/15 text-xs text-[#A7A29A] max-w-md mx-auto">
              {isInteresse
                ? 'Lembramos que a manifestação de interesse não representa reserva confirmada, contratação ou compromisso financeiro.'
                : 'A estimativa de R$ 20 Mil por participante é uma projeção preliminar de planejamento orçamentário sujeita às contratações definitivas.'}
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-8 py-3 bg-[#C49A45] text-[#050708] hover:bg-[#DFC07D] font-sans text-xs tracking-[0.2em] font-bold uppercase transition-colors cursor-pointer"
              >
                Concluir
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Mode Switcher Tabs */}
            <div className="flex border-b border-[#A7A29A]/20 mb-6">
              <button
                type="button"
                onClick={() => handleSwitchMode('cotacao')}
                className={`flex-1 pb-3 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer border-b-2 ${
                  !isInteresse
                    ? 'border-[#C49A45] text-[#DFC07D]'
                    : 'border-transparent text-[#A7A29A] hover:text-[#F0E9DC]'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Solicitar Cotação</span>
              </button>

              <button
                type="button"
                onClick={() => handleSwitchMode('interesse')}
                className={`flex-1 pb-3 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer border-b-2 ${
                  isInteresse
                    ? 'border-[#C49A45] text-[#DFC07D]'
                    : 'border-transparent text-[#A7A29A] hover:text-[#F0E9DC]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tenho Interesse</span>
              </button>
            </div>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[#C49A45] font-medium mb-1.5">
                FRANÇA · 16–25 OUTUBRO 2027 · EXPEDIÇÃO RETIFICADA
              </div>
              <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl text-[#F0E9DC] font-light">
                {isInteresse ? 'Manifestação de Interesse na Excursão' : 'Solicitação de Cotação Atualizada'}
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A29A] mt-2 font-light leading-relaxed">
                {isInteresse
                  ? 'Deseja manifestar seu interesse e receber informações sobre a organização da expedição? Registre sua intenção de participação abaixo.'
                  : 'Deseja receber informações sobre valores, condições de pagamento e disponibilidade? Entre em contato com a organização para solicitar uma cotação atualizada.'}
              </p>
            </div>

            {errors.form && (
              <div className="p-3 mb-6 bg-red-950/40 border border-red-500/40 text-red-200 text-xs">
                {errors.form}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome completo */}
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[#F0E9DC]/80 mb-1.5 font-medium">
                  Nome Completo <span className="text-[#C49A45]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Ex.: Carlos Eduardo Silva"
                  className="w-full bg-[#050305] border border-[#A7A29A]/30 focus:border-[#C49A45] px-4 py-3 text-sm text-[#F0E9DC] placeholder-[#A7A29A]/40 outline-none transition-colors"
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
                    className="w-full bg-[#050305] border border-[#A7A29A]/30 focus:border-[#C49A45] px-4 py-3 text-sm text-[#F0E9DC] placeholder-[#A7A29A]/40 outline-none transition-colors"
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
                    className="w-full bg-[#050305] border border-[#A7A29A]/30 focus:border-[#C49A45] px-4 py-3 text-sm text-[#F0E9DC] placeholder-[#A7A29A]/40 outline-none transition-colors"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Quantidade de participantes */}
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[#F0E9DC]/80 mb-1.5 font-medium">
                  Quantidade de Participantes Interessados <span className="text-[#C49A45]">*</span>
                </label>
                <select
                  value={formData.participantsCount}
                  onChange={(e) => setFormData({ ...formData, participantsCount: e.target.value })}
                  className="w-full bg-[#050305] border border-[#A7A29A]/30 focus:border-[#C49A45] px-4 py-3 text-sm text-[#F0E9DC] outline-none transition-colors cursor-pointer"
                >
                  <option value="1 participante">1 participante</option>
                  <option value="2 participantes">2 participantes</option>
                  <option value="3 participantes">3 participantes</option>
                  <option value="4 ou mais participantes">4 ou mais participantes</option>
                </select>
              </div>

              {/* Campos adicionais em modo cotação */}
              {!isInteresse && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] text-[#F0E9DC]/80 mb-1.5 font-medium">
                      Cidade e Estado <span className="text-[#C49A45]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.cityState}
                      onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                      placeholder="Ex.: São Paulo — SP"
                      className="w-full bg-[#050305] border border-[#A7A29A]/30 focus:border-[#C49A45] px-4 py-3 text-sm text-[#F0E9DC] placeholder-[#A7A29A]/40 outline-none transition-colors"
                    />
                    {errors.cityState && <p className="text-red-400 text-xs mt-1">{errors.cityState}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] text-[#F0E9DC]/80 mb-1.5 font-medium">
                      Acomodação Desejada
                    </label>
                    <select
                      value={formData.accommodationType}
                      onChange={(e) => setFormData({ ...formData, accommodationType: e.target.value as any })}
                      className="w-full bg-[#050305] border border-[#A7A29A]/30 focus:border-[#C49A45] px-4 py-3 text-sm text-[#F0E9DC] outline-none transition-colors cursor-pointer"
                    >
                      <option value="double">Quarto Duplo Compartilhado</option>
                      <option value="single">Quarto Individual (Single)</option>
                      <option value="undecided">Ainda a Definir</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Observações opcionais */}
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[#F0E9DC]/80 mb-1.5 font-medium">
                  Observações Opcionais
                </label>
                <textarea
                  rows={2}
                  value={formData.observations}
                  onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                  placeholder="Observações adicionais ou preferências..."
                  className="w-full bg-[#050305] border border-[#A7A29A]/30 focus:border-[#C49A45] px-4 py-2.5 text-sm text-[#F0E9DC] placeholder-[#A7A29A]/40 outline-none transition-colors resize-none"
                />
              </div>

              {/* LGPD Consent */}
              <div className="pt-1">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.lgpdConsent}
                    onChange={(e) => setFormData({ ...formData, lgpdConsent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded-none bg-[#050305] border-[#A7A29A]/40 text-[#C49A45] focus:ring-0 accent-[#C49A45]"
                  />
                  <span className="text-xs text-[#A7A29A] leading-relaxed font-light">
                    Concordo com o tratamento dos dados fornecidos estritamente para comunicação institucional sobre a expedição França 2027, conforme a LGPD (Lei nº 13.709/2018).
                  </span>
                </label>
                {errors.lgpdConsent && <p className="text-red-400 text-xs mt-1 pl-7">{errors.lgpdConsent}</p>}
              </div>

              {/* Mandatory Legal Notice */}
              <div className="p-3 bg-[#050305] border border-[#C49A45]/30 text-[11px] text-[#A7A29A] leading-relaxed font-light">
                <strong className="text-[#DFC07D] font-medium uppercase tracking-wider block mb-0.5">
                  Declaração Institucional:
                </strong>
                {isInteresse
                  ? 'A manifestação de interesse não representa reserva confirmada, contratação ou compromisso financeiro.'
                  : 'A indicação de R$ 20.000,00 por participante é uma projeção orçamentária preliminar de mercado. O valor final dependerá da efetiva contratação dos serviços e da consolidação dos custos operacionais.'}
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] text-[#A7A29A] font-light">
                  <ShieldCheck className="w-4 h-4 text-[#C49A45]" />
                  <span>Comunicação segura e sigilosa</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-[#C49A45] hover:bg-[#DFC07D] text-[#050708] font-sans text-xs tracking-[0.16em] sm:tracking-[0.2em] font-bold uppercase transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg text-center"
                >
                  {isSubmitting
                    ? 'Registrando...'
                    : isInteresse
                    ? 'Registrar Manifestação de Interesse'
                    : 'Enviar Solicitação de Cotação'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
