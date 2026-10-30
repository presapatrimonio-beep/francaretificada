import React from 'react';
import { Shield, Compass, Plane, CheckCircle2, Award, Globe, Instagram, ExternalLink } from 'lucide-react';

export const InstitutionalSection: React.FC = () => {
  return (
    <div className="relative bg-[#050708] text-[#F0E9DC] overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 50% 20%, rgba(196, 154, 69, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 50% 80%, rgba(7, 25, 35, 0.4) 0%, transparent 70%)'
        }}
      />

      {/* ==================================================================== */}
      {/* CAPÍTULO I — SEÇÃO APOIO INSTITUCIONAL                               */}
      {/* ==================================================================== */}
      <section 
        id="apoio-institucional" 
        className="relative scroll-mt-28 pt-24 md:pt-32 pb-20 md:pb-28 border-t border-[#A7A29A]/15"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header editorial */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C49A45]/10 border border-[#C49A45]/30 text-[#DFC07D] text-[11px] uppercase tracking-[0.3em] font-medium">
              <Shield className="w-3.5 h-3.5 text-[#C49A45]" />
              <span>Chancela Histórica & Tradicional</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F0E9DC] font-light tracking-tight leading-tight">
              Apoio <span className="font-normal text-[#C49A45] italic">Institucional</span>
            </h2>

            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C49A45] to-transparent mx-auto my-4" />

            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#A7A29A] font-light">
              Grande Priorado do Rito Escocês Retificado do Brasil (GPRER)
            </p>
          </div>

          {/* Composição Nobre: Brasão Destacado e Texto Institucional */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Lado Esquerdo: Brasão Oficial Destacado em Proporções Originais */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative group p-6 sm:p-8 bg-gradient-to-b from-[#0d131a]/80 via-[#070b10] to-[#040608] border border-[#C49A45]/40 shadow-[0_20px_60px_rgba(0,0,0,0.85)] max-w-md w-full flex flex-col items-center text-center">
                
                {/* Linha decorativa no topo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#DFC07D] to-transparent" />
                
                {/* Imagem do Brasão Oficial */}
                <div className="py-4">
                  <img
                    src="/assets/aistudio/priorado_eddc943e.png"
                    alt="Brasão Oficial do Grande Priorado do Rito Escocês Retificado do Brasil"
                    className="h-64 sm:h-72 md:h-80 lg:h-96 w-auto object-contain drop-shadow-[0_12px_35px_rgba(0,0,0,0.95)] transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                <div className="pt-4 border-t border-[#A7A29A]/15 w-full space-y-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-[#DFC07D] font-serif block font-medium">
                      Scientia et Labore
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#A7A29A]/80 font-light mt-0.5 block">
                      Patrimônio Tradicional & RER
                    </span>
                  </div>

                  {/* Links Oficiais: Website & Instagram */}
                  <div className="pt-2.5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
                    <a
                      href="https://gprer.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#050708] border border-[#C49A45]/40 hover:border-[#DFC07D] text-[#DFC07D] hover:text-[#F0E9DC] text-[10px] tracking-wider font-sans transition-all duration-300 w-full sm:w-auto justify-center group/link cursor-pointer shadow-sm hover:bg-[#C49A45]/15"
                      title="Acessar o portal oficial do GPRER"
                    >
                      <Globe className="w-3.5 h-3.5 text-[#C49A45] group-hover/link:text-[#DFC07D]" />
                      <span>gprer.com.br</span>
                      <ExternalLink className="w-2.5 h-2.5 text-[#A7A29A] opacity-70 group-hover/link:opacity-100" />
                    </a>

                    <a
                      href="https://www.instagram.com/prioradoretificadobr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#050708] border border-[#C49A45]/40 hover:border-[#DFC07D] text-[#DFC07D] hover:text-[#F0E9DC] text-[10px] tracking-wider font-sans transition-all duration-300 w-full sm:w-auto justify-center group/link cursor-pointer shadow-sm hover:bg-[#C49A45]/15"
                      title="Instagram Oficial @prioradoretificadobr"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#C49A45] group-hover/link:text-[#DFC07D]" />
                      <span>Instagram</span>
                      <ExternalLink className="w-2.5 h-2.5 text-[#A7A29A] opacity-70 group-hover/link:opacity-100" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito: Texto Institucional Oficial */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C49A45] font-semibold">
                <Award className="w-4 h-4 text-[#C49A45]" />
                <span>Compromisso com as Fontes Históricas</span>
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl md:text-2xl text-[#F0E9DC] font-light leading-relaxed border-l-2 border-[#C49A45] pl-6 py-2 italic bg-gradient-to-r from-[#C49A45]/5 to-transparent">
                "Esta expedição conta com o apoio institucional do Grande Priorado do Rito Escocês Retificado do Brasil (GPRER), cuja identidade e tradição estão associadas à preservação, ao estudo e à valorização do patrimônio histórico e filosófico do Rito Escocês Retificado."
              </blockquote>

              <p className="text-sm sm:text-base text-[#A7A29A] font-light leading-relaxed pt-2">
                O Regime Escocês Retificado preserva um acervo espiritual e documental ímpar no cenário das tradições iniciáticas ocidentais. 
                Ao percorrer as cidades de Paris, Chartres e Lyon, a expedição estabelece uma ponte viva com os manuscritos, os templos e a 
                reforma conduzida por Jean-Baptiste Willermoz no século XVIII, unindo pesquisa rigorosa, solenidade e autoridade institucional.
              </p>

              {/* Pilares Institucionais */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-[#070b10] border border-[#A7A29A]/15 space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#DFC07D] font-semibold block">Preservação</span>
                  <p className="text-xs text-[#A7A29A] font-light">Resguardo das fontes originais e arquivos setecentistas.</p>
                </div>
                <div className="p-4 bg-[#070b10] border border-[#A7A29A]/15 space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#DFC07D] font-semibold block">Estudo</span>
                  <p className="text-xs text-[#A7A29A] font-light">Compreensão aprofundada dos rituais, símbolos e história.</p>
                </div>
                <div className="p-4 bg-[#070b10] border border-[#A7A29A]/15 space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#DFC07D] font-semibold block">Valorização</span>
                  <p className="text-xs text-[#A7A29A] font-light">Vivência autêntica e transmissão do legado do Rito.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* CAPÍTULO II — SEÇÃO OPERAÇÃO TURÍSTICA                               */}
      {/* ==================================================================== */}
      <section 
        id="operacao-turistica" 
        className="relative scroll-mt-28 pt-20 md:pt-28 pb-28 md:pb-36 border-t border-[#A7A29A]/15 bg-gradient-to-b from-[#050708] via-[#070e14] to-[#050708]"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header editorial */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#162738]/60 border border-[#4480A0]/40 text-[#DFC07D] text-[11px] uppercase tracking-[0.3em] font-medium">
              <Plane className="w-3.5 h-3.5 text-[#DFC07D]" />
              <span>Logística & Serviços de Viagem</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F0E9DC] font-light tracking-tight leading-tight">
              Operação <span className="font-normal text-[#C49A45] italic">Turística</span>
            </h2>

            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C49A45] to-transparent mx-auto my-4" />

            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#A7A29A] font-light">
              Estruturação Comercial e Serviços Especializados de Turismo
            </p>
          </div>

          {/* Composição: Logotipo CVC e Diretrizes Operacionais */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Lado Esquerdo: Logotipo Oficial da CVC em Destaque */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative group p-8 sm:p-10 bg-gradient-to-b from-[#091522] via-[#050c14] to-[#03060a] border border-[#3b678c]/40 hover:border-[#C49A45]/60 shadow-[0_20px_60px_rgba(0,0,0,0.85)] max-w-sm w-full flex flex-col items-center text-center transition-all duration-300">
                
                {/* Linha decorativa no topo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#4581a6] to-transparent" />
                
                {/* Logotipo Oficial CVC */}
                <div className="py-6 flex items-center justify-center">
                  <img
                    src="/assets/aistudio/logo-cvc-512_cbd0c26f.png"
                    alt="Logotipo Oficial CVC Operação Turística"
                    className="h-28 sm:h-32 md:h-36 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="pt-5 border-t border-white/10 w-full space-y-1">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#F0E9DC] font-bold block">
                    OPERAÇÃO TURÍSTICA
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-[#A7A29A] font-light block">
                    Referência em Serviços de Viagem
                  </span>
                </div>
              </div>
            </div>

            {/* Lado Direito: Textos Oficiais e Condições */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#DFC07D] font-semibold">
                <Compass className="w-4 h-4 text-[#C49A45]" />
                <span>Infraestrutura e Atendimento</span>
              </div>

              {/* Texto Principal Obrigatório */}
              <p className="font-serif text-lg sm:text-xl text-[#F0E9DC] font-light leading-relaxed border-l-2 border-[#C49A45] pl-6 py-1">
                A estruturação e a contratação dos serviços turísticos desta expedição estão sendo conduzidas com a CVC, empresa de turismo utilizada como referência para a aquisição de passagens aéreas, hospedagem e demais serviços necessários à viagem.
              </p>

              {/* Complemento Obrigatório */}
              <div className="p-4 sm:p-5 bg-[#08121a]/90 border border-[#3b678c]/30 text-xs sm:text-sm text-[#A7A29A] font-light leading-relaxed space-y-2">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#DFC07D] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C49A45] shrink-0" />
                  <span>Condições Comerciais e Reservas</span>
                </div>
                <p>
                  Valores, disponibilidade, condições de pagamento e efetivação das reservas estarão sujeitos à confirmação comercial junto à operadora.
                </p>
              </div>

              {/* Benefícios Estruturados da Operação */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 bg-[#050a10] border border-[#A7A29A]/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C49A45] mt-1.5 shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#F0E9DC] font-medium block">Passagens & Traslados</span>
                    <span className="text-[11px] text-[#A7A29A] font-light block mt-0.5">Emissões aéreas internacionais e conexões ferroviárias via TGV.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-[#050a10] border border-[#A7A29A]/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C49A45] mt-1.5 shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#F0E9DC] font-medium block">Hospedagem & Suporte</span>
                    <span className="text-[11px] text-[#A7A29A] font-light block mt-0.5">Rede hoteleira selecionada e assistência técnica de viagem.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
