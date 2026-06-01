import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Target, Rocket, Users, TrendingUp, BookOpen, Repeat } from 'lucide-react';

export function VentureBuilder() {
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
            Venture Builder
            <br />
            <span className="text-[#00FF88]">Studio</span>
          </h1>
          <p className="text-[#A1A1AA] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transformamos especialistas e empreendedores em negócios escaláveis.
            <br />
            Do conhecimento à operação. Do zero ao crescimento.
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
            Você tem o conhecimento.
            <br />
            <span className="text-[#00FF88]">Nós construímos o negócio.</span>
          </h2>
          <p className="text-[#A1A1AA] text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Muitos profissionais são especialistas incríveis, mas não sabem como transformar conhecimento em
            negócio escalável. É aqui que entramos. Construímos junto com você do zero ao crescimento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Founder Market Fit',
                description: 'Validamos se você tem o que o mercado precisa e como posicionar sua expertise.',
              },
              {
                icon: Rocket,
                title: 'Oferta Escalável',
                description: 'Desenhamos a oferta completa: produtos, serviços, modelo de negócio e pricing.',
              },
              {
                icon: BookOpen,
                title: 'Método Proprietário',
                description: 'Criamos sua metodologia exclusiva que pode ser replicada e escalada.',
              },
              {
                icon: Users,
                title: 'Playbooks',
                description: 'Documentamos todos os processos para que o negócio funcione sem depender de você.',
              },
              {
                icon: TrendingUp,
                title: 'Growth Engine',
                description: 'Implementamos sistema de aquisição, conversão e retenção que funciona.',
              },
              {
                icon: Repeat,
                title: 'Escala Sustentável',
                description: 'Estruturamos operação, time e tecnologia para crescer sem quebrar.',
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
            Para quem é o
            <span className="text-[#00FF88]"> Venture Builder Studio</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Especialistas e Consultores',
                description: 'Profissionais com conhecimento profundo que querem escalar sem trocar horas por dinheiro.',
                profile: 'Você domina um assunto, tem clientes que confiam em você, mas não consegue crescer porque depende do seu tempo.',
              },
              {
                title: 'Empreendedores com Ideia',
                description: 'Pessoas com oportunidades reais mas sem estrutura para transformar em negócio.',
                profile: 'Você identificou uma oportunidade, validou com alguns clientes, mas não sabe como escalar de forma sustentável.',
              },
              {
                title: 'Profissionais Sênior',
                description: 'Executivos que querem empreender utilizando toda a experiência acumulada.',
                profile: 'Você tem décadas de experiência, rede de contatos e conhecimento valioso, mas precisa estruturar tudo isso em um negócio.',
              },
              {
                title: 'Empresas Validando Novas Verticais',
                description: 'Negócios estabelecidos testando novos mercados ou linhas de produtos.',
                profile: 'Você quer validar uma nova oportunidade sem comprometer a operação atual e precisa de método para isso.',
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
                <p className="text-white mb-4 leading-relaxed">{segment.description}</p>
                <p className="text-[#A1A1AA] text-sm leading-relaxed italic">{segment.profile}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-12 mb-16"
        >
          <h2
            className="text-3xl md:text-4xl mb-8 text-center"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
          >
            Como funciona a construção
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { phase: '1', title: 'Diagnóstico', duration: '2 semanas', desc: 'Validamos fit, mercado e oportunidade' },
              { phase: '2', title: 'Desenho', duration: '4 semanas', desc: 'Criamos oferta, método e modelo de negócio' },
              { phase: '3', title: 'MVP', duration: '6 semanas', desc: 'Lançamos primeira versão e validamos com mercado' },
              { phase: '4', title: 'Escala', duration: 'Contínuo', desc: 'Crescemos receita, time e operação' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="bg-[#141414] border border-white/5 rounded-xl p-6 relative"
              >
                <div className="text-5xl font-bold text-[#00FF88]/20 mb-4">{step.phase}</div>
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
                >
                  {step.title}
                </h3>
                <p className="text-[#00FF88] text-sm mb-3">{step.duration}</p>
                <p className="text-[#A1A1AA] text-sm">{step.desc}</p>
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
          transition={{ delay: 0.8 }}
          className="text-center bg-[#1C1C1C] border border-white/10 rounded-2xl p-12"
        >
          <h2
            className="text-3xl md:text-5xl mb-6"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
          >
            Pronto para construir
            <br />
            <span className="text-[#00FF88]">seu negócio escalável?</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg mb-8 max-w-2xl mx-auto">
            Agende um diagnóstico e vamos validar juntos se sua oportunidade tem potencial de escala.
          </p>
          <Link
            to="/diagnostico"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00FF88] text-[#0A0A0A] rounded-xl hover:bg-[#00CC6A] transition-all group"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
          >
            Validar Minha Oportunidade
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
