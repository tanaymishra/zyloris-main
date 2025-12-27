import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <section className="py-24 md:py-48 px-6 md:px-12 text-center z-10 relative bg-white text-black">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-none">JOIN THE <br />ENGINEERS.</h2>
                    <p className="text-lg md:text-xl font-medium opacity-60">Zyloris is not a company. It is a shared mission. We need developers, mathematicians, and architects who believe in the commons.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <Link href="/internships" className="px-12 py-6 bg-black text-white uppercase text-[10px] font-bold tracking-[0.3em] hover:scale-105 transition">Internships</Link>
                        <Link href="/network-status" className="px-12 py-6 border border-black uppercase text-[10px] font-bold tracking-[0.3em] hover:bg-black hover:text-white transition">Network Status</Link>
                    </div>
                </div>
            </section>

            <footer className="py-12 px-6 md:px-12 z-10 relative bg-surface">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
                    <div className="mono text-[10px] uppercase tracking-widest opacity-30 text-center md:text-left">
                        &copy; 2025 Zyloris Project // CC BY-NC-SA 4.0
                    </div>
                    <div className="flex gap-6 md:gap-12 mono text-[10px] uppercase tracking-widest opacity-40">
                        <a href="#" className="hover:text-white transition">Github</a>
                        <a href="#" className="hover:text-white transition">Transparency</a>
                    </div>
                    <div className="text-xs font-bold tracking-tighter uppercase">
                        Zyloris / <span className="text-blue-500">Project</span>
                    </div>
                </div>
            </footer>
        </>
    );
} 
