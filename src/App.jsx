import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black selection:bg-pink-500/30 selection:text-pink-900 dark:selection:text-pink-100">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="relative border-t border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-700 dark:text-gray-300">
          <p>© {new Date().getFullYear()} Dev Arcade • Dibuat dengan cinta untuk kode dan game.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-pink-500">Home</a>
            <a href="#projects" className="hover:text-pink-500">Projects</a>
            <a href="#contact" className="hover:text-pink-500">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
