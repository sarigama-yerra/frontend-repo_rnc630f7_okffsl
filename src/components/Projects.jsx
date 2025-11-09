import { useRef, useEffect } from 'react';
import { Gamepad2, Code2, MonitorSmartphone } from 'lucide-react';

function useParallax(intensity = 20) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      el.style.transform = `translate3d(${dx * intensity}px, ${dy * intensity}px, 0)`;
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, [intensity]);
  return ref;
}

const projects = [
  {
    title: 'Retro Game Dashboard',
    desc: 'UI dashboard bertema arcade dengan animasi halus.',
    icon: Gamepad2,
    tags: ['React', 'Tailwind', 'Framer Motion']
  },
  {
    title: 'Developer Toolkit',
    desc: 'Kumpulan utilitas produktivitas untuk developer.',
    icon: Code2,
    tags: ['Vite', 'TypeScript']
  },
  {
    title: 'Responsive Showcase',
    desc: 'Landing page responsif dengan parallax interaktif.',
    icon: MonitorSmartphone,
    tags: ['Spline', 'A11y']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,122,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,200,0,0.08),transparent_40%)]"/>
      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Proyek Pilihan</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-2xl">Kombinasi estetika gaming dan kedisiplinan coding dalam karya nyata.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => {
            const Icon = p.icon;
            const ref = useParallax(10 + idx * 4);
            return (
              <article key={p.title} ref={ref} className="group relative rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-5 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 text-white shadow-md">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-100">{t}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
