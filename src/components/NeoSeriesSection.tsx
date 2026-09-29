import { Language } from '../types';
import { translations, getTranslation } from '../i18n/translations';
import { NEO_PROJECTS } from '../data/ecosystemData';
import { Boxes, ExternalLink } from 'lucide-react';

interface NeoSeriesSectionProps {
  currentLang: Language;
  effectiveTheme: 'dark' | 'light';
}

export default function NeoSeriesSection({ currentLang, effectiveTheme }: NeoSeriesSectionProps) {
  const isDark = effectiveTheme === 'dark';
  const t = translations.neo;

  return (
    <section
      id="neo-series"
      className={`py-14 border-t transition-colors ${
        isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-medium text-sky-600 dark:text-sky-400 mb-1.5">
            <Boxes className="w-4 h-4" />
            <span>{getTranslation(t.eyebrow, currentLang)}</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {getTranslation(t.title, currentLang)}
          </h2>
          <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {getTranslation(t.subtitle, currentLang)}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {NEO_PROJECTS.map((project) => !project.repoUrl ? (
            <article
              key={project.id}
              id={`card-neo-${project.id}`}
              className={`rounded-xl border p-5 flex flex-col justify-between transition-all duration-200 ${
                isDark
                  ? 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                  : 'bg-slate-50/90 border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                <div className="my-6 py-6 flex flex-col items-center justify-center rounded-lg border border-dashed border-purple-500/30 bg-purple-500/5">
                  <span className="text-4xl font-mono font-black text-purple-400 select-none">?</span>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800/40 text-center">
                <span className={`text-[10px] font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {getTranslation(t.pipelineBadge, currentLang)}
                </span>
              </div>
            </article>
          ) : (
            <article
              key={project.id}
              id={`card-neo-${project.id}`}
              className={`rounded-xl border p-5 flex flex-col justify-between gap-4 transition-all duration-200 ${
                isDark
                  ? 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                  : 'bg-slate-50/90 border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className={`text-base font-semibold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {project.name ?? getTranslation(t.slotTag, currentLang)}
                  </h3>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded text-slate-400 hover:text-sky-500 transition-colors"
                        title="View GitHub Repository"
                        aria-label={`${project.name}: View GitHub Repository`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {getTranslation(project.shortDesc, currentLang)}
                </p>
                <div className={`mt-4 text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {project.category ? `#${project.category}` : getTranslation(t.pipelineBadge, currentLang)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
