import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../ui/reveal";

export default function Hero() {
  return (
    <section className="relative w-full py-40 px-6 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">

        <Reveal>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Administração completa para sua igreja em{" "}
            <span className="text-teal-600">360°</span>
          </h1>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Um sistema moderno e intuitivo para gerenciar membros, visitantes, ministérios,
            escalas, eventos e muito mais — tudo em um único lugar.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="#plans"
              className="px-10 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition inline-flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              Começar gratuitamente
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="https://ministerio360.vercel.app/login"
              className="px-10 py-4 border border-teal-600 text-teal-700 rounded-full font-semibold hover:bg-teal-50 transition shadow-sm"
            >
              Já tenho conta
            </Link>
          </div>
        </Reveal>

      </div>

      {/* Fundo decorativo leve (não interfere no layout) */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-teal-100/30 blur-3xl pointer-events-none"></div>
    </section>
  );
}
