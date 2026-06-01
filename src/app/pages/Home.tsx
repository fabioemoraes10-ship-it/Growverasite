import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap, Target, TrendingUp, Scale } from 'lucide-react';
import { useState } from 'react';

export function Home() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    whatsapp: '',
    email: '',
    segment: '',
    revenue: '',
    challenge: '',
    interest: [] as string[],
  });

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interest: prev.interest.includes(interest)
        ? prev.interest.filter((i) => i !== interest)
        : [...prev.interest, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Obrigado! Em breve entraremos em contato.');
    setFormData({
      name: '',
      company: '',
      role: '',
      whatsapp: '',
      email: '',
      segment: '',
      revenue: '',
      challenge: '',
      interest: [],
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="text-5xl md:text-7xl leading-tight mb-6"
                style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
              >
                Seu negócio tem o que vende.
                <br />
                <span className="text-[#00FF88]">A Growvera traz o que escala.</span>
              </h1>
              <p className="text-[#A1A1AA] text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
                AI-First Venture Builder para empresas, especialistas e empreendedores que desejam crescer
                utilizando inteligência artificial, automação e novos modelos de negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/diagnostico"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#00FF88] text-[#0A0A0A] rounded-xl hover:bg-[#00CC6A] transition-all group"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                >
                  Descobrir Meu Potencial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/gaim"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1C1C1C] text-white rounded-xl hover:bg-[#2C2C2C] transition-all border border-white/10"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                >
                  Conhecer a GAIM
                </Link>
              </div>
            </motion.div>

            {/* Ecosystem Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[500px] hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Center */}
                <motion.div
                  className="absolute w-40 h-40 rounded-2xl bg-gradient-to-br from-[#00FF88] to-[#00CC6A] flex items-center justify-center shadow-2xl shadow-[#00FF88]/20"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <span className="text-[#0A0A0A] text-2xl" style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}>
                    Growvera
                  </span>
                </motion.div>

                {/* Orbiting Nodes */}
                {[
                  { label: 'AI Business', angle: 0, delay: 0 },
                  { label: 'Venture Builder', angle: 72, delay: 0.2 },
                  { label: 'AI Products', angle: 144, delay: 0.4 },
                  { label: 'GAIM', angle: 216, delay: 0.6 },
                  { label: 'Decision Intelligence', angle: 288, delay: 0.8 },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) rotate(${node.angle}deg) translateY(-180px)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: node.delay, duration: 0.5 }}
                  >
                    <motion.div
                      className="w-32 h-32 rounded-xl bg-[#1C1C1C] border border-[#00FF88]/20 flex items-center justify-center p-4 shadow-lg"
                      style={{
                        transform: `rotate(-${node.angle}deg)`,
                      }}
                      whileHover={{ scale: 1.1, borderColor: 'rgba(0, 255, 136, 0.5)' }}
                    >
                      <span className="text-white text-center text-sm" style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}>
                        {node.label}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {[0, 72, 144, 216, 288].map((angle, i) => {
                    const radians = (angle * Math.PI) / 180;
                    const x = 250 + Math.sin(radians) * 180;
                    const y = 250 - Math.cos(radians) * 180;
                    return (
                      <motion.line
                        key={i}
                        x1="250"
                        y1="250"
                        x2={x}
                        y2={y}
                        stroke="rgba(0, 255, 136, 0.2)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                      />
                    );
                  })}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A Tese Section */}
      <section className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2
              className="text-4xl md:text-6xl mb-6"
              style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
            >
              Não vendemos IA.
              <br />
              <span className="text-[#00FF88]">Construímos crescimento.</span>
            </h2>
            <p className="text-[#A1A1AA] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A maioria das empresas compra tecnologia esperando resultados.
              <br />
              Nós fazemos o caminho inverso.
              <br />
              Primeiro entendemos o negócio. Depois identificamos oportunidades.
              <br />
              Depois construímos o que realmente gera crescimento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Problema', desc: 'Diagnóstico profundo do negócio' },
              { icon: Zap, title: 'Método', desc: 'Metodologia GAIM proprietária' },
              { icon: TrendingUp, title: 'Execução', desc: 'Squads IA em operação' },
              { icon: Scale, title: 'Escala', desc: 'Crescimento sustentável' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#1C1C1C] border border-white/5 rounded-2xl p-8 hover:border-[#00FF88]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00FF88]/10 flex items-center justify-center mb-6">
                  <card.icon className="text-[#00FF88]" size={24} />
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                >
                  {card.title}
                </h3>
                <p className="text-[#A1A1AA]">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GAIM Methodology Section */}
      <section className="py-32 px-6 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-4xl md:text-6xl mb-6"
              style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
            >
              A metodologia que transforma
              <br />
              <span className="text-[#00FF88]">potencial em resultado.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                letter: 'G',
                title: 'Ground Truth',
                subtitle: 'Diagnóstico Profundo',
                items: ['Mapeamento de processos', 'Análise de maturidade', 'Diagnóstico estratégico'],
              },
              {
                letter: 'A',
                title: 'Architecture',
                subtitle: 'Desenho da Solução',
                items: ['Modelo operacional', 'Oferta', 'Roadmap', 'Governança'],
              },
              {
                letter: 'I',
                title: 'Intelligence',
                subtitle: 'Squads e Comitês IA',
                items: ['Agentes especializados', 'Decision Intelligence', 'Automação', 'Análise contínua'],
              },
              {
                letter: 'M',
                title: 'Momentum',
                subtitle: 'Quick Wins e Escala',
                items: ['Resultado em 30 dias', 'Produto em 90 dias', 'Escala sustentável'],
              },
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="bg-[#1C1C1C] border border-white/5 rounded-2xl p-8 hover:border-[#00FF88]/30 transition-all h-full">
                  <div
                    className="text-6xl mb-4 bg-gradient-to-br from-[#00FF88] to-[#00CC6A] bg-clip-text text-transparent"
                    style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
                  >
                    {phase.letter}
                  </div>
                  <h3
                    className="text-2xl mb-2"
                    style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                  >
                    {phase.title}
                  </h3>
                  <p className="text-[#00FF88] mb-6 text-sm">{phase.subtitle}</p>
                  <ul className="space-y-3">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[#A1A1AA] text-sm">
                        <CheckCircle2 className="text-[#00FF88] mt-0.5 flex-shrink-0" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#00FF88] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Lines Section */}
      <section className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-4xl md:text-6xl mb-6"
              style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
            >
              Três caminhos para
              <br />
              <span className="text-[#00FF88]">acelerar crescimento.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI BUSINESS TRANSFORMATION',
                desc: 'Transformamos operações, processos e decisões utilizando IA.',
                items: ['Agentes', 'Automação', 'Dashboards', 'Decision Intelligence', 'Governança'],
                cta: 'Transformar Meu Negócio',
                link: '/ai-business-transformation',
              },
              {
                title: 'VENTURE BUILDER STUDIO',
                desc: 'Transformamos especialistas e empreendedores em negócios escaláveis.',
                items: ['Founder Market Fit', 'Oferta', 'Método', 'Playbooks', 'Growth', 'Escala'],
                cta: 'Validar Minha Oportunidade',
                link: '/venture-builder',
              },
              {
                title: 'AI PRODUCTS',
                desc: 'Criamos plataformas, produtos digitais e ativos tecnológicos.',
                items: ['MVP', 'SaaS', 'Portais', 'Produtos IA', 'Plataformas'],
                cta: 'Criar Meu Produto',
                link: '/ai-products',
              },
            ].map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-[#1C1C1C] border border-white/5 rounded-2xl p-8 hover:border-[#00FF88]/30 transition-all flex flex-col"
              >
                <h3
                  className="text-xl mb-4 text-[#00FF88]"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                >
                  {line.title}
                </h3>
                <p className="text-[#A1A1AA] mb-6 flex-grow">{line.desc}</p>
                <ul className="space-y-2 mb-8">
                  {line.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-white text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={line.link}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#00FF88]/10 text-[#00FF88] rounded-lg hover:bg-[#00FF88]/20 transition-all border border-[#00FF88]/20 group"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                >
                  {line.cta}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Squads Section */}
      <section className="py-32 px-6 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-4xl md:text-6xl mb-6"
              style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
            >
              Especialistas digitais
              <br />
              <span className="text-[#00FF88]">trabalhando para o seu negócio.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Estrategista Comercial',
              'Analista de Mercado',
              'Arquiteto de Produto',
              'Growth Strategist',
              'CFO Agent',
              'CRO Agent',
              'Risk Agent',
              'Compliance Agent',
              'Orquestrador Executivo',
            ].map((agent, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1C1C1C] border border-white/5 rounded-xl p-6 hover:border-[#00FF88]/30 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FF88] to-[#00CC6A] mx-auto mb-4 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#0A0A0A] animate-pulse" />
                </div>
                <h3 className="text-white text-sm mb-2" style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}>
                  {agent}
                </h3>
                <span className="inline-flex items-center px-2 py-1 bg-[#00FF88]/10 text-[#00FF88] rounded text-xs">
                  Ativo
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs Section */}
      <section className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-4xl md:text-6xl mb-6"
              style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
            >
              Negócios sendo
              <br />
              <span className="text-[#00FF88]">construídos agora.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Finance BPO 4.0',
              'Aromaterapia',
              'Nutrição',
              'LungNova BioTech',
              'B2G Decision Intelligence',
              'Maker 3D',
            ].map((lab, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#1C1C1C] border border-white/5 rounded-2xl p-8 hover:border-[#00FF88]/30 transition-all"
              >
                <span className="inline-flex items-center px-3 py-1 bg-[#00FF88]/10 text-[#00FF88] rounded-full text-xs mb-6">
                  Laboratório Venture Builder
                </span>
                <h3
                  className="text-2xl mb-4"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                >
                  {lab}
                </h3>
                <div className="flex items-center gap-2 text-[#A1A1AA] text-sm">
                  <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                  Em desenvolvimento
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Model Section */}
      <section className="py-32 px-6 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-6xl mb-6"
              style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
            >
              Crescemos quando
              <br />
              <span className="text-[#00FF88]">você cresce.</span>
            </h2>
            <p className="text-[#A1A1AA] text-lg max-w-3xl mx-auto leading-relaxed">
              Não atuamos como fornecedores tradicionais.
              <br />
              Participamos da construção do negócio.
              <br />
              Alinhamos tecnologia, inteligência e execução ao crescimento do cliente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {['Revenue Share', 'Joint Venture', 'Venture Building', 'AI Transformation'].map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1C1C1C] border border-white/5 rounded-xl p-6 text-center hover:border-[#00FF88]/30 transition-all"
              >
                <h3
                  className="text-lg"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                >
                  {model}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-6xl mb-6"
              style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
            >
              Existe um negócio maior escondido
              <br />
              <span className="text-[#00FF88]">dentro da sua empresa?</span>
            </h2>
            <p className="text-[#A1A1AA] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Descubra onde a IA, a automação e a metodologia GAIM podem gerar crescimento real.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto bg-[#1C1C1C] border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2 text-sm">Nome</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF88] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 text-sm">Empresa</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF88] transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2 text-sm">Cargo</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF88] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 text-sm">WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF88] transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2 text-sm">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF88] transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2 text-sm">Segmento</label>
                  <input
                    type="text"
                    value={formData.segment}
                    onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                    className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF88] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 text-sm">Receita aproximada</label>
                  <select
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF88] transition-colors"
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="0-500k">Até R$ 500k</option>
                    <option value="500k-2m">R$ 500k - R$ 2M</option>
                    <option value="2m-10m">R$ 2M - R$ 10M</option>
                    <option value="10m+">R$ 10M+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white mb-2 text-sm">Principal desafio</label>
                <textarea
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF88] transition-colors h-32 resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-4 text-sm">Interesse</label>
                <div className="space-y-3">
                  {[
                    'AI Business Transformation',
                    'Venture Builder Studio',
                    'AI Products',
                  ].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.interest.includes(option)}
                        onChange={() => handleInterestToggle(option)}
                        className="w-5 h-5 rounded border-white/10 bg-[#141414] checked:bg-[#00FF88] checked:border-[#00FF88] focus:ring-[#00FF88] focus:ring-offset-0 cursor-pointer"
                      />
                      <span className="text-white group-hover:text-[#00FF88] transition-colors">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#00FF88] text-[#0A0A0A] rounded-xl hover:bg-[#00CC6A] transition-all flex items-center justify-center gap-2 group"
                style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
              >
                Agendar Diagnóstico Estratégico
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
