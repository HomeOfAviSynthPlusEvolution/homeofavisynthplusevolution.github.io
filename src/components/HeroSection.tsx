import { Language } from '../types';
import { translations, getTranslation } from '../i18n/translations';
import { 
  Network, 
  Boxes, 
  Terminal, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  effectiveTheme: 'dark' | 'light';
}

export default function HeroSection({ currentLang, effectiveTheme }: HeroSectionProps) {
  const isDark = effectiveTheme === 'dark';
  const t = translations.hero;

  return (
    <section 
      id="hero-section"
      className={`relative pt-6 pb-8 overflow-hidden transition-colors border-b ${
        isDark ? 'bg-slate-950 border-slate-900' : 'bg-slate-50/60 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Protocol Status Pill */}
        <div className="flex justify-center mb-4">
          <div 
            id="protocol-status-badge"
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
              isDark 
                ? 'bg-slate-900/90 text-slate-300 border-slate-700' 
                : 'bg-white text-slate-700 border-slate-200 shadow-sm'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <Activity className="w-3.5 h-3.5 text-sky-500" />
            <span>{getTranslation(t.badge, currentLang)}</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            id="hero-main-title"
            className={`text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight sm:whitespace-nowrap ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            <span>{getTranslation(t.titlePrefix, currentLang)}</span>{' '}
            <span className="text-sky-600 dark:text-sky-400">
              {getTranslation(t.titleHighlight, currentLang)}
            </span>
          </h1>

          <p 
            id="hero-description"
            className={`mt-4 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {getTranslation(t.description, currentLang)}
          </p>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              id="cta-explore-topology"
              href="#topology"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium shadow-sm transition-colors bg-slate-900 hover:bg-slate-800 text-white dark:bg-sky-600 dark:hover:bg-sky-500"
            >
              <Network className="w-4 h-4" />
              <span>{getTranslation(t.exploreTopology, currentLang)}</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </a>

            <a
              id="cta-view-neo-pipeline"
              href="#neo-series"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                isDark
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                  : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300'
              }`}
            >
              <Boxes className="w-4 h-4 text-sky-500" />
              <span>{getTranslation(t.viewNeoPipeline, currentLang)}</span>
            </a>
          </div>
        </div>

        {/* Live Metrics Grid - Compact and dense */}
        <div 
          id="hero-stats-grid"
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
        >
          {Object.entries(t.stats).map(([key, item]) => (
            <div
              key={key}
              id={`stat-card-${key}`}
              className={`p-3 rounded-lg border transition-all ${
                isDark 
                  ? 'bg-slate-900/80 border-slate-800' 
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>{(item as any).tag || key.toUpperCase()}</span>
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              </div>
              <div className={`text-lg sm:text-xl font-semibold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {item.value}
              </div>
              <div className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {getTranslation(item.label, currentLang)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
