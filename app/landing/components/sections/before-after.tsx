import { X, Check } from "lucide-react";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

const rows = [
  ["Membros em planilhas e cadernos", "Todos os membros em um só cadastro, com busca"],
  ["Visitantes esquecidos depois do culto", "Follow-up de cada visitante com status claro"],
  ["Escala combinada em grupos de WhatsApp", "Escala semanal organizada por ministério"],
  ["Dízimos e ofertas anotados à mão", "Entradas e saídas por categoria, em segundos"],
  ["Prestação de contas que leva dias", "Relatório financeiro mensal em PDF"],
  ["Pastor preso na administração", "Mais tempo para pastorear e cuidar de pessoas"],
];

export default function BeforeAfter() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Antes e depois"
          title="Como a rotina da sua igreja muda"
        />

        <Reveal>
          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="grid grid-cols-2 text-center text-sm font-bold md:text-base">
              <div className="bg-red-50 py-4 text-red-700">Sem sistema</div>
              <div className="bg-teal-600 py-4 text-white">Com Ministério360</div>
            </div>
            {rows.map(([bad, good]) => (
              <div key={bad} className="grid grid-cols-2 border-t border-slate-100">
                <div className="flex items-start gap-2 p-4 text-sm text-slate-600 md:p-5 md:text-base">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" /> {bad}
                </div>
                <div className="flex items-start gap-2 bg-teal-50/50 p-4 text-sm font-medium text-navy-900 md:p-5 md:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" /> {good}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}