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
            <div className="mt-6">
              <h4 className="text-white text-sm mb-2" style={{ fontFamily: 'var(--font-headline)' }}>
                Contato
              </h4>
              <p className="text-[#A1A1AA] text-sm">Fábio Moraes — CEO</p>
              <a
                href="mailto:fabio.moraes@growvera.solutions"
                className="text-[#00FF88] text-sm hover:text-[#00CC6A] transition-colors"
              >
                fabio.moraes@growvera.solutions
              </a>
            </div>
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
        <div className="mt-12 mb-4 text-center px-4">
          <p className="text-[#3D3D3D] text-xs italic leading-relaxed max-w-2xl mx-auto">
            "Uma pessoa formidável é aquela que parece que vai conseguir o que quer, independentemente dos obstáculos que estejam no caminho."
          </p>
          <p className="text-[#2D2D2D] text-xs mt-1">— Paul Graham</p>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
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
