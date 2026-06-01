import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function Diagnostico() {
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
    console.log('Diagnóstico agendado:', formData);
    alert('Obrigado! Entraremos em contato em até 24 horas para agendar seu diagnóstico estratégico.');
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
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-7xl mb-6"
            style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
          >
            Diagnóstico
            <br />
            <span className="text-[#00FF88]">Estratégico</span>
          </h1>
          <p className="text-[#A1A1AA] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Descubra onde a IA, a automação e a metodologia GAIM podem gerar crescimento real no seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2
              className="text-3xl mb-6"
              style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
            >
              O que você recebe no diagnóstico
            </h2>
            <div className="space-y-4">
              {[
                'Análise profunda do seu modelo de negócio',
                'Mapeamento de oportunidades com IA',
                'Identificação de processos que podem ser automatizados',
                'Avaliação de maturidade digital',
                'Roadmap de implementação prioritizado',
                'Estimativa de ROI e impacto',
                'Próximos passos claros e acionáveis',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-[#00FF88] mt-1 flex-shrink-0" size={20} />
                  <span className="text-white">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-[#1C1C1C] border border-white/10 rounded-2xl p-6">
              <h3
                className="text-xl mb-4"
                style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}
              >
                Como funciona
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#00FF88]/10 flex items-center justify-center">
                      <span className="text-[#00FF88] text-sm" style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}>
                        1
                      </span>
                    </div>
                    <span className="text-white" style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}>
                      Pré-análise
                    </span>
                  </div>
                  <p className="text-[#A1A1AA] text-sm pl-11">
                    Analisamos suas informações antes da reunião
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#00FF88]/10 flex items-center justify-center">
                      <span className="text-[#00FF88] text-sm" style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}>
                        2
                      </span>
                    </div>
                    <span className="text-white" style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}>
                      Sessão de 90min
                    </span>
                  </div>
                  <p className="text-[#A1A1AA] text-sm pl-11">
                    Reunião estratégica para entender profundamente seu negócio
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#00FF88]/10 flex items-center justify-center">
                      <span className="text-[#00FF88] text-sm" style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}>
                        3
                      </span>
                    </div>
                    <span className="text-white" style={{ fontFamily: 'var(--font-headline)', fontWeight: 600 }}>
                      Relatório
                    </span>
                  </div>
                  <p className="text-[#A1A1AA] text-sm pl-11">
                    Documento completo com análise e recomendações
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-8"
          >
            <h2
              className="text-2xl mb-8"
              style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}
            >
              Agendar diagnóstico
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2 text-sm">Nome completo</label>
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
                  placeholder="+55 (11) 99999-9999"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2 text-sm">Email corporativo</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF88] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2 text-sm">Segmento de atuação</label>
                <input
                  type="text"
                  value={formData.segment}
                  onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                  className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF88] transition-colors"
                  placeholder="Ex: SaaS, E-commerce, Consultoria..."
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2 text-sm">Receita anual aproximada</label>
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
                  <option value="10m-50m">R$ 10M - R$ 50M</option>
                  <option value="50m+">R$ 50M+</option>
                </select>
              </div>

              <div>
                <label className="block text-white mb-2 text-sm">Principal desafio ou oportunidade</label>
                <textarea
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF88] transition-colors h-24 resize-none"
                  placeholder="Conte-nos brevemente qual seu maior desafio ou oportunidade..."
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-4 text-sm">Interesse (selecione todos que se aplicam)</label>
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
                      <span className="text-white group-hover:text-[#00FF88] transition-colors text-sm">
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

              <p className="text-[#A1A1AA] text-xs text-center">
                Entraremos em contato em até 24 horas para agendar sua sessão.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
