import { Quote } from "lucide-react";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

// ⚠️ Substitua por depoimentos REAIS (com autorização) antes de rodar anúncios.
const list = [
  {
    name: "Pr. João Silva",
    church: "Igreja Vida Plena",
    text: "O Ministério360 revolucionou nossa organização. Hoje temos tudo centralizado.",
  },
  {
    name: "Pr. Marcos Santos",
    church: "Assembleia Luz Divina",
    text: "As escalas automáticas são incríveis! Salvou horas da nossa equipe.",
  },
  {
    name: "Pr. Eduardo Araújo",
    church: "Comunidade Fonte Viva",
    text: "Simples, moderno e completo. Recomendo para qualquer igreja.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Quem usa recomenda" title="O que líderes estão dizendo" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {list.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <Quote className="h-8 w-8 text-teal-300" />
                <blockquote className="mt-4 flex-1 text-lg text-slate-700">{t.text}</blockquote>
                <figcaption className="mt-6 border-t border-slate-100 pt-4">
                  <p className="font-bold text-navy-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.church}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}