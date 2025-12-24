import Reveal from "../ui/reveal";
import Link from "next/link";

export default function Plans() {
  return (
    <section id="plans" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Escolha o plano ideal para sua igreja
          </h2>
        </Reveal>

        <Reveal>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comece grátis e tenha acesso completo conforme sua igreja cresce.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <Reveal>
            <div className="border rounded-2xl p-8 bg-gray-50 h-full flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">Grátis</h3>
              <p className="mt-2 text-gray-600">
                Para dar os primeiros passos
              </p>

              <p className="mt-6 text-4xl font-extrabold text-gray-900">
                R$0
              </p>

              <ul className="mt-6 space-y-3 text-gray-700 text-left flex-1">
                <li>• Dashboard</li>
                <li>• Controle de membros</li>
                <li>• Controle financeiro</li>
              </ul>

              <Link
                href="https://ministerio360.vercel.app/register"
                className="mt-8 inline-block w-full px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
              >
                Começar grátis hoje
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div className="border rounded-2xl p-8 bg-gray-50 h-full flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">
                Padrão
              </h3>

              <p className="mt-2 text-gray-600">
                Para igrejas em crescimento
              </p>

              <p className="mt-6 text-4xl font-extrabold text-gray-900">
                R$49,00
                <span className="text-base font-medium text-gray-600"> / mês</span>
              </p>

              <ul className="mt-6 space-y-3 text-gray-700 text-left flex-1">
                <li>• Dashboard</li>
                <li>• Controle de membros</li>
                <li>• Controle de visitantes</li>
                <li>• Controle financeiro</li>
                <li>• Relatórios</li>
              </ul>

              <Link
                href="https://ministerio360.vercel.app/register"
                className="mt-8 inline-block w-full px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
              >
                Testar grátis
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative border-2 border-teal-600 rounded-2xl p-8 bg-teal-50 h-full flex flex-col scale-[1.03]">

              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                Mais escolhido
              </span>

              <h3 className="text-xl font-bold text-teal-700">
                Premium
              </h3>

              <p className="mt-2 text-gray-700">
                Para igrejas que querem controle total
              </p>

              <p className="mt-6 text-4xl font-extrabold text-teal-700">
                R$89,00
                <span className="text-base font-medium text-gray-600"> / mês</span>
              </p>

              <ul className="mt-6 space-y-3 text-teal-900 text-left flex-1">
                <li>• Tudo do plano Padrão</li>
                <li>• Ministérios</li>
                <li>• Eventos e escalas</li>
                <li>• Relatórios avançados</li>
                <li>• Suporte prioritário</li>
              </ul>

              <Link
                href="https://wa.me/5521993547442?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20experimentar%20o%20Minist%C3%A9rio360%20por%2030%20dias%20gratuitamente."
                className="mt-8 inline-block w-full px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
              >
                Testar grátis por 30 dias
              </Link>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
