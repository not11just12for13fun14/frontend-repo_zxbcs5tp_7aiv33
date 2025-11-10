import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // In a full app, this would call a backend. For now, simulate success.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-2xl font-bold text-gray-900">Entrons en contact</h2>
        <p className="mt-2 text-gray-600">Parlez‑moi de votre idée ou besoin, je reviens vers vous rapidement.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-2 sm:grid-cols-2">
            <input required name="name" placeholder="Votre nom" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" />
            <input required type="email" name="email" placeholder="Votre email" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" />
          </div>
          <input name="subject" placeholder="Sujet (optionnel)" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" />
          <textarea required name="message" placeholder="Votre message" rows={5} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" />
          <button
            type="submit"
            disabled={status==='loading'}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-blue-700 disabled:opacity-60"
          >
            <Send className="h-5 w-5" />
            {status==='loading' ? 'Envoi…' : status==='success' ? 'Message envoyé ✓' : 'Envoyer'}
          </button>
        </form>
      </div>
    </section>
  );
}
