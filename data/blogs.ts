export type BlogPost = {
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    author: string;
    content: string; // Using simple HTML/Markdown-like string for now, could be MDX later
    tags: string[];
};

export const blogs: BlogPost[] = [
    {
        slug: 'straincraft-sunsetting',
        title: 'Sunsetting Straincraft: A Post-Mortem',
        subtitle: 'Why we decided to halt development on our browser-based molecular renderer.',
        date: 'DEC 20 2025',
        author: 'CORE ARCHITECT',
        tags: ['ENGINEERING', 'DECISION', 'POST-MORTEM'],
        content: `
            <p class="mb-6">At Zyloris, we believe in radical transparency. When we succeed, we share the code. When we fail, we share the lesson.</p>

            <h3 class="text-xl font-bold uppercase tracking-tight mb-4">The Vision</h3>
            <p class="mb-6">Straincraft was ambitious. We wanted to build "Google Earth for Biology" — a tool that could render millions of molecular interactions in real-time, directly in the browser, without requiring users to install 5GB of specialized software.</p>

            <h3 class="text-xl font-bold uppercase tracking-tight mb-4">The Bottleneck</h3>
            <p class="mb-6">Our initial prototype used WebGL to render protein structures. On high-end workstations with dedicated GPUs, it was beautiful. But Zyloris is about <em>universal</em> access. When we tested on standard educational laptops (Chromebooks, older MacBooks), the frame rates dropped to single digits.</p>

            <p class="mb-6">The sheer volume of vertex data required to accurately represent complex viral strains overwhelmed the browser's memory limits. We tried sticking to WebAssembly for calculations, but the bus speed between CPU and GPU became the hard limit.</p>

            <h3 class="text-xl font-bold uppercase tracking-tight mb-4">The Decision</h3>
            <p class="mb-6">We had two choices:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
                <li>Server-side rendering (streaming video to client), which would introduce high latency and massive server costs (violating our free-tier promise).</li>
                <li>Downgrading visual fidelity, which would make the tool no better than existing 2D viewers.</li>
            </ul>

            <p class="mb-6">Neither was acceptable. We refuse to ship substandard infrastructure. Therefore, we preserve the code as an open-source reference for others, but we are reallocating our core engineering resources back to RELIABLE and AUTHER.</p>

            <p>The code remains available. The mission continues.</p>
        `
    },
    {
        slug: 'reliable-architecture',
        title: 'The Database Architecture of RELIABLE',
        subtitle: 'How we are designing multi-region sharding for the next generation of uptime monitoring.',
        date: 'DEC 28 2025',
        author: 'SYSTEMS LEAD',
        tags: ['ENGINEERING', 'DATABASE'],
        content: `
            <p class="mb-6">Reliability is boring. That’s the point. When your house is on fire, you don’t want an exciting fire truck; you want water.</p>
            <p class="mb-6">We are currently finalizing the database schema for RELIABLE. The details will be published here shortly.</p>
        `
    }
];
