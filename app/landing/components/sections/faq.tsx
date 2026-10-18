import { ChevronDown } from "lucide-react";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

// ⚠️ Revise as respostas para garantir que refletem exatamente como o produto funciona.
const faqs = [
  {
    q: "Preciso de cartão de crédito para testar?",
    a: "Não. Você testa por 30 dias sem informar cartão de crédito.",
  },
  {
    q: "Preciso instalar alguma coisa?",
    a: "Não. O Ministério360 funciona online: você acessa pelo navegador, no celular ou no computador.",
  },
  {
    q: "Minha igreja é pequena. O sistema é para mim?",
    a: "Sim. O plano Grátis foi pensado para quem está começando e já traz dashboard, controle de membros e financeiro. Conforme a igreja cresce, você evolui de plano.",
  },
  {
    q: "Não tenho experiência com tecnologia. Vou conseguir usar?",
    a: "O sistema foi feito para ser simples e intuitivo. E se tiver qualquer dúvida, você pode falar com a gente direto pelo WhatsApp.",
  },
  {
    q: "Posso trocar de plano depois?",
    a: "Sim. Você pode começar no plano que fizer mais sentido e mudar conforme a necessidade da sua igreja.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você testa 30 dias sem compromisso e sem cartão. Se não fizer sentido para a sua igreja, é só não continuar.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-slate-50 py-24 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Dúvidas frequentes" title="Ainda com alguma dúvida?" />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-teal-600 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-slate-600">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}