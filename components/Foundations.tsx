export default function Foundations() {
    return (
        <section id="foundations" className="relative z-10 py-24 md:py-32 px-6 md:px-12">
            <div className="section-header flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 gap-8">
                <span className="mono text-[10px] uppercase tracking-widest font-bold">01 / The Foundations</span>
                <div className="max-w-xl">
                    <h2 className="text-3xl md:text-6xl font-bold leading-none mb-6 md:mb-8">BUILT FOR <br />UNIVERSALITY.</h2>
                    <p className="text-base md:text-lg opacity-40">Infrastructure should be a right, not a rent. We provide utilities that are powerful enough for enterprise but accessible to all.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/5">
                <div className="bg-bg p-8 md:p-12 space-y-8 hover:bg-surface transition duration-500">
                    <span className="mono text-[10px] text-blue-500">SYSTEM.01</span>
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight">Zero Barrier</h3>
                    <p className="text-xs md:text-sm opacity-40 leading-relaxed">We remove the cost of entry. Whether you are a student or a startup, you get the same premium reliable infrastructure without the premium price tag.</p>
                </div>
                <div className="bg-bg p-8 md:p-12 space-y-8 hover:bg-surface transition duration-500">
                    <span className="mono text-[10px] text-blue-500">SYSTEM.02</span>
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight">Commercial Grade</h3>
                    <p className="text-xs md:text-sm opacity-40 leading-relaxed">Free does not mean weak. Our systems are built to handle massive scale, commercial traffic, and critical workloads with absolute stability.</p>
                </div>
                <div className="bg-bg p-8 md:p-12 space-y-8 hover:bg-surface transition duration-500">
                    <span className="mono text-[10px] text-blue-500">SYSTEM.03</span>
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight">Neutral Ground</h3>
                    <p className="text-xs md:text-sm opacity-40 leading-relaxed">Infrastructure must be neutral. We do not gatekeep based on usage or profit. We build the neutral layer for the web.</p>
                </div>
            </div>
        </section>
    );
}
