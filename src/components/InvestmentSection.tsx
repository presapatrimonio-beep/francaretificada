import React from 'react';
import { FileText, Sparkles, ShieldCheck, ArrowRight, Info, CheckCircle2 } from 'lucide-react';

interface InvestmentSectionProps {
  onOpenDossier: () => void;
  onOpenQuote?: () => void;
  onOpenInterest?: () => void;
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({
  onOpenDossier,
  onOpenQuote,
  onOpenInterest,
}) => {
  const handleQuoteClick = onOpenQuote || onOpenDossier;
  const handleInterestClick = onOpenInterest || onOpenDossier;

  return (
    <section
      id="investimento"
      className="relative bg-[#080507] text-[#F0E9DC] py-28 md:py-36 border-t border-[#A7A29A]/15 overflow-hidden"
      aria-label="Projeção do Custeio por Participante"
    >
      {/* Atmosphere: Deep burgundy-nocturnal chiaroscuro with subtle gold ambient wash */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep wine / burgundy gradient vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,_var(--tw-gradient-stops))] from-[#240c17]/60 via-[#10070c]/90 to-[#060305]" />
        
        {/* Subtle gilded grain texture simulation */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(#C49A45 0.75px, transparent 0.75px), radial-gradient(#C49A45 0.75px, #080507 0.75px)`,
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0, 12px 12px',
          }}
        />

        {/* Ambient bottom gradient blend into following section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050708] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* 1. TÍTULO DA SEÇÃO */}
        <header className="max-w-4xl space-y-4 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#C49A45]/15 border border-[#C49A45]/40 text-[#DFC07D] text-[11px] uppercase tracking-[0.3em] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C49A45]" />
            <span>Condições Comerciais · Planejamento Operacional</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F0E9DC] font-light leading-[1.12] tracking-tight">
            PROJEÇÃO DO CUSTEIO <span className="text-[#DFC07D] italic font-normal">POR PARTICIPANTE</span>
          </h2>

          <p className="font-serif text-base sm:text-xl text-[#DFC07D]/90 font-light italic leading-relaxed">
            Planejamento financeiro da expedição — França, 16 a 25 de outubro de 2027.
          </p>
        </header>

        {/* 2. DESTAQUE FINANCEIRO MONUMENTAL */}
        <div className="relative mb-16 md:mb-20">
          <div className="relative bg-[#0d070b]/90 border border-[#C49A45]/45 p-8 sm:p-12 md:p-16 shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
            
            {/* Top gold corner ornamentation accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#DFC07D]" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#DFC07D]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#DFC07D]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#DFC07D]" />

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#A7A29A]/15">
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C49A45] animate-pulse" />
                  <span>Estimativa Aproximada de Custeio por Participante</span>
                </div>

                {/* Monumental Price Display */}
                <div className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#DFC07D] font-normal tracking-tight leading-none drop-shadow-sm">
                  R$ 20.000,00
                </div>

                <div className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#A7A29A] font-light">
                  Valor Estimado de Referência · Imersão de 10 Dias na França
                </div>
              </div>

              <div className="lg:max-w-md space-y-3 text-xs sm:text-sm text-[#F0E9DC]/85 font-light leading-relaxed bg-[#050305]/70 p-5 border border-[#A7A29A]/15">
                <p>
                  Pela média de mercado e considerando as variáveis envolvidas na organização de uma expedição internacional deste porte, indicamos uma cotização aproximada de <strong className="text-[#DFC07D] font-medium">R$ 20.000,00 por participante</strong>.
                </p>
                <p className="text-[#A7A29A] text-xs pt-1 border-t border-[#A7A29A]/10">
                  O valor é uma <strong className="text-[#F0E9DC] font-normal">projeção preliminar de planejamento</strong> e poderá sofrer alterações conforme a efetiva contratação dos serviços.
                </p>
              </div>
            </div>

            {/* 3. OBSERVAÇÃO SOBRE A FORMAÇÃO DO CUSTEIO */}
            <div className="pt-10 space-y-6">
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-[#C49A45] font-medium">
                <Info className="w-4 h-4 text-[#C49A45] shrink-0" />
                <span>Observação sobre a Formação do Custeio</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#F0E9DC]/80 font-light leading-relaxed">
                <div className="p-4 bg-[#050305]/50 border-l-2 border-[#C49A45]/60 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-widest text-[#DFC07D] font-semibold block">
                    01. Serviços & Logística
                  </span>
                  <p>
                    O custeio definitivo dependerá das condições efetivas de contratação das passagens aéreas, reservas de hospedagem, traslados terrestres, ingressos e demais serviços necessários à expedição.
                  </p>
                </div>

                <div className="p-4 bg-[#050305]/50 border-l-2 border-[#C49A45]/60 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-widest text-[#DFC07D] font-semibold block">
                    02. Variáveis de Mercado
                  </span>
                  <p>
                    Os valores estão sujeitos à disponibilidade, à variação cambial, às oscilações tarifárias e às alterações nos preços dos ingressos e serviços turísticos.
                  </p>
                </div>

                <div className="p-4 bg-[#050305]/50 border-l-2 border-[#C49A45]/60 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-widest text-[#DFC07D] font-semibold block">
                    03. Cotização Final
                  </span>
                  <p>
                    A cotização final será estabelecida após a consolidação das contratações e dos custos operacionais.
                  </p>
                </div>
              </div>

              {/* Institutional Transparency Badge */}
              <div className="flex items-start sm:items-center gap-3 pt-3 text-[11px] text-[#A7A29A] font-light">
                <ShieldCheck className="w-4 h-4 text-[#C49A45] shrink-0 mt-0.5 sm:mt-0" />
                <span>
                  Transparência institucional: Não há cobrança antecipada nem vínculo contratual nesta fase preliminar. Os participantes confirmados receberão contrato formal no ato da adesão definitiva.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. DUAS OPÇÕES DE PARTICIPAÇÃO (Visualmente Distintas) */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium">
              Adesão & Comunicação Direta
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#F0E9DC] font-light">
              Escolha Como Deseja <span className="text-[#DFC07D] italic">Participar da Expedição</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A29A] font-light">
              Selecione o canal mais adequado para o seu planejamento pessoal ou manifestação prévia de interesse.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">
            
            {/* ============================================================ */}
            {/* OPÇÃO 1 — SOLICITAR COTAÇÃO                                   */}
            {/* ============================================================ */}
            <div className="relative bg-gradient-to-b from-[#140b12] to-[#0a0509] border-2 border-[#C49A45]/60 hover:border-[#DFC07D] p-8 sm:p-10 flex flex-col justify-between shadow-[0_15px_50px_rgba(0,0,0,0.6)] transition-all duration-300 group">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#C49A45]/30">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C49A45]" />
                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#DFC07D] font-semibold">
                      Opção 1
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#A7A29A] font-light px-2.5 py-0.5 border border-[#A7A29A]/20">
                    Atendimento Direto
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-none bg-[#C49A45]/20 border border-[#C49A45]/50 flex items-center justify-center text-[#DFC07D] shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#F0E9DC] font-light group-hover:text-[#DFC07D] transition-colors">
                      Solicitar Cotação
                    </h4>
                    <p className="text-xs text-[#DFC07D] uppercase tracking-wider font-light mt-0.5">
                      Condições de Pagamento e Disponibilidade
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#F0E9DC]/85 font-light leading-relaxed">
                  Deseja receber informações sobre valores, condições de pagamento e disponibilidade? Entre em contato com a organização para solicitar uma cotação atualizada.
                </p>

                <ul className="space-y-2 text-xs text-[#A7A29A] font-light pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A45]" />
                    <span>Detalhamento dos custos de hospedagem e traslados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A45]" />
                    <span>Opções de quarto individual (single) ou duplo compartilhado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A45]" />
                    <span>Condições de parcelamento e cronograma de pagamentos</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-8 border-t border-[#A7A29A]/15">
                <button
                  type="button"
                  onClick={handleQuoteClick}
                  className="w-full py-4 px-8 bg-[#C49A45] hover:bg-[#DFC07D] text-[#050708] font-sans text-xs tracking-[0.25em] font-bold uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-3 cursor-pointer group-hover:scale-[1.01]"
                  aria-label="Solicitar Cotação Atualizada da Expedição"
                >
                  <FileText className="w-4 h-4" />
                  <span>SOLICITAR COTAÇÃO</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* ============================================================ */}
            {/* OPÇÃO 2 — TENHO INTERESSE NA EXCURSÃO                         */}
            {/* ============================================================ */}
            <div className="relative bg-[#070b10] border border-[#A7A29A]/30 hover:border-[#C49A45]/80 p-8 sm:p-10 flex flex-col justify-between shadow-[0_15px_50px_rgba(0,0,0,0.6)] transition-all duration-300 group">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#A7A29A]/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DFC07D]" />
                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#F0E9DC] font-semibold">
                      Opção 2
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#DFC07D] font-light px-2.5 py-0.5 border border-[#C49A45]/30 bg-[#C49A45]/10">
                    Sem Compromisso Financeiro
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-none bg-white/5 border border-[#A7A29A]/30 flex items-center justify-center text-[#DFC07D] shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#F0E9DC] font-light group-hover:text-[#DFC07D] transition-colors">
                      Tenho Interesse na Excursão
                    </h4>
                    <p className="text-xs text-[#A7A29A] uppercase tracking-wider font-light mt-0.5">
                      Manifestação de Interesse e Prioridade
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#F0E9DC]/85 font-light leading-relaxed">
                  Deseja manifestar seu interesse e receber informações sobre a organização da expedição? Registre sua intenção de participação.
                </p>

                <ul className="space-y-2 text-xs text-[#A7A29A] font-light pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFC07D]" />
                    <span>Comunicação direta sobre as datas de abertura de inscrições</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFC07D]" />
                    <span>Recebimento em primeira mão do dossiê impresso e digital</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFC07D]" />
                    <span>Prioridade na seleção em razão do limite estrito de vagas</span>
                  </li>
                </ul>

                {/* Explicit legal notice as mandated by requirements */}
                <div className="p-3.5 bg-[#050708] border border-[#A7A29A]/20 text-[11px] text-[#A7A29A] leading-relaxed font-light">
                  <strong className="text-[#DFC07D] font-normal block mb-0.5">Aviso Importante:</strong>
                  A manifestação de interesse não representa reserva confirmada, contratação ou compromisso financeiro.
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#A7A29A]/15">
                <button
                  type="button"
                  onClick={handleInterestClick}
                  className="w-full py-4 px-8 border-2 border-[#C49A45] hover:bg-[#C49A45] text-[#DFC07D] hover:text-[#050708] font-sans text-xs tracking-[0.22em] font-semibold uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-3 cursor-pointer group-hover:scale-[1.01]"
                  aria-label="Registrar Interesse na Excursão França 2027"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>TENHO INTERESSE NA EXCURSÃO</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* RESSALVA JURÍDICA & CONDIÇÕES DE ATUALIZAÇÃO TARIFÁRIA         */}
        {/* Mantida integralmente antes da Conclusão                     */}
        {/* ============================================================ */}
        <div className="mt-20 pt-16 border-t border-[#A7A29A]/20 space-y-8">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C49A45] font-semibold block">
              Condições Comerciais
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl text-[#F0E9DC] font-light tracking-tight">
              INVESTIMENTO SOB CONSULTA
            </h3>
            <p className="font-serif text-sm sm:text-base text-[#DFC07D]/90 font-light italic max-w-3xl leading-relaxed">
              O investimento será definido mediante cotação atualizada de passagens aéreas, hospedagem, transportes, seguro-viagem, ingressos e demais serviços previstos no roteiro.
            </p>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#A7A29A] font-light pt-1">
              FRANÇA · 16–25 OUTUBRO 2027
            </div>
          </div>

          <div className="bg-[#05070a]/90 border border-[#A7A29A]/25 p-7 sm:p-10 space-y-4 shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C49A45] font-semibold pb-1 border-b border-[#A7A29A]/15">
              RESSALVA JURÍDICA & CONDIÇÕES DE ATUALIZAÇÃO TARIFÁRIA
            </div>

            <div className="space-y-4 text-xs sm:text-[13px] text-[#A7A29A] leading-relaxed font-light">
              <p>
                O valor da excursão é disponibilizado sob consulta e possui{' '}
                <strong className="text-[#F0E9DC] font-medium">
                  caráter exclusivamente preliminar para fins de planejamento
                </strong>
                , não configurando oferta pública vinculante nem proposta comercial definitiva nos termos do Código Civil e do Código de Defesa do Consumidor.
              </p>

              <p>
                O montante final estará{' '}
                <strong className="text-[#F0E9DC] font-medium">
                  expressamente sujeito a cotação e atualização
                </strong>{' '}
                em razão de oscilações cambiais, tarifárias e da disponibilidade efetiva junto aos prestadores e fornecedores de serviços terceirizados à época da contratação, compreendendo: passagens aéreas internacionais e taxas aeroportuárias, diárias e políticas da rede hoteleira, traslados ferroviários (TGV/SNCF), serviços de alimentação e restaurantes, bilheterias e gratuidades de museus, acervos e monumentos históricos, bem como contratação de seguro-viagem internacional e operadores receptivos locais.
              </p>

              <p>
                A confirmação dos valores definitivos, das condições de pagamento e do rol exato de serviços inclusos e excluídos dar-se-á formalmente por meio de contrato específico de prestação de serviços no momento da abertura oficial das inscrições. A solicitação de cotação ou cadastro de interesse não implica reserva garantida de vaga nem obrigação pecuniária para qualquer das partes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
