import { CheckCircle } from "lucide-react";
import Reveal from "../ui/reveal";

const items = [
    "Tenha todos os membros e ministérios organizados em um único lugar",
    "Acompanhe visitantes e saiba exatamente quem precisa de atenção",
    "Elimine a confusão das escalas e evite voluntários faltando",
    "Tome decisões melhores com relatórios claros e fáceis de entender",
    "Controle entradas e saídas sem depender de planilhas",
    "Acesse tudo de qualquer lugar, no celular ou computador",
];

export default function Why() {
    return (
        <section id="why" className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                        Tudo o que sua igreja precisa para funcionar com organização e clareza
                    </h2>
                </Reveal>

                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    {items.map((text, i) => (
                        <Reveal key={i}>
                            <div className="flex items-start gap-4">
                                <CheckCircle className="text-teal-600 w-6 h-6" />
                                <p className="text-gray-700 text-lg">{text}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
