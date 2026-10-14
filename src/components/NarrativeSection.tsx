import React from 'react';
import manuscriptsImg from '../assets/images/manuscripts_archive_quill_1792019500092.jpg';

export const NarrativeSection: React.FC = () => {
  return (
    <section id="jornada" className="relative bg-[#050708] text-[#F0E9DC] py-24 md:py-36 overflow-hidden">
      {/* Subtle background ambient gradient */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-[#050708]/90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial lead headline */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium mb-4">
            O Chamado da História
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F0E9DC] font-light leading-[1.1] tracking-tight text-balance">
            Algumas tradições não se compreendem apenas nos livros.
            <span className="block italic text-[#C49A45] font-normal mt-2">
              É preciso conhecer o contexto em que nasceram.
            </span>
          </h2>
        </div>

        {/* Asymmetric editorial composition: ~40% text narrative / ~60% archival photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative text column (~40%) */}
          <div className="lg:col-span-5 space-y-6 text-[#F0E9DC]/85 text-base sm:text-lg leading-relaxed font-light">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-normal first-letter:text-[#C49A45] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              No século XVIII, a França tornou-se um dos grandes cenários de transformação intelectual, religiosa e maçônica da Europa.
            </p>
            <p>
              Nesse ambiente, <strong className="font-medium text-[#F0E9DC]">Jean-Baptiste Willermoz</strong>, comerciante, maçom e pensador de Lyon, dedicou-se à reorganização de uma tradição iniciática que associava formação moral, referências cristãs e uma concepção própria da cavalaria.
            </p>
            <p>
              Sua atuação, os Conventos das Gálias e de Wilhelmsbad e o diálogo com outras correntes de sua época são fundamentais para compreender a formação histórica do <strong className="font-medium text-[#F0E9DC]">Regime Escocês Retificado</strong>.
            </p>
            <p className="text-[#A7A29A]">
              A excursão propõe estudar essa história em seus contextos urbanos, culturais e documentais — percorrendo os mesmos espaços onde esses manuscritos foram concebidos e debatidos.
            </p>

            {/* Archival margin note */}
            <div className="pt-6 border-t border-[#A7A29A]/15 mt-8">
              <div className="text-xs uppercase tracking-[0.2em] text-[#C49A45] font-medium mb-1">
                Fontes & Documentação
              </div>
              <p className="text-xs text-[#A7A29A] leading-normal font-sans">
                Manuscritos de Lyon, correspondências preservadas na Bibliothèque municipale de Lyon e registros das assembleias conventuais do século XVIII.
              </p>
            </div>
          </div>

          {/* Archival photography column (~60%) */}
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] shadow-2xl">
              <img
                src={manuscriptsImg}
                alt="Manuscritos históricos franceses do século XVIII, tratados encadernados em couro, selo de cera e pena sobre mesa de estudos"
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#F0E9DC]/75 font-sans tracking-wide">
                <span>Tratados e correspondências do Iluminismo francês</span>
                <span className="text-[#C49A45]">Acervo Documental</span>
              </div>
            </div>

            {/* Side editorial pull-quote note */}
            <div className="mt-4 flex items-center gap-4 text-xs tracking-wider text-[#A7A29A]">
              <span className="w-8 h-[1px] bg-[#C49A45]/60" />
              <span className="italic font-serif text-sm text-[#F0E9DC]/70">
                &ldquo;A verdade histórica não se revela na abstração, mas no vestígio material deixado pelo tempo.&rdquo;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
