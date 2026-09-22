import { Language } from '../types';
import { translations, getTranslation } from '../i18n/translations';
import { CORE_ECOSYSTEM_MODULES } from '../data/ecosystemData';
import { Layers, ExternalLink, Cpu, Code2, Music, Video, Sparkles, Filter, Terminal } from 'lucide-react';

interface CoreEcosystemSectionProps {
  currentLang: Language;
  effectiveTheme: 'dark' | 'light';
}

export default function CoreEcosystemSection({
  currentLang,
  effectiveTheme,
}: CoreEcosystemSectionProps) {
  const isDark = effectiveTheme === 'dark';
  const t = (translations as any).coreEcosystem || {};

  const getModuleIcon = (id: string) => {
    switch (id) {
      case 'AviSynthMinus':
        return <Cpu className="w-4 h-4 text-sky-400" />;
      case 'AviSynthConvertAudio':
        return <Music className="w-4 h-4 text-sky-400" />;
      case 'AviSynthConvertVideo':
        return <Video className="w-4 h-4 text-sky-400" />;
      case 'AviSynthComposite':
        return <Layers className="w-4 h-4 text-sky-400" />;
      case 'AviSynthIris':
        return <Sparkles className="w-4 h-4 text-sky-400" />;
      case 'AviSynthInternalFilters':
        return <Filter className="w-4 h-4 text-sky-400" />;
      case 'AviSynthGarnet':
        return <Terminal className="w-4 h-4 text-pink-400" />;
      default:
        return <Code2 className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section 
      id="core-ecosystem" 
      className={`py-14 border-t transition-colors ${
        isDark ? 'bg-slate-950 border-slate-900' : 'bg-slate-50/50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-medium text-sky-600 dark:text-sky-400 mb-1.5">
            <Layers className="w-4 h-4" />
            <span>Decoupled Architecture</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {getTranslation(t.title, currentLang)}
          </h2>
          <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {getTranslation(t.subtitle, currentLang)}
          </p>
        </div>

        {/* Core Modules Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CORE_ECOSYSTEM_MODULES.map((mod) => (
            <div
              key={mod.id}
              id={`card-core-${mod.id}`}
              className={`rounded-xl border p-5 flex flex-col justify-between transition-all duration-200 ${
                isDark
                  ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                {/* Card Top: Icon + Name + Version + Link */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className={`p-1.5 rounded-lg border shrink-0 ${
                      isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-200'
                    }`}>
                      {getModuleIcon(mod.id)}
                    </div>
                    <div className="min-w-0">
                      <h3 className={`text-sm font-semibold font-mono truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {mod.name}
                      </h3>
                      {mod.version && (
                        <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded border inline-block mt-0.5 ${
                          isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}>
                          {mod.version}
                        </span>
                      )}
                    </div>
                  </div>

                  {mod.repoUrl && (
                    <a
                      href={mod.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded text-slate-400 hover:text-sky-500 transition-colors shrink-0"
                      title="View GitHub Repository"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {getTranslation(mod.shortDesc, currentLang)}
                </p>
              </div>

              {/* Badges / Tags */}
              <div className="mt-4 pt-3 border-t border-slate-800/40 flex flex-wrap gap-1.5">
                {mod.simd.map((s) => (
                  <span
                    key={s}
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      isDark ? 'bg-slate-800/70 text-sky-300 border-slate-700' : 'bg-sky-50 text-sky-800 border-sky-200'
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
