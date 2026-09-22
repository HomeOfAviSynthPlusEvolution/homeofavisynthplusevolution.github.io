import { Language } from '../types';
import { translations, getTranslation } from '../i18n/translations';
import { UPCOMING_NEO_PIPELINE } from '../data/ecosystemData';
import { Boxes, Lock } from 'lucide-react';

interface NeoSeriesSectionProps {
  currentLang: Language;
  effectiveTheme: 'dark' | 'light';
}

export default function NeoSeriesSection({
  currentLang,
  effectiveTheme,
}: NeoSeriesSectionProps) {
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
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-medium text-sky-600 dark:text-sky-400 mb-1.5">
            <Boxes className="w-4 h-4" />
            <span>Next-Gen Suite Pipeline</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {getTranslation(t.title, currentLang)}
          </h2>
          <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {getTranslation(t.subtitle, currentLang)}
          </p>
        </div>

        {/* 4 Stealth Placeholder Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {UPCOMING_NEO_PIPELINE.map((slot, index) => (
            <div
              key={slot.id}
              id={`card-stealth-${slot.id}`}
              className={`rounded-xl border p-6 flex flex-col justify-between transition-all duration-200 ${
                isDark
                  ? 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                  : 'bg-slate-50/90 border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border flex items-center gap-1 ${
                    isDark 
                      ? 'bg-purple-950/40 text-purple-300 border-purple-800/40' 
                      : 'bg-purple-50 text-purple-700 border-purple-200'
                  }`}>
                    <Lock className="w-3 h-3" />
                    <span>{getTranslation(t.slotTag, currentLang)} #{index + 1}</span>
                  </span>
                  <span className={`text-[10px] font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    UNPUBLISHED
                  </span>
                </div>

                {/* Big Question Mark Centerpiece */}
                <div className="my-6 py-6 flex flex-col items-center justify-center rounded-lg border border-dashed border-purple-500/30 bg-purple-500/5">
                  <span className="text-4xl font-mono font-black text-purple-400 select-none">
                    ?
                  </span>
                  <span className="text-[11px] font-mono font-medium text-slate-400 mt-2">
                    {slot.name}
                  </span>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="pt-3 border-t border-slate-800/40 text-center">
                <span className={`text-[10px] font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {getTranslation(t.pipelineBadge, currentLang)}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
