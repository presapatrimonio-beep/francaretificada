import React, { useState } from 'react';
import { MapPin, ExternalLink, BookOpen, AlertCircle, Compass, Calendar, ChevronRight } from 'lucide-react';

import embarqueGuarulhosImg from '../assets/images/itinerary/embarque_guarulhos_t3.jpg';
import parisDuskImg from '../assets/images/paris_historic_dusk_1792019500631.jpg';
import museeFmImg from '../assets/images/itinerary/musee_fm_rue_cadet.jpg';
import bnfRichelieuImg from '../assets/images/itinerary/bnf_richelieu.jpg';
import versaillesFacadeImg from '../assets/images/chateau_versailles_facade_cour_royale.jpg';
import chartresCathedralImg from '../assets/images/chartres_cathedral_golden_1792019499361.jpg';
import archivesEureEtLoirImg from '../assets/images/itinerary/archives_eure_et_loir.jpg';
import croixRousseImg from '../assets/images/itinerary/croix_rousse_lyon.jpg';
import bmLyonImg from '../assets/images/itinerary/bm_lyon_part_dieu.jpg';
import fourviereImg from '../assets/images/itinerary/fourviere_basilique.jpg';

interface ItineraryDayData {
  dayNumber: number;
  dayLabel: string;
  date: string;
  city: string;
  country: string;
  axis: string;
  title: string;
  presentation: string;
  image: string;
  imageCaption: string;
  pointsOfInterest: string[];
  complementaryPoints?: string[];
  priorityManuscripts?: string[];
  historicalApproach?: string;
  pedagogicalObjective?: string;
  historicalReservation?: string;
  operationalNote?: string;
  mapUrl: string;
  mapLabel: string;
}

