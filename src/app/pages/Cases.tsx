import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Cases() {
  const labs = [
    {
      name: 'Finance BPO 4.0',
      category: 'Fintech',
      description: 'BPO tech-enabled, com método proprietário, automações internas, playbook operacional.',
      status: 'MVP em desenvolvimento',
      highlights: ['Método proprietário', 'Automações internas', 'Playbook operacional'],
    },
    {
      name: 'Aromaterapia',
      category: 'Wellness',
      description: 'Venture builder para especialista em aromaterapia, transformando conhecimento em negócio digital escalável.',
      status: 'Oferta e método em construção',
      highlights: ['Metodologia proprietária', 'Produtos digitais', 'Comunidade online'],
    },
    {
      name: 'Nutrição',
      category: 'Health Tech',
      description: 'Plataforma que conecta nutricionistas a pacientes com acompanhamento inteligente e automação de processos.',
      status: 'Discovery fase',
      highlights: ['Matchmaking inteligente', 'Automação de consultas', 'Dashboard profissional'],
    },
    {
      name: 'LungNova BioTech',
      category: 'HealthTech',
      description: 'Respiratory Intelligence Platform™. Plataforma científica de inteligência respiratória que integra dados clínicos, biomarcadores, IA e protocolos de recuperação pulmonar para apoiar decisões médicas, pesquisas e programas de cessação tabágica.',
      status: 'Pré Seed',
      highlights: ['Inteligência respiratória', 'Biomarcadores + IA', 'Protocolos de recuperação'],
    },
    {
      name: 'B2G Decision Intelligence',
      category: 'GovTech',
      description: 'Esteira estratégica de decisão, risco, margem, compliance, pagamento e pós-vitória para licitações públicas. Não é "um robô de edital", é uma plataforma completa de inteligência governamental.',
      status: 'MVP operacional',
      highlights: ['Decisão estratégica', 'Gestão de risco e compliance', 'Inteligência pós-vitória'],
    },
    {
      name: 'Maker 3D',
      category: 'Manufacturing',
      description: 'Marketplace que conecta designers 3D a empresas, com automação de orçamentos e gestão de produção.',
      status: 'Discovery fase',
      highlights: ['Marketplace B2B', 'Orçamento automático', 'Gestão de pedidos'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1
            className="text-5xl md:text-7xl mb-6"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
          >
            Laboratórios
            <br />
            <span className="text-[#00FF88]">Growvera</span>
          </h1>
          <p className="text-[#A1A1AA] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Negócios sendo construídos agora utilizando nossa metodologia GAIM.
            <br />
            Do diagnóstico ao produto. Da ideia à escala.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-12 mb-16 text-center"
        >
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
          >
            Laboratório de
            <span className="text-[#00FF88]"> Venture Building</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed">
            Cada projeto no nosso laboratório é um case real da metodologia GAIM em ação.
            Validamos oportunidades, construímos produtos e escalamos negócios.
            <br /><br />
            Alguns são ventures próprias. Outros são parcerias com especialistas e empreendedores.
            Todos seguem o mesmo método rigoroso de construção.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {labs.map((lab, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#1C1C1C] border border-white/5 rounded-2xl p-8 hover:border-[#00FF88]/30 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-[#00FF88]/10 text-[#00FF88] rounded-full text-xs">
                  {lab.category}
                </span>
                <div className="flex items-center gap-2 text-[#A1A1AA] text-xs">
                  <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                  Ativo
                </div>
              </div>
              <h3
                className="text-2xl mb-3"
                style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
              >
                {lab.name}
              </h3>
              <p className="text-[#A1A1AA] text-sm mb-4 leading-relaxed">{lab.description}</p>
              <p className="text-[#00FF88] text-sm mb-6">{lab.status}</p>
              <div className="space-y-2">
                {lab.highlights.map((highlight, j) => (
                  <div key={j} className="flex items-center gap-2 text-white text-xs">
                    <div className="w-1 h-1 rounded-full bg-[#00FF88]" />
                    {highlight}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-12 mb-16"
        >
          <h2
            className="text-3xl md:text-4xl mb-6 text-center"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
          >
            Por que compartilhamos nossos
            <span className="text-[#00FF88]"> laboratórios?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Transparência',
                description: 'Mostramos na prática como a metodologia GAIM funciona em diferentes contextos.',
              },
              {
                title: 'Aprendizado',
                description: 'Cada projeto nos ensina algo novo que aplicamos em clientes e ventures futuras.',
              },
              {
                title: 'Validação',
                description: 'Provamos que o método funciona construindo nossos próprios negócios.',
              },
            ].map((reason, i) => (
              <div key={i} className="text-center">
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                >
                  {reason.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-center bg-[#1C1C1C] border border-white/10 rounded-2xl p-12"
        >
          <h2
            className="text-3xl md:text-5xl mb-6"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
          >
            Quer construir o próximo
            <br />
            <span className="text-[#00FF88]">case de sucesso?</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg mb-8 max-w-2xl mx-auto">
            Agende um diagnóstico e vamos avaliar se sua oportunidade tem potencial para entrar no laboratório.
          </p>
          <Link
            to="/diagnostico"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00FF88] text-[#0A0A0A] rounded-xl hover:bg-[#00CC6A] transition-all group"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
          >
            Agendar Diagnóstico
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
