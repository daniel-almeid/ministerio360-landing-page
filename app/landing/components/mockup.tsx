import Image from "next/image";
import Reveal from "./ui/reveal";

export default function Mockup() {
    return (
        <section className="py-28 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Uma experiência moderna e intuitiva
                    </h2>
                </Reveal>

                <Reveal>
                    <div className="mt-16 relative mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl border bg-white">
                        <Image src="/screens/dashboard.png" alt="Dashboard" width={1800} height={1200} />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
