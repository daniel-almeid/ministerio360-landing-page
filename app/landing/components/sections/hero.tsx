import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../ui/reveal";

export default function Hero() {
  return (
    <section className="relative w-full py-40 px-6 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">

        <Reveal>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Tenha controle total da sua igreja em um único sistema{" "}
            <span className="text-teal-600">360°</span>
          </h1>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Organize membros, finanças, escalas e ministérios sem planilhas, sem bagunça e sem dor de cabeça.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="https://wa.me/5521993547442?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20experimentar%20o%20Minist%C3%A9rio360%20por%2030%20dias%20gratuitamente."
              className="px-10 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition inline-flex items-center gap-2 shadow-md hover:shadow-lg"
              target="_blank"
            >
              Experimente 30 dias grátis
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="https://ministerio360.vercel.app/login"
              className="px-10 py-4 border border-teal-600 text-teal-700 rounded-full font-semibold hover:bg-teal-50 transition shadow-sm"
            >
              Criar conta agora
            </Link>
          </div>
        </Reveal>

      </div>

      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-teal-100/30 blur-3xl pointer-events-none"></div>
    </section>
  );
}
