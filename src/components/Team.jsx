import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import ImageWithLoader from './ImageWithLoader';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';
import './Organizers.css';

const Team = () => {
    const [selectedOrganizer, setSelectedOrganizer] = useState(null);
    const [isAvatarExpanded, setIsAvatarExpanded] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        window.scrollTo(0, 0);
        if (selectedOrganizer) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedOrganizer]);

    const facultyAdvisor = [
        {
            name: 'Dr. Sunny Sall',
            role: 'Faculty Advisor & HOD Computer Engineering',
            image: 'https://i.ibb.co/RTNCNWTD/file-2.jpg',
            bio: 'Head of Department, Computer Engineering. Guiding the GDG on Campus chapter to excellence.',
            linkedin: 'https://www.linkedin.com/in/sunny-sall-12372b284/?originalSubdomain=in',
            googleScholar: 'https://scholar.google.com/citations?user=DV2d_v8AAAAJ&hl=en'
        }
    ];

    const coreTeam = [
        {
            name: 'Dhiraj Chaudhari',
            role: 'GDGoC Organizer',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/dhiraj_chaudhari.jpeg',
            twitter: 'https://twitter.com/DhirajC39511965',
            linkedin: 'https://www.linkedin.com/in/dhirajchaudhari20/',
            github: 'https://github.com/dhirajchaudhari20',
            instagram: 'https://www.instagram.com/the_alpha_engineer/',
            bio: 'Passionate about building communities and empowering students through technology.'
        },
        {
            name: 'Aayush Bari',
            role: 'Co-Organizer',
            image: 'https://i.ibb.co/qFpsP4MF/Profile-Pic.jpg',
            twitter: 'https://x.com/aayush_bari01',
            linkedin: 'https://www.linkedin.com/in/aayush-bari/',
            github: 'https://github.com/Aayush0735',
            instagram: 'https://www.instagram.com/aayush.bari.585',
            bio: 'I work at the intersection of Agentic AI, TensorFlow, and RAG, building solutions that are scalable, performant, and meaningful. I enjoy sharing knowledge through workshops, events, and mentorship, helping students grow in emerging tech. As GDG Co-Organizer, I foster community innovation and hands-on learning.'
        }
    ];

    const departmentLeads = [
        {
            name: 'Abhijeet Rogye',
            role: 'Design & Media Head',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/abhijeet_rogye_DhOJ3Wv.jpg'
        },
        {
            name: 'Sumedh Patil',
            role: 'Technical Head',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/sumedh_patil_CV1e5fD.png'
        },
        {
            name: 'Rupesh Nandale',
            role: 'Events & Operations Head',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/rupesh_nandale_eQDyo0t.jpeg'
        },
        {
            name: 'Sahas Bochare',
            role: 'Community Head',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/sahas_bochare_EIH7Urf.jpg'
        },
        {
            name: 'Manasvi Kadu',
            role: 'Social Media Head',
            image: 'https://i.ibb.co/3yk1pRCB/IMG-20251206-153035.jpg',
            linkedin: 'https://www.linkedin.com/in/manasvi-kadu-8729b3286',
            github: 'https://github.com/AlgoWhizMk',
            twitter: 'https://x.com/manasvi52370?t=HBTufU3UyjMkyQP0ZwmUbA&s=09',
            instagram: 'https://www.instagram.com/_manasv.iii?igsh=MWl2MDA0eGk1NzgxOA==',
            bio: 'Bringing clean design, creative ideas, and an eye for trends to elevate GDG on Campus SJCEM’s social media identity.'
        },
        {
            name: 'Sejal Rai',
            role: 'PR & Outreach Lead',
            image: 'https://media.licdn.com/dms/image/v2/D4E03AQE0pqh_npE7bQ/profile-displayphoto-scale_200_200/B4EZlln7rdKQAY-/0/1758346591904?e=1766620800&v=beta&t=Z8phlcanXrqhmSGB_Q7PPxypHkc12KSHRogFe9aD4k0'
        }
    ];

    const techTeam = [
        {
            name: 'Sumedh Patil',
            role: 'Technical Head',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/sumedh_patil_CV1e5fD.png'
        },
        {
            name: 'Prathamesh L. Jakkula',
            role: 'AIML/DSA Lead',
            image: 'https://i.ibb.co/35jPBNjj/profile.jpg',
            linkedin: 'https://www.linkedin.com/in/prathamesh-jakkula-496a39285/',
            github: 'https://github.com/Prathamesh01110',
            twitter: 'https://x.com/Prathamesh01_',
            bio: 'Started as a participant, became a finalist, then a winner; now I mentor and judge hackathons, with still a long way to go. I enjoy working with Google’s AI tools, Building agents, and practical ML projects while helping others learn faster.'
        },
        { name: 'Shashikant Rajput', role: 'Web Development Lead' },
        { name: 'Prashant Yadav', role: 'App Lead' },
        { name: 'Hitanshu Vaidya', role: 'Member' },
        {
            name: 'Kunal Bhandarkar',
            role: 'Technical Team Volunteer',
            image: 'https://i.ibb.co/fYyRkXS9/IMG-20250820-145505.jpg',
            linkedin: 'https://www.linkedin.com/in/kunal-bhandarkar-24ba3a2b3'
        },
        { name: 'Riya Umesh Singh', role: 'Member' },
        {
            name: 'Sairaj Ganpat Khade',
            role: 'Tech Member',
            image: 'https://i.ibb.co/BxrR0JZ/1000036970.jpg',
            linkedin: 'https://www.linkedin.com/in/sairaj-khade-95b9b6373',
            github: 'https://github.com/Sairajgit25'
        },
        { name: 'Anushri Amul Sane', role: 'Member' },
        {
            name: 'Saiyed Furquanahmed Barkatali',
            role: 'Member',
            image: "https://i.ibb.co/PsTLNkfk/1761723296279.jpg",
            twitter: "https://www.linkedin.com/in/furquan-s-9331372a6"
        },
        { name: 'Sakshi Jaywant Mhatre', role: 'Volunteer' },
        {
            name: 'Satyam R. Tiwari',
            role: 'Volunteer',
            image: 'https://i.ibb.co/v6MmDcds/1000121746.jpg',
            linkedin: 'https://www.linkedin.com/in/satyam-tiwari-219583276/',
            github: 'https://github.com/Satyamrtiwari'
        },
        {
            name: 'Ramesh Kheemaram Choudhary',
            role: 'Technical member',
            image: 'https://i.ibb.co/dwB15YnD/my-pic.jpg',
            linkedin: 'https://www.linkedin.com/in/ramesh-choudhary-397025291',
            github: 'https://github.com/RameshKChoudhary',
            instagram: 'https://www.instagram.com/ramesh__07__05',
            bio: 'Ramesh Choudhary is a Frontend Developer and AIML Engineering student skilled in building responsive and user-friendly web applications. With strong expertise in React.js, JavaScript, Python, and API integration, he focuses on creating practical and scalable digital solutions.'
        },
        { name: 'Saish Mekal', role: 'Volunteer' },
        { name: 'Satyam Ashok Mahto', role: 'Volunteer' }
    ];

    const eventsTeam = [
        { name: 'Rupesh Nandale', role: 'Event & Operations Head', image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/rupesh_nandale_eQDyo0t.jpeg' },
        { name: 'Lokesh Rane', role: 'Outreach Coordinator' },
        { name: 'Sarth Gawad', role: 'Event Manager' },
        { name: 'Mihir Kishor Pimple', role: 'Logistic Manager' },
        { name: 'Neha Vijay Parab', role: 'Event Coordinator' },
        { name: 'Vighnesh Rane', role: 'Member' },
        { name: 'Neej Patel', role: 'Member' },
        { name: 'Sahil Dongre', role: 'Volunteer' },
        {
            name: 'Darshan Arun Repale',
            role: 'Events and Operations Department',
            image: 'https://i.ibb.co/Q7B8LByd/1000227605.jpg',
            linkedin: 'https://www.linkedin.com/in/darshan-repale-89b1bb321',
            github: 'https://github.com/DarshanR1234'
        },
        { name: 'Kamlesh S. Choudhary', role: 'Volunteer' },
        { name: 'Rajendra Singh Rajput', role: 'Volunteer' },
        { name: 'Tejas D. Bhavthankar', role: 'Volunteer' },
        { name: 'Jowin Mascarenhas', role: 'Volunteer' },
        { name: 'Siddhant Prasad Koli', role: 'Volunteer' },
        { name: 'Smital Ravindra Raut', role: 'Volunteer' },
        { name: 'Shivprasad S. Umbare', role: 'Volunteer' },
        {
            name: 'Vidhi Naresh Jain',
            role: 'Volunteer',
            image: 'https://i.ibb.co/BH7Vc2rb/1000012426.jpg',
            bio: "I'm Vidhi, an event member who's passionate about decor and knows how to manage an event! Still learning and exploring.",
            linkedin: 'https://www.linkedin.com/in/vidhi-jain-b68418318',
            github: 'https://github.com/vidhii-24',
            instagram: 'https://www.instagram.com/vidhi_jain_._'
        },
        { name: 'Upasana Kundan Meher', role: 'Volunteer' },
        { name: 'Jyoti Satyendra Awasthi', role: 'Volunteer' }
    ];

    const communityTeam = [
        { name: 'Sahas Bochare', role: 'Community & Marketing Head', image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/sahas_bochare_EIH7Urf.jpg' },
        {
            name: 'Sejal Rai',
            role: 'PR & Outreach Lead',
            image: 'https://media.licdn.com/dms/image/v2/D4E03AQE0pqh_npE7bQ/profile-displayphoto-scale_200_200/B4EZlln7rdKQAY-/0/1758346591904?e=1766620800&v=beta&t=Z8phlcanXrqhmSGB_Q7PPxypHkc12KSHRogFe9aD4k0',
            linkedin: 'https://www.linkedin.com/in/sejal-rai-18334a321/'
        },
        { name: 'Tanaya Mohan Bagade', role: 'Partnership Manager' },
        { name: 'Sadaf Shakeel Asar', role: 'Community Coordinator' },
        { name: 'Vaibhav Somanna', role: 'Member' },
        { name: 'Vaishnavi Khandagale', role: 'Member' },
        { name: 'Saanj Dilsukh Bari', role: 'Member' },
        { name: 'Prachi R. Vishwakarma', role: 'Member' },
        {
            name: 'Pratishtha Upadhyay',
            role: 'Community and marketing member',
            image: 'https://i.ibb.co/GjQ7LKr/1000108151.jpg',
            linkedin: 'https://www.linkedin.com/in/pratishtha-upadhyay-ba42b4392',
            instagram: 'https://www.instagram.com/disco_potato___',
            bio: 'A second-year student who loves learning new tech skills. Excited to grow, collaborate, and explore opportunities through GDG.'
        },
        { name: 'S. Madhav', role: 'Volunteer' },
        { name: 'Devyani Jadhav', role: 'Volunteer' },
        { name: 'Rupali Bharat Kashid', role: 'Volunteer' },
        { name: 'Priti Brijnath Vishwakarma', role: 'Volunteer' },
        { name: 'Dev Sehgal', role: 'Volunteer' },
        { name: 'Atharva Mallya', role: 'Volunteer' },
        { name: 'Om Manglure', role: 'Volunteer' }
    ];

    const mediaTeam = [
        { name: 'Abhijeet Rogye', role: 'Design & Media Head', image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/abhijeet_rogye_DhOJ3Wv.jpg' },
        {
            name: 'Manasvi Kadu',
            role: 'Social Media Head',
            image: 'https://i.ibb.co/3yk1pRCB/IMG-20251206-153035.jpg',
            linkedin: 'https://www.linkedin.com/in/manasvi-kadu-8729b3286',
            github: 'https://github.com/AlgoWhizMk',
            twitter: 'https://x.com/manasvi52370?t=HBTufU3UyjMkyQP0ZwmUbA&s=09',
            instagram: 'https://www.instagram.com/_manasv.iii?igsh=MWl2MDA0eGk1NzgxOA==',
            bio: 'Bringing clean design, creative ideas, and an eye for trends to elevate GDG on Campus SJCEM’s social media identity.'
        },
        {
            name: 'Siddhant Kiran Meher',
            role: 'Graphic Designer',
            image: 'https://i.ibb.co/Q3gRBMgj/EU2237020.jpg',
            linkedin: 'https://www.linkedin.com/in/siddhant-meher-6921b127b',
            github: 'https://github.com/siddhantmeher45-stack',
            instagram: 'https://www.instagram.com/siddhu_1926',
            twitter: 'https://x.com/SiddhantMeher7'
        },
        { name: 'Aarchi C. Pimple', role: 'Graphic Designer' },
        { name: 'Devanshu Pramod Pal', role: 'Social Media Manager' },
        {
            name: 'Viraj Tamhanekar',
            role: 'Member',
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQHuJOwdR7GHIQ/profile-displayphoto-crop_800_800/B4DZqvjKeRIkAI-/0/1763881823603?e=1766620800&v=beta&t=bpxNqsH4OwnOTszb4C4Gd6hUe2yCYlfFqPZs3E3FZOE',
            linkedin: 'https://www.linkedin.com/in/viraj-tamhanekar/'
        },
        { name: 'Arya Kurup', role: 'Member' },
        { name: 'Prathamesh Dhatavkar', role: 'Member' },
        { name: 'Sarvesh Ambire', role: 'Member' },
        { name: 'Harsh Chaudhari', role: 'Member' },
        { name: 'Vidhisha Nitin Sonar', role: 'Member' },
        { name: 'Juee Subhash Patil', role: 'Member' },
        { name: 'Sai Deepak Alim', role: 'Volunteer' },
        { name: 'Shivanshu A. Mishra', role: 'Volunteer' },
        { name: 'Tanishka Gharat', role: 'Volunteer' },
        { name: 'Parveen A. Shaikh', role: 'Volunteer' },
        { name: 'Viren Suresh Soni', role: 'Volunteer' },
        {
            name: 'Kushal Mali',
            role: 'Media Member',
            image: 'https://i.ibb.co/SwNjN9G2/DSC-2238.jpg',
            linkedin: 'https://www.linkedin.com/in/kushal-mali-b109b12b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/kushal9035?igsh=MTUyMWJrZ2I0eXlkOA==',
            bio: "Hi, I'm Kushal Mali, a passionate member of GDG Media. I love exploring new trends, creating engaging content, and connecting with like-minded individuals. Let's collaborate and make a positive impact together! 📱💻"
        }
    ];

    const contentTeam = [
        { name: 'Aleena Joji', role: 'Content Lead' },
        { name: 'Durvesh Suresh Vinherkar', role: 'Content Lead' },
        {
            name: 'Rutuja Ramesh Gharat',
            role: 'Technical Writer',
            image: 'https://i.ibb.co/WNvns43P/IMG-20251013-WA0039.jpg',
            linkedin: 'https://www.linkedin.com/in/rutuja-gharat-6b8375372',
            github: 'https://github.com/RutujaGharat-11',
            instagram: 'https://www.instagram.com/rutujagharat_11'
        },
        {
            name: 'Siddhi Mahendra Akre',
            role: 'Member',
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQH-31z--vjkSw/profile-displayphoto-scale_200_200/B4DZkfMzcHIEAY-/0/1757165075955?e=1766620800&v=beta&t=gKakyLie0g9SF8FrmGJLitpZhiOTb8kDfB9zBkqf-mc',
            linkedin: 'https://www.linkedin.com/in/siddhi-akre-1199b5250/'
        },
        { name: 'Ilf Bhimani', role: 'Volunteer' },
        { name: 'Ayushi Shukla', role: 'Volunteer' },
        { name: 'Nayi Prem Babubhai', role: 'Volunteer' }
    ];

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').substring(0, 2);
    };

    const isLead = (role) => {
        const r = role.toLowerCase();
        return r.includes('head') || r.includes('lead') || r.includes('manager') || r.includes('co-organizer') || r.includes('organizer');
    };

    const renderOrganizerCard = (org, index) => (
        <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.05}
            transitionSpeed={400}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#ffffff"
            glarePosition="all"
            className="organizer-tilt-card"
            data-aos="fade-up"
        >
            <li
                className="people-card general-card"
                onClick={() => setSelectedOrganizer(org)}
            >
                <div
                    className="organizer-avatar-bg"
                    style={{
                        backgroundColor: org.image ? 'transparent' : '#e8f0fe',
                        color: '#1a73e8'
                    }}
                >
                    {org.image ? (
                        <ImageWithLoader
                            src={getOptimizedImageUrl(org.image, 400)}
                            alt={org.name}
                            style={{ width: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover' }}
                        />
                    ) : (
                        <span className="initials">{getInitials(org.name)}</span>
                    )}
                </div>

                <div className="People-styles-info">
                    <h2 className="organizer-name-premium" dir="auto">{org.name}</h2>
                    <p className="organizer-role-premium" dir="auto">{org.role}</p>

                    {/* Social Icons on Card */}
                    <div className="card-socials" onClick={(e) => e.stopPropagation()}>
                        {org.linkedin && (
                            <a href={org.linkedin} target="_blank" rel="noreferrer" className="social-icon linkedin">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        )}
                        {org.github && (
                            <a href={org.github} target="_blank" rel="noreferrer" className="social-icon github">
                                <i className="fab fa-github"></i>
                            </a>
                        )}
                        {org.instagram && (
                            <a href={org.instagram} target="_blank" rel="noreferrer" className="social-icon instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        )}
                        {org.twitter && (
                            <a href={org.twitter} target="_blank" rel="noreferrer" className="social-icon twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        )}
                        {org.googleScholar && (
                            <a href={org.googleScholar} target="_blank" rel="noreferrer" className="social-icon google-scholar">
                                <i className="fas fa-graduation-cap"></i>
                            </a>
                        )}
                    </div>
                </div>
            </li>
        </Tilt>
    );

    const renderTeamSection = (title, teamArray, animation) => {
        const leads = teamArray.filter(m => isLead(m.role));
        const members = teamArray.filter(m => !isLead(m.role));

        return (
            <React.Fragment key={title}>
                <h2 className="section-title team-title" data-aos={animation} style={{ marginTop: '3rem' }}>{title}</h2>

                {leads.length > 0 && (
                    <ul className="organizers-grid team-grid" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
                        {leads.map((member, idx) => renderOrganizerCard(member, `lead-${idx}`))}
                    </ul>
                )}

                {members.length > 0 && (
                    <ul className="organizers-grid team-grid">
                        {members.map((member, idx) => renderOrganizerCard(member, `mem-${idx}`))}
                    </ul>
                )}
            </React.Fragment>
        );
    };

    return (
        <section className="section organizers-section theme-provider-namespace-people-card" style={{ paddingTop: '120px' }}>
            <div className="container">
                <h1 className="section-title" data-aos="fade-up">Visionary Leaders</h1>
                <ul className="organizers-grid faculty-grid">
                    {facultyAdvisor.map(renderOrganizerCard)}
                </ul>

                <h1 className="section-title" data-aos="fade-up" style={{ marginTop: '3rem' }}>Core Team</h1>
                <ul className="organizers-grid">
                    {coreTeam.map(renderOrganizerCard)}
                </ul>

                <h1 className="section-title" data-aos="fade-up" style={{ marginTop: '3rem', color: '#FBBC04' }}>Department Leads</h1>
                <ul className="organizers-grid department-leads-grid" style={{ justifyContent: 'center' }}>
                    {departmentLeads.map(renderOrganizerCard)}
                </ul>

                <div className="team-divider" style={{ margin: '4rem 0' }}></div>

                {renderTeamSection("Tech Wizards 💻", techTeam, "fade-right")}
                {renderTeamSection("Events & Operations 🚀", eventsTeam, "fade-left")}
                {renderTeamSection("Community & Marketing 🤝", communityTeam, "fade-right")}
                {renderTeamSection("Media & Design 🎨", mediaTeam, "fade-left")}
                {renderTeamSection("Content & Research 📝", contentTeam, "fade-right")}
            </div>

            {/* Modal */}
            {selectedOrganizer && (
                <div className="organizer-modal-overlay" onClick={() => setSelectedOrganizer(null)}>
                    <div className="organizer-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setSelectedOrganizer(null)}>&times;</button>
                        <div className="modal-header">
                            <div
                                className="modal-avatar clickable"
                                onClick={() => setIsAvatarExpanded(true)}
                                style={{
                                    backgroundColor: selectedOrganizer.image ? 'transparent' : '#4285F4'
                                }}>
                                {selectedOrganizer.image ? (
                                    <ImageWithLoader
                                        src={getOptimizedImageUrl(selectedOrganizer.image, 600)}
                                        alt={selectedOrganizer.name}
                                        style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                                    />
                                ) : (
                                    <span className="initials">{getInitials(selectedOrganizer.name)}</span>
                                )}
                            </div>
                        </div>
                        <div className="modal-body">
                            <h2 className="modal-name">{selectedOrganizer.name}</h2>
                            <p className="modal-role">{selectedOrganizer.role}</p>
                            {selectedOrganizer.bio && <p className="modal-bio">{selectedOrganizer.bio}</p>}
                            {selectedOrganizer.linkedin && (
                                <a href={selectedOrganizer.linkedin} target="_blank" rel="noreferrer" className="modal-social-link">LinkedIn</a>
                            )}
                            {selectedOrganizer.github && (
                                <a href={selectedOrganizer.github} target="_blank" rel="noreferrer" className="modal-social-link">GitHub</a>
                            )}
                            {selectedOrganizer.instagram && (
                                <a href={selectedOrganizer.instagram} target="_blank" rel="noreferrer" className="modal-social-link">Instagram</a>
                            )}
                            {selectedOrganizer.twitter && (
                                <a href={selectedOrganizer.twitter} target="_blank" rel="noreferrer" className="modal-social-link">Twitter/X</a>
                            )}
                            {selectedOrganizer.googleScholar && (
                                <a href={selectedOrganizer.googleScholar} target="_blank" rel="noreferrer" className="modal-social-link">Google Scholar</a>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {/* Avatar Lightbox */}
            {isAvatarExpanded && selectedOrganizer && selectedOrganizer.image && (
                <div
                    className="avatar-lightbox"
                    onClick={() => setIsAvatarExpanded(false)}
                >
                    <img
                        src={selectedOrganizer.image}
                        alt={selectedOrganizer.name}
                        className="lightbox-image"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                    />
                    <button className="lightbox-close-btn" onClick={() => setIsAvatarExpanded(false)}>&times;</button>
                </div>
            )}
        </section>
    );
};

export default Team;
