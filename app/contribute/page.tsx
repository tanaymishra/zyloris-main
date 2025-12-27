'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

export default function ContributePage() {
    return (
        <main className="min-h-screen bg-bg text-white font-sans selection:bg-blue-500/30">
            <Navbar />

            <div className="pt-24 pb-12 px-6 md:px-12 max-w-3xl mx-auto">
                <div className="mb-8">
                    <h1 className="font-black tracking-tighter text-4xl md:text-6xl uppercase leading-none mb-4">Contribute</h1>
                    <p className="text-sm md:text-base opacity-60 leading-relaxed font-light max-w-2xl">
                        We are looking for unparalleled engineering talent, mathematicians, and architects.
                    </p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                type="text"
                                id="name"
                                placeholder="PROMETHEUS"
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="CONTACT@ZYLORIS.ORG"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input
                            type="tel"
                            id="phone"
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="description">Proposal / Description</Label>
                        <Textarea
                            id="description"
                            rows={4}
                            placeholder="Explain what you want to build or how you can contribute to the protocol..."
                        />
                    </div>

                    <div className="pt-2">
                        <Button type="button">
                            Submit Proposal
                        </Button>
                    </div>
                </form>
            </div>

            <Footer />
        </main>
    );
}
