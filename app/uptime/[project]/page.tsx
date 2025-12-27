'use client';

import { use } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock data generator for the last 90 days
const generateHistory = () => {
    const days = 90;
    const history = [];
    for (let i = 0; i < days; i++) {
        // Mostly good days (status: 1), occasional incident (status: 0)
        const isIncident = Math.random() > 0.98;
        history.push({
            date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
            status: isIncident ? 'incident' : 'operational',
            details: isIncident ? 'Minor latency detected' : 'No incidents reported'
        });
    }
    return history;
};

const componentsData: Record<string, any> = {
    reliable: {
        name: 'RELIABLE',
        description: 'System Uptime Manager',
        history: generateHistory()
    },
    auther: {
        name: 'AUTHER',
        description: 'Identity & Access',
        history: generateHistory()
    }
};

export default function UptimePage({ params }: { params: Promise<{ project: string }> }) {
    const resolvedParams = use(params);
    const slug = resolvedParams.project;
    const project = componentsData[slug] || componentsData['reliable']; // Fallback

    return (
        <main className="min-h-screen bg-bg text-white font-sans selection:bg-blue-500/30">
            <Navbar />

            <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="mb-12">
                    <Link href="/network-status" className="mono text-[10px] uppercase tracking-widest opacity-40 hover:text-blue-500 transition mb-6 block">
                        ← Back to Network Status
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-2">{project.name}</h1>
                    <p className="mono text-sm opacity-40 uppercase tracking-widest">{project.description}</p>
                </div>

                <div className="p-8 border border-white/10 bg-surface/50 backdrop-blur-md mb-12">
                    <div className="flex justify-between items-end mb-6">
                        <span className="font-bold text-lg">Uptime History</span>
                        <span className="mono text-[10px] opacity-40 uppercase">Last 90 Days</span>
                    </div>

                    {/* Visual Bar Grid */}
                    <div className="flex gap-[2px] h-16 items-end">
                        {project.history.map((day: any, i: number) => (
                            <div
                                key={i}
                                className={`flex-1 rounded-sm transition-all hover:opacity-100 opacity-60 hover:scale-y-110 origin-bottom ${day.status === 'operational' ? 'bg-green-500' : 'bg-yellow-500'
                                    }`}
                                style={{ height: day.status === 'operational' ? '100%' : '60%' }}
                                title={`${day.date}: ${day.details}`}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-bold border-b border-white/10 pb-4">Incident Log</h3>

                    <div className="space-y-4">
                        {project.history.slice().reverse().filter((d: any) => d.status === 'incident').length === 0 ? (
                            <p className="opacity-40 mono text-sm">No incidents reported in the last 90 days.</p>
                        ) : (
                            project.history.slice().reverse().filter((d: any) => d.status === 'incident').map((incident: any, i: number) => (
                                <div key={i} className="flex flex-col md:flex-row gap-4 p-4 bg-white/5 border border-white/5 rounded">
                                    <div className="mono text-xs text-yellow-500">{incident.date}</div>
                                    <div>
                                        <div className="font-bold text-sm mb-1">Performance Degraded</div>
                                        <div className="text-sm opacity-60">{incident.details}</div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
