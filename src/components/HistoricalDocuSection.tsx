import React from 'react';
import lyonPanoramicImg from '../assets/images/hero_lyon_dusk_1792019498545.jpg';
import parisStreetImg from '../assets/images/paris_historic_dusk_1792019500631.jpg';
import manuscriptsImg from '../assets/images/manuscripts_archive_quill_1792019500092.jpg';
import willermozPortraitImg from '../assets/images/portrait_willermoz_1792019498729.jpg';
import chartresRoseImg from '../assets/images/chartres_rose_window_1792020267869.jpg';
import lyonStreetImg from '../assets/images/vieux_lyon_historic_1792020268721.jpg';

export const HistoricalDocuSection: React.FC = () => {
  return (
    <section id="regime" className="relative bg-[#050708] text-[#F0E9DC]">
      {/* ============================================================== */}
      {/* ABERTURA DA SEÇÃO: AS ORIGENS DE UMA TRADIÇÃO                  */}
      {/* Fotografia monumental em tela inteira. O visitante observa a    */}
      {/* cidade antes de ler qualquer texto.                           */}
      {/* ============================================================== */}
      <div className="relative min-h-[100vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={lyonPanoramicImg}
            alt="Fotografia monumental de Lyon vista das margens do Saône"
            className="w-full h-full object-cover object-center transform transition-transform duration-[20000ms] scale-100 hover:scale-105 filter brightness-[0.78] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          {/* Natural photographic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050708]/90 via-[#050708]/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-24 md:pb-32 pt-48">
          <div className="max-w-3xl space-y-6">
            <div className="text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium">
              Documentário Histórico
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F0E9DC] font-light leading-[1.0] tracking-tight">
              As origens de uma tradição.
            </h2>

            <p className="font-serif text-lg sm:text-2xl text-[#F0E9DC]/90 font-light leading-relaxed max-w-2xl text-balance pt-2">
              No século XVIII, a Maçonaria europeia foi palco de intensos debates sobre tradição, filosofia, espiritualidade e organização dos sistemas iniciáticos.
            </p>

            <p className="text-base sm:text-lg text-[#A7A29A] font-light leading-relaxed max-w-2xl">
              Em Lyon, Jean-Baptiste Willermoz participou ativamente desse processo, contribuindo para a Reforma de Lyon e para a formação histórica do Regime Escocês Retificado.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* CENA 1 — A FRANÇA DO SÉCULO XVIII                              */}
      {/* Fotografia de uma rua histórica francesa. Título monumental.   */}
      {/* ============================================================== */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden border-t border-[#A7A29A]/15 py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={parisStreetImg}
            alt="Rua histórica francesa do século XVIII com o Panthéon iluminado"
            className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.10]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050708] via-[#050708]/80 to-[#050708]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-transparent to-[#050708]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium">
              Cena I · O Século das Luzes
            </div>

            <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F0E9DC] font-light tracking-tight leading-[1.05]">
              Um século de transformações.
            </h3>

            <p className="text-base sm:text-xl text-[#F0E9DC]/85 font-light leading-relaxed font-serif italic">
              Entre salões literários, academias e ateliês de pensamento, a França do Antigo Regime assistiu ao florescimento de ordens que buscavam conciliar a busca pelo saber iluminista com o anseio por uma sabedoria tradicional esquecida.
            </p>

            <p className="text-sm sm:text-base text-[#A7A29A] font-light leading-relaxed">
              Foi nesse caldeirão intelectual e espiritual que os maçons franceses reformaram seus rituais, afastando-se do mero convívio social para estruturar uma disciplina de regeneração ética e espiritual.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* CENA 2 — A ESTRITA OBSERVÂNCIA TEMPLÁRIA                       */}
      {/* Imagem de documento autêntico e arquitetura europeia.          */}
      {/* ============================================================== */}
      <div className="relative min-h-[90vh] py-24 md:py-32 overflow-hidden border-t border-[#A7A29A]/15 bg-[#071923]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Massive photo occupying 60% */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden shadow-2xl bg-[#050708]">
                <img
                  src={manuscriptsImg}
                  alt="Tratados históricos e correspondências do século XVIII da Estrita Observância"
                  className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] transform hover:scale-102 transition-transform duration-1000"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071923]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 text-xs text-[#F0E9DC]/75 font-serif italic">
                  Manuscritos e correspondências dos arquivos maçônicos europeus
                </div>
              </div>
            </div>

            {/* Editorial prose */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium">
                Cena II · A Matriz Germânica
              </div>

              <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F0E9DC] font-light tracking-tight leading-[1.05]">
                Uma tradição em transformação.
              </h3>

              <p className="text-base sm:text-lg text-[#F0E9DC]/85 font-light leading-relaxed">
                A Estrita Observância Templária, originária do Sacro Império, propunha a continuidade espiritual da ordem cavalheiresca medieval. Ao se expandir para a França, encontrou mentes perspicazes que reconheceram a necessidade de depurar seus mitos históricos.
              </p>

              <p className="text-sm sm:text-base text-[#A7A29A] font-light leading-relaxed">
                Willermoz compreendeu que a legitimidade do sistema não dependia de uma filiação material literal com a Idade Média, mas sim da pureza de sua doutrina de beneficência, cavalaria interior e formação do homem justo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* CENA 3 — A REFORMA DE LYON                                      */}
      {/* Imagem panorâmica real de Lyon. Título: LYON, 1778.            */}
      {/* ============================================================== */}
      <div className="relative min-h-[95vh] flex items-end overflow-hidden border-t border-[#A7A29A]/15">
        <div className="absolute inset-0 z-0">
          <img
            src={lyonPanoramicImg}
            alt="Vista panorâmica de Lyon e Fourvière ao entardecer"
            className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.10]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/50 to-[#050708]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050708]/90 via-[#050708]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-24 md:pb-32 pt-36">
          <div className="max-w-3xl space-y-6">
            <div className="text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium">
              Cena III · O Convento das Gálias
            </div>

            <h3 className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#F0E9DC] font-light tracking-tight leading-none">
              Lyon, 1778.
            </h3>

            <p className="font-serif text-xl sm:text-2xl text-[#C49A45] font-light italic leading-relaxed">
              O momento histórico em que o Regime Escocês Retificado ganhou sua constituição definitiva.
            </p>

            <p className="text-base sm:text-lg text-[#F0E9DC]/85 font-light leading-relaxed max-w-2xl">
              Entre novembro e dezembro de 1778, os deputados das províncias da França reuniram-se em Lyon sob a presidência de Willermoz. Dessa assembleia nasceram o <strong className="font-medium text-[#F0E9DC]">Código Maçônico das Lojas Reunidas e Retificadas</strong> e a fundação da Ordem Interior dos Cavaleiros Benfazejos da Cidade Santa (C.B.C.S.).
            </p>

            <p className="text-sm sm:text-base text-[#A7A29A] font-light leading-relaxed max-w-2xl">
              Não se tratava de criar uma nova seita, mas de &ldquo;retificar&rdquo; os costumes maçônicos, devolvendo-lhes seu fundamento moral e sua vocação cristã e humanitária.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* CENA 4 — WILHELMSBAD                                           */}
      {/* Título: UMA IDENTIDADE EM CONSOLIDAÇÃO.                        */}
      {/* ============================================================== */}
      <div className="relative min-h-[90vh] py-24 md:py-32 overflow-hidden border-t border-[#A7A29A]/15 bg-[#050708]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Narrative text first */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <div className="text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium">
                Cena IV · O Convento Geral de 1782
              </div>

              <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F0E9DC] font-light tracking-tight leading-[1.05]">
                Uma identidade em consolidação.
              </h3>

              <p className="font-serif text-lg text-[#C49A45] font-light italic leading-relaxed">
                As discussões pan-europeias que consolidaram a autonomia do Regime Retificado.
              </p>

              <p className="text-base sm:text-lg text-[#F0E9DC]/85 font-light leading-relaxed">
                Em Wilhelmsbad, na Alemanha, dezenas de delegados das mais altas autoridades da nobreza e do pensamento europeu debateram durante mais de trinta sessões o destino da Maçonaria.
              </p>

              <p className="text-sm sm:text-base text-[#A7A29A] font-light leading-relaxed">
                As teses apresentadas pelos delegados franceses, sob o influxo de Willermoz, consagraram o abandono da filiação templária restauracionista e consagraram a Ordem Retificada como uma escola moral de virtude, beneficência ativa e caridade espiritual.
              </p>
            </div>

            {/* Architecture photograph */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-[16/10] overflow-hidden shadow-2xl bg-[#071923]">
                <img
                  src={lyonStreetImg}
                  alt="Ruas históricas e arquitetura setecentista da época do Convento"
                  className="w-full h-full object-cover object-center filter brightness-[0.80] contrast-[1.08] transform hover:scale-102 transition-transform duration-1000"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 text-xs text-[#F0E9DC]/75 font-serif italic">
                  O ambiente urbano e institucional das assembleias conventuais
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* CENA 5 — WILLERMOZ                                             */}
      {/* Retrato histórico monumental de Jean-Baptiste Willermoz.       */}
      {/* ============================================================== */}
      <div id="willermoz" className="relative min-h-[100vh] py-28 md:py-36 overflow-hidden border-t border-[#A7A29A]/15 bg-[#071923]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Monumental portrait */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[3/4] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-[#050708]">
                <img
                  src={willermozPortraitImg}
                  alt="Retrato histórico a óleo de Jean-Baptiste Willermoz (1730-1824)"
                  className="w-full h-full object-cover object-top filter brightness-[0.90] contrast-[1.08] transform hover:scale-102 transition-transform duration-1000"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071923]/70 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="mt-4 flex items-baseline justify-between text-[11px] text-[#A7A29A] tracking-wider font-light">
                <span>Jean-Baptiste Willermoz · 1730 — 1824</span>
                <span className="italic">Representação documental em estudo biográfico</span>
              </div>
            </div>

            {/* Willermoz prose */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium">
                Cena V · O Personagem Central
              </div>

              <h3 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#F0E9DC] font-light tracking-tight leading-none">
                Jean-Baptiste
                <span className="block font-normal text-[#F0E9DC] mt-2">
                  Willermoz
                </span>
              </h3>

              <div className="font-serif text-xl text-[#C49A45] font-light tracking-widest">
                1730 — 1824
              </div>

              <p className="font-serif text-xl text-[#F0E9DC] leading-snug font-light italic">
                Comerciante de seda, místico reflexivo e o mais meticuloso legislador da história maçônica ocidental.
              </p>

              <p className="text-base sm:text-lg text-[#F0E9DC]/85 font-light leading-relaxed">
                Maçom e pensador de Lyon, Willermoz dedicou mais de sessenta anos de sua longa existência à preservação das ciências tradicionais. Aluno dileto de Martinès de Pasqually na Ordem dos Élus Coëns e interlocutor de Louis-Claude de Saint-Martin, soube fundir o misticismo cristão com a estrutura e a disciplina da Maçonaria cavalheiresca.
              </p>

              <p className="text-sm sm:text-base text-[#A7A29A] font-light leading-relaxed">
                Sua correspondência preservada na Biblioteca Municipal de Lyon testemunha uma vida de devotamento à busca da verdade, à retidão moral e à beneficência discreta.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* CENA 6 — A DIMENSÃO ESPIRITUAL                                 */}
      {/* Imagens reais de arquitetura religiosa e manuscritos.           */}
      {/* Título: FILOSOFIA, CRISTIANISMO E FORMAÇÃO MORAL.              */}
      {/* ============================================================== */}
      <div className="relative min-h-[95vh] flex items-center overflow-hidden border-t border-[#A7A29A]/15 py-24 md:py-36">
        <div className="absolute inset-0 z-0">
          <img
            src={chartresRoseImg}
            alt="Interior da Catedral de Chartres com a rosácea gótica do século XIII e abóbadas de pedra"
            className="w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.12]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/50 to-[#050708]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050708]/95 via-[#050708]/65 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl space-y-6">
            <div className="text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium">
              Cena VI · A Alma da Ordem
            </div>

            <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F0E9DC] font-light tracking-tight leading-[1.05]">
              Filosofia, cristianismo e formação moral.
            </h3>

            <p className="font-serif text-xl sm:text-2xl text-[#C49A45] font-light italic leading-snug">
              Uma tradição iniciática concebida para a transformação interior do homem.
            </p>

            <p className="text-base sm:text-lg text-[#F0E9DC]/85 font-light leading-relaxed max-w-2xl">
              Diferentemente dos sistemas que privilegiavam a filantropia secular ou o hermetismo especulativo desligado da moral, o Regime Escocês Retificado erige o cristianismo primitivo e evangélico como pedra angular.
            </p>

            <p className="text-sm sm:text-base text-[#A7A29A] font-light leading-relaxed max-w-2xl">
              A cavalaria retificada não empunha espadas materiais: suas armas são o desapego de si mesmo, o socorro ao necessitado, o respeito incondicional à dignidade humana e o retorno do espírito à sua fonte primeira.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
