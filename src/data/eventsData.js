export const upcomingEvents = [
    {
        id: 1,
        date: '13 Dec 2025',
        type: 'Info session',
        title: 'TechSprint Hackathon 2025 – Kick-Off Session | GDG on Campus SJCEM',
        description: 'Welcome to the official Kick-Off Session of TechSprint 2025! Hosted by GDG on Campus – St. John College of Engineering & Management, this session marks the beginning of an exciting journey of innovation, problem-solving, and collaboration.',
        longDescription: `
            Join us for the grand kick-off of TechSprint Hackathon 2025! 🚀
            
            TechSprint is not just a hackathon; it's a platform for innovators like you to showcase your skills, learn from experts, and build solutions that matter.
            
            **Agenda:**
            - Introduction to TechSprint 2025
            - Problem Statements Reveal
            - Guidelines & Judging Criteria
            - Q&A Session with Mentors
            
            Whether you are a coding pro or just starting out, this event is the perfect launchpad for your tech journey. Don't miss out on the chance to network with like-minded peers and industry leaders.
        `,
        image: 'https://i.ibb.co/bjc6f31T/Generated-Image-December-04-2025-8-46-PM.jpg',
        showTimer: true,
        location: 'SJCEM Campus, Palghar',
        agenda: [
            { time: '10:00 AM', title: 'Check-in & Registration', description: 'Get your badges and swag kits.' },
            { time: '10:30 AM', title: 'Opening Ceremony', description: 'Keynote speech by GDG Lead & Faculty Advisor.' },
            { time: '11:00 AM', title: 'Problem Statements Reveal', description: 'Detailed breakdown of the hackathon tracks.' },
            { time: '12:00 PM', title: 'Team Formation & Networking', description: 'Find teammates and mentors.' },
            { time: '01:00 PM', title: 'Lunch Break', description: 'Networking lunch.' },
            { time: '02:00 PM', title: 'Q&A with Mentors', description: 'Clarify your doubts regarding rules and evaluation.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
        ],
        buttons: [
            {
                text: 'Register Team',
                link: 'https://hack2skill.com/',
                style: 'primary'
            },
            {
                text: 'Info Session',
                link: 'https://gdg.community.dev/gdg-on-campus-st-john-college-of-engineering-and-management-autonomous-palghar-india/',
                style: 'outline'
            }
        ]
    }
];

export const pastEvents = [
    {
        id: 101, // Unique ID for routing clarity
        date: '2 Oct 2025',
        type: 'Info session',
        title: 'Google Cloud Study Jams – Online Info Session',
        location: 'GDG on Campus St. John College of Engineering and Management Autonomous - Palghar, India',
        description: 'An online session diving deep into Google Cloud Platform essentials and how to kickstart your cloud journey.',
        materialsLink: 'https://docs.google.com/presentation/d/1goUL1QPjTLqMbLyKFuzTORWKXmkiCJ7K_gBM2UG61z0/edit?usp=sharing',
        registrations: 152,
        image: 'https://i.ibb.co/Ng0NCJvj/blob-Pca-Hqc5.webp',
        gallery: [
            'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
        ]
    },
    {
        id: 102,
        date: '24 Sept 2025',
        type: 'Info session',
        title: 'Info Session: GDG on Campus – SJCEM | Kick-off 2025',
        location: 'GDG on Campus St. John College of Engineering and Management Autonomous - Palghar, India',
        description: 'The inaugural session for our campus chapter, introducing the team, goals, and upcoming roadmap for 2025.',
        materialsLink: 'https://docs.google.com/presentation/d/1HUS16B9qQuLxBBUgkEHog2-ROPqccoG7b_ZpW4jS-y4/edit?usp=sharing',
        registrations: 200,
        image: 'https://i.ibb.co/nMk7f1mG/blob-Iq7f-MFD.webp'
    }
];
