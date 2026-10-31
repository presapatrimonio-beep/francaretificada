import React, { useState } from 'react';
import {
  Smartphone,
  ShieldAlert,
  Globe,
  Wifi,
  BookOpen,
  Compass,
  MapPin,
  CreditCard,
  Luggage,
  Utensils,
  Languages,
  FileCheck,
  Camera,
  Award,
  Users,
  Bell,
  PhoneCall,
  FileText,
  CheckCircle2,
  Maximize2,
  ChevronRight,
  X,
  Lock,
  QrCode,
  Sparkles,
  Plane,
  Calendar,
  AlertTriangle,
  ArrowRight,
  HeartPulse,
  Stamp,
  Sliders,
  DollarSign,
  Radio,
  FileSpreadsheet
} from 'lucide-react';

export const ExpeditionAppShowcase: React.FC = () => {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [converterEuros, setConverterEuros] = useState('50');

  // Interactive packing toggle demo state
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    passaporte: true,
    seguro: true,
    adaptador: true,
    calcados: false,
    roupas_inverno: false,
    medicamentos: true
  });

  const toggleCheck = (k: string) => {
    setChecklist((prev) => ({ ...prev, [k]: !prev[k] }));
  };

  const appGroups = [
    {
      id: 'grupo-1',
      number: '01',
      title: 'Identidade, Login & Onboarding',
      shortTitle: 'Identidade & Acesso',
      icon: Lock,
      moduleNums: 'Módulos 01',
      headline: 'Acesso individualizado, credencial digital e preparação guiada',
      description:
        'A experiência começa meses antes do embarque. Cada participante recebe credenciais exclusivas para um ambiente seguro com checklist preparatório, validação de documentação e personalização de perfil.',
      modules: [
        {
          code: '01. IDENTIDADE E ACESSO',
          items: [
            'Splash screen institucional com a Flor-de-Lis e o brasão do Rito',
            'Login individual com autenticação segura de dois fatores',
            'Cadastro e edição do perfil do participante',
            'Perfil pessoal com preferências alimentares e dados médicos',
            'Onboarding progressivo com barra de progresso pré-embarque no Brasil'
          ]
        }
      ],
      mockupType: 'identity'
    },
    {
      id: 'grupo-2',
      number: '02',
      title: 'Dashboard, Itinerário & Atlas Histórico',
      shortTitle: 'Jornada & Atlas',
      icon: Compass,
      moduleNums: 'Módulos 02 e 03',
      headline: 'O pulso da expedição em tempo real e imersão cartográfica',
      description:
        'Visão panorâmica de cada dia da jornada com contagem regressiva, previsões meteorológicas locais, linha do tempo dos compromissos oficiais e navegação pelos acervos setecentistas.',
      modules: [
        {
          code: '02. JORNADA E PROGRAMAÇÃO',
          items: [
            'Dashboard principal com contagem de dias e clima nas 4 cidades',
            'Itinerário dinâmico diário detalhado (15 a 25 de Outubro de 2027)',
            'Detalhamento de atividades, horários exatos e pontos de encontro',
            'Calendário sinóptico da expedição com filtros por etapa',
            'Notificações push em tempo real sobre reuniões e avisos'
          ]
        },
        {
          code: '03. ATLAS HISTÓRICO E MAPAS',
          items: [
            'Mapa interativo com projeção histórica e camadas cartográficas',
            'Navegação dedicada por Paris, Versalhes, Chartres e Lyon',
            'Pontos históricos, templos, bibliotecas e memoriais georreferenciados',
            'Rotas a pé e traslados com tempo estimado e contexto documental'
          ]
        }
      ],
      mockupType: 'dashboard'
    },
    {
      id: 'grupo-3',
      number: '03',
      title: 'Mapas, Transporte, Hospedagem & Rastreamento',
      shortTitle: 'Logística & Localização',
      icon: Plane,
      moduleNums: 'Módulos 04 e 07',
      headline: 'Gestão integral de passagens, transfers e segurança coletiva',
      description:
        'Carteira digital completa para vouchers aéreos, bilhetes de TGV, credenciais de hotel e localização compartilhada voluntariamente entre os 20 participantes da expedição.',
      modules: [
        {
          code: '04. LOGÍSTICA E SERVIÇOS',
          items: [
            'Carteira digital de bilhetes aéreos (Guarulhos ⇄ Paris Charles de Gaulle)',
            'Vouchers e horários de trens de alta velocidade (TGV Paris ⇄ Lyon)',
            'Transfers privativos terrestres com placas e identificação dos motoristas',
            'Controle de hospedagem: hotéis selecionados, endereços e check-in/out',
            'Gestão de bagagens com etiquetas inteligentes e peso aferido'
          ]
        },
        {
          code: '07. RASTREAMENTO E ACOMPANHAMENTO',
          items: [
            'Mapa do grupo com localização compartilhada voluntariamente',
            'Visualização restrita apenas aos participantes e coordenadores autorizados',
            'Sinalizador de presença: "Cheguei ao Ponto de Encontro"',
            'Registro da última sincronização de posição geográfica e solicitação de apoio'
          ]
        }
      ],
      mockupType: 'logistics'
    },
    {
      id: 'grupo-4',
      number: '04',
      title: 'eSIM, Seguro & Assistência Internacional',
      shortTitle: 'Conectividade & Seguro',
      icon: Wifi,
      moduleNums: 'Módulos 05 e 06',
      headline: 'Dados 5G na Europa e assistência médica 24 horas',
      description:
        'Conectividade internacional contínua sem troca de chip físico e carteira digital de seguro-viagem com apólice de alta cobertura e acesso imediato à rede hospitalar francesa.',
      modules: [
        {
          code: '05. CONECTIVIDADE INTERNACIONAL (eSIM)',
          items: [
            'Módulo eSIM pré-configurado com franquia de dados 5G na União Europeia',
            'Guia passo a passo com QR Code para instalação ainda no Brasil',
            'Ativação automática imediata ao desembarcar em Paris',
            'Monitor de consumo em tempo real e suporte técnico remoto'
          ]
        },
        {
          code: '06. SEGURO E ASSISTÊNCIA INTERNACIONAL',
          items: [
            'Carteira digital da apólice individual com QR Code de validação rápida',
            'Discriminação das coberturas contratadas (médica, hospitalar e farmacêutica)',
            'Telefones de emergência 24 horas com atendimento em língua portuguesa',
            'Diretório de hospitais conveniados e clínicas de referência por cidade'
          ]
        }
      ],
      mockupType: 'esim'
    },
    {
      id: 'grupo-5',
      number: '05',
      title: 'Central de Contatos & Emergência SOS',
      shortTitle: 'SOS & Diplomacia',
      icon: ShieldAlert,
      moduleNums: 'Módulos 08 e 09',
      headline: 'Apoio consular, números vitais e botão de pânico integrado',
      description:
        'Rede de proteção integral: da discagem direta para a coordenação aos contatos do Consulado-Geral do Brasil em Paris, corpo médico e botão de emergência SOS com localização instantânea.',
      modules: [
        {
          code: '08. CENTRAL INTERNACIONAL DE CONTATOS',
          items: [
            'Embaixada do Brasil na França e Consulado-Geral em Paris',
            'Telefones do plantão consular 24h para emergências civis e perda de documentos',
            'Diretório de hospitais, farmácias de plantão e serviços de pronto-atendimento',
            'Contatos de emergência das companhias aéreas, ferrovias e operadora turística'
          ]
        },
        {
          code: '09. CENTRAL SOS',
          items: [
            'Botão de emergência SOS com envio automático de coordenadas à coordenação',
            'Ligação direta de um toque para os coordenadores e responsável operacional CVC',
            'Protocolos guiados para perda de passaporte, extravio de mala ou separação do grupo',
            'Guia de áudio e texto com frases emergenciais essenciais em francês'
          ]
        }
      ],
      mockupType: 'sos'
    },
    {
      id: 'grupo-6',
      number: '06',
      title: 'Suporte Linguístico, Biblioteca & Preparação',
      shortTitle: 'Língua & Conhecimento',
      icon: Languages,
      moduleNums: 'Módulos 10, 11 e 12',
      headline: 'Comunicação bilíngue, acervos documentais e mala inteligente',
      description:
        'Ferramentas pedagógicas e práticas: tradutor contextual especializado, biblioteca com os manuscritos de Willermoz em alta resolução e checklist de bagagem para o outono francês.',
      modules: [
        {
          code: '10. SUPORTE LINGUÍSTICO',
          items: [
            'Tradutor especializado Português ⇄ Francês para termos históricos e de viagem',
            'Guia de conversação para aeroportos, hotéis, restaurantes e situações médicas',
            'Pronúncia fonética guiada para nomes de locais históricos e monumentos'
          ]
        },
        {
          code: '11. BIBLIOTECA DIGITAL HISTÓRICA',
          items: [
            'Dossiê completo das fontes históricas e biografia crítica de Jean-Baptiste Willermoz',
            'Estudos sobre o Convento das Gálias (1778) e Convento de Wilhelmsbad (1782)',
            'Visualizador de reproduções fac-similadas dos manuscritos de Lyon e bibliografia'
          ]
        },
        {
          code: '12. PREPARAÇÃO E BAGAGEM',
          items: [
            'Checklist interativo de mala (bagagem de mão vs. despachada)',
            'Controle de peso, adaptadores de tomada padrão europeu e medicamentos permitidos'
          ]
        }
      ],
      mockupType: 'library'
    },
    {
      id: 'grupo-7',
      number: '07',
      title: 'Gastronomia, Finanças & Diário de Bordo',
      shortTitle: 'Experiência & Gastronomia',
      icon: Utensils,
      moduleNums: 'Módulos 13, 14 e 15',
      headline: 'Curadoria gastronômica, conversor EUR/BRL e memórias pessoais',
      description:
        'Recomendações exclusivas de bistrôs históricos e cafés literários, conversão monetária automática para gestão financeira e diário privativo para reflexões de viagem.',
      modules: [
        {
          code: '13. GASTRONOMIA E EXPERIÊNCIAS',
          items: [
            'Curadoria gastronômica em Paris, Versalhes, Chartres e Lyon (bistrôs e cafés históricos)',
            'Informações sobre horários de funcionamento, reservas e especialidades regionais',
            'Distância a pé a partir do hotel e dos pontos do roteiro'
          ]
        },
        {
          code: '14. CONTROLE FINANCEIRO',
          items: [
            'Conversor automático de moedas Euro (€) ⇄ Real (R$) com atualização diária',
            'Registro categorizado de despesas (alimentação, transporte, livros e compras)',
            'Painel de controle orçamentário individual'
          ]
        },
        {
          code: '15. DIÁRIO DE BORDO',
          items: [
            'Anotações pessoais e reflexões filosóficas associadas a cada local visitado',
            'Registro privativo por data e cidade com suporte a fotos e pensamentos'
          ]
        }
      ],
      mockupType: 'finance'
    },
    {
      id: 'grupo-8',
      number: '08',
      title: 'Galeria, Passaporte Digital & Certificado',
      shortTitle: 'Passaporte & Memória',
      icon: Award,
      moduleNums: 'Módulos 16, 17 e 18',
      headline: 'Carimbos das 4 cidades, registro audiovisual e memorial perpétuo',
      description:
        'A consagração da jornada: passaporte digital com selos das 4 etapas históricas percorridas, galeria coletiva em altíssima definição e emissão do certificado digital de participação.',
      modules: [
        {
          code: '16. GALERIA OFICIAL',
          items: [
            'Repositório compartilhado de registros fotográficos e vídeos da expedição',
            'Organização cronológica por cidade, conferência e visita documental',
            'Download de fotografias oficiais em alta resolução'
          ]
        },
        {
          code: '17. PASSAPORTE DIGITAL DA EXPEDIÇÃO',
          items: [
            'Registro individual das quatro etapas: Paris, Versalhes, Chartres e Lyon',
            'Carimbos digitais comemorativos validados conforme o cumprimento do percurso',
            'Linha do tempo histórica da vivência de cada participante'
          ]
        },
        {
          code: '18. CERTIFICADO E MEMORIAL',
          items: [
            'Emissão de Certificado Digital de Participação chancelado pela expedição',
            'Acesso perpétuo ao memorial digital da Expedição França Retificada 2027'
          ]
        }
      ],
      mockupType: 'passport'
    },
    {
      id: 'grupo-9',
      number: '09',
      title: 'Painel Administrativo da Organização',
      shortTitle: 'Área da Coordenação',
      icon: Sliders,
      moduleNums: 'Módulos 19 e 20',
      headline: 'Centro de comando operacional exclusivo para os coordenadores',
      description:
        'Visão gerencial completa para a liderança da expedição: controle de presença dos 20 participantes, monitoramento de voos, hotéis, apólices de seguro, chips eSIM e mural de avisos oficiais.',
      modules: [
        {
          code: '19. COMUNICAÇÃO OFICIAL',
          items: [
            'Mural oficial de avisos e comunicados da coordenação para o grupo',
            'Disparo de alertas prioritários sobre horários de saída e pontos de encontro',
            'Canal direto de mensagens operacionais entre coordenação e participantes'
          ]
        },
        {
          code: '20. PAINEL ADMINISTRATIVO (COORDENAÇÃO)',
          items: [
            'Gestão cadastral e verificação dos 20 participantes da expedição',
            'Painel de controle de onboarding: passaportes válidos, seguros e emissão de eSIM',
            'Monitoramento logístico de transfers, check-ins de hotel e itinerário diário',
            'Mapa de monitoramento coletivo voluntário e livro de ocorrências operacionais'
          ]
        }
      ],
      mockupType: 'admin'
    }
  ];

  const activeGroup = appGroups[activeGroupIndex];

  return (
    <div className="relative pt-24 md:pt-32 pb-24 border-t border-[#A7A29A]/20 bg-gradient-to-b from-[#050708] via-[#070b10] to-[#040608]">
      {/* Ambient background illumination */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(196,154,69,0.12),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* ==================================================================== */}
        {/* 01. CABEÇALHO DA SEÇÃO DE TECNOLOGIA E PLATAFORMA DIGITAL            */}
        {/* ==================================================================== */}
        <header className="text-center max-w-4xl mx-auto space-y-4 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#C49A45]/15 border border-[#C49A45]/40 text-[#DFC07D] text-[11px] uppercase tracking-[0.3em] font-medium">
            <Smartphone className="w-3.5 h-3.5 text-[#C49A45]" />
            <span>FRANÇA RETIFICADA 2027 — THE OFFICIAL EXPEDITION APP</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F0E9DC] font-light tracking-tight leading-[1.12]">
            A EXPERIÊNCIA DA EXPEDIÇÃO <span className="text-[#C49A45] italic font-normal">NA PALMA DA MÃO</span>
          </h2>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C49A45] to-transparent mx-auto my-3" />

          <p className="font-serif text-base sm:text-xl text-[#DFC07D]/95 font-light italic leading-relaxed max-w-3xl mx-auto">
            Uma plataforma digital exclusiva que integra logística, conectividade, segurança, conhecimento histórico e acompanhamento de toda a jornada.
          </p>

          {/* Badges de Destaque da Plataforma */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-3 text-[10px] sm:text-[11px] uppercase tracking-wider font-sans text-[#A7A29A]">
            <span className="px-3 py-1 bg-[#050708] border border-[#A7A29A]/20 text-[#DFC07D]">
              Exclusivo para os 20 Participantes
            </span>
            <span className="px-3 py-1 bg-[#050708] border border-[#A7A29A]/20 text-[#F0E9DC]">
              iOS & Android (PWA Nativo)
            </span>
            <span className="px-3 py-1 bg-[#050708] border border-[#A7A29A]/20 text-[#DFC07D]">
              Operação Offline Sincronizada
            </span>
            <span className="px-3 py-1 bg-[#050708] border border-[#A7A29A]/20 text-[#F0E9DC]">
              20 Módulos Integrados
            </span>
          </div>
        </header>

        {/* ==================================================================== */}
        {/* 02. PAINEL PANORÂMICO DAS 15 TELAS EM DESTAQUE (MOCKUP OFICIAL)      */}
        {/* ==================================================================== */}
        <section aria-label="Painel Panorâmico das Telas do Aplicativo" className="mb-20 md:mb-28">
          <div className="relative group bg-[#070d14] border border-[#C49A45]/45 p-3 sm:p-5 md:p-6 shadow-[0_25px_80px_rgba(0,0,0,0.9)] transition-all duration-500 hover:border-[#DFC07D]">
            
            {/* Top Bar inside Matting */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 mb-3 border-b border-[#A7A29A]/15 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#C49A45] animate-pulse" />
                <span className="uppercase tracking-[0.22em] text-[#DFC07D] font-medium text-[11px]">
                  Interfaces Oficiais da Plataforma · Visão Panorâmica
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C49A45]/15 hover:bg-[#C49A45] text-[#DFC07D] hover:text-[#050708] border border-[#C49A45]/50 hover:border-[#C49A45] text-[10px] uppercase tracking-widest font-medium transition-all duration-300 cursor-pointer shadow-sm"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Ampliar Painel de Telas em Alta Definição</span>
              </button>
            </div>

            {/* Imagem do Mockup dos 15 Smartphones */}
            <div
              className="relative w-full overflow-hidden bg-[#030508] cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            >
              <img
                src="/app.png"
                alt="Montagem visual com as 15 telas principais do aplicativo oficial França Retificada 2027"
                className="w-full h-auto object-contain filter contrast-[1.03] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-[#A7A29A] pointer-events-none">
                <span className="hidden sm:inline">15 Telas Principais da Interface do Usuário</span>
                <span className="text-[#DFC07D] flex items-center gap-1">
                  <span>Toque para ampliar</span>
                  <Maximize2 className="w-3 h-3" />
                </span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-[#A7A29A]/15 text-xs text-[#A7A29A] font-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <p className="italic text-[11px]">
                * Apresentação visual representativa dos módulos de uso individual dos participantes e da coordenação.
              </p>
              <span className="font-mono text-[10px] text-[#DFC07D] uppercase tracking-widest">
                Paris · Versalhes · Chartres · Lyon
              </span>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 03. ARQUITETURA COMPLETA: OS 9 GRUPOS & 20 MÓDULOS                   */}
        {/* ==================================================================== */}
        <section aria-label="Detalhamento dos 9 Grupos e 20 Módulos do Aplicativo" className="space-y-12">
          
          {/* Seletor de Grupos em Abas Elegantes */}
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium block">
                Arquitetura Modular da Plataforma
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F0E9DC] font-light">
                Explore os <span className="text-[#DFC07D] italic">9 Grupos Funcionais</span> do Aplicativo
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A29A] font-light max-w-2xl mx-auto">
                Selecione cada grupo para visualizar suas interfaces específicas e o conjunto completo dos 20 módulos operacionais.
              </p>
            </div>

            {/* Grid de Botões dos 9 Grupos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2 pt-4">
              {appGroups.map((grp, idx) => {
                const isActive = activeGroupIndex === idx;
                const IconComponent = grp.icon;
                return (
                  <button
                    key={grp.id}
                    type="button"
                    onClick={() => setActiveGroupIndex(idx)}
                    className={`p-3 text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[96px] ${
                      isActive
                        ? 'border-[#C49A45] bg-[#C49A45]/20 text-[#DFC07D] shadow-[0_4px_20px_rgba(196,154,69,0.25)]'
                        : 'border-[#A7A29A]/20 bg-[#070b10] text-[#A7A29A] hover:border-[#C49A45]/50 hover:text-[#F0E9DC]'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-mono text-[10px] text-[#C49A45] font-bold">
                        {grp.number}
                      </span>
                      <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-[#DFC07D]' : 'text-[#A7A29A]/60'}`} />
                    </div>
                    <span className="text-[11px] font-sans font-medium leading-tight mt-2 block">
                      {grp.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Painel do Grupo Selecionado (Composição Ativa: Dados + Mockup Interativo) */}
          <div className="relative bg-[#080d14]/90 border border-[#C49A45]/40 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            
            {/* Top Badge do Grupo */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#A7A29A]/15">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#050708] bg-[#C49A45] font-bold px-2 py-0.5">
                    GRUPO {activeGroup.number}
                  </span>
                  <span className="text-xs text-[#DFC07D] uppercase tracking-widest font-mono">
                    {activeGroup.moduleNums}
                  </span>
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F0E9DC] font-light">
                  {activeGroup.title}
                </h4>
              </div>

              <p className="font-serif text-sm sm:text-base text-[#DFC07D] italic max-w-md sm:text-right">
                {activeGroup.headline}
              </p>
            </div>

            {/* Conteúdo em 2 Colunas: Lado Esquerdo = Detalhamento dos Módulos; Lado Direito = Mockup Realista */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8">
              
              {/* Lado Esquerdo: Lista de Módulos e Funcionalidades (7 colunas) */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm sm:text-base text-[#F0E9DC]/85 font-light leading-relaxed">
                  {activeGroup.description}
                </p>

                <div className="space-y-6 pt-2">
                  {activeGroup.modules.map((mod, modIdx) => (
                    <div
                      key={modIdx}
                      className="p-5 bg-[#050708]/80 border border-[#A7A29A]/20 space-y-3"
                    >
                      <div className="flex items-center justify-between border-b border-[#A7A29A]/15 pb-2">
                        <span className="text-xs uppercase tracking-[0.2em] text-[#C49A45] font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A45]" />
                          <span>{mod.code}</span>
                        </span>
                        <span className="text-[10px] text-[#A7A29A] font-mono">2027</span>
                      </div>

                      <ul className="space-y-2 pt-1">
                        {mod.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="text-xs sm:text-sm text-[#A7A29A] font-light flex items-start gap-2.5 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#DFC07D] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lado Direito: Mockup Interativo do Smartphone / Painel (5 colunas) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[340px] bg-[#050708] border-2 border-[#C49A45]/60 rounded-[36px] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.95)] relative">
                  
                  {/* Dynamic Island / Sensor Notch */}
                  <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#111] mr-2" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0a1b26]" />
                  </div>

                  {/* Tela Interna do Smartphone */}
                  <div className="bg-[#071118] border border-[#A7A29A]/15 rounded-[28px] overflow-hidden min-h-[480px] text-[#F0E9DC] p-4 flex flex-col justify-between text-xs font-sans">
                    
                    {/* Renderização condicional conforme o grupo selecionado */}
                    {activeGroup.mockupType === 'identity' && (
                      <div className="space-y-4 my-auto text-center">
                        <div className="w-16 h-16 mx-auto rounded-full bg-[#C49A45]/20 border border-[#C49A45] flex items-center justify-center text-[#DFC07D] shadow-lg">
                          <Sparkles className="w-8 h-8" />
                        </div>
                        <div>
                          <span className="font-serif text-lg text-[#F0E9DC] block font-light tracking-wider uppercase">
                            França Retificada
                          </span>
                          <span className="text-[10px] text-[#C49A45] uppercase tracking-[0.25em]">
                            Expedição 2027
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-[#A7A29A]/15 rounded-lg text-left space-y-2">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-[#A7A29A]">Onboarding Geral</span>
                            <span className="text-[#DFC07D] font-mono font-bold">75% Concluído</span>
                          </div>
                          <div className="w-full h-1.5 bg-[#111] rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-[#C49A45]" />
                          </div>
                          <div className="space-y-1 text-[10px] text-[#A7A29A] pt-1">
                            <div className="flex items-center gap-1.5 text-[#DFC07D]">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Passaporte Validado (Validade 2029)</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[#DFC07D]">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Apólice Allianz Europeia Emitida</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-amber-400">
                              <Radio className="w-3 h-3" />
                              <span>eSIM Pendente de Ativação no Brasil</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeGroup.mockupType === 'dashboard' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <span className="font-serif text-sm text-[#DFC07D]">Dia 05 · Versalhes</span>
                          <span className="text-[10px] text-[#A7A29A] font-mono">19 Out 2027</span>
                        </div>
                        <div className="p-2.5 bg-black/40 border border-[#C49A45]/30 rounded">
                          <span className="text-[9px] uppercase tracking-wider text-[#A7A29A] block">
                            Próxima Atividade
                          </span>
                          <span className="font-serif text-sm text-[#F0E9DC] block font-medium">
                            Château de Versailles & Galerie des Glaces
                          </span>
                          <span className="text-[10px] text-[#C49A45]">
                            10h00 · Encontro no Pátio de Honra
                          </span>
                        </div>
                        <div className="p-2.5 bg-[#050708] border border-[#A7A29A]/15 rounded space-y-1.5">
                          <span className="text-[9px] uppercase tracking-wider text-[#DFC07D] block">
                            Atlas da Cidade
                          </span>
                          <div className="flex items-center justify-between text-[10px]">
                            <span>Paris ⇄ Versalhes</span>
                            <span className="text-[#A7A29A]">21 km · Transfer</span>
                          </div>
                          <div className="flex items-center justify-between text-[10px]">
                            <span>Clima Local</span>
                            <span className="text-[#A7A29A]">14°C · Outono Suave</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeGroup.mockupType === 'logistics' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <span className="font-serif text-sm text-[#DFC07D]">Logística & TGV</span>
                          <span className="px-2 py-0.5 bg-[#C49A45]/20 text-[#DFC07D] text-[9px] font-mono">
                            Confirmado
                          </span>
                        </div>
                        <div className="p-3 bg-black/50 border border-[#A7A29A]/20 rounded space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-mono">
                            <span className="text-[#DFC07D]">PARIS GARE DE LYON</span>
                            <span>→</span>
                            <span className="text-[#DFC07D]">LYON PART-DIEU</span>
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-[#A7A29A]">
                            <span>TGV INOUI 6611</span>
                            <span>Assento 42 · 1ª Classe</span>
                          </div>
                          <div className="pt-1 text-[9px] text-[#A7A29A]">
                            Partida: 08h58 · Duração: 1h57
                          </div>
                        </div>
                        <div className="p-2.5 bg-[#050708] border border-[#A7A29A]/15 rounded text-[10px] space-y-1">
                          <span className="text-[#DFC07D] font-medium block">Hotel Lyon Métropole</span>
                          <span className="text-[#A7A29A] block">85 Quai Joseph Gillet, Lyon</span>
                          <span className="text-emerald-400 block">Check-in Automático via App</span>
                        </div>
                      </div>
                    )}

                    {activeGroup.mockupType === 'esim' && (
                      <div className="space-y-3 text-center">
                        <div className="p-3 bg-black/50 border border-[#C49A45]/30 rounded space-y-2">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-[#DFC07D] font-medium">França Retificada eSIM 5G</span>
                            <span className="text-emerald-400 font-mono">CONECTADO</span>
                          </div>
                          <div className="text-2xl font-mono text-[#DFC07D] font-bold">
                            18.4 <span className="text-xs text-[#A7A29A]">/ 25 GB</span>
                          </div>
                          <div className="w-full h-1.5 bg-[#111] rounded-full overflow-hidden">
                            <div className="w-[74%] h-full bg-emerald-500" />
                          </div>
                          <span className="text-[9px] text-[#A7A29A] block">
                            Rede: Orange France 5G · Roaming Europa Ativo
                          </span>
                        </div>

                        <div className="p-2.5 bg-[#050708] border border-[#A7A29A]/15 rounded text-left space-y-1">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-[#F0E9DC] font-medium">Allianz Global Assistance</span>
                            <span className="text-[#C49A45]">€ 60.000</span>
                          </div>
                          <span className="text-[9px] text-[#A7A29A] block font-mono">
                            Apólice: #GPRER-2027-FR-0294
                          </span>
                          <span className="text-[9px] text-emerald-400 block">
                            Atendimento Médico 24h em Português
                          </span>
                        </div>
                      </div>
                    )}

                    {activeGroup.mockupType === 'sos' && (
                      <div className="space-y-3">
                        <div className="p-3 bg-red-950/40 border border-red-500/50 rounded text-center space-y-1.5">
                          <AlertTriangle className="w-6 h-6 text-red-400 mx-auto" />
                          <span className="font-serif text-sm text-red-200 block font-bold">
                            CENTRAL SOS EXPEDIÇÃO
                          </span>
                          <span className="text-[9px] text-red-300 block">
                            Acionamento Prioritário com Envio de GPS
                          </span>
                        </div>

                        <div className="space-y-1.5 text-[10px]">
                          <button
                            type="button"
                            className="w-full p-2 bg-[#050708] border border-red-500/30 text-red-300 rounded flex items-center justify-between"
                          >
                            <span>Ligar para Coordenação Geral</span>
                            <PhoneCall className="w-3.5 h-3.5 text-red-400" />
                          </button>
                          <button
                            type="button"
                            className="w-full p-2 bg-[#050708] border border-[#C49A45]/30 text-[#DFC07D] rounded flex items-center justify-between"
                          >
                            <span>Plantão Consular Brasil (Paris)</span>
                            <PhoneCall className="w-3.5 h-3.5 text-[#C49A45]" />
                          </button>
                          <button
                            type="button"
                            className="w-full p-2 bg-[#050708] border border-[#A7A29A]/20 text-[#F0E9DC] rounded flex items-center justify-between"
                          >
                            <span>Emergência Francesa (112)</span>
                            <ShieldAlert className="w-3.5 h-3.5 text-[#A7A29A]" />
                          </button>
                        </div>

                        <div className="p-2 bg-black/40 border border-[#A7A29A]/10 rounded text-[9px] text-[#A7A29A] italic">
                          "J'ai besoin d'aide médicale immédiate." (Preciso de ajuda médica imediata)
                        </div>
                      </div>
                    )}

                    {activeGroup.mockupType === 'library' && (
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[10px]">
                          <span className="text-[#DFC07D] uppercase tracking-wider font-semibold">
                            Biblioteca Digital
                          </span>
                          <span className="text-[#A7A29A]">Fundo Willermoz</span>
                        </div>

                        <div className="p-2.5 bg-black/40 border border-[#C49A45]/30 rounded space-y-1">
                          <span className="text-[9px] text-[#C49A45] uppercase tracking-wider block">
                            Manuscrito Histórico
                          </span>
                          <span className="font-serif text-xs text-[#F0E9DC] block font-medium">
                            Código Maçônico das Lojas Retificadas (1778)
                          </span>
                          <span className="text-[9px] text-[#A7A29A] block">
                            Documento original aprovado no Convento das Gálias
                          </span>
                        </div>

                        <div className="p-2.5 bg-[#050708] border border-[#A7A29A]/15 rounded space-y-1.5">
                          <span className="text-[9px] text-[#DFC07D] uppercase tracking-wider block">
                            Checklist Inteligente de Mala
                          </span>
                          <div className="space-y-1 text-[10px]">
                            {Object.entries(checklist).slice(0, 3).map(([k, checked]) => (
                              <div
                                key={k}
                                onClick={() => toggleCheck(k)}
                                className="flex items-center justify-between cursor-pointer text-[#A7A29A] hover:text-[#F0E9DC]"
                              >
                                <span className="capitalize">{k.replace('_', ' ')}</span>
                                <span className={checked ? 'text-emerald-400' : 'text-amber-400'}>
                                  {checked ? '✓ Pronto' : '○ Pendente'}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeGroup.mockupType === 'finance' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[10px]">
                          <span className="text-[#DFC07D] uppercase tracking-wider font-semibold">
                            Conversor & Gastos
                          </span>
                          <span className="text-[#A7A29A]">EUR / BRL</span>
                        </div>

                        <div className="p-3 bg-black/50 border border-[#C49A45]/40 rounded space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#A7A29A]">Euros (€)</span>
                            <input
                              type="number"
                              value={converterEuros}
                              onChange={(e) => setConverterEuros(e.target.value)}
                              className="w-16 bg-[#050708] border border-[#C49A45]/40 text-right px-1.5 py-0.5 text-xs text-[#DFC07D] font-mono outline-none"
                            />
                          </div>
                          <div className="flex items-center justify-between text-xs border-t border-white/10 pt-1.5">
                            <span className="text-[#A7A29A]">Reais (R$) aprox.</span>
                            <span className="text-emerald-400 font-mono font-bold text-sm">
                              R$ {((parseFloat(converterEuros) || 0) * 6.2).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <div className="p-2.5 bg-[#050708] border border-[#A7A29A]/15 rounded space-y-1">
                          <span className="text-[9px] text-[#DFC07D] uppercase tracking-wider block">
                            Recomendação Histórica
                          </span>
                          <span className="font-serif text-xs text-[#F0E9DC] block">
                            Le Procope · Paris (1686)
                          </span>
                          <span className="text-[9px] text-[#A7A29A] block">
                            O mais antigo café de Paris, ponto de encontro dos iluministas
                          </span>
                        </div>
                      </div>
                    )}

                    {activeGroup.mockupType === 'passport' && (
                      <div className="space-y-3 text-center">
                        <div className="p-3 bg-gradient-to-b from-[#12070f] to-[#050708] border border-[#C49A45]/50 rounded space-y-2">
                          <Stamp className="w-8 h-8 text-[#DFC07D] mx-auto animate-pulse" />
                          <span className="font-serif text-xs text-[#DFC07D] uppercase tracking-widest block font-medium">
                            Passaporte da Expedição
                          </span>
                          <div className="grid grid-cols-2 gap-1.5 text-[9px] pt-1">
                            <div className="p-1.5 bg-black/40 border border-emerald-500/40 text-emerald-300 rounded">
                              ✓ Paris · Concluído
                            </div>
                            <div className="p-1.5 bg-black/40 border border-emerald-500/40 text-emerald-300 rounded">
                              ✓ Versalhes · Concluído
                            </div>
                            <div className="p-1.5 bg-black/40 border border-emerald-500/40 text-emerald-300 rounded">
                              ✓ Chartres · Concluído
                            </div>
                            <div className="p-1.5 bg-black/40 border border-[#C49A45]/60 text-[#DFC07D] rounded">
                              ★ Lyon · Berço RER
                            </div>
                          </div>
                        </div>

                        <div className="p-2 bg-[#050708] border border-[#A7A29A]/15 rounded text-[9px] text-[#A7A29A]">
                          Certificado Oficial emitido digitalmente ao término das 4 etapas
                        </div>
                      </div>
                    )}

                    {activeGroup.mockupType === 'admin' && (
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[10px]">
                          <span className="text-[#DFC07D] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                            <Sliders className="w-3 h-3 text-[#C49A45]" />
                            <span>Coordenação Geral</span>
                          </span>
                          <span className="px-1.5 py-0.2 bg-red-950 text-red-200 text-[8px] font-mono uppercase">
                            Admin
                          </span>
                        </div>

                        <div className="p-2.5 bg-black/50 border border-[#C49A45]/30 rounded space-y-1.5 text-[10px]">
                          <div className="flex items-center justify-between">
                            <span className="text-[#A7A29A]">Delegação</span>
                            <span className="text-[#DFC07D] font-mono">20 / 20 Participantes</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#A7A29A]">Seguros Validados</span>
                            <span className="text-emerald-400 font-mono">100% (20/20)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#A7A29A]">eSIMs Provisionados</span>
                            <span className="text-emerald-400 font-mono">100% (20/20)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#A7A29A]">Check-in Lyon</span>
                            <span className="text-[#DFC07D] font-mono">Agendado</span>
                          </div>
                        </div>

                        <div className="p-2 bg-[#050708] border border-[#A7A29A]/15 rounded text-[9px] text-[#A7A29A] space-y-1">
                          <span className="text-[#DFC07D] block font-medium">Mural de Comunicados</span>
                          <span className="block">Disparo de notificação em massa para os 20 aparelhos simultaneamente.</span>
                        </div>
                      </div>
                    )}

                    {/* Barra de Navegação Inferior Nativa do App */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[8px] uppercase tracking-wider text-[#A7A29A]">
                      <span className="text-[#DFC07D] font-bold">Início</span>
                      <span>Jornada</span>
                      <span>Acervo</span>
                      <span>Grupo</span>
                      <span>Perfil</span>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            {/* Rodapé Interno com Controles de Avanço entre Grupos */}
            <div className="mt-8 pt-6 border-t border-[#A7A29A]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-[#A7A29A] text-[11px]">
                Navegando: <strong className="text-[#DFC07D]">Grupo {activeGroup.number} de 09</strong> · {activeGroup.title}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={activeGroupIndex === 0}
                  onClick={() => setActiveGroupIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 border border-[#A7A29A]/20 disabled:opacity-30 text-[#A7A29A] hover:text-[#DFC07D] hover:border-[#C49A45] transition-colors cursor-pointer text-[10px] uppercase tracking-wider"
                >
                  ← Grupo Anterior
                </button>
                <button
                  type="button"
                  disabled={activeGroupIndex === appGroups.length - 1}
                  onClick={() => setActiveGroupIndex((prev) => Math.min(appGroups.length - 1, prev + 1))}
                  className="px-3 py-1.5 border border-[#C49A45]/40 hover:border-[#DFC07D] bg-[#C49A45]/15 hover:bg-[#C49A45] text-[#DFC07D] hover:text-[#050708] transition-all cursor-pointer text-[10px] uppercase tracking-wider font-medium"
                >
                  Próximo Grupo →
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================================== */}
        {/* 04. RESUMO DOS 20 MÓDULOS INTEGRADOS (QUADRO SINÓPTICO)              */}
        {/* ==================================================================== */}
        <section aria-label="Quadro Sinóptico dos 20 Módulos" className="pt-16 border-t border-[#A7A29A]/15">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium block">
              Especificação Funcional Completa
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F0E9DC] font-light">
              Os 20 Módulos do Sistema <span className="text-[#DFC07D] italic">França Retificada 2027</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A29A] font-light">
              Cada componente foi projetado para assegurar autonomia, segurança, conforto e densidade cultural aos participantes da expedição.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'Identidade e Acesso', desc: 'Login individual, perfil pessoal, credencial segura e onboarding.' },
              { num: '02', title: 'Jornada e Programação', desc: 'Dashboard, itinerário diário, horários e pontos de encontro.' },
              { num: '03', title: 'Atlas Histórico e Mapas', desc: 'Cartografia interativa, pontos documentais em Paris, Versalhes, Chartres e Lyon.' },
              { num: '04', title: 'Logística e Serviços', desc: 'Aéreos, trens TGV, transfers privativos, hotéis e bagagens.' },
              { num: '05', title: 'Conectividade (eSIM)', desc: 'Chip virtual 5G, ativação no Brasil e monitoramento de dados.' },
              { num: '06', title: 'Seguro e Assistência', desc: 'Apólice digital, coberturas, telefones 24h e hospitais credenciados.' },
              { num: '07', title: 'Rastreamento de Grupo', desc: 'Localização compartilhada voluntariamente e chamada de assistência.' },
              { num: '08', title: 'Central de Contatos', desc: 'Embaixada, consulado, hospitais, farmácias, aeroportos e ferrovias.' },
              { num: '09', title: 'Central SOS', desc: 'Botão de pânico, emergência local (112), contingências e frases em francês.' },
              { num: '10', title: 'Suporte Linguístico', desc: 'Tradutor especializado Português-Francês e frases úteis contextuais.' },
              { num: '11', title: 'Biblioteca Digital', desc: 'Manuscritos históricos fac-similados, biografias, estudos do RER e bibliografia.' },
              { num: '12', title: 'Preparação e Bagagem', desc: 'Checklist inteligente de mala, peso, adaptadores de tomada e clima.' },
              { num: '13', title: 'Gastronomia & Café', desc: 'Curadoria gastronômica de bistrôs históricos e experiências nas 4 cidades.' },
              { num: '14', title: 'Controle Financeiro', desc: 'Conversor de moedas EUR/BRL, controle de orçamento e registro de despesas.' },
              { num: '15', title: 'Diário de Bordo', desc: 'Anotações pessoais, impressões filosóficas e fotos por data e cidade.' },
              { num: '16', title: 'Galeria Oficial', desc: 'Repositório fotográfico em alta resolução e retrospectiva audiovisual.' },
              { num: '17', title: 'Passaporte Digital', desc: 'Carimbos comemorativos das 4 cidades e marcos da expedição.' },
              { num: '18', title: 'Certificado & Memorial', desc: 'Certificado de participação chancelado e memorial histórico perpétuo.' },
              { num: '19', title: 'Mural de Comunicação', desc: 'Avisos da coordenação, mudanças de roteiro e alertas em tempo real.' },
              { num: '20', title: 'Painel da Coordenação', desc: 'Gestão dos 20 participantes, documentos, presenças e relatórios.' }
            ].map((m) => (
              <div
                key={m.num}
                className="p-4 bg-[#070b10] border border-[#A7A29A]/15 hover:border-[#C49A45]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
                    <span className="font-mono text-xs text-[#C49A45] font-bold">{m.num}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFC07D]/50" />
                  </div>
                  <h5 className="font-serif text-base text-[#F0E9DC] font-normal mb-1">
                    {m.title}
                  </h5>
                  <p className="text-xs text-[#A7A29A] font-light leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ==================================================================== */}
      {/* MODAL LIGHTBOX EM ALTA RESOLUÇÃO DO MOCKUP DAS TELAS                 */}
      {/* ==================================================================== */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[140] flex items-center justify-center p-3 sm:p-6 bg-[#050708]/98 backdrop-blur-xl transition-all"
          role="dialog"
          aria-modal="true"
          aria-label="Interfaces do Aplicativo em Alta Resolução"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-7xl w-full h-[94vh] bg-[#071118] border border-[#C49A45]/60 shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-[#F0E9DC]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#A7A29A]/20 px-4 md:px-6 py-3 bg-[#050708]/90 shrink-0">
              <div className="flex items-center gap-3">
                <Smartphone className="w-4 h-4 text-[#C49A45]" />
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-[#F0E9DC] font-normal leading-tight">
                    França Retificada 2027 <span className="text-[#C49A45] italic">· Painel Oficial de Interfaces</span>
                  </h4>
                  <p className="text-[10px] text-[#A7A29A] tracking-wider uppercase">
                    15 Telas Principais do Aplicativo da Expedição
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 text-[#A7A29A] hover:text-[#C49A45] hover:bg-white/5 rounded transition-colors cursor-pointer"
                aria-label="Fechar visualização"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Imagem com scroll e visualização completa */}
            <div className="relative flex-1 w-full overflow-auto bg-[#030508] p-4 flex items-center justify-center">
              <img
                src="/app.png"
                alt="Interfaces do aplicativo oficial da expedição França Retificada 2027"
                className="max-h-[85vh] w-auto object-contain filter contrast-[1.04]"
              />
            </div>

            {/* Rodapé com Legenda */}
            <div className="px-4 md:px-6 py-2.5 bg-[#050708]/90 border-t border-[#A7A29A]/15 text-xs text-[#A7A29A] flex items-center justify-between shrink-0">
              <span className="text-[11px]">
                Plataforma exclusiva para iOS & Android desenvolvida para a Expedição França Retificada 2027.
              </span>
              <span className="font-mono text-[10px] text-[#DFC07D] uppercase tracking-wider">
                15 a 25 de Outubro de 2027
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
