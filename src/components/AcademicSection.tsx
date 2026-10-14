import React from 'react';
import manuscriptsImg from '../assets/images/manuscripts_archive_quill_1792019500092.jpg';

export const AcademicSection: React.FC = () => {
  const topics = [
    { title: 'História do Regime Escocês Retificado', detail: 'Das origens francesas aos conventos fundamentais e consolidação suíça e europeia.' },
    { title: 'Vida e Obra de Willermoz', detail: 'Trajetória pessoal, correspondências privadas e correspondência com as Lojas.' },
    { title: 'A Reforma de Lyon (1778)', detail: 'A convocação do Convento das Gálias e a formulação da regra moral.' },
    { title: 'O Convento de Wilhelmsbad (1782)', detail: 'O debate europeu sobre a herança templária e a refundação ritualística.' },
    { title: 'Martinès de Pasqually & Élus Coëns', detail: 'A doutrina teosófica original e sua influência direta no pensamento willermoziano.' },
    { title: 'Dimensão Cristã & Cavalheiresca', detail: 'A Ordem dos Cavaleiros Benfazejos da Cidade Santa e o ideal de beneficência.' },
    { title: 'História da Maçonaria Francesa', detail: 'O ambiente do Século das Luzes, o Grande Oriente e os ritos contemporâneos.' },
    { title: 'Pesquisa Documental & Monumental', detail: 'Metodologia de análise crítica de fontes manuscritas e leitura iconográfica de catedrais.' },
    { title: 'Bibliografia Comentada', detail: 'Guia de leitura com as principais obras acadêmicas de historiadores franceses e internacionais.' },
  ];

  return (
    <section className="relative bg-[#071923] text-[#F0E9DC] py-28 md:py-36 border-t border-[#A7A29A]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Title */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium mb-3">
            Formação Cultural & Histórica
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F0E9DC] font-light leading-tight tracking-tight">
            Uma viagem que continua depois do retorno.
          </h2>
          <p className="font-serif text-lg text-[#F0E9DC]/80 font-light mt-4 max-w-2xl leading-relaxed">
            A expedição é concebida como um programa formativo de imersão histórica e documental, combinando percursos urbanos com sessões de aprofundamento conceitual.
          </p>
        </div>

        {/* Asymmetric layout: Documentary topics list (editorial text-led) + Archival visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Topics list: Natural editorial cadence, not cards */}
          <div className="lg:col-span-7 divide-y divide-[#A7A29A]/15 border-y border-[#A7A29A]/15">
            {topics.map((t, idx) => (
              <div key={idx} className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 group">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-sm text-[#C49A45] font-light w-6 shrink-0">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span className="font-serif text-lg sm:text-xl text-[#F0E9DC] group-hover:text-[#C49A45] transition-colors font-normal">
                    {t.title}
                  </span>
                </div>
                <p className="sm:max-w-xs text-xs text-[#A7A29A] font-light leading-relaxed pl-10 sm:pl-0">
                  {t.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Academic disclaimer & visual sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl bg-[#050708]">
              <img
                src={manuscriptsImg}
                alt="Pesquisa documental de tratados históricos e correspondências do Iluminismo"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071923] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Transparent institutional notice */}
            <div className="p-6 bg-[#050708]/70 border border-[#A7A29A]/20 space-y-3">
              <div className="text-xs uppercase tracking-[0.2em] text-[#C49A45] font-medium">
                Termo de Transparência Acadêmica
              </div>
              <p className="text-xs text-[#A7A29A] leading-relaxed font-light">
                Aulas expositivas preparatórias, cadernos bibliográficos comentados e certificado de participação estão previstos mediante confirmação operacional da turma.
              </p>
              <p className="text-xs text-[#A7A29A] leading-relaxed font-light">
                Por rigor e ética institucional, esta viagem não promete acesso a arquivos estatais restritos, participação em sessões ritualísticas maçônicas ou recepções oficiais sem prévia autorização das instituições hospedeiras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
