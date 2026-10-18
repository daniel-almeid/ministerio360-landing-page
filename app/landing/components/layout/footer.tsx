import { LOGIN_URL, REGISTER_URL, WA_DUVIDA } from "../../lib/links";

export default function Footer() {
  return (
    <footer className="bg-navy-950 pb-28 pt-14 text-slate-400 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 text-xl font-extrabold text-white">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal-500 text-sm font-black">M</span>
            Ministério<span className="text-teal-400">360</span>
          </p>
          <p className="mt-4 max-w-xs text-sm">
            Gestão simples e completa para igrejas que querem cuidar melhor das pessoas.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Navegue</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#dor" className="hover:text-teal-300">Os problemas</a></li>
            <li><a href="#solucao" className="hover:text-teal-300">A solução</a></li>
            <li><a href="#plans" className="hover:text-teal-300">Planos</a></li>
            <li><a href="#faq" className="hover:text-teal-300">Dúvidas frequentes</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Comece agora</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={REGISTER_URL} className="hover:text-teal-300">Criar conta grátis</a></li>
            <li><a href={LOGIN_URL} className="hover:text-teal-300">Entrar no sistema</a></li>
            <li><a href={WA_DUVIDA} target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">Falar no WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-6 pt-6 text-xs">
        © {new Date().getFullYear()} Ministério360. Todos os direitos reservados.
      </div>
    </footer>
  );
}