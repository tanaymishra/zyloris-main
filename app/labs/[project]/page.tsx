'use client';

import { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

export default function ProjectLogPage({ params }: { params: Promise<{ project: string }> }) {
    const resolvedParams = use(params);
    const projectId = resolvedParams.project;
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-bg text-white font-sans selection:bg-blue-500/30">
            <Navbar />

            <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <div className="mb-12">
                    <Link href="/labs" className="mono text-[10px] uppercase tracking-widest opacity-40 hover:text-blue-500 transition mb-6 block">
                        ← Back to Labs
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                        <h1 className="font-black tracking-tighter text-4xl md:text-7xl uppercase leading-none">{project.name}</h1>
                        <span className={`self-start md:self-center px-3 py-1 text-xs uppercase font-bold tracking-widest border rounded-sm ${project.status === 'Abandoned' ? 'border-red-500/30 text-red-500' :
                            project.status === 'Operational' ? 'border-green-500/30 text-green-500' :
                                project.status === 'Beta' ? 'border-blue-500/30 text-blue-500' :
                                    'border-yellow-500/30 text-yellow-500'
                            }`}>
                            {project.status}
                        </span>
                    </div>
                    <p className="text-lg md:text-xl opacity-80 font-light max-w-2xl border-l-2 border-blue-500 pl-6 py-2 mb-12">
                        {project.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-b border-white/10 py-12">
                        <div className="space-y-4">
                            <h3 className="mono text-xs text-blue-400 uppercase tracking-widest font-bold">Problem To Solve</h3>
                            <p className="text-base leading-relaxed opacity-80 font-light">
                                {project.problemSolved}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="mono text-xs text-blue-400 uppercase tracking-widest font-bold">The Vision</h3>
                            <p className="text-base leading-relaxed opacity-80 font-light">
                                {project.vision}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                    <div className="space-y-2">
                        <h3 className="mono text-[10px] uppercase tracking-widest opacity-40">Commenced</h3>
                        <p className="font-bold text-lg">{project.commencementDate}</p>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <h3 className="mono text-[10px] uppercase tracking-widest opacity-40">Current Phase</h3>
                        <p className="font-bold text-lg">{project.currentPhase}</p>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-16">
                    <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-12 opacity-40">Full Project Log</h2>

                    <div className="relative border-l border-white/10 ml-2 space-y-16 pl-8 py-4">
                        {project.history.map((item, idx) => (
                            <div key={idx} className="relative">
                                {/* Dot */}
                                <div className={`absolute -left-[37px] top-2 w-4 h-4 rounded-full border-2 border-black ${item.type === 'decision' ? 'bg-red-500' :
                                    item.type === 'milestone' ? 'bg-blue-500' :
                                        'bg-white'
                                    }`}></div>

                                <div className="flex flex-col gap-2 mb-4">
                                    <span className="mono text-xs text-blue-500 uppercase tracking-widest">{item.date}</span>
                                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight">{item.title}</h3>
                                </div>

                                <div className="prose prose-invert max-w-none">
                                    <p className="text-base md:text-lg opacity-60 leading-relaxed font-light">
                                        {item.description}
                                    </p>
                                </div>

                                {item.blogLink && (
                                    <div className="mt-6">
                                        <a href={item.blogLink} className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white hover:text-black transition uppercase text-[10px] font-bold tracking-widest">
                                            Read Full Documentation ↗
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