export const ItinerarySection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const itinerary: ItineraryDayData[] = [
    {
      dayNumber: 1,
      dayLabel: '01',
      date: '15/10/2027',
      city: 'São Paulo → Paris',
      country: 'Brasil / França',
      axis: 'Embarque e travessia transatlântica',
      title: 'Embarque e travessia transatlântica',
      presentation:
        'Embarque previsto no Aeroporto Internacional de Guarulhos, com destino a Paris. Início da expedição com voo internacional noturno e travessia transatlântica.',
      image: embarqueGuarulhosImg,
      imageCaption: 'Aeroporto Internacional de Guarulhos — Terminal 3 Internacional',
      pointsOfInterest: [
        'Embarque em São Paulo (Guarulhos)',
        'Voo internacional noturno',
        'Travessia transatlântica',
        'Início da expedição formativa',
      ],
      operationalNote: 'Noite a bordo, conforme horário do voo internacional contratado.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Aeroporto+Internacional+de+Guarulhos+Terminal+3',
      mapLabel: 'Aeroporto de Guarulhos (Terminal 3)',
    },
    {
      dayNumber: 2,
      dayLabel: '02',
      date: '16/10/2027',
      city: 'Paris',
      country: 'França',
      axis: 'Ambientação histórica e introdução à França do século XVIII',
      title: 'Chegada a Paris — abertura da jornada',
      presentation:
        'Chegada prevista a Paris, traslado privativo ao hotel, check-in e acomodação. Início da ambientação urbana e introdução histórica à maçonaria francesa e ao contexto intelectual do século XVIII.',
      image: parisDuskImg,
      imageCaption: 'Paris histórica ao entardecer — margens do Sena e arquitetura setecentista',
      pointsOfInterest: [
        'Chegada prevista a Paris',
        'Traslado privativo ao hotel',
        'Check-in e acomodação',
        'Ambientação urbana ao longo do Sena e boulevards históricos',
        'Introdução histórica à maçonaria francesa e ao contexto intelectual do século XVIII',
      ],
      operationalNote:
        'Não estão programadas visitas documentais complexas neste dia, considerando o deslocamento internacional e a necessária adaptação dos participantes ao fuso horário.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Paris+Centre+France',
      mapLabel: 'Paris — Centro Histórico',
    },
    {
      dayNumber: 3,
      dayLabel: '03',
      date: '17/10/2027',
      city: 'Paris',
      country: 'França',
      axis: 'História institucional e cultura material da maçonaria francesa',
      title: 'Paris Maçônica — instituições e memória',
      presentation:
        'Imersão profunda na história institucional e na cultura material da maçonaria setecentista, com estudo de acervos, paramentos e da evolução das oficinas na Rue Cadet.',
      image: museeFmImg,
      imageCaption: 'Hôtel du Grand Orient de France e Musée de la Franc-Maçonnerie — 16 Rue Cadet, Paris',
      pointsOfInterest: [
        'Musée de la Franc-Maçonnerie',
        'Grand Orient de France',
        'Rue Cadet — centro histórico das obediências francesas',
        'Bibliothèque du Grand Orient de France, mediante autorização prévia',
        'Estudo de insígnias, paramentos, medalhas e documentos maçônicos do século XVIII',
      ],
      pedagogicalObjective:
        'Compreender a organização institucional da maçonaria francesa, sua cultura material e a evolução das lojas e obediências no contexto do Iluminismo.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=16+Rue+Cadet+75009+Paris+France',
      mapLabel: '16 Rue Cadet — Musée de la Franc-Maçonnerie & GODF',
    },
    {
      dayNumber: 4,
      dayLabel: '04',
      date: '18/10/2027',
      city: 'Paris',
      country: 'França',
      axis: 'Investigação documental e preservação da memória',
      title: 'Paris — arquivos, bibliotecas e memória maçônica',
      presentation:
        'Jornada voltada à investigação documental nos maiores repositórios de manuscritos da França, desvendando as fontes primárias que fundamentam a historiografia acadêmica da maçonaria.',
      image: bnfRichelieuImg,
      imageCaption: 'Bibliothèque nationale de France (BnF) — Site Histórico Richelieu, Salle Ovale e Departamento de Manuscritos',
      pointsOfInterest: [
        'Bibliothèque nationale de France — fonds maçonnique',
        'Pesquisa nas séries documentais FM1 a FM8, conforme disponibilidade institucional',
        'Fichier Bossu — catálogo biográfico fundamental para o século XVIII',
        'Bibliothèque de l\'Arsenal, conforme disponibilidade e pertinência documental',
        'Musée de la Grande Loge de France',
        'Musée et Bibliothèque de la Grande Loge Nationale Française, mediante agendamento',
      ],
      complementaryPoints: [
        'Petit Palais — memória da exposição antimaçônica de 1941 (análise da repressão e salvaguarda de arquivos)',
        'Cimetière du Père-Lachaise — roteiro biográfico de personalidades históricas com filiação maçônica comprovada',
      ],
      pedagogicalObjective:
        'Conhecer os acervos, documentos, manuscritos e registros originais que permitem reconstruir cientificamente a história da maçonaria francesa.',
      historicalReservation:
        'Ressalva importante: os pontos são apresentados como atividades previstas ou possibilidades sujeitas à autorização e disponibilidade dos órgãos custodiadores. Não se afirma que todos os acervos serão necessariamente acessados no mesmo dia.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Biblioth%C3%A8que+nationale+de+France+Richelieu+Paris',
      mapLabel: 'BnF Richelieu & Acervos Documentais de Paris',
    },
    {
      dayNumber: 5,
      dayLabel: '05',
      date: '19/10/2027',
      city: 'Versalhes',
      country: 'França',
      axis: 'Monarquia, aristocracia, sociabilidade e ambiente intelectual do século XVIII',
      title: 'Versalhes — a corte e o século das Luzes',
      presentation:
        'Investigação in situ do centro nevrálgico da monarquia francesa, permitindo compreender a formação política, cultural e aristocrática na qual circularam personagens ligados à maçonaria e às correntes do Iluminismo.',
      image: versaillesFacadeImg,
      imageCaption: 'Château de Versailles — Cour Royale e Fachada Dourada Monumental',
      pointsOfInterest: [
        'Château de Versailles',
        'Galerie des Glaces (Galeria dos Espelhos)',
        'Jardins de Versailles e perspectiva monumental de Le Nôtre',
        'Grand Trianon',
        'Petit Trianon',
        'Hameau de la Reine (Aldeia da Rainha)',
      ],
      historicalApproach:
        'Investigar o ambiente político, intelectual e aristocrático no qual circularam personagens ligados à maçonaria e às ideias das Luzes. Utilizar os recursos de pesquisa do Centre de recherche du château de Versailles e do projeto Verspera como referências para investigação biográfica.',
      pedagogicalObjective:
        'Compreender as relações entre corte, sociedade aristocrática, Iluminismo e sociabilidade maçônica no Antigo Regime francês.',
      historicalReservation:
        'Ressalva histórica fundamental: o Palácio de Versalhes não constitui construção maçônica ou templo; o vínculo é estritamente contextual, biográfico e sociológico, relativo às figuras históricas que transitaram pela corte real.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ch%C3%A2teau+de+Versailles+Place+d+Armes+78000+Versailles',
      mapLabel: 'Château de Versailles & Domaine de Trianon',
    },
    {
      dayNumber: 6,
      dayLabel: '06',
      date: '20/10/2027',
      city: 'Chartres',
      country: 'França',
      axis: 'Patrimônio, geometria, luz e tradição dos ofícios',
      title: 'Chartres — arquitetura medieval e tradição dos construtores',
      presentation:
        'Deslocamento de Paris a Chartres com foco no estudo rigoroso da Catedral gótica, da geometria sagrada e da luz, estabelecendo distinções históricas fundamentais entre corporações operativas medievais e especulativas modernas.',
      image: chartresCathedralImg,
      imageCaption: 'Cathédrale Notre-Dame de Chartres — Arquitetura Gótica Monumental do Século XIII',
      pointsOfInterest: [
        'Deslocamento rodoviário/ferroviário Paris → Chartres',
        'Cathédrale Notre-Dame de Chartres (patrimônio mundial da UNESCO)',
        'Estudo dos vitrais medievais do século XII e XIII e da teologia da luz',
        'Arquitetura gótica: botaréus, elevação e proporções espaciais',
        'Esculturas e iconografia cristã dos portais reais',
        'Labirinto medieval da nave da catedral',
        'Centro histórico e bairros antigos de Chartres',
      ],
      pedagogicalObjective:
        'Estudar a tradição medieval dos construtores e os conhecimentos arquitetônicos da época, estabelecendo distinções históricas entre a maçonaria operativa e a maçonaria especulativa moderna.',
      historicalReservation:
        'Ressalva histórica: não se deve afirmar que a catedral foi erguida por maçons especulativos ou que o labirinto medieval seja comprovadamente um símbolo maçônico. O estudo preserva a distinção acadêmica entre a gênese medieval e apropriações modernas posteriores.',
      operationalNote: 'Hospedagem em Chartres para aprofundamento das atividades no dia seguinte.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Cath%C3%A9drale+Notre-Dame+de+Chartres+Clo%C3%AEtre+Notre-Dame',
      mapLabel: 'Cathédrale Notre-Dame de Chartres & Centro Histórico',
    },
    {
      dayNumber: 7,
      dayLabel: '07',
      date: '21/10/2027',
      city: 'Chartres (Mainvilliers)',
      country: 'França',
      axis: 'Documentação maçônica provincial',
      title: 'Chartres — as lojas históricas do século XVIII',
      presentation:
        'Investigação da vida maçônica provincial através da documentação histórica custodiada no arquivo departamental, revelando a circulação de ritos, patentes e personalidades locais do Beauce setecentista.',
      image: archivesEureEtLoirImg,
      imageCaption: 'Archives départementales d\'Eure-et-Loir — Sede em Mainvilliers, acervo de manuscritos e fundos provinciais',
      pointsOfInterest: [
        'Archives départementales d\'Eure-et-Loir (Mainvilliers)',
        'Coleção Jusselin e fundos maçônicos regionais',
        'Loja La Fidélité — análise documental de atas e quadro de membros',
        'Diploma maçônico de Louis-Clovis Potier, datado de 1776',
        'Documento histórico de convocação da loja La Fidélité',
        'Loja La Franchise — história da oficina sob o Antigo Regime',
        'Documentação de constituição e instalação da oficina em 1789',
        'Selo histórico da La Franchise',
        'Pesquisa documental sobre a Loge Marceau e a continuidade maçônica na cidade',
      ],
      pedagogicalObjective:
        'Reconstruir a presença maçônica em Chartres no século XVIII por meio de documentos históricos autênticos e registros arquivísticos provinciais.',
      historicalReservation:
        'Ressalva importante: o acesso aos documentos originais depende de agendamento e autorização dos arquivos públicos. Eventuais encontros com lojas contemporâneas dependem estritamente de convite institucional prévio.',
      operationalNote:
        'Ao final da programação em Chartres, organização e preparação do deslocamento para Lyon conforme a logística contratada.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Archives+d%C3%A9partementales+d+Eure-et-Loir+Mainvilliers',
      mapLabel: 'Archives départementales d\'Eure-et-Loir (Mainvilliers)',
    },
    {
      dayNumber: 8,
      dayLabel: '08',
      date: '22/10/2027',
      city: 'Lyon',
      country: 'França',
      axis: 'Contexto urbano, social e intelectual da Lyon setecentista',
      title: 'Lyon — a cidade de Jean-Baptiste Willermoz',
      presentation:
        'Chegada à capital das Gálias e reconhecimento da geografia urbana em que viveu e trabalhou Jean-Baptiste Willermoz, compreendendo sua inserção como negociante de seda e protagonista do Iluminismo lyonnais.',
      image: croixRousseImg,
      imageCaption: 'Lyon histórica — Encostas da Croix-Rousse, Vieux Lyon e traçado urbano setecentista',
      pointsOfInterest: [
        'Chegada e acomodação em Lyon',
        'Vieux Lyon — arquitetura renascentista e traboules históricas',
        'Presqu\'île — centro mercantil e cívico entre o Rhône e o Saône',
        'Croix-Rousse — colina dos tecelões de seda (Canuts) e oficinas têxteis',
        'Região histórica dos Canuts e a economia da seda que sustentou a burguesia lyonnaise',
        'Rue des Fantasques — referência biográfica e toponímica associada à residência de Willermoz',
        'Reconhecimento da geografia urbana diretamente relacionada à história maçônica de Lyon',
      ],
      pedagogicalObjective:
        'Conhecer a cidade em que Willermoz viveu, trabalhou e desenvolveu sua atividade maçônica, considerando sua atuação como negociante de seda e sua inserção na sociedade lyonnaise.',
      historicalReservation:
        'Ressalva documental: nenhum imóvel atual é identificado como residência preservada de Willermoz sem confirmação documental precisa do endereço e da edificação original setecentista.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Vieux+Lyon+Presqu+%C3%AEle+Lyon+France',
      mapLabel: 'Vieux Lyon, Presqu\'île & Croix-Rousse',
    },
    {
      dayNumber: 9,
      dayLabel: '09',
      date: '23/10/2027',
      city: 'Lyon',
      country: 'França',
      axis: 'Investigação documental e histórica do Rito Escocês Retificado',
      title: 'Willermoz e o Convento das Gálias — a formação do Regime Retificado',
      presentation:
        'Jornada no coração documental da Reforma de Lyon, analisando os manuscritos primordiais que deram origem ao Regime Escocês Retificado e às resoluções do Convento Nacional de 1778.',
      image: bmLyonImg,
      imageCaption: 'Bibliothèque municipale de Lyon (Part-Dieu) — Custodiadora dos Manuscritos Maçônicos de Jean-Baptiste Willermoz',
      pointsOfInterest: [
        'Ponto central: Bibliothèque municipale de Lyon — Bibliothèque de la Part-Dieu',
        'Análise das atas, correspondências e códices originais da coleção Willermoz',
        'Contextualização histórica do Convento das Gálias, realizado em Lyon entre 20 de novembro e 10 de dezembro de 1778',
      ],
      priorityManuscripts: [
        'Ms 5482 — Atos do Convento Nacional das Três Províncias das Gálias (1778)',
        'Ms 5457 — Rituais maçônicos retificados primitivos e redações doutrinárias',
        'Ms 5458 — Documentos administrativos do Diretório Geral do distrito provincial de Auvergne',
        'Ms 5397 — Constituições originais da prestigiosa loja La Sagesse',
        'Ms Coste 453 — Registro e atas da Grande Loge de Lyon',
        'Ms 5456 — Correspondência histórica de Willermoz com Claude-François Achard',
      ],
      pedagogicalObjective:
        'Investigar a reorganização da Estrita Observância Templária, a liderança de Jean-Baptiste Willermoz e o desenvolvimento histórico do sistema que se consolidaria como Regime Escocês Retificado (RER).',
      historicalReservation:
        'Ressalva importante: não se deve indicar um endereço físico fictício para o edifício do Convento das Gálias sem confirmação documental segura. Os manuscritos e os arquivos constituem a única referência histórica fidedigna. O acesso aos documentos patrimoniais depende de autorização e agendamento prévio.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Biblioth%C3%A8que+municipale+de+Lyon+Part-Dieu+30+Boulevard+Vivier-Merle',
      mapLabel: 'Bibliothèque municipale de Lyon (Part-Dieu)',
    },
    {
      dayNumber: 10,
      dayLabel: '10',
      date: '24–25/10/2027',
      city: 'Lyon → Brasil',
      country: 'França / Brasil',
      axis: 'Dimensão cristã, memória urbana e síntese da jornada',
      title: 'Lyon — síntese, tradição cavalheiresca e encerramento',
      presentation:
        'Subida à colina de Fourvière com vista panorâmica sobre o Saône e Lyon, sessão temática sobre a espiritualidade cristã e a cavalaria espiritual do Regime, culminando na entrega do caderno de conclusão e no retorno ao Brasil.',
      image: fourviereImg,
      imageCaption: 'Colina de Fourvière e panorama de Lyon — O encontro histórico do Saône com o Rhône',
      pointsOfInterest: [
        'Colina de Fourvière — panorama histórico de Lyon, do rio Saône e da planície oriental',
        'Região dos Brotteaux — memória do traçado urbano setecentista concebido por Jean-Antoine Morand',
        'Referências às antigas oficinas setecentistas: La Bienfaisance, La Parfaite Harmonie, La Sagesse e Le Parfait Silence',
        'Rua Célu — referência histórica a antigo endereço maçônico, sujeita à confirmação precisa do imóvel',
        'Cours Morand e rue Garibaldi — referências espaciais para investigação da topografia maçônica histórica',
      ],
      pedagogicalObjective:
        'Síntese histórica da trajetória de Willermoz; reflexão sobre as decisões do Convento das Gálias; compreensão da relação entre tradição maçônica, espiritualidade cristã e cavalaria espiritual; entrega solene do caderno de conclusão da expedição.',
      operationalNote:
        '25/10/2027: retorno previsto ao Brasil, com traslado ao aeroporto e voo internacional, sujeito à confirmação da malha aérea contratada. Caso o voo de retorno ocorra pela manhã ou durante o dia 25, as atividades do Dia 10 serão concentradas no dia 24. Fourvière e demais visitas são programadas conforme a confirmação dos horários.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Place+de+Fourvi%C3%A8re+69005+Lyon+France',
      mapLabel: 'Colina de Fourvière & Mirante Histórico de Lyon',
    },
  ];

  return (
    <section id="roteiro" className="relative bg-[#050708] text-[#F0E9DC] py-28 md:py-36 overflow-hidden border-t border-[#A7A29A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* ============================================================== */}
        {/* 01. CABEÇALHO DO NOVO ITINERÁRIO */}
        {/* ============================================================== */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium mb-4">
            <Calendar className="w-4 h-4 text-[#C49A45]" aria-hidden="true" />
            <span>Itinerário Pedagógico · 15 a 25 de Outubro de 2027</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F0E9DC] font-light leading-tight tracking-tight">
            Dez dias para estudar uma tradição em seu contexto.
          </h2>

          <div className="space-y-4 font-serif text-base sm:text-lg text-[#F0E9DC]/85 font-light mt-6 leading-relaxed max-w-3xl">
            <p>
              Uma jornada histórica, documental e formativa por Paris, Versalhes, Chartres e Lyon, concebida para investigar a tradição maçônica francesa, a formação do Regime Escocês Retificado e o legado de Jean-Baptiste Willermoz.
            </p>
            <p className="text-[#A7A29A]">
              O itinerário combina patrimônio arquitetônico, instituições maçônicas, bibliotecas, arquivos históricos e locais associados à trajetória do pensamento retificado.
            </p>
            <p className="text-sm text-[#DFC07D]/90 italic font-sans">
              Cada etapa foi organizada para aproximar os participantes das fontes históricas, dos personagens e dos ambientes que contribuíram para a formação dessa tradição.
            </p>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 02. TIMELINE VERTICAL CONTÍNUA E EDITORIAL (10 DIAS) */}
        {/* ============================================================== */}
        <div className="relative border-l border-[#A7A29A]/20 ml-2.5 sm:ml-6 md:ml-8 pl-6 sm:pl-12 md:pl-16 space-y-20 md:space-y-28">
          {itinerary.map((item) => {
            const isHovered = activeDay === item.dayNumber;

            return (
              <article
                key={item.dayNumber}
                id={`dia-${item.dayLabel}`}
                className="relative group transition-all"
                onMouseEnter={() => setActiveDay(item.dayNumber)}
                onMouseLeave={() => setActiveDay(null)}
              >
                {/* Timeline node */}
                <div
                  className={`absolute -left-[33px] sm:-left-[57px] md:-left-[73px] top-2 w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                    isHovered
                      ? 'border-[#C49A45] bg-[#C49A45] scale-125 shadow-[0_0_15px_rgba(196,154,69,0.5)]'
                      : 'border-[#A7A29A]/50 bg-[#050708] group-hover:border-[#C49A45]'
                  }`}
                  aria-hidden="true"
                />

                {/* Day Header & Metadata */}
                <div className="space-y-3 mb-6">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 text-xs uppercase tracking-wider font-sans">
                    <span className="font-serif text-2xl sm:text-3xl text-[#C49A45] font-normal tracking-wide">
                      Dia {item.dayLabel}
                    </span>
                    <span className="font-mono text-xs text-[#F0E9DC]/90 font-medium px-2.5 py-0.5 bg-[#F0E9DC]/5 border border-[#A7A29A]/20">
                      {item.date}
                    </span>
                    <span aria-hidden="true" className="text-[#A7A29A]/40">·</span>
                    <span className="text-[#DFC07D] font-medium tracking-[0.2em]">
                      {item.city}, {item.country}
                    </span>
                  </div>

                  <div className="text-xs uppercase tracking-[0.25em] text-[#A7A29A] font-medium">
                    Eixo: <span className="text-[#F0E9DC]/90 lowercase first-letter:uppercase">{item.axis}</span>
                  </div>

                  {/* Day Title */}
                  <h3 className="font-serif text-2xl sm:text-4xl text-[#F0E9DC] font-light leading-snug group-hover:text-[#DFC07D] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Presentation Paragraph */}
                <p className="text-base sm:text-lg text-[#F0E9DC]/85 max-w-4xl leading-relaxed font-light mb-8">
                  {item.presentation}
                </p>

                {/* Authentic Photographic Banner */}
                <div className="mb-8 max-w-4xl overflow-hidden border border-[#A7A29A]/20 bg-[#0A0D0F] transition-all duration-700">
                  <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageCaption}
                      className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-transparent to-black/30 pointer-events-none" />
                    
                    {/* Floating map quick link over photo */}
                    <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-10">
                      <a
                        href={item.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-[#F0E9DC] bg-[#050708]/85 hover:bg-[#050708] border border-[#C49A45]/40 hover:border-[#C49A45] backdrop-blur-md transition-all shadow-lg"
                        title={`Abrir localização de ${item.mapLabel} no Google Maps em nova aba`}
                      >
                        <MapPin className="w-3 h-3 text-[#C49A45]" aria-hidden="true" />
                        <span>Ver no Mapa</span>
                        <ExternalLink className="w-2.5 h-2.5 text-[#A7A29A]" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <div className="px-4 py-2.5 text-xs text-[#A7A29A]/80 font-sans border-t border-[#A7A29A]/10 flex flex-wrap items-center justify-between gap-2">
                    <span className="italic">{item.imageCaption}</span>
                    <span className="font-mono text-[10px] text-[#A7A29A]/60 uppercase tracking-widest">
                      Local Autêntico · Etapa {item.dayLabel}
                    </span>
                  </div>
                </div>

                {/* Structured Investigation & Pedagogical Content */}
                <div className="max-w-4xl space-y-6">
                  {/* Historical Approach if specified (e.g. Versailles) */}
                  {item.historicalApproach && (
                    <div className="p-4 bg-[#11161B]/60 border-l-2 border-[#C49A45]/70 text-sm text-[#F0E9DC]/85 font-light leading-relaxed">
                      <div className="text-[11px] uppercase tracking-[0.2em] text-[#C49A45] font-medium mb-1 flex items-center gap-2">
                        <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Abordagem Histórica</span>
                      </div>
                      <p>{item.historicalApproach}</p>
                    </div>
                  )}

                  {/* Points of Interest */}
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-[#C49A45] font-medium mb-3 flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[#C49A45]" aria-hidden="true" />
                      <span>Pontos de Interesse & Programação Prevista</span>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#F0E9DC]/85 font-light">
                      {item.pointsOfInterest.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#C49A45] font-serif text-base leading-none select-none">·</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Complementary Points if present */}
                  {item.complementaryPoints && item.complementaryPoints.length > 0 && (
                    <div className="pt-2">
                      <div className="text-[11px] uppercase tracking-[0.25em] text-[#A7A29A] font-medium mb-2">
                        Complementação (Conforme Tempo e Reservas)
                      </div>
                      <ul className="space-y-1.5 text-sm text-[#F0E9DC]/75 font-light">
                        {item.complementaryPoints.map((cp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-[#A7A29A]/60 font-serif leading-none select-none">·</span>
                            <span>{cp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Priority Manuscripts (Day 9) */}
                  {item.priorityManuscripts && (
                    <div className="p-4 bg-[#121820]/80 border border-[#C49A45]/30">
                      <div className="text-xs uppercase tracking-[0.25em] text-[#DFC07D] font-medium mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#C49A45]" aria-hidden="true" />
                        <span>Documentos Prioritários — Fundo Willermoz (Ms 5482 e Códices)</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm text-[#F0E9DC]/90 font-mono">
                        {item.priorityManuscripts.map((ms, mIdx) => (
                          <div key={mIdx} className="flex items-baseline gap-2 py-0.5">
                            <span className="text-[#C49A45]">▪</span>
                            <span>{ms}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pedagogical Objective */}
                  {item.pedagogicalObjective && (
                    <div className="p-4 bg-[#0A0E12] border-l-2 border-[#C49A45] text-sm text-[#F0E9DC]/90 font-serif italic leading-relaxed">
                      <div className="text-[11px] not-italic font-sans uppercase tracking-[0.25em] text-[#C49A45] font-medium mb-1.5 flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Objetivo Pedagógico</span>
                      </div>
                      <p>&ldquo;{item.pedagogicalObjective}&rdquo;</p>
                    </div>
                  )}

                  {/* Historical Reservation / Scholarly rigor */}
                  {item.historicalReservation && (
                    <div className="flex items-start gap-3 p-3.5 bg-black/40 border border-[#A7A29A]/15 text-xs text-[#A7A29A] leading-relaxed">
                      <AlertCircle className="w-4 h-4 text-[#C49A45] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-[#DFC07D] uppercase tracking-wider block mb-0.5">
                          Ressalva Histórica & Documental:
                        </strong>
                        <p>{item.historicalReservation}</p>
                      </div>
                    </div>
                  )}

                  {/* Operational Note */}
                  {item.operationalNote && (
                    <div className="text-xs text-[#A7A29A]/80 font-sans italic pt-1">
                      * {item.operationalNote}
                    </div>
                  )}

                  {/* Location & Real Map footer button */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#A7A29A]/10 text-xs">
                    <span className="text-[#A7A29A]/70 uppercase tracking-widest text-[10px]">
                      Referência Geográfica: {item.mapLabel}
                    </span>
                    <a
                      href={item.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#C49A45] hover:text-[#DFC07D] hover:underline underline-offset-4 transition-colors font-medium"
                    >
                      <span>Abrir no Google Maps</span>
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* 03. BLOCO DE INFORMAÇÕES OPERACIONAIS */}
        {/* ============================================================== */}
        <div className="mt-28 pt-12 border-t border-[#A7A29A]/20 max-w-4xl">
          <div className="p-8 bg-[#080B0D] border border-[#A7A29A]/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C49A45]" />

            <div className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium mb-3">
              Condições & Diretrizes
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#F0E9DC] font-light mb-6">
              Planejamento, reservas e condições operacionais
            </h3>

            <div className="space-y-4 text-sm text-[#F0E9DC]/80 font-light leading-relaxed">
              <p>
                O itinerário constitui uma proposta de planejamento histórico e pedagógico para o período de 15 a 25 de outubro de 2027.
              </p>
              <p>
                A execução das visitas dependerá dos horários de funcionamento das instituições, da disponibilidade de acervos, das autorizações de consulta, das reservas de grupos e da logística dos deslocamentos.
              </p>
              <p>
                Consultas documentais na Bibliothèque nationale de France, na Bibliothèque municipale de Lyon e nos Archives départementales d&apos;Eure-et-Loir exigem planejamento e confirmação prévia.
              </p>
              <p>
                Visitas a instituições maçônicas e eventuais encontros com lojas dependerão de autorização institucional.
              </p>
              <p>
                Os endereços históricos ainda não comprovados serão apresentados como referências de pesquisa, e não como locais de visita confirmados.
              </p>
              <p className="text-[#DFC07D] font-normal pt-2 border-t border-[#A7A29A]/15">
                Os horários dos voos, traslados e deslocamentos terrestres serão ajustados à programação efetivamente contratada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
