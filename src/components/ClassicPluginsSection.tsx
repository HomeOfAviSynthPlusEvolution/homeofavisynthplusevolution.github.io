import { Language } from '../types';
import { translations, getTranslation } from '../i18n/translations';
import { CLASSIC_PLUGINS } from '../data/ecosystemData';
import { Archive, ExternalLink } from 'lucide-react';

interface ClassicPluginsSectionProps {
  currentLang: Language;
  effectiveTheme: 'dark' | 'light';
}

export default function ClassicPluginsSection({
  currentLang,
  effectiveTheme,
}: ClassicPluginsSectionProps) {
  const isDark = effectiveTheme === 'dark';
  const t = translations.classic;

  return (
    <section 
      id="classic-plugins" 
      className={`py-14 border-t transition-colors ${
        isDark ? 'bg-slate-950 border-slate-900' : 'bg-slate-50/70 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-medium text-sky-600 dark:text-sky-400 mb-1.5">
            <Archive className="w-4 h-4" />
            <span>Foundational archive and lineage</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {getTranslation(t.title, currentLang)}
          </h2>
          <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {getTranslation(t.subtitle, currentLang)}
          </p>
        </div>

        {/* Plugins Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CLASSIC_PLUGINS.map((plugin) => (
            <div
              key={plugin.id}
              id={`card-classic-${plugin.id}`}
              className={`rounded-xl border p-5 flex flex-col justify-between transition-all duration-200 ${
                isDark
                  ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                {/* Header with Name, Version and Repo Link */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h3 className={`text-base font-semibold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {plugin.name}
                    </h3>
                    {plugin.version && (
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                        isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                        {plugin.version}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {plugin.repoUrl && (
                      <a
                        href={plugin.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded text-slate-400 hover:text-sky-500 transition-colors"
                        title="View GitHub Repository"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {getTranslation(plugin.shortDesc, currentLang)}
                </p>
                {plugin.deprecationNotice && (
                  <p className={`mt-2 text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {getTranslation(plugin.deprecationNotice, currentLang)}
                  </p>
                )}

                <div className={`mt-4 text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  #{plugin.category}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
