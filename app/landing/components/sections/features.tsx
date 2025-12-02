import { Users, Calendar, Church, BarChart3, DollarSign, UserPlus } from "lucide-react";
import Reveal from "../ui/reveal";

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-6 gap-10">

        <Reveal>
          <div className="text-center">
            <Users className="w-10 h-10 mx-auto text-teal-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Membros</h3>
            <p className="mt-2 text-gray-600 text-sm">Organize e acompanhe todos os membros da sua igreja.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="text-center">
            <UserPlus className="w-10 h-10 mx-auto text-teal-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Visitantes</h3>
            <p className="mt-2 text-gray-600 text-sm">Acompanhe visitantes, follow-up e conversões.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="text-center">
            <Calendar className="w-10 h-10 mx-auto text-teal-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Agenda & Escalas</h3>
            <p className="mt-2 text-gray-600 text-sm">Monte escalas, eventos e calendários rapidamente.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="text-center">
            <Church className="w-10 h-10 mx-auto text-teal-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Ministérios</h3>
            <p className="mt-2 text-gray-600 text-sm">Gerencie equipes e funções da igreja.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="text-center">
            <DollarSign className="w-10 h-10 mx-auto text-teal-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Finanças</h3>
            <p className="mt-2 text-gray-600 text-sm">Controle dízimos, ofertas, entradas e saídas.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="text-center">
            <BarChart3 className="w-10 h-10 mx-auto text-teal-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Relatórios</h3>
            <p className="mt-2 text-gray-600 text-sm">Tenha visão completa da sua igreja.</p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
