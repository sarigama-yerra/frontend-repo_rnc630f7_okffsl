import { Terminal, BadgeCheck } from 'lucide-react';

const skills = [
  'JavaScript', 'React', 'Tailwind', 'FastAPI', 'MongoDB', 'TypeScript', 'Framer Motion'
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gray-50 dark:bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.5),transparent),radial-gradient(40%_40%_at_90%_20%,rgba(255,0,122,0.08),transparent)]"/>
      <div className="relative mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-100 border border-black/10 dark:border-white/10">
            <Terminal size={14}/> Tentang Saya
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Programmer by day, Gamer by night</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">Saya membangun antarmuka modern dan cepat, terinspirasi oleh dunia gaming. Fokus pada performa, aksesibilitas, dan pengalaman yang menyenangkan.</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map(s => (
              <div key={s} className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-100">
                <BadgeCheck className="text-pink-500" size={16}/> {s}
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-72 md:h-96 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-pink-500/20 via-red-500/10 to-yellow-400/20">
          <div className="absolute inset-0 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center"/>
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"/>
        </div>
      </div>
    </section>
  );
}
