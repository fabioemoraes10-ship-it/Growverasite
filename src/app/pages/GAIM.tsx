import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function GAIM() {
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
            Metodologia
            <br />
            <span className="text-[#00FF88]">GAIM</span>
          </h1>
          <p className="text-[#A1A1AA] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Growvera AI Intelligence Method
            <br />
            A metodologia proprietária que transforma potencial em resultado escalável.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {[
            {
              letter: 'G',
              title: 'Ground Truth',
              subtitle: 'Diagnóstico Profundo',
              description: 'Começamos mapeando a realidade completa do seu negócio. Identificamos processos, gargalos, oportunidades e riscos. Não existe transformação sem entender profundamente o ponto de partida.',
              items: [
                'Mapeamento de processos atuais',
                'Análise de maturidade digital',
                'Diagnóstico estratégico completo',
                'Identificação de oportunidades de IA',
                'Avaliação de riscos e dependências',
              ],
            },
            {
              letter: 'A',
              title: 'Architecture',
              subtitle: 'Desenho da Solução',
              description: 'Com o diagnóstico completo, desenhamos a arquitetura da transformação. Definimos modelo operacional, oferta, roadmap e governança. Tudo planejado para gerar valor desde o início.',
              items: [
                'Modelo operacional com IA',
                'Desenho da oferta escalável',
                'Roadmap de implementação',
                'Estrutura de governança',
                'KPIs e métricas de sucesso',
              ],
            },
            {
              letter: 'I',
              title: 'Intelligence',
              subtitle: 'Squads e Comitês IA',
              description: 'Aqui a transformação ganha vida. Implementamos squads de agentes especializados, decision intelligence e automação inteligente. A execução acontece com velocidade e precisão.',
              items: [
                'Squads de agentes especializados',
                'Decision Intelligence em tempo real',
                'Automação de processos críticos',
                'Análise contínua de performance',
                'Integração com sistemas existentes',
              ],
            },
            {
              letter: 'M',
              title: 'Momentum',
              subtitle: 'Quick Wins e Escala',
              description: 'Resultado rápido e escala sustentável. Em 30 dias você vê os primeiros resultados. Em 90 dias tem um produto funcionando. E continua crescendo de forma sustentável.',
              items: [
                'Quick wins em 30 dias',
                'Produto completo em 90 dias',
                'Escala sustentável e previsível',
                'Melhoria contínua automatizada',
                'ROI mensurável e crescente',
              ],
            },
          ].map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#1C1C1C] border border-white/5 rounded-2xl p-8 hover:border-[#00FF88]/30 transition-all"
            >
              <div
                className="text-6xl mb-4 bg-gradient-to-br from-[#00FF88] to-[#00CC6A] bg-clip-text text-transparent"
                style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
              >
                {phase.letter}
              </div>
              <h2
                className="text-3xl mb-2"
                style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
              >
                {phase.title}
              </h2>
              <p className="text-[#00FF88] mb-6">{phase.subtitle}</p>
              <p className="text-[#A1A1AA] mb-8 leading-relaxed">{phase.description}</p>
              <ul className="space-y-3">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-white">
                    <CheckCircle2 className="text-[#00FF88] mt-1 flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

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
            Pronto para aplicar a
            <br />
            <span className="text-[#00FF88]">metodologia GAIM?</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg mb-8 max-w-2xl mx-auto">
            Agende um diagnóstico estratégico e descubra como a GAIM pode transformar seu negócio.
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
