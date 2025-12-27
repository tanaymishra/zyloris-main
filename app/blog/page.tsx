'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { blogs } from '@/data/blogs';

export default function BlogIndexPage() {
    return (
        <main className="min-h-screen bg-bg text-white font-sans selection:bg-blue-500/30">
            <Navbar />

            <div className="pt-24 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <div className="mb-16">
                    <h1 className="font-black tracking-tighter text-4xl md:text-6xl uppercase leading-none mb-6">Engineering Log</h1>
                    <p className="text-sm md:text-base opacity-60 leading-relaxed font-light max-w-2xl">
                        Technical deep dives, architectural decisions, and post-mortems from the Zyloris core team.
                    </p>
                </div>

                <div className="space-y-12">
                    {blogs.map((blog) => (
                        <Link
                            href={`/blog/${blog.slug}`}
                            key={blog.slug}
                            className="block group border-b border-white/10 pb-12 hover:border-white/30 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row gap-4 md:items-baseline justify-between mb-4">
                                <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight group-hover:text-blue-500 transition-colors">
                                    {blog.title}
                                </h2>
                                <span className="mono text-[10px] uppercase tracking-widest opacity-40 shrink-0">
                                    {blog.date}
                                </span>
                            </div>
                            <p className="text-lg opacity-60 font-light max-w-2xl mb-6">
                                {blog.subtitle}
                            </p>
                            <div className="flex gap-4">
                                {blog.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 border border-white/10 text-[10px] uppercase font-bold tracking-widest opacity-60">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
