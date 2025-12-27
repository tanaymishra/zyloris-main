export default function Infrastructure() {
    return (
        <section id="infrastructure" className="py-24 md:py-32 px-6 md:px-12 z-10 relative">
            <span className="mono text-[10px] uppercase tracking-widest font-bold opacity-30 mb-12 block">Active Deployments</span>

            <div className="space-y-4">
                {/* Row 1 */}
                <div className="group py-12 md:py-16 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 reveal-block">
                    <div className="space-y-4">
                        <h4 className="text-4xl md:text-6xl font-bold group-hover:text-blue-500 transition-colors duration-500">RELIABLE</h4>
                        <p className="mono text-[10px] uppercase tracking-widest opacity-40">System Uptime Manager</p>
                    </div>
                    <div className="max-w-md text-sm opacity-40 group-hover:opacity-100 transition-opacity">
                        A comprehensive reliability suite offering monitoring, intelligent paging, and proactive threat detection. Keep your systems online and secure.
                    </div>
                    <span className="px-8 py-4 border border-white/10 uppercase text-[10px] font-bold tracking-[0.3em] opacity-40 cursor-wait">Building in Process</span>
                </div>

                {/* Row 2 */}
                <div className="group py-12 md:py-16 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 reveal-block">
                    <div className="space-y-4">
                        <h4 className="text-4xl md:text-6xl font-bold group-hover:text-blue-500 transition-colors duration-500">AUTHER</h4>
                        <p className="mono text-[10px] uppercase tracking-widest opacity-40">Identity & Access</p>
                    </div>
                    <div className="max-w-md text-sm opacity-40 group-hover:opacity-100 transition-opacity">
                        Seamless Single Sign-On (SSO) and complete user management infrastructure. A robust, free alternative to services like Clerk.
                    </div>
                    <button className="btn-industrial px-8 py-4 uppercase text-[10px] font-bold tracking-[0.3em]">View Platform</button>
                </div>

                {/* Row 3 */}
                <div className="group py-12 md:py-16 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 reveal-block">
                    <div className="space-y-4">
                        <h4 className="text-4xl md:text-6xl font-bold group-hover:text-blue-500 transition-colors duration-500">STRAINCRAFT</h4>
                        <p className="mono text-[10px] uppercase tracking-widest opacity-40">Bio-Visualization</p>
                    </div>
                    <div className="max-w-md text-sm opacity-40 group-hover:opacity-100 transition-opacity">
                        High-fidelity visualization capabilities for biological data. Interactive strain modeling and complex molecular simulation tools.
                    </div>
                    <span className="px-8 py-4 border border-white/10 uppercase text-[10px] font-bold tracking-[0.3em] opacity-40 cursor-wait">Building in Process</span>
                </div>
            </div>
        </section>
    );
}
