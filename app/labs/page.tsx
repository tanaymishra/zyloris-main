'use client';

import { use, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function LabsPage() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleProject = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <main className="min-h-screen bg-bg text-white font-sans selection:bg-blue-500/30">
            <Navbar />

            <div className="pt-24 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
                <div className="mb-16">
                    <h1 className="font-black tracking-tighter text-4xl md:text-6xl uppercase leading-none mb-6">Zyloris Labs</h1>
                    <p className="text-sm md:text-base opacity-60 leading-relaxed font-light max-w-2xl">
                        A transparent view into our engineering forge. Track the development, decisions, and destiny of every project in the protocol.
                    </p>
                </div>

                <div className="space-y-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`border transition-all duration-300 overflow-hidden ${expandedId === project.id
                                    ? 'border-blue-500/50 bg-white/5'
                                    : 'border-white/10 bg-transparent hover:bg-white/5'
                                }`}
                        >
                            <button
                                onClick={() => toggleProject(project.id)}
                                className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row justify-between md:items-center gap-4 group"
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <h2 className="text-xl md:text-3xl font-bold tracking-tight group-hover:text-blue-400 transition-colors">
                                            {project.name}
                                        </h2>
                                        <span className={`px-2 py-1 text-[10px] uppercase font-bold tracking-widest border rounded-sm ${project.status === 'Abandoned' ? 'border-red-500/30 text-red-500' :
                                                project.status === 'Operational' ? 'border-green-500/30 text-green-500' :
                                                    project.status === 'Beta' ? 'border-blue-500/30 text-blue-500' :
                                                        'border-yellow-500/30 text-yellow-500'
                                            }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <p className="mono text-[10px] md:text-xs opacity-60 uppercase tracking-widest">
                                        Started: {project.commencementDate}
                                    </p>
                                </div>
                                <div className="text-right hidden md:block">
                                    <span className="mono text-[10px] opacity-40 uppercase tracking-widest mr-4">
                                        {expandedId === project.id ? 'Close Details' : 'View Status'}
                                    </span>
                                    <span className={`inline-block transition-transform duration-300 ${expandedId === project.id ? 'rotate-180' : 'rotate-0'}`}>
                                        ▼
                                    </span>
                                </div>
                            </button>

                            {/* Dropdown Content */}
                            <div className={`transition-all duration-500 ease-in-out ${expandedId === project.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="p-6 md:p-8 pt-0 border-t border-white/5">
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                                        <div>
                                            <h3 className="mono text-xs text-blue-400 uppercase tracking-widest font-bold mb-2">Current Status</h3>
                                            <p className="text-sm md:text-lg font-light leading-relaxed">
                                                {project.currentPhase}
                                            </p>
                                        </div>
                                        <Link
                                            href={`/labs/${project.id}`}
                                            className="px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition uppercase text-[10px] font-bold tracking-widest shrink-0"
                                        >
                                            View Full Project Log
                                        </Link>
                                    </div>

                                    <div>
                                        <h3 className="mono text-xs text-white/40 uppercase tracking-widest font-bold mb-6">Recent Updates</h3>
                                        <div className="relative border-l border-white/10 ml-2 space-y-8 pl-8 py-2">
                                            {project.history.slice(0, 2).map((item, idx) => (
                                                <div key={idx} className="relative">
                                                    {/* Dot */}
                                                    <div className={`absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-black ${item.type === 'decision' ? 'bg-red-500' :
                                                            item.type === 'milestone' ? 'bg-blue-500' :
                                                                'bg-white'
                                                        }`}></div>

                                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                                                        <span className="mono text-[10px] text-white/40 uppercase tracking-widest w-24 shrink-0">{item.date}</span>
                                                        <h4 className="font-bold text-sm uppercase tracking-wide">{item.title}</h4>
                                                    </div>

                                                    <p className="text-xs md:text-sm opacity-60 leading-relaxed max-w-2xl">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
