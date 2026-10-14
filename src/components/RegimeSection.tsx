import React from 'react';
import manuscriptsImg from '../assets/images/manuscripts_archive_quill_1792019500092.jpg';

export const RegimeSection: React.FC = () => {
  const elements = [
    {
      kicker: 'Contexto das Luzes',
      title: 'A Maçonaria Francesa do Século XVIII',
      text: 'Um período de intensa efervescência filosófica, no qual a Maçonaria na França expandiu-se e diversificou-se em múltiplos sistemas e correntes de pensamento.',
    },
    {
      kicker: 'Linhagem Histórica',
      title: 'A Estrita Observância Templária',
      text: 'Sistema cavaleiresco de origem germânica ao qual Willermoz se filiou em 1774, servindo de matriz estrutural para a posterior reorganização retificada.',
    },
    {
      kicker: 'Renovação Legislativa',
      title: 'A Reforma de Lyon',
      text: 'O minucioso trabalho de depuração doutrinária e ritual que redefiniu a ordem simbólica e moral sem rupturas temerárias com a tradição.',
    },
    {
      kicker: 'Fundação Orgânica (1778)',
      title: 'O Convento das Gálias',
      text: 'A histórica assembleia que aprovou o Código Maçônico das Lojas Reunidas e Retificadas e estabeleceu a Ordem dos Cavaleiros Benfazejos da Cidade Santa (C.B.C.S.).',
    },
    {
      kicker: 'Consolidação Europeia (1782)',
      title: 'O Convento de Wilhelmsbad',
      text: 'O grande congresso geral europeu que selou o afastamento da tese templária literal e consagrou a identidade moral e espiritual do Regime.',
    },
    {
      kicker: 'Arquiteto Doutrinário',
      title: 'Jean-Baptiste Willermoz',
      text: 'O articulador persistente que dedicou décadas à conservação e redação dos rituais, instruções e correspondências da Ordem.',
    },
    {
      kicker: 'Fonte Teosófica',
      title: 'Martinès de Pasqually',
      text: 'Mestre espiritual de Willermoz, cuja doutrina metafísica da reintegração dos seres influenciou profundamente os fundamentos conceituais do Regime.',
    },
    {
      kicker: 'A Ordem Teúrgica',
      title: 'Os Élus Coëns',
      text: 'A Ordem dos Cavaleiros Maçons Elus Coëns do Universo, cujo pensamento permeou a formação dos fundadores da Retificação.',
    },
    {
      kicker: 'Vocação Tradicional',
      title: 'Referências Cristãs e Cavalheirescas',
      text: 'A preservação do espírito do cristianismo primitivo e da cavalaria mística, orientados para a edificação moral e o serviço desinteressado à humanidade.',
    },
    {
      kicker: 'A Finalidade do Homem',
      title: 'A Formação Moral na Tradição Retificada',
      text: 'O combate aos próprios vícios, o aperfeiçoamento das virtudes e a reintegração do homem em seu estado original de retidão.',
    },
  ];

  return (
    <section id="regime" className="relative bg-[#050708] text-[#F0E9DC] py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <div className="text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium mb-3">
            Doutrina, História & Identidade
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F0E9DC] font-light leading-tight tracking-tight">
            O Regime Escocês Retificado
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-[#C49A45] font-light italic mt-3 max-w-3xl leading-snug">
            Uma tradição de rigor moral, raízes cavalheirescas e identidade própria.
          </p>
          <div className="mt-6 p-4 bg-[#071923] border border-[#A7A29A]/15 text-xs text-[#A7A29A] leading-relaxed max-w-3xl font-light">
            <strong className="text-[#F0E9DC] font-medium uppercase tracking-wider block mb-1">
              Distinção Histórica Essencial:
            </strong>
            O Regime Escocês Retificado (R.E.R.) possui história, ritos e constituição absolutamente independentes do Rito Escocês Antigo e Aceito (R.E.A.A.). Não se trata de uma variante ou abreviação, mas de um sistema iniciático autônomo com doutrina e classes próprias.
          </div>
        </div>

        {/* 10 documentary themes - rendered in high editorial cadence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Topics in documentary chronological sequence */}
          <div className="lg:col-span-8 divide-y divide-[#A7A29A]/15 border-y border-[#A7A29A]/15">
            {elements.map((item, idx) => (
              <div key={idx} className="py-7 group">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-serif text-sm text-[#C49A45] font-light w-8 shrink-0">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-[#A7A29A]">
                    {item.kicker}
                  </div>
                </div>

                <div className="pl-12">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F0E9DC] font-normal group-hover:text-[#DFC07D] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#F0E9DC]/80 font-light leading-relaxed max-w-2xl">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Documentary imagery & manuscript testimony */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl bg-[#071923]">
              <img
                src={manuscriptsImg}
                alt="Manuscrito original do Código das Lojas Reunidas e Retificadas"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-[11px] text-[#F0E9DC]/80 font-serif italic">
                Preservação documental setecentista
              </div>
            </div>

            <div className="p-6 bg-[#071923]/60 border border-[#A7A29A]/15 text-xs text-[#A7A29A] leading-relaxed font-light space-y-3">
              <div className="text-xs uppercase tracking-[0.2em] text-[#C49A45] font-medium">
                Metodologia Documental
              </div>
              <p>
                A imersão apoia-se exclusivamente no estudo crítico de fontes primárias, manuscritos preservados e na melhor historiografia acadêmica internacional (como os trabalhos de Alice Joly, René Le Forestier, Antoine Faivre e Jean-François Var).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
