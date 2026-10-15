import React from 'react';
import manuscriptsImg from '../assets/images/manuscripts_archive_quill_1792019500092.jpg';
import chartresFacadeImg from '../assets/images/chartres_cathedral_golden_1792019499361.jpg';
import parisStreetImg from '../assets/images/paris_historic_dusk_1792019500631.jpg';
import willermozPortraitImg from '../assets/images/portrait_willermoz_1792019498729.jpg';

export const CulturalFormationSection: React.FC = () => {
  return (
    <section className="relative bg-[#050708] text-[#F0E9DC] overflow-hidden">
      {/* ============================================================== */}
      {/* PARTE 1: ABERTURA EM TELA INTEIRA — MANUSCRITOS & TRATADOS      */}
      {/* "O CONHECIMENTO NÃO TERMINA NO DESTINO."                        */}
      {/* ============================================================== */}
      <div className="relative min-h-[100vh] flex flex-col justify-end overflow-hidden border-t border-[#A7A29A]/15">
        <div className="absolute inset-0 z-0">
          <img
            src={manuscriptsImg}
            alt="Manuscritos históricos e tratados encadernados em couro sobre mesa de madeira iluminados por luz natural de janela"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] transform transition-transform duration-[20000ms] scale-100 hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/50 to-[#050708]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050708]/90 via-[#050708]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-24 md:pb-32 pt-40">
          <div className="max-w-4xl space-y-6">
            <div className="text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium">
              Formação Cultural & Histórica
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F0E9DC] font-light tracking-tight leading-[1.02]">
              O conhecimento não termina no destino.
            </h2>

            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F0E9DC]/90 font-light italic leading-relaxed max-w-2xl text-balance">
              Uma jornada de formação histórica e cultural dedicada às origens do Regime Escocês Retificado.
            </p>

            <p className="text-[11px] text-[#A7A29A]/70 italic tracking-wider font-sans">
              * Acervo fotográfico ilustrativo de tratados e correspondências francesas setecentistas em estudo documental.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* PARTE 2: INVESTIGAR. COMPREENDER. APROFUNDAR.                  */}
      {/* Transição gradual e conteúdos formativos progressivos na tela.  */}
      {/* ============================================================== */}
      <div className="relative py-28 md:py-36 bg-[#071923] border-t border-[#A7A29A]/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Main Title */}
          <div className="max-w-4xl mb-24 md:mb-32">
            <div className="text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium mb-4">
              Pedagogia Imersiva
            </div>
            <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F0E9DC] font-light tracking-tight leading-none mb-6">
              Investigar. Compreender. Aprofundar.
            </h3>
            <p className="font-serif text-xl sm:text-2xl text-[#C49A45] font-light italic leading-relaxed max-w-3xl">
              Cada etapa da viagem é articulada a um eixo do conhecimento humano, afastando leituras superficiais para alcançar a substância das fontes.
            </p>
          </div>

          {/* Sequential narrative scenes (NO tables, NO lists, NO cards) */}
          <div className="space-y-28 md:space-y-40">
            {/* Tema 1 & 2: História do RER & Willermoz */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-6 space-y-8">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium">
                    Eixo Formativo I
                  </span>
                  <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F0E9DC] font-light leading-snug">
                    História do Regime Escocês Retificado
                  </h4>
                  <p className="text-base sm:text-lg text-[#F0E9DC]/80 font-light leading-relaxed">
                    Compreensão da evolução cronológica e doutrinária: das Lojas francesas às grandes assembleias que definiram uma identidade iniciática singular, rigorosa e independente na Europa.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#A7A29A]/15 space-y-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium">
                    Eixo Formativo II
                  </span>
                  <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F0E9DC] font-light leading-snug">
                    Vida e Obra de Jean-Baptiste Willermoz
                  </h4>
                  <p className="text-base sm:text-lg text-[#F0E9DC]/80 font-light leading-relaxed">
                    Investigação da psicologia, do rigor intelectual e das motivações espirituais do pensador de Lyon, examinando cartas, cadernos e registros de sua vasta correspondência epistolar.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden shadow-2xl bg-[#050708]">
                  <img
                    src={willermozPortraitImg}
                    alt="Retrato de Willermoz em seu gabinete de estudos"
                    className="w-full h-full object-cover object-top filter brightness-[0.85] contrast-[1.05]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071923] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-6 text-xs text-[#F0E9DC]/80 font-serif italic">
                    Gabinete de estudos de Willermoz · Século XVIII
                  </div>
                </div>
              </div>
            </div>

            {/* Tema 3 & 4: Reforma de Lyon & Wilhelmsbad */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative aspect-[4/3] overflow-hidden shadow-2xl bg-[#050708]">
                  <img
                    src={manuscriptsImg}
                    alt="Manuscritos de época e tratados de 1778 e 1782"
                    className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071923] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-6 text-xs text-[#F0E9DC]/80 font-serif italic">
                    Códigos fundamentais redigidos nos Conventos
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium">
                    Eixo Formativo III
                  </span>
                  <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F0E9DC] font-light leading-snug">
                    Reforma de Lyon e Convento das Gálias
                  </h4>
                  <p className="text-base sm:text-lg text-[#F0E9DC]/80 font-light leading-relaxed">
                    Análise comparativa da legislação aprovada em 1778, os novos rituais simbólicos e a criação da classe cavalheiresca devotada ao socorro dos desvalidos e ao aprimoramento civil.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#A7A29A]/15 space-y-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium">
                    Eixo Formativo IV
                  </span>
                  <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F0E9DC] font-light leading-snug">
                    O Convento de Wilhelmsbad (1782)
                  </h4>
                  <p className="text-base sm:text-lg text-[#F0E9DC]/80 font-light leading-relaxed">
                    O debate europeu que rechaçou o mito da vingança e da herança templária guerreira em favor de uma cavalaria espiritual de restauração moral.
                  </p>
                </div>
              </div>
            </div>

            {/* Tema 5 & 6: Martinez de Pasqually & Dimensão Cristã */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-6 space-y-8">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium">
                    Eixo Formativo V
                  </span>
                  <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F0E9DC] font-light leading-snug">
                    Martinez de Pasqually e os Élus Coëns
                  </h4>
                  <p className="text-base sm:text-lg text-[#F0E9DC]/80 font-light leading-relaxed">
                    Estudo da doutrina teosófica da Reintegração dos Seres e como suas premissas metafísicas foram adaptadas por Willermoz para constituir o alicerce moral do R.E.R.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#A7A29A]/15 space-y-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium">
                    Eixo Formativo VI
                  </span>
                  <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F0E9DC] font-light leading-snug">
                    Dimensão Cristã e Cavalheiresca
                  </h4>
                  <p className="text-base sm:text-lg text-[#F0E9DC]/80 font-light leading-relaxed">
                    A prática das virtudes cristãs primitivas desprovidas de dogmatismos sectários, unindo caridade ativa, devoção ao Bem comum e lealdade aos deveres de Estado.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden shadow-2xl bg-[#050708]">
                  <img
                    src={chartresFacadeImg}
                    alt="Arquitetura sagrada e proporções geométricas medievais"
                    className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071923] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-6 text-xs text-[#F0E9DC]/80 font-serif italic">
                    Patrimônio monumental e reflexão metafísica
                  </div>
                </div>
              </div>
            </div>

            {/* Tema 7 & 8: Maçonaria Francesa & Pesquisa Documental */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative aspect-[4/3] overflow-hidden shadow-2xl bg-[#050708]">
                  <img
                    src={parisStreetImg}
                    alt="Paris histórica e as instituições do Iluminismo"
                    className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071923] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-6 text-xs text-[#F0E9DC]/80 font-serif italic">
                    Centros de memória e bibliotecas de Paris
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium">
                    Eixo Formativo VII
                  </span>
                  <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F0E9DC] font-light leading-snug">
                    História da Maçonaria Francesa
                  </h4>
                  <p className="text-base sm:text-lg text-[#F0E9DC]/80 font-light leading-relaxed">
                    O relacionamento complexo entre o Grande Oriente de França, as Lojas escocesas e as ordens cavalheirescas às vésperas da Revolução de 1789.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#A7A29A]/15 space-y-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium">
                    Eixo Formativo VIII
                  </span>
                  <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F0E9DC] font-light leading-snug">
                    Pesquisa Documental e Bibliografia Comentada
                  </h4>
                  <p className="text-base sm:text-lg text-[#F0E9DC]/80 font-light leading-relaxed">
                    Metodologia historiográfica para ler e interpretar manuscritos de época, acompanhada de dossiê bibliográfico com autores de referência internacional.
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
