import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00FF88] to-[#00CC6A] flex items-center justify-center">
                <span className="text-[#0A0A0A] font-bold text-sm">G</span>
              </div>
              <span className="text-white tracking-tight" style={{ fontFamily: 'var(--font-headline)' }}>
                Growvera
              </span>
            </div>
            <p className="text-[#A1A1AA] text-sm max-w-md leading-relaxed">
              AI-First Venture Builder que transforma conhecimento, processos e oportunidades em crescimento escalável através da metodologia GAIM.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: 'var(--font-headline)' }}>
              Soluções
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/ai-business-transformation" className="text-[#A1A1AA] text-sm hover:text-[#00FF88] transition-colors">
                  AI Business Transformation
                </Link>
              </li>
              <li>
                <Link to="/venture-builder" className="text-[#A1A1AA] text-sm hover:text-[#00FF88] transition-colors">
                  Venture Builder Studio
                </Link>
              </li>
              <li>
                <Link to="/ai-products" className="text-[#A1A1AA] text-sm hover:text-[#00FF88] transition-colors">
                  AI Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: 'var(--font-headline)' }}>
              Empresa
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/gaim" className="text-[#A1A1AA] text-sm hover:text-[#00FF88] transition-colors">
                  Metodologia GAIM
                </Link>
              </li>
              <li>
                <Link to="/squads" className="text-[#A1A1AA] text-sm hover:text-[#00FF88] transition-colors">
                  Squads IA
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-[#A1A1AA] text-sm hover:text-[#00FF88] transition-colors">
                  Cases
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A1A1AA] text-sm">
            © 2026 Growvera Digital Solutions. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#A1A1AA] text-sm hover:text-[#00FF88] transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-[#A1A1AA] text-sm hover:text-[#00FF88] transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
