import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-8 flex justify-between items-center bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0">
            <div className="flex items-center gap-12">
                <span className="font-bold tracking-tighter text-xl uppercase">Zyloris</span>
                <div className="hidden md:flex items-center gap-6 mono text-[10px] uppercase tracking-widest opacity-40">
                    <span className="flex items-center"><span className="status-dot"></span> Protocol Active</span>
                    <span>Node: 0x71A</span>
                </div>
            </div>
            <div className="flex gap-4 md:gap-8 mono text-[10px] uppercase tracking-[0.2em] font-medium items-center">
                <Link href="/internships" className="hidden md:block hover:text-blue-400 transition">Internships</Link>
                <Link href="/contribute" className="hidden hover:text-blue-400 transition">Contribute</Link>
                <Link href="/labs" className="md:block px-4 py-2 border border-white/10 hover:bg-white hover:text-black transition">Labs</Link>
            </div>
        </nav>
    );
}
