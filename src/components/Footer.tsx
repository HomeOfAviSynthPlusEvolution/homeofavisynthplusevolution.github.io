import { Language } from '../types';
import { translations, getTranslation } from '../i18n/translations';
import { Cpu, Github, ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  effectiveTheme: 'dark' | 'light';
}

export default function Footer({ currentLang, effectiveTheme }: FooterProps) {
  const isDark = effectiveTheme === 'dark';
  const t = translations.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="main-footer"
      className={`border-t transition-colors ${
        isDark ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-300'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Brand & Description */}
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-sky-950 border border-sky-500/40 text-sky-400 flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-mono font-semibold text-white text-base">
                HomeOfAviSynthPlusEvolution
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              {getTranslation(t.orgDesc, currentLang)}
            </p>
          </div>

          {/* Actions: GitHub Org & Back to Top */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://github.com/HomeOfAviSynthPlusEvolution"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-700 bg-slate-900 text-slate-200 hover:border-sky-400 hover:text-white transition-colors text-xs font-medium"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Org</span>
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors text-xs font-medium"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-5 border-t border-slate-800/80 text-center text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} HomeOfAviSynthPlusEvolution
        </div>

      </div>
    </footer>
  );
}
