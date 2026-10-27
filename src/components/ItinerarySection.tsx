import React, { useState } from 'react';
import { ItineraryDay } from '../types';

export const ItinerarySection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const itinerary: ItineraryDay[] = [
    {
      day: 1,
      date: '15/10/2027',
      title: 'Brasil → França',
      subtitle: 'Embarque Previsto & Travessia',
      description: 'Embarque previsto no Aeroporto Internacional de Guarulhos com destino à França. Noite a bordo e início da jornada transatlântica.',
      highlights: ['Embarque em São Paulo (Guarulhos)', 'Voo noturno com destino a Paris'],
    },
    {
      day: 2,
      date: '16/10/2027',
      title: 'Chegada a Paris',
      subtitle: 'Início da Programação Terrestre',
      description: 'Chegada prevista na capital francesa, traslado e check-in. Início oficial da programação de 10 dias com ambientação urbana e introdução ao contexto do século XVIII.',
      highlights: ['Chegada prevista a Paris', 'Abertura da programação terrestre', 'Ambientação histórica'],
    },
    {
      day: 3,
      date: '17/10/2027',
      title: 'Paris Maçônica',
      subtitle: 'Memória Institucional & Rue Cadet',
      description: 'Visita ao acervo do Musée de la Franc-Maçonnerie e aos espaços históricos da Rue Cadet. Análise dos primeiros ritos e sistemas maçônicos parisienses.',
      highlights: ['Musée de la Franc-Maçonnerie', 'Rue Cadet', 'Estudo de insígnias e paramentos do séc. XVIII'],
    },
    {
      day: 4,
      date: '18/10/2027',
      title: 'Iluminismo e História',
      subtitle: 'O Panteão das Ideias & Quartier Latin',
      description: 'Percurso pelo Quartier Latin e visita ao Panthéon. Discussão sobre a dialética entre os filósofos iluministas, a maçonaria especulativa e as ordens místicas.',
      highlights: ['Panthéon', 'Quartier Latin', 'História intelectual do Século das Luzes'],
    },
    {
      day: 5,
      date: '19/10/2027',
      title: 'Pesquisa Documental',
      subtitle: 'Acervos & Manuscritos',
      description: 'Jornada orientada à Bibliothèque nationale de France (BnF), conforme condições de acesso e disponibilidade institucional. Análise de fontes primárias.',
      highlights: ['Bibliothèque nationale de France', 'Metodologia de fontes primárias'],
    },
    {
      day: 6,
      date: '20/10/2027',
      title: 'Chartres',
      subtitle: 'Pedra, Luz & Espaço Litúrgico',
      description: 'Excursão de dia inteiro a Chartres. Investigação in situ da arquitetura gótica da Catedral, o simbolismo dos vitrais do século XIII e a distinção histórica dos monumentos.',
      highlights: ['Catedral Notre-Dame de Chartres', 'Estudo in situ da luz e geometria sagrada', 'Retorno a Paris'],
    },
    {
      day: 7,
      date: '21/10/2027',
      title: 'Paris → Lyon',
      subtitle: 'Deslocamento Ferroviário em TGV',
      description: 'Viagem em trem de alta velocidade (TGV) rumo a Lyon. Chegada, instalação e caminhada de reconhecimento pelo centro histórico e margens do Saône.',
      highlights: ['Deslocamento TGV Paris → Lyon', 'Presqu&apos;île de Lyon', 'Introdução à geografia urbana willermoziana'],
    },
    {
      day: 8,
      date: '22/10/2027',
      title: 'Willermoz e a Reforma de Lyon',
      subtitle: 'O Convento das Gálias de 1778',
      description: 'Percurso pelos cenários da Lyon setecentista: Vieux Lyon, os antigos bairros dos negociantes de seda e os espaços associados ao círculo intelectual de Willermoz.',
      highlights: ['Vieux Lyon', 'Tradição do Convento das Gálias', 'Gênese do Código Maçônico das Lojas Retificadas'],
    },
    {
      day: 9,
      date: '23/10/2027',
      title: 'Lyon e a Dimensão Cristã',
      subtitle: 'Fourvière & A Tradição Cavalheiresca',
      description: 'Subida à colina de Fourvière com vista panorâmica sobre o Saône e a cidade. Sessão temática sobre a espiritualidade cristã e a cavalaria espiritual do Regime.',
      highlights: ['Colina de Fourvière', 'Mesa de síntese doutrinária', 'Encontro solene de encerramento'],
    },
    {
      day: 10,
      date: '24–25/10/2027',
      title: 'Síntese e Retorno',
      subtitle: 'Data de Referência para Encerramento',
      description: 'Encerramento oficial das atividades acadêmicas. Data de referência de retorno em 25/10/2027 com traslado ao aeroporto e voo de volta ao Brasil, sujeita à confirmação das malhas aéreas.',
      highlights: ['25/10/2027: Data de referência para retorno ao Brasil', 'Entrega do caderno de conclusão'],
    },
  ];

  return (
    <section id="roteiro" className="relative bg-[#050708] text-[#F0E9DC] py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section title */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium mb-3">
            Itinerário Pedagógico · 16 a 25 de Outubro de 2027
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F0E9DC] font-light leading-tight tracking-tight">
            Dez dias para estudar uma tradição em seu contexto.
          </h2>
          <p className="font-serif text-lg text-[#F0E9DC]/80 font-light mt-4 max-w-2xl leading-relaxed">
            Uma progressão cronológica e temática de 16 a 25 de outubro de 2027 estruturada para que cada local visitado ilumine os textos e a formação moral do Regime Retificado.
          </p>
        </div>

        {/* Narrative Vertical Timeline without traditional tables or calendar cards */}
        <div className="relative border-l border-[#A7A29A]/20 ml-3 sm:ml-6 md:ml-8 pl-8 sm:pl-12 md:pl-16 space-y-14 md:space-y-20">
          {itinerary.map((item) => {
            const isExpanded = activeDay === item.day;
            return (
              <div
                key={item.day}
                className="relative group transition-all"
                onMouseEnter={() => setActiveDay(item.day)}
              >
                {/* Timeline node */}
                <div
                  className={`absolute -left-[41px] sm:-left-[57px] md:-left-[73px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                    isExpanded
                      ? 'border-[#C49A45] bg-[#C49A45]'
                      : 'border-[#A7A29A]/50 bg-[#050708] group-hover:border-[#C49A45]'
                  }`}
                />

                {/* Day Header */}
                <div className="flex flex-wrap items-baseline gap-4 mb-2">
                  <span className="font-serif text-xl sm:text-2xl text-[#C49A45] font-normal tracking-wide">
                    Dia {String(item.day).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-xs text-[#F0E9DC]/85 tracking-wider">
                    {item.date}
                  </span>
                  <span aria-hidden="true" className="text-[#A7A29A]/40">·</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A7A29A] font-sans">
                    {item.subtitle}
                  </span>
                </div>

                {/* Day Title */}
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F0E9DC] font-light group-hover:text-[#DFC07D] transition-colors mb-3">
                  {item.title}
                </h3>

                {/* Day Description */}
                <p className="text-base text-[#F0E9DC]/80 max-w-3xl leading-relaxed font-light mb-4">
                  {item.description}
                </p>

                {/* Unboxed highlights metadata */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#A7A29A] font-light">
                  {item.highlights.map((h, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span aria-hidden="true" className="text-[#C49A45]/60">·</span>}
                      <span>{h}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational adjustment note */}
        <div className="mt-20 pt-8 border-t border-[#A7A29A]/15 text-xs text-[#A7A29A] max-w-3xl font-light leading-relaxed space-y-2">
          <strong className="text-[#F0E9DC] font-medium uppercase tracking-wider block mb-1">
            Proposta de Planejamento & Condições Operacionais:
          </strong>
          <p>
            As datas de 16 a 25 de outubro de 2027 constituem uma proposta de planejamento. O itinerário definitivo será ajustado às datas e horários dos voos contratados, horários vigentes de funcionamento das instituições e acervos na França e às confirmações de reservas dos prestadores de serviços.
          </p>
        </div>
      </div>
    </section>
  );
};
