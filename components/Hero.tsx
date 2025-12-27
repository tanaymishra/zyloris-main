import AnimationCanvas from './AnimationCanvas';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-24 z-10 overflow-hidden">
            <AnimationCanvas />

            <div className="max-w-[1400px] z-10 relative">
                <div className="reveal-mask">
                    <h1 id="hero-title" className="heading-xl">framework</h1>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-12 mt-4">
                    <div className="reveal-mask">
                        <h1 id="hero-title-2" className="heading-xl opacity-20">For All.</h1>
                    </div>
                    <div className="max-w-md pb-6 space-y-6">
                        <p className="mono text-[10px] uppercase tracking-widest text-blue-400 font-bold">Universal Free Tier</p>
                        <p className="text-sm md:text-lg opacity-50 font-light leading-relaxed">
                            Zyloris provides enterprise-grade digital infrastructure at zero cost, for everyone. We empower both personal projects and commercial giants with the same robust tools.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
