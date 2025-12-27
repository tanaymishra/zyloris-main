import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects = [
    {
        name: 'RELIABLE',
        description: 'System Uptime Manager',
        status: 'Operational',
        uptime: '99.99%',
        slug: 'reliable'
    },
    {
        name: 'AUTHER',
        description: 'Identity & Access',
        status: 'Operational',
        uptime: '100.00%',
        slug: 'auther'
    }
];

export default function NetworkStatus() {
    return (
        <main className="min-h-screen bg-bg text-white font-sans selection:bg-blue-500/30">
            <Navbar />

            <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto min-h-[60vh]">
                <div className="mb-16">
                    <h1 className="heading-xl text-4xl md:text-8xl mb-4">Network Status</h1>
                    <p className="mono text-xs md:text-sm text-blue-500 uppercase tracking-widest">All Systems Operational</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {projects.map((project) => (
                        <Link
                            href={`/uptime/${project.slug}`}
                            key={project.name}
                            className="group block p-8 border border-white/10 hover:border-blue-500/50 hover:bg-white/5 transition duration-300"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <h2 className="text-2xl md:text-4xl font-bold">{project.name}</h2>
                                        <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] uppercase tracking-widest font-bold border border-green-500/20 rounded-full">
                                            {project.status}
                                        </span>
                                    </div>
                                    <p className="mono text-[10px] uppercase tracking-widest opacity-40">{project.description}</p>
                                </div>

                                <div className="text-right">
                                    <p className="mono text-[10px] uppercase tracking-widest opacity-40 mb-1">Current Uptime</p>
                                    <p className="text-xl font-bold mono text-blue-400">{project.uptime}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
