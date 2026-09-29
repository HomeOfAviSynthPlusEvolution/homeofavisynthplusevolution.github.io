import { useState, useEffect } from 'react';
import { Language, ThemeMode } from './types';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TopologyGraph from './components/TopologyGraph';
import CoreEcosystemSection from './components/CoreEcosystemSection';
import NeoSeriesSection from './components/NeoSeriesSection';
import ClassicPluginsSection from './components/ClassicPluginsSection';
import Footer from './components/Footer';

export default function App() {
  // 1. Language state with local persistence (defaulting to zh or en)
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('avisynth_evolution_lang');
    if (saved === 'en' || saved === 'zh' || saved === 'ja') return saved;
    // Auto-detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) return 'zh';
    if (browserLang.startsWith('ja')) return 'ja';
    return 'zh';
  });

  // 2. Theme mode state ('auto' | 'dark' | 'light')
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('avisynth_evolution_theme');
    if (saved === 'auto' || saved === 'dark' || saved === 'light') return saved;
    return 'auto';
  });

  // System dark preference
  const [systemIsDark, setSystemIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  // Calculate effective theme
  const effectiveTheme: 'dark' | 'light' =
    themeMode === 'auto' ? (systemIsDark ? 'dark' : 'light') : themeMode;

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Update HTML document class for theme & language
  useEffect(() => {
    const root = document.documentElement;
    if (effectiveTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.style.backgroundColor = '#020617';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
    }

    root.setAttribute('lang', currentLang);
    localStorage.setItem('avisynth_evolution_theme', themeMode);
    localStorage.setItem('avisynth_evolution_lang', currentLang);
  }, [effectiveTheme, themeMode, currentLang]);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  const handleThemeChange = (theme: ThemeMode) => {
    setThemeMode(theme);
  };

  return (
    <div
      id="app-root"
      className={`min-h-screen transition-colors duration-200 ${
        effectiveTheme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Top Main Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        currentTheme={themeMode}
        onThemeChange={handleThemeChange}
        effectiveTheme={effectiveTheme}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Cockpit */}
        <HeroSection 
          currentLang={currentLang} 
          effectiveTheme={effectiveTheme} 
        />

        {/* 2. 架构拓扑图 */}
        <TopologyGraph
          currentLang={currentLang}
          effectiveTheme={effectiveTheme}
        />

        {/* 3. 全新重建的内核生态 */}
        <CoreEcosystemSection
          currentLang={currentLang}
          effectiveTheme={effectiveTheme}
        />

        {/* 4. 全新重建的插件生态 */}
        <NeoSeriesSection
          currentLang={currentLang}
          effectiveTheme={effectiveTheme}
        />

        {/* 5. 成熟的插件列表 */}
        <ClassicPluginsSection
          currentLang={currentLang}
          effectiveTheme={effectiveTheme}
        />
      </main>

      {/* Global High-Tech Footer */}
      <Footer 
        currentLang={currentLang} 
        effectiveTheme={effectiveTheme} 
      />
    </div>
  );
}
