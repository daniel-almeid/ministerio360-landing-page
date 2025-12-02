import Reveal from "../ui/reveal";

export default function Plans() {
  return (
    <section id="plans" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <Reveal>
          <h2 className="text-3xl font-bold text-gray-900">Escolha seu plano</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <Reveal>
            <div className="border rounded-2xl p-8 bg-gray-50 h-full flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">Grátis</h3>
              <p className="mt-2 text-gray-600">Para igrejas começando agora</p>
              <p className="mt-6 text-4xl font-extrabold text-gray-900">R$0</p>

              <ul className="mt-6 space-y-2 text-gray-700 text-left flex-1">
                <li>• Dashboard</li>
                <li>• Controle financeiro</li>
                <li>• Cadastro de membros</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="border rounded-2xl p-8 bg-teal-50 border-teal-300 h-full flex flex-col">
              <h3 className="text-xl font-bold text-teal-700">Padrão</h3>
              <p className="mt-2 text-gray-600">Para igrejas em crescimento</p>
              <p className="mt-6 text-4xl font-extrabold text-teal-700">R$49,00</p>

              <ul className="mt-6 space-y-2 text-teal-800 text-left flex-1">
                <li>• Dashboard</li>
                <li>• Cadastro de membros</li>
                <li>• Cadastro de visitantes</li>
                <li>• Cadastro financeiro</li>
                <li>• Relatórios</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="border rounded-2xl p-8 bg-gray-50 h-full flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">Premium</h3>
              <p className="mt-2 text-gray-600">Para igrejas que precisam de tudo</p>
              <p className="mt-6 text-4xl font-extrabold text-gray-900">R$89,00</p>

              <ul className="mt-6 space-y-2 text-gray-700 text-left flex-1">
                <li>• Dashboard</li>
                <li>• Cadastro de membros</li>
                <li>• Cadastro de visitantes</li>
                <li>• Cadastro financeiro</li>
                <li>• Cadastro de ministérios</li>
                <li>• Cadastro de eventos</li>
                <li>• Cadastro de escalas</li>
                <li>• Relatórios</li>
                <li>• Suporte prioritário</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
