import React from 'react';
import willermozImg from '../assets/images/portrait_willermoz_1792019498729.jpg';
import manuscriptsImg from '../assets/images/manuscripts_archive_quill_1792019500092.jpg';

export const WillermozSection: React.FC = () => {
  return (
    <section id="willermoz" className="relative bg-[#071923] text-[#F0E9DC] py-28 md:py-36 overflow-hidden border-t border-[#A7A29A]/15">
      {/* Ambient chiaroscuro backdrop */}
      <div className="absolute inset-0 bg-radial from-[#0B2029]/30 via-transparent to-[#050708]/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Visual Presentation: Fine Art Historical Portrait & Archival Document */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="relative aspect-[3/4] overflow-hidden shadow-2xl bg-[#050708]">
              <img
                src={willermozImg}
                alt="Retrato histórico de Jean-Baptiste Willermoz em seu gabinete de estudos setecentista"
                className="w-full h-full object-cover object-top filter brightness-[0.92] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071923] via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>

            <div className="flex items-baseline justify-between text-[11px] text-[#A7A29A] tracking-wider font-light">
              <span>Jean-Baptiste Willermoz · Lyon</span>
              <span className="italic text-[#A7A29A]/80">Representação artística em estudo histórico</span>
            </div>

            {/* Archival manuscript detail */}
            <div className="relative aspect-[16/9] overflow-hidden shadow-xl bg-[#050708] border-t border-[#A7A29A]/20">
              <img
                src={manuscriptsImg}
                alt="Manuscritos históricos e tratados preservados do século XVIII"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 left-3 text-[10px] uppercase tracking-widest text-[#F0E9DC]/75">
                Acervo Manuscrito & Códigos Doutrinais
              </div>
            </div>
          </div>

          {/* Narrative content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pl-6">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium mb-3">
                O Personagem Central
              </div>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#F0E9DC] font-light tracking-tight leading-none">
                Jean-Baptiste
                <span className="block font-normal text-[#F0E9DC] mt-2">
                  Willermoz
                </span>
              </h2>
              <div className="text-xl font-serif text-[#C49A45] tracking-[0.2em] mt-4 font-light">
                1730 — 1824
              </div>
            </div>

            <div className="py-6 border-y border-[#C49A45]/30">
              <p className="font-serif text-xl sm:text-2xl text-[#F0E9DC] leading-snug font-light text-balance italic">
                Compreender Willermoz é compreender o contexto histórico da formação do Regime.
              </p>
            </div>

            <div className="space-y-6 text-[#F0E9DC]/85 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Maçom e pensador de Lyon, Willermoz desempenhou papel central na reorganização de tradições maçônicas que contribuíram para a formação do <strong className="font-medium text-[#F0E9DC]">Regime Escocês Retificado</strong>.
              </p>
              <p>
                Sua atuação esteve ligada à <strong className="font-medium text-[#F0E9DC]">Reforma de Lyon</strong>, ao <strong className="font-medium text-[#F0E9DC]">Convento das Gálias de 1778</strong> e aos debates que antecederam o <strong className="font-medium text-[#F0E9DC]">Convento de Wilhelmsbad, em 1782</strong>.
              </p>
              <p>
                Sua trajetória permite investigar a relação histórica entre Maçonaria, formação moral, referências cristãs e tradição cavalheiresca — em diálogo permanente com os homens e correntes espirituais de sua época.
              </p>
            </div>

            {/* Historical rigor milestones in text without cards */}
            <div className="pt-8 border-t border-[#A7A29A]/15 space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#F0E9DC] font-medium">
                Marcos Históricos Documentados
              </div>

              <div className="space-y-4 text-sm text-[#A7A29A]">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-base text-[#C49A45] font-normal w-12 shrink-0">1778</span>
                  <p className="leading-relaxed">
                    <strong className="text-[#F0E9DC] font-medium">Convento das Gálias:</strong> Willermoz coordena em Lyon a redação do Código Maçônico das Lojas Reunidas e Retificadas e o Código da Ordem dos Cavaleiros Benfazejos da Cidade Santa.
                  </p>
                </div>

                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-base text-[#C49A45] font-normal w-12 shrink-0">1782</span>
                  <p className="leading-relaxed">
                    <strong className="text-[#F0E9DC] font-medium">Convento de Wilhelmsbad:</strong> Consolidação europeia do sistema retificado, afastando os mitos de filiação templária direta e definindo sua identidade moral e espiritual.
                  </p>
                </div>

                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-base text-[#C49A45] font-normal w-12 shrink-0">Lyon</span>
                  <p className="leading-relaxed">
                    <strong className="text-[#F0E9DC] font-medium">O Arquivo Documental:</strong> Preservação de manuscritos que permitem à historiografia contemporânea examinar com fidelidade as origens do sistema.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
