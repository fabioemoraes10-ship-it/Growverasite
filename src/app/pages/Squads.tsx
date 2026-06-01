import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Activity } from 'lucide-react';

export function Squads() {
  const squads = [
    {
      name: 'Estrategista Comercial',
      description: 'Analisa oportunidades de mercado, define estratégias de entrada e otimiza processos comerciais.',
      capabilities: ['Análise de mercado', 'Estratégia de vendas', 'Precificação', 'Pipeline management'],
    },
    {
      name: 'Analista de Mercado',
      description: 'Monitora tendências, concorrência e identifica oportunidades de crescimento.',
      capabilities: ['Pesquisa de mercado', 'Análise competitiva', 'Tendências', 'Insights acionáveis'],
    },
    {
      name: 'Arquiteto de Produto',
      description: 'Desenha produtos, features e roadmaps baseados em dados e feedback de usuários.',
      capabilities: ['Product roadmap', 'UX Strategy', 'Feature prioritization', 'User research'],
    },
    {
      name: 'Growth Strategist',
      description: 'Otimiza funis, experimenta canais e escala aquisição de forma eficiente.',
      capabilities: ['Growth hacking', 'Otimização de funil', 'Testes A/B', 'CAC optimization'],
    },
    {
      name: 'CFO Agent',
      description: 'Análise financeira, projeções, gestão de caixa e tomada de decisões financeiras.',
      capabilities: ['Projeções financeiras', 'Cash flow', 'Budget planning', 'ROI analysis'],
    },
    {
      name: 'CRO Agent',
      description: 'Otimiza receita através de pricing, upsell, cross-sell e retenção.',
      capabilities: ['Revenue optimization', 'Pricing strategy', 'Churn reduction', 'LTV growth'],
    },
    {
      name: 'Risk Agent',
      description: 'Identifica, avalia e mitiga riscos operacionais, financeiros e estratégicos.',
      capabilities: ['Risk assessment', 'Scenario planning', 'Mitigation strategies', 'Compliance'],
    },
    {
      name: 'Compliance Agent',
      description: 'Garante conformidade com regulações, políticas internas e boas práticas.',
      capabilities: ['Regulatory compliance', 'Policy enforcement', 'Audit trails', 'Documentation'],
    },
    {
      name: 'Orquestrador Executivo',
      description: 'Coordena todos os agentes, prioriza tarefas e garante alinhamento estratégico.',
      capabilities: ['Task coordination', 'Priority management', 'Strategic alignment', 'Decision making'],
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
            Squads
            <br />
            <span className="text-[#00FF88]">IA</span>
          </h1>
          <p className="text-[#A1A1AA] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Especialistas digitais trabalhando 24/7 para o seu negócio.
            <br />
            Decisões inteligentes. Execução contínua. Crescimento real.
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
            Como funcionam os
            <span className="text-[#00FF88]"> Squads IA</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed mb-8">
            Não são chatbots. São agentes especializados treinados para executar tarefas complexas,
            tomar decisões baseadas em dados e aprender continuamente com os resultados.
            <br /><br />
            Cada squad tem expertise específica e trabalha de forma autônoma, mas coordenada,
            para gerar valor real no seu negócio.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { stat: '24/7', label: 'Operação Contínua' },
              { stat: '100%', label: 'Baseado em Dados' },
              { stat: '∞', label: 'Capacidade de Escala' },
            ].map((item, i) => (
              <div key={i} className="bg-[#141414] border border-white/5 rounded-xl p-6">
                <div
                  className="text-4xl mb-2 text-[#00FF88]"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
                >
                  {item.stat}
                </div>
                <p className="text-[#A1A1AA]">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {squads.map((squad, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-[#1C1C1C] border border-white/5 rounded-2xl p-8 hover:border-[#00FF88]/30 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00FF88] to-[#00CC6A] flex items-center justify-center">
                  <Activity className="text-[#0A0A0A]" size={24} />
                </div>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#00FF88]/10 text-[#00FF88] rounded-full text-xs">
                  <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                  Ativo
                </span>
              </div>
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
              >
                {squad.name}
              </h3>
              <p className="text-[#A1A1AA] text-sm mb-6 leading-relaxed">{squad.description}</p>
              <div className="space-y-2">
                {squad.capabilities.map((capability, j) => (
                  <div key={j} className="flex items-center gap-2 text-white text-xs">
                    <div className="w-1 h-1 rounded-full bg-[#00FF88]" />
                    {capability}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center bg-[#1C1C1C] border border-white/10 rounded-2xl p-12"
        >
          <h2
            className="text-3xl md:text-5xl mb-6"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
          >
            Ative os Squads IA
            <br />
            <span className="text-[#00FF88]">no seu negócio</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg mb-8 max-w-2xl mx-auto">
            Descubra quais squads podem gerar mais valor para sua operação.
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
