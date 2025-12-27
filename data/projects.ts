export type HistoryEvent = {
    date: string;
    title: string;
    description?: string;
    blogLink?: string;
    type: 'update' | 'milestone' | 'decision';
};

export type Project = {
    id: string;
    name: string;
    description: string;
    commencementDate: string;
    status: 'Building' | 'Beta' | 'Operational' | 'Abandoned' | 'Concept';
    currentPhase: string;
    problemSolved: string;
    vision: string;
    history: HistoryEvent[];
};

export const projects: Project[] = [
    {
        id: 'reliable',
        name: 'RELIABLE',
        description: 'System Uptime Manager & Incident Response Platform.',
        commencementDate: 'JAN 2024',
        status: 'Building',
        currentPhase: 'Database Architecture & Sharding Strategy',
        problemSolved: 'Existing monitoring stacks are fragmented. You need one tool for frontend errors, another for server metrics, and a third for paging. Integrating them is expensive and complex.',
        vision: 'To build the ultimate ecosystem for reliability. A single platform that handles everything: Frontend exception tracking, Backend APM, Server health metrics, and intelligent incident paging.',
        history: [
            {
                date: 'DEC 28 2025',
                title: 'Database Architecture',
                description: 'Designing the multi-region sharding strategy for high-availability event logging.',
                type: 'update'
            },
            {
                date: 'NOV 15 2025',
                title: 'Frontend Prototype',
                description: 'Completed the initial dashboard prototype using Next.js and Tailwind.',
                type: 'milestone'
            },
            {
                date: 'JAN 10 2024',
                title: 'Project Commencement',
                description: 'Initial scope definition and requirements gathering for an open-source PagerDuty alternative.',
                type: 'milestone'
            }
        ]
    },
    {
        id: 'auther',
        name: 'AUTHER',
        description: 'Identity Provider & SSO Infrastructure.',
        commencementDate: 'NOV 2023',
        status: 'Building',
        currentPhase: 'Color Scheme & Theme Definition',
        problemSolved: 'Integrating secure authentication is tedious. Services like Auth0 and Clerk have aggressive pricing tiers that punish growth. Developers shouldn\'t have to pay to verify who their users are.',
        vision: 'A universal, drop-in identity layer. Auther provides enterprise-grade SSO, MFA, and user management for free, forever. No per-user pricing, just pure authentication infrastructure.',
        history: [
            {
                date: 'DEC 01 2025',
                title: 'Public Beta Launch',
                description: 'Opened the platform for public registration and testing.',
                type: 'milestone'
            },
            {
                date: 'OCT 20 2025',
                title: 'OIDC Certification',
                description: 'Achieved compliance with OpenID Connect standards.',
                type: 'milestone'
            },
            {
                date: 'NOV 01 2023',
                title: 'Inception',
                description: 'Started development of a privacy-focused identity layer.',
                type: 'milestone'
            }
        ]
    },
    {
        id: 'straincraft',
        name: 'STRAINCRAFT',
        description: 'Bio-Visualization & Molecular Modeling.',
        commencementDate: 'AUG 2024',
        status: 'Concept',
        currentPhase: 'Problem Statement & Feasibility',
        problemSolved: 'Biological data is often trapped in spreadsheets or static 2D images. Researchers lack accessible tools to visualize complex strain interactions in 3D space without expensive specialized software.',
        vision: 'To create a "Google Earth for Biology" – an interactive, browser-based engine for rendering molecular structures and biological strain data in high fidelity.',
        history: [
            {
                date: 'DEC 20 2025',
                title: 'Project Sunsetting',
                description: 'After evaluating the computational resources required for client-side rendering of complex strains, we decided not to proceed understanding the execution complexities. The code remains open source.',
                blogLink: '/blog/straincraft-sunsetting',
                type: 'decision'
            },
            {
                date: 'SEP 10 2024',
                title: 'Renderer Bottlenecks',
                description: 'Encountered significant performance issues with WebGL implementation on low-end devices.',
                type: 'update'
            },
            {
                date: 'AUG 15 2024',
                title: 'Idea Conception',
                description: 'Proposed a tool for democratizing access to biological data visualization.',
                type: 'milestone'
            }
        ]
    },
    {
        id: 'pdfedit',
        name: 'PDFEDIT',
        description: 'Browser-based Local PDF Manipulation.',
        commencementDate: 'DEC 2024',
        status: 'Concept',
        currentPhase: 'Core Logic Implementation',
        problemSolved: 'Editors are either expensive or "freemium" with limits. Many lack support for complex scripts like Hindi. Privacy is also a concern as files are often uploaded to servers.',
        vision: 'A truly free, unlimited, browser-based PDF editor. Zero uploads, complex script support (Hindi/Devanagari), and complete local processing via WebAssembly.',
        history: [
            {
                date: 'DEC 25 2024',
                title: 'Initial Commit',
                description: 'Repository initialized. evaluating pdf-lib vs pdfkit for client-side operations.',
                type: 'update'
            }
        ]
    }
];
