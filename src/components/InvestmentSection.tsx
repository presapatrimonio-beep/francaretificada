import React from 'react';
import { FileText } from 'lucide-react';

interface InvestmentSectionProps {
  onOpenDossier: () => void;
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({ onOpenDossier }) => {
  return (
    <section id="investimento" className="relative bg-[#071923] text-[#F0E9DC] py-28 md:py-36 border-t border-[#A7A29A]/15 overflow-hidden">
      {/* Subtle radial chiaroscuro */}
      <div className="absolute inset-0 bg-radial from-[#0B2029]/30 via-transparent to-[#050708]/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl space-y-8">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium mb-3">
              Condições Comerciais & Planejamento
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F0E9DC] font-light leading-tight tracking-tight">
              Uma experiência que vai além do turismo.
            </h2>
          </div>

          {/* Pricing statement pure typography */}
          <div className="py-8 border-y border-[#A7A29A]/20">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A7A29A] font-light block mb-3">
              Valor de Referência Inicial
            </span>
            <div className="flex flex-wrap items-baseline gap-4">
              <span className="text-sm font-serif text-[#C49A45] uppercase tracking-wider">A partir de</span>
              <span className="font-serif text-5xl sm:text-7xl text-[#F0E9DC] font-normal tracking-tight">
                R$ 12.990
              </span>
              <span className="text-sm text-[#A7A29A] font-sans">por pessoa</span>
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#C49A45] mt-3 font-medium">
              Apartamento Duplo · França — Julho de 2027
            </div>
          </div>

          {/* Honest transparency disclosure */}
          <div className="text-xs sm:text-sm text-[#A7A29A] leading-relaxed font-light space-y-3 max-w-3xl">
            <p>
              Este valor é uma estimativa inicial de planejamento e deverá ser validado antes de qualquer comercialização definitiva, mediante confirmação das tarifas aéreas internacionais, das diárias de hospedagem, dos traslados em TGV, ingressos institucionais e apólice de seguro-viagem internacional.
            </p>
            <p>
              Não declaramos que todos os serviços estão incluídos até a formalização do orçamento operacional executivo. Os interessados cadastrados receberão em primeira mão o dossiê detalhado com as especificações completas de viagem.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              onClick={onOpenDossier}
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#C49A45] hover:bg-[#DFC07D] text-[#050708] font-sans text-xs tracking-[0.25em] font-bold uppercase transition-all duration-300 shadow-2xl active:translate-y-px"
            >
              <FileText className="w-4 h-4" />
              <span>Solicitar o Dossiê Completo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
