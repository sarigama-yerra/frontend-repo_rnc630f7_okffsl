import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white dark:from-black/40 dark:via-black/10 dark:to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-32 md:pt-40 pb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-3 py-1 text-xs text-gray-700 dark:text-gray-200 shadow-sm">
          <Star className="text-yellow-500" size={14} /> Mario-inspired dev vibes
        </div>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Code Like a Pro, Play Like a Gamer
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-gray-700 dark:text-gray-300">
          Portofolio bergaya ala-ala programmer dan gaming, lengkap dengan efek parallax dan dua tema terang/gelap.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 text-white shadow hover:brightness-110">
            <Rocket size={18}/> Lihat Proyek
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-black/10 dark:border-white/10 text-gray-900 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/10">
            Kontak
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-white dark:to-black" />
    </section>
  );
}
