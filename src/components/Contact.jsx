import { Mail, SendHorizonal } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Terkirim! Saya akan membalas secepatnya.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24 bg-white dark:bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(0,200,255,0.06),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(255,0,122,0.06),transparent_40%)]"/>
      <div className="relative mx-auto max-w-4xl px-4">
        <div className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-100 border border-black/10 dark:border-white/10 w-fit">
          <Mail size={14}/> Kontak
        </div>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Mari berkolaborasi</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">Kirim pesan singkat tentang kebutuhanmu. Saya siap berdiskusi.</p>

        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <input required name="name" placeholder="Nama" className="px-4 py-3 rounded-md bg-white/70 dark:bg-white/5 backdrop-blur border border-black/10 dark:border-white/10 text-gray-900 dark:text-gray-100" />
          <input required name="email" type="email" placeholder="Email" className="px-4 py-3 rounded-md bg-white/70 dark:bg-white/5 backdrop-blur border border-black/10 dark:border-white/10 text-gray-900 dark:text-gray-100" />
          <textarea required name="message" rows="5" placeholder="Pesan" className="px-4 py-3 rounded-md bg-white/70 dark:bg-white/5 backdrop-blur border border-black/10 dark:border-white/10 text-gray-900 dark:text-gray-100" />
          <button className="inline-flex items-center gap-2 justify-center px-4 py-3 rounded-md bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 text-white shadow hover:brightness-110">
            <SendHorizonal size={18}/> Kirim Pesan
          </button>
          {status && <p className="text-sm text-green-600 dark:text-green-400">{status}</p>}
        </form>
      </div>
    </section>
  );
}
