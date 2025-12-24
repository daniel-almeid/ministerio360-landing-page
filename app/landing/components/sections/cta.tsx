import Link from "next/link";
import Reveal from "../ui/reveal";

export default function CTA() {
  return (
    <section className="py-24 bg-teal-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">

        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Organize sua igreja em poucos minutos
          </h2>
        </Reveal>

        <Reveal>
          <p className="mt-4 text-white/90 text-lg">
            Comece agora a controlar membros, finanças e escalas em um único sistema.
          </p>
        </Reveal>

        <Reveal>
          <Link
            href="https://ministerio360.vercel.app/register"
            className="mt-10 inline-block px-10 py-4 bg-white text-teal-700 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Testar grátis por 30 dias
          </Link>
        </Reveal>

        <Reveal>
          <p className="mt-4 text-sm text-white/80">
            Não pedimos cartão de crédito
          </p>
        </Reveal>

      </div>
    </section>
  );
}
