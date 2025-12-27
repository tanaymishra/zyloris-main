export default function Metrics() {
    return (
        <section className="relative z-10 grid grid-cols-2 md:grid-cols-4 border-y border-white/10 bg-surface/50 backdrop-blur-md">
            <div className="p-6 md:p-8 border-r border-b md:border-b-0 border-white/10">
                <p className="mono text-[10px] uppercase tracking-widest opacity-40 mb-2">Systems Protected</p>
                <p className="text-2xl md:text-3xl font-bold italic serif">1,242</p>
            </div>
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10">
                <p className="mono text-[10px] uppercase tracking-widest opacity-40 mb-2">Uptime Reliability</p>
                <p className="text-2xl md:text-3xl font-bold italic serif">99.99%</p>
            </div>
            <div className="p-6 md:p-8 border-r border-white/10">
                <p className="mono text-[10px] uppercase tracking-widest opacity-40 mb-2">Cost to User</p>
                <p className="text-2xl md:text-3xl font-bold italic serif text-blue-500">$0.00</p>
            </div>
            <div className="p-6 md:p-8">
                <p className="mono text-[10px] uppercase tracking-widest opacity-40 mb-2">Commercial Use</p>
                <p className="text-2xl md:text-3xl font-bold italic serif">Free<span className="text-[0.4em] align-top">(*)</span></p>
            </div>
        </section>
    );
}
