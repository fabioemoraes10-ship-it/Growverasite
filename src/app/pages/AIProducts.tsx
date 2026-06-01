import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Code, Database, Globe, Smartphone, Layers, Cloud } from 'lucide-react';

export function AIProducts() {
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
            AI
            <br />
            <span className="text-[#00FF88]">Products</span>
          </h1>
          <p className="text-[#A1A1AA] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Criamos plataformas, produtos digitais e ativos tecnológicos com IA embarcada.
            <br />
            Do MVP ao SaaS completo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-12 mb-16"
        >
          <h2
            className="text-3xl md:text-4xl mb-6 text-center"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
          >
            Produtos que resolvem problemas.
            <br />
            <span className="text-[#00FF88]">Tecnologia que gera valor.</span>
          </h2>
          <p className="text-[#A1A1AA] text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Não construímos tecnologia pela tecnologia. Desenvolvemos produtos que resolvem problemas reais,
            geram receita e escalam de forma sustentável. Tudo com IA como diferencial competitivo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'MVP Inteligente',
                description: 'Validação rápida de ideias com produto funcional em 30-60 dias, já com IA embarcada.',
              },
              {
                icon: Cloud,
                title: 'SaaS Completo',
                description: 'Plataforma escalável multi-tenant com infraestrutura, segurança e automação.',
              },
              {
                icon: Globe,
                title: 'Portais e Plataformas',
                description: 'Sites corporativos, marketplaces, comunidades e ecossistemas digitais.',
              },
              {
                icon: Database,
                title: 'Produtos com IA',
                description: 'Soluções específicas: chatbots, análise de dados, automação e decision intelligence.',
              },
              {
                icon: Layers,
                title: 'Plataformas White Label',
                description: 'Produtos reutilizáveis que podem ser customizados para diferentes clientes.',
              },
              {
                icon: Smartphone,
                title: 'Apps e Interfaces',
                description: 'Aplicações web e mobile com experiência premium e performance otimizada.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#141414] border border-white/5 rounded-xl p-6 hover:border-[#00FF88]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00FF88]/10 flex items-center justify-center mb-4">
                  <item.icon className="text-[#00FF88]" size={24} />
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2
            className="text-3xl md:text-4xl mb-12 text-center"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
          >
            Nossa stack de
            <span className="text-[#00FF88]"> desenvolvimento</span>
          </h2>
          <div className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3
                  className="text-xl mb-6"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                >
                  Frontend
                </h3>
                <ul className="space-y-3">
                  {['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Motion / Framer'].map((tech, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#A1A1AA]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3
                  className="text-xl mb-6"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                >
                  Backend & IA
                </h3>
                <ul className="space-y-3">
                  {['Python / FastAPI', 'Node.js', 'OpenAI / Anthropic', 'LangChain'].map((tech, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#A1A1AA]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3
                  className="text-xl mb-6"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                >
                  Infraestrutura
                </h3>
                <ul className="space-y-3">
                  {['AWS / Vercel', 'PostgreSQL', 'Redis', 'Docker'].map((tech, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#A1A1AA]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2
            className="text-3xl md:text-4xl mb-12 text-center"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
          >
            Como desenvolvemos
            <span className="text-[#00FF88]"> seu produto</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Discovery',
                duration: '1-2 semanas',
                description: 'Entendemos o problema, usuários e requisitos técnicos.',
              },
              {
                step: '2',
                title: 'Design & Arquitetura',
                duration: '2 semanas',
                description: 'Desenhamos UX/UI e arquitetura técnica completa.',
              },
              {
                step: '3',
                title: 'Desenvolvimento',
                duration: '4-12 semanas',
                description: 'Construímos o produto com entregas semanais.',
              },
              {
                step: '4',
                title: 'Launch & Escala',
                duration: 'Contínuo',
                description: 'Lançamos, medimos e evoluímos continuamente.',
              },
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-[#1C1C1C] border border-white/5 rounded-xl p-6 relative"
              >
                <div className="text-5xl font-bold text-[#00FF88]/20 mb-4">{phase.step}</div>
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                >
                  {phase.title}
                </h3>
                <p className="text-[#00FF88] text-sm mb-3">{phase.duration}</p>
                <p className="text-[#A1A1AA] text-sm">{phase.description}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 w-6 h-0.5 bg-gradient-to-r from-[#00FF88] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center bg-[#1C1C1C] border border-white/10 rounded-2xl p-12"
        >
          <h2
            className="text-3xl md:text-5xl mb-6"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
          >
            Vamos criar
            <br />
            <span className="text-[#00FF88]">seu produto com IA?</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg mb-8 max-w-2xl mx-auto">
            Agende um diagnóstico e vamos desenhar juntos a solução ideal para seu desafio.
          </p>
          <Link
            to="/diagnostico"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00FF88] text-[#0A0A0A] rounded-xl hover:bg-[#00CC6A] transition-all group"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
          >
            Criar Meu Produto
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
