'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CharterPage() {
    return (
        <main className="min-h-screen bg-bg text-white font-sans selection:bg-blue-500/30">
            <Navbar />

            <div className="pt-24 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <div className="mb-16">
                    <h1 className="font-black tracking-tighter text-4xl md:text-6xl uppercase leading-none mb-6">The Protocol Charter</h1>
                    <p className="text-sm md:text-base opacity-60 leading-relaxed font-light">
                        Our operating model, economic philosophy, and guarantee to the user.
                    </p>
                </div>

                <div className="space-y-12 text-sm md:text-base opacity-80 leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="mono text-xs uppercase tracking-[0.2em] font-bold text-blue-400">01. Passion Project</h2>
                        <p>
                            Zyloris is not a startup. It is not seeking venture capital, an exit, or an IPO. It is a passion project built by a collective of engineers who believe reliable infrastructure should be a public utility. We build because we want these tools to exist.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="mono text-xs uppercase tracking-[0.2em] font-bold text-blue-400">02. Universal Commercial Access</h2>
                        <p>
                            Our free tier is not a trial. It is the full product. You are explicitly authorized to use Zyloris infrastructure for commercial purposes, revenue-generating products, and enterprise applications at <span className="text-white font-bold">zero cost</span>. We do not tax your success.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="mono text-xs uppercase tracking-[0.2em] font-bold text-blue-400">03. Non-Profit Intent</h2>
                        <p>
                            We do not intend to make a profit from this protocol. Currently, all costs are covered by the maintainers.
                        </p>
                        <p>
                            In the future, should the scale of network traffic exceed our personal capacity to fund it, we may introduce a cost-recovery pricing model. This would be strictly capped at <span className="text-white">Hosting + Maintenance</span> costs. We commit to transparency regarding these operational costs.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="mono text-xs uppercase tracking-[0.2em] font-bold text-blue-400">04. Right to Evolve</h2>
                        <p>
                            While our mission is permanent, reality is dynamic. We reserve the full right to modify these terms, our pricing model, or our service availability at any time. This clause exists to protect the protocol against abuse, regulatory changes, or existential threats to its sustainability.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
