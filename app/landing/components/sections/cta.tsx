import Link from "next/link";
import Reveal from "../ui/reveal";

export default function CTA() {
  return (
    <section className="py-20 bg-teal-600 text-white text-center">

      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold">
          Comece a organizar sua igreja hoje mesmo
        </h2>
      </Reveal>

      <Reveal>
        <p className="mt-4 text-white/90 max-w-xl mx-auto">
          Leve sua igreja para um novo nível de organização e eficiência.
        </p>
      </Reveal>

      <Reveal>
        <Link
          href="https://ministerio360.vercel.app/register"
          className="mt-8 inline-block px-8 py-4 bg-white text-teal-700 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Criar conta gratuita
        </Link>
      </Reveal>

    </section>
  );
}
