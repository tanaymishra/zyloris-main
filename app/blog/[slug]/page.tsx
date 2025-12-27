'use client';

import { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { blogs } from '@/data/blogs';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const blog = blogs.find(b => b.slug === resolvedParams.slug);

    if (!blog) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-bg text-white font-sans selection:bg-blue-500/30">
            <Navbar />

            <article className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
                <Link href="/blog" className="mono text-[10px] uppercase tracking-widest opacity-40 hover:text-blue-500 transition mb-8 block">
                    ← Back to Log
                </Link>

                <header className="mb-12 border-b border-white/10 pb-12">
                    <div className="flex gap-4 mb-6">
                        {blog.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 border border-white/10 text-[10px] uppercase font-bold tracking-widest text-blue-400">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-black tracking-tighter text-3xl md:text-5xl uppercase leading-none mb-6">
                        {blog.title}
                    </h1>
                    <p className="text-lg md:text-xl opacity-80 font-light leading-relaxed mb-6">
                        {blog.subtitle}
                    </p>
                    <div className="flex justify-between items-center mono text-[10px] uppercase tracking-widest opacity-40">
                        <span>{blog.date}</span>
                        <span>// {blog.author}</span>
                    </div>
                </header>

                <div
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight prose-p:font-light prose-p:opacity-80 prose-li:opacity-80"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                <div className="mt-24 pt-12 border-t border-white/10 text-center">
                    <p className="mono text-[10px] uppercase tracking-widest opacity-40 mb-4">End of Log</p>
                    <Link href="/labs" className="btn-industrial px-8 py-4 inline-block bg-white text-black hover:bg-blue-500 hover:text-white transition uppercase text-[10px] font-bold tracking-widest">
                        View Active Projects
                    </Link>
                </div>
            </article>

            <Footer />
        </main>
    );
}
