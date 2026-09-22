import { useState } from 'react';
import { Language, ThemeMode } from '../types';
import { translations, getTranslation } from '../i18n/translations';
import { 
  Cpu, 
  Globe, 
  Sun, 
  Moon, 
  Monitor, 
  Github, 
  Menu, 
  X, 
  Network,
  Boxes, 
  Archive,
  Layers
} from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  effectiveTheme: 'dark' | 'light';
}

export default function Navbar({
  currentLang,
  onLanguageChange,
  currentTheme,
  onThemeChange,
  effectiveTheme,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const t = translations.nav;
  const isDark = effectiveTheme === 'dark';

  const navLinks = [
    { href: '#topology', label: t.topology, icon: Network },
    { href: '#core-ecosystem', label: (t as any).coreEcosystem, icon: Cpu },
    { href: '#neo-series', label: t.neoSeries, icon: Boxes },
    { href: '#classic-plugins', label: t.classicPlugins, icon: Archive },
  ];

  return (
    <header 
      id="main-navbar" 
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-200 ${
        isDark 
          ? 'bg-slate-950/85 border-slate-800 text-slate-100' 
          : 'bg-white/90 border-slate-200 text-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <a 
            id="brand-logo-link"
            href="#" 
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200 ${
              isDark 
                ? 'bg-slate-900 border-slate-700 text-sky-400 group-hover:border-slate-500' 
                : 'bg-slate-100 border-slate-300 text-sky-600 group-hover:border-slate-400'
            }`}>
              <Cpu className="w-4 h-4" />
            </div>
            <span className="font-semibold tracking-tight text-base sm:text-lg">
              AviSynth<span className="text-sky-500 font-semibold">+</span> Evolution
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  id={`nav-link-${link.href.replace('#', '')}`}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    isDark
                      ? 'text-slate-300 hover:text-sky-400 hover:bg-slate-900/80'
                      : 'text-slate-600 hover:text-sky-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-75" />
                  <span>{getTranslation(link.label, currentLang)}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Tools: Lang, Theme & GitHub */}
          <div className="hidden sm:flex items-center gap-2">
            
            {/* Language Selector */}
            <div className="relative">
              <button
                id="btn-language-selector"
                onClick={() => {
                  setLangMenuOpen(!langMenuOpen);
                  setThemeMenuOpen(false);
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium border transition-colors ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
                title="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-sky-500" />
                <span>
                  {currentLang === 'en' ? 'EN' : currentLang === 'zh' ? '中文' : '日本語'}
                </span>
              </button>

              {langMenuOpen && (
                <div 
                  id="dropdown-language-menu"
                  className={`absolute right-0 mt-1 w-32 rounded-lg shadow-lg border py-1 z-50 text-xs ${
                    isDark 
                      ? 'bg-slate-900 border-slate-800 text-slate-200' 
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <button
                    id="lang-opt-en"
                    onClick={() => {
                      onLanguageChange('en');
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-sky-500/10 ${
                      currentLang === 'en' ? 'text-sky-500 font-semibold' : ''
                    }`}
                  >
                    <span>English</span>
                    {currentLang === 'en' && <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />}
                  </button>
                  <button
                    id="lang-opt-zh"
                    onClick={() => {
                      onLanguageChange('zh');
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-sky-500/10 ${
                      currentLang === 'zh' ? 'text-sky-500 font-semibold' : ''
                    }`}
                  >
                    <span>简体中文</span>
                    {currentLang === 'zh' && <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />}
                  </button>
                  <button
                    id="lang-opt-ja"
                    onClick={() => {
                      onLanguageChange('ja');
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-sky-500/10 ${
                      currentLang === 'ja' ? 'text-sky-500 font-semibold' : ''
                    }`}
                  >
                    <span>日本語</span>
                    {currentLang === 'ja' && <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />}
                  </button>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <div className="relative">
              <button
                id="btn-theme-selector"
                onClick={() => {
                  setThemeMenuOpen(!themeMenuOpen);
                  setLangMenuOpen(false);
                }}
                className={`p-1.5 rounded-md border transition-colors ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
                title="Theme Settings"
              >
                {currentTheme === 'auto' ? (
                  <Monitor className="w-4 h-4 text-sky-500" />
                ) : currentTheme === 'dark' ? (
                  <Moon className="w-4 h-4 text-sky-400" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-500" />
                )}
              </button>

              {themeMenuOpen && (
                <div 
                  id="dropdown-theme-menu"
                  className={`absolute right-0 mt-1 w-36 rounded-lg shadow-lg border py-1 z-50 text-xs ${
                    isDark 
                      ? 'bg-slate-900 border-slate-800 text-slate-200' 
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <button
                    id="theme-opt-auto"
                    onClick={() => {
                      onThemeChange('auto');
                      setThemeMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-sky-500/10 ${
                      currentTheme === 'auto' ? 'text-sky-500 font-semibold' : ''
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>{getTranslation(translations.theme.auto, currentLang)}</span>
                  </button>
                  <button
                    id="theme-opt-dark"
                    onClick={() => {
                      onThemeChange('dark');
                      setThemeMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-sky-500/10 ${
                      currentTheme === 'dark' ? 'text-sky-500 font-semibold' : ''
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5" />
                    <span>{getTranslation(translations.theme.dark, currentLang)}</span>
                  </button>
                  <button
                    id="theme-opt-light"
                    onClick={() => {
                      onThemeChange('light');
                      setThemeMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-sky-500/10 ${
                      currentTheme === 'light' ? 'text-sky-500 font-semibold' : ''
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5" />
                    <span>{getTranslation(translations.theme.light, currentLang)}</span>
                  </button>
                </div>
              )}
            </div>

            {/* GitHub Org Link */}
            <a
              id="btn-github-org"
              href="https://github.com/HomeOfAviSynthPlusEvolution"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium border transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                  : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200 hover:border-slate-400'
              }`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${
                isDark ? 'text-slate-300 hover:bg-slate-900' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer"
          className={`lg:hidden border-b px-4 py-4 space-y-3 ${
            isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium ${
                    isDark ? 'text-slate-200 bg-slate-900' : 'text-slate-800 bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 text-cyan-500" />
                  <span>{getTranslation(link.label, currentLang)}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800/40 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 text-xs font-mono rounded ${currentLang === 'en' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400'}`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('zh')}
                className={`px-2 py-1 text-xs font-mono rounded ${currentLang === 'zh' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400'}`}
              >
                中文
              </button>
              <button
                onClick={() => onLanguageChange('ja')}
                className={`px-2 py-1 text-xs font-mono rounded ${currentLang === 'ja' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400'}`}
              >
                日本語
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onThemeChange('auto')}
                className={`p-1.5 rounded ${currentTheme === 'auto' ? 'bg-cyan-500 text-black' : 'text-slate-400'}`}
                title="Auto"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => onThemeChange('dark')}
                className={`p-1.5 rounded ${currentTheme === 'dark' ? 'bg-cyan-500 text-black' : 'text-slate-400'}`}
                title="Dark"
              >
                <Moon className="w-4 h-4" />
              </button>
              <button
                onClick={() => onThemeChange('light')}
                className={`p-1.5 rounded ${currentTheme === 'light' ? 'bg-cyan-500 text-black' : 'text-slate-400'}`}
                title="Light"
              >
                <Sun className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
