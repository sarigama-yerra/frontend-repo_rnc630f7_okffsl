import { useEffect, useState } from 'react';
import { Gamepad2, Code, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 bg-white/70 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 text-white shadow-md group-hover:scale-105 transition-transform">
            <Gamepad2 size={20} />
          </div>
          <div className="leading-tight">
            <div className="font-bold tracking-tight text-gray-900 dark:text-white">Dev Arcade</div>
            <div className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-1"><Code size={14}/> Portfolio</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-pink-500">About</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-pink-500">Projects</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-pink-500">Contact</a>
        </div>

        <div className="flex items-center gap-2">
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200">
            <Github size={20} />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200">
            <Linkedin size={20} />
          </a>
          <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200">
            <Mail size={20} />
          </a>
          <button onClick={toggleTheme} className="ml-1 inline-flex items-center gap-2 px-3 py-2 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-gray-800 dark:text-gray-100">
            {theme === 'dark' ? <Sun size={16}/> : <Moon size={16}/>}<span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
