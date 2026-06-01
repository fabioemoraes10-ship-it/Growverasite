import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Bot, LineChart, Shield, Zap, Layout, Network } from 'lucide-react';

export function AIBusinessTransformation() {
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
            AI Business
            <br />
            <span className="text-[#00FF88]">Transformation</span>
          </h1>
          <p className="text-[#A1A1AA] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transformamos operações, processos e decisões utilizando Inteligência Artificial.
            <br />
            Não é só tecnologia. É crescimento real e mensurável.
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
            Como transformamos seu negócio
          </h2>
          <p className="text-[#A1A1AA] text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Nossa abordagem é completa: desde o diagnóstico até a operação contínua de agentes inteligentes
            que tomam decisões e executam tarefas complexas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: 'Agentes Inteligentes',
                description: 'Squads de agentes especializados trabalhando 24/7 em tarefas estratégicas e operacionais.',
              },
              {
                icon: Zap,
                title: 'Automação Avançada',
                description: 'Processos críticos automatizados com decisões inteligentes e aprendizado contínuo.',
              },
              {
                icon: LineChart,
                title: 'Dashboards Executivos',
                description: 'Visibilidade completa do negócio com insights em tempo real e análise preditiva.',
              },
              {
                icon: Network,
                title: 'Decision Intelligence',
                description: 'Sistema de apoio à decisão com IA que analisa cenários e recomenda ações.',
              },
              {
                icon: Shield,
                title: 'Governança',
                description: 'Estrutura completa de controle, compliance e segurança para operações com IA.',
              },
              {
                icon: Layout,
                title: 'Integração Total',
                description: 'Conexão com todos os sistemas existentes, sem necessidade de mudanças radicais.',
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
            Para quem é a
            <span className="text-[#00FF88]"> AI Business Transformation</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Empresas Estabelecidas',
                description: 'Negócios que precisam escalar operações sem aumentar custos proporcionalmente.',
                examples: ['Redução de custos operacionais', 'Aumento de produtividade', 'Decisões mais rápidas'],
              },
              {
                title: 'Scale-ups',
                description: 'Empresas em crescimento rápido que precisam de estrutura e inteligência para escalar.',
                examples: ['Estruturação de processos', 'Automação de operações', 'Growth inteligente'],
              },
              {
                title: 'Grupos Empresariais',
                description: 'Holding e grupos que buscam eficiência e sinergia entre múltiplas operações.',
                examples: ['Governança centralizada', 'Análise consolidada', 'Decisões baseadas em dados'],
              },
            ].map((segment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-[#1C1C1C] border border-white/5 rounded-2xl p-8 hover:border-[#00FF88]/30 transition-all"
              >
                <h3
                  className="text-2xl mb-4"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                >
                  {segment.title}
                </h3>
                <p className="text-[#A1A1AA] mb-6 leading-relaxed">{segment.description}</p>
                <ul className="space-y-2">
                  {segment.examples.map((example, j) => (
                    <li key={j} className="flex items-center gap-2 text-white text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center bg-[#1C1C1C] border border-white/10 rounded-2xl p-12"
        >
          <h2
            className="text-3xl md:text-5xl mb-6"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
          >
            Transforme seu negócio com
            <br />
            <span className="text-[#00FF88]">Inteligência Artificial</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg mb-8 max-w-2xl mx-auto">
            Agende um diagnóstico estratégico e descubra as oportunidades de transformação no seu negócio.
          </p>
          <Link
            to="/diagnostico"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00FF88] text-[#0A0A0A] rounded-xl hover:bg-[#00CC6A] transition-all group"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
          >
            Transformar Meu Negócio
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
