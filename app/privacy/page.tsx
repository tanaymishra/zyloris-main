'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-bg text-white font-sans selection:bg-blue-500/30">
            <Navbar />

            <div className="pt-24 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <div className="mb-16">
                    <h1 className="font-black tracking-tighter text-4xl md:text-6xl uppercase leading-none mb-6">Privacy Policy</h1>
                    <p className="text-sm md:text-base opacity-60 leading-relaxed font-light">
                        Last Updated: December 28, 2025
                    </p>
                </div>

                <div className="space-y-12 text-sm md:text-base opacity-80 leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="mono text-xs uppercase tracking-[0.2em] font-bold text-blue-400">01. Principle of Minimality</h2>
                        <p>
                            Zyloris operates on a principle of data minimality. We do not track users across the web, we do not share data with advertising networks, and we do not monetize user behavior. We are an infrastructure protocol, not a data broker.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="mono text-xs uppercase tracking-[0.2em] font-bold text-blue-400">02. Data Collection</h2>
                        <p>
                            <strong>Voluntary Information:</strong> We collect personal information (name, email, phone number) only when you explicitly provide it to us via our Contribution or Internship forms. This data is used solely for the purpose of communication regarding your application or inquiry.
                        </p>
                        <p>
                            <strong>System Logs:</strong> Like all infrastructure providers, our servers automatically record basic request data (IP address, user agent, timestamp) to maintain security, prevent abuse (DDoS), and monitor uptime. This data is routinely rotated and is not personally linked to your identity unless necessary for security investigations.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="mono text-xs uppercase tracking-[0.2em] font-bold text-blue-400">03. Usage of Information</h2>
                        <p>
                            Information collected is used strictly for:
                        </p>
                        <ul className="list-disc pl-4 space-y-2 opacity-80">
                            <li>Providing and maintaining the Zyloris network services (RELIABLE, AUTHER, etc.).</li>
                            <li>Processing internship and contribution applications.</li>
                            <li> notifying you of critical system updates or security incidents.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="mono text-xs uppercase tracking-[0.2em] font-bold text-blue-400">04. Third-Party Services</h2>
                        <p>
                            We may utilize trusted third-party service providers for hosting, DNS management, and email delivery. These providers are selected based on their commitment to security and privacy. We do not use third-party analytics suites (like Google Analytics) on our public-facing marketing pages.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="mono text-xs uppercase tracking-[0.2em] font-bold text-blue-400">05. Security</h2>
                        <p>
                            We employ industry-standard encryption (TLS/SSL) for all data in transit. Access to personal data (such as internship applications) is restricted to authorized core maintainers of the Zyloris Project.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="mono text-xs uppercase tracking-[0.2em] font-bold text-blue-400">06. Contact</h2>
                        <p>
                            For inquiries regarding this policy or to request deletion of your data, please contact: <br />
                            <a href="mailto:privacy@zyloris.org" className="underline hover:text-blue-400">privacy@zyloris.org</a>
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
