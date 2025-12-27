'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

export default function InternshipsPage() {
    return (
        <main className="min-h-screen bg-bg text-white font-sans selection:bg-blue-500/30">
            <Navbar />

            <div className="pt-24 pb-12 px-6 md:px-12 max-w-3xl mx-auto">
                <div className="mb-8">
                    <h1 className="font-black tracking-tighter text-4xl md:text-6xl uppercase leading-none mb-4">Internships</h1>
                    <p className="text-sm md:text-base opacity-60 leading-relaxed font-light max-w-2xl">
                        Join the protocol from ground zero. We offer rigorous internships for those willing to learn at the bleeding edge of infrastructure.
                    </p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                type="text"
                                id="name"
                                placeholder="TURING"
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="EDU@UNIVERSITY.EDU"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            type="tel"
                            id="phone"
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="university">University / Organization</Label>
                        <Input
                            type="text"
                            id="university"
                            placeholder="MIT / STANFORD / INDEPENDENT"
                        />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="resume">Resume / CV (PDF)</Label>
                        <input
                            type="file"
                            id="resume"
                            accept=".pdf"
                            className="w-full bg-white/5 border border-white/10 p-3 focus:outline-none focus:border-blue-500 transition-colors text-sm file:mr-4 file:py-2 file:px-4 file:border-0 file:text-[10px] file:font-semibold file:bg-white file:text-black file:uppercase file:tracking-widest hover:file:bg-blue-500 hover:file:text-white"
                        />
                        <p className="text-[10px] opacity-40 uppercase tracking-widest pt-1">Max Size: 5MB</p>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="cover_letter">Why Zyloris?</Label>
                        <Textarea
                            id="cover_letter"
                            rows={4}
                            placeholder="Tell us why you want to build decentralized infrastructure..."
                        />
                    </div>

                    <div className="pt-2">
                        <Button type="button">
                            Apply for Internship
                        </Button>
                    </div>
                </form>
            </div>

            <Footer />
        </main>
    );
}
