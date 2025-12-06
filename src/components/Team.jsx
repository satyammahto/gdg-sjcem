import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import ImageWithLoader from './ImageWithLoader';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';
import './Organizers.css';
import './Team.css';

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
            name: 'Aayush Mahesh Bari',
            role: 'Co-Organizer',
            image: 'https://i.ibb.co/qFpsP4MF/Profile-Pic.jpg',
            linkedin: 'https://www.linkedin.com/in/aayush-bari/',
            github: 'https://github.com/Aayush0735',
            instagram: 'https://www.instagram.com/aayush.bari.585',
            twitter: 'https://x.com/aayush_bari01',
            bio: 'I work at the intersection of Agentic AI, TensorFlow, and RAG, building solutions that are scalable, performant, and meaningful. I enjoy sharing knowledge through workshops, events, and mentorship, helping students grow in emerging tech. As GDG Co-Organizer, I foster community innovation and hands-on learning.'
        }
    ];

    const departmentLeads = [
        {
            name: 'Abhijeet Rogye',
            role: 'Design & Media Head',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/abhijeet_rogye_DhOJ3Wv.jpg',
            linkedin: 'https://www.linkedin.com/in/abhijeetrogye/'
        },
        {
            name: 'Sumedh Patil',
            role: 'Technical Head',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/sumedh_patil_CV1e5fD.png'
        },
        {
            name: 'Rupesh Nandale',
            role: 'Events & Operations Head',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/rupesh_nandale_eQDyo0t.jpeg',
            linkedin: 'https://www.linkedin.com/in/rupesh-nandale-287678277/'
        },
        {
            name: 'Sahas Santosh Bochare',
            role: 'Community & Marketing Head',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/sahas_bochare_EIH7Urf.jpg',
            linkedin: 'https://www.linkedin.com/in/sahasbochare',
            bio: 'Leading with passion | Growing with community 💖'
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
            image: 'https://media.licdn.com/dms/image/v2/D4E03AQE0pqh_npE7bQ/profile-displayphoto-scale_200_200/B4EZlln7rdKQAY-/0/1758346591904?e=1766620800&v=beta&t=Z8phlcanXrqhmSGB_Q7PPxypHkc12KSHRogFe9aD4k0',
            linkedin: 'https://www.linkedin.com/in/sejal-rai-18334a321/'
        },
        {
            name: 'Aleena Maria Joji',
            role: 'Content Lead',
            image: 'https://i.ibb.co/ycV0QkCQ/1000153477.png',
            linkedin: 'https://www.linkedin.com/in/aleenajoji',
            instagram: 'https://www.instagram.com/_aleena21_?igsh=MXZhazlpMzdzYW9vdw=='
        },
        {
            name: 'Prathamesh Jakkula',
            role: 'AIML/DSA Lead',
            image: 'https://i.ibb.co/35jPBNjj/profile.jpg',
            linkedin: 'https://www.linkedin.com/in/prathamesh-jakkula-496a39285/',
            github: 'https://github.com/Prathamesh01110',
            twitter: 'https://x.com/Prathamesh01_',
            bio: "Started as a participant, became a finalist, then a winner; now I mentor and judge hackathons, with still a long way to go. I enjoy working with Google’s AI tools ,Building agents, and practical ML projects while helping others learn faster."
        }
    ];

    const techTeam = [
        {
            name: 'Sumedh Patil',
            role: 'Technical Head',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/sumedh_patil_CV1e5fD.png',
            linkedin: 'https://www.linkedin.com/in/sumedh-patil-640512251/'
        },
        {
            name: 'Prathamesh Jakkula',
            role: 'AIML/DSA Lead',
            image: 'https://i.ibb.co/35jPBNjj/profile.jpg',
            linkedin: 'https://www.linkedin.com/in/prathamesh-jakkula-496a39285/',
            github: 'https://github.com/Prathamesh01110',
            twitter: 'https://x.com/Prathamesh01_',
            bio: "Started as a participant, became a finalist, then a winner; now I mentor and judge hackathons, with still a long way to go. I enjoy working with Google’s AI tools ,Building agents, and practical ML projects while helping others learn faster."
        },
        {
            name: 'Sairaj Ganpat Khade',
            role: 'Tech Member',
            image: 'https://i.ibb.co/BxrR0JZ/1000036970.jpg',
            linkedin: 'https://www.linkedin.com/in/sairaj-khade-95b9b6373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/Sairajgit25'
        },
        {
            name: 'Ramesh Kheemaram Choudhary',
            role: 'Technical member',
            image: 'https://i.ibb.co/dwB15YnD/my-pic.jpg',
            linkedin: 'https://www.linkedin.com/in/ramesh-choudhary-397025291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/RameshKChoudhary',
            instagram: 'https://www.instagram.com/ramesh__07__05?igsh=Y3JlYTFveWJkODNo',
            bio: 'Ramesh Choudhary is a Frontend Developer and AIML Engineering student skilled in building responsive and user-friendly web applications. With strong expertise in React.js, JavaScript, Python, and API integration, he focuses on creating practical and scalable digital solutions.'
        },
        {
            name: 'Rutuja Ramesh Gharat',
            role: 'Technical Writer',
            image: 'https://i.ibb.co/WNvns43P/IMG-20251013-WA0039.jpg',
            linkedin: 'https://www.linkedin.com/in/rutuja-gharat-6b8375372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/RutujaGharat-11',
            instagram: 'https://www.instagram.com/rutujagharat_11?igsh=MTMzdHZ3dXpwajFvOA=='
        },
        { name: 'Shashikant Rajput', role: 'Web Development Lead' },
        { name: 'Prashant Yadav', role: 'App Lead' },
        { name: 'Hitanshu Vaidya', role: 'Member' },
        { name: 'Riya Umesh Singh', role: 'Member' },
        { name: 'Anushri Amul Sane', role: 'Member' },
        { name: 'Saiyed Furquanahmed Barkatali', role: 'Member' },
        { name: 'Sakshi Jaywant Mhatre', role: 'Volunteer' },
        { name: 'Satyam R. Tiwari', role: 'Volunteer', image: 'https://i.ibb.co/v6MmDcds/1000121746.jpg' },
        { name: 'Saish Mekal', role: 'Volunteer' },
        { name: 'Satyam Ashok Mahto', role: 'Volunteer' }
    ];

    const eventsTeam = [
        {
            name: 'Rupesh Nandale',
            role: 'Events & Operations Head',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/rupesh_nandale_eQDyo0t.jpeg',
            linkedin: 'https://www.linkedin.com/in/rupesh-nandale-287678277/'
        },
        {
            name: 'Darshan Repale',
            role: 'Events and Operations Department',
            image: 'https://i.ibb.co/Q7B8LByd/1000227605.jpg',
            linkedin: 'https://www.linkedin.com/in/darshan-repale-89b1bb321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/DarshanR1234'
        },
        { name: 'Lokesh Rane', role: 'Outreach Coordinator' },
        { name: 'Sarth Gawad', role: 'Event Manager' },
        { name: 'Mihir Kishor Pimple', role: 'Logistic Manager' },
        { name: 'Neha Vijay Parab', role: 'Event Coordinator' },
        { name: 'Vighnesh Rane', role: 'Member' },
        { name: 'Neej Patel', role: 'Member' },
        { name: 'Sahil Dongre', role: 'Volunteer' },
        { name: 'Kamlesh S. Choudhary', role: 'Volunteer' },
        { name: 'Rajendra Singh Rajput', role: 'Volunteer' },
        { name: 'Tejas D. Bhavthankar', role: 'Volunteer' },
        { name: 'Jowin Mascarenhas', role: 'Volunteer' },
        { name: 'Siddhant Prasad Koli', role: 'Volunteer' },
        {
            name: 'Smital Raut',
            role: 'Volunteer',
            image: 'https://i.ibb.co/vfvR08h/IMG-20241022-162511.jpg',
            github: 'https://github.com/smitatraut841-sketch',
            instagram: 'https://www.instagram.com/_.smitall._'
        },
        { name: 'Shivprasad S. Umbare', role: 'Volunteer' },
        {
            name: 'Vidhi Naresh Jain',
            role: 'Volunteer',
            image: 'https://i.ibb.co/BH7Vc2rb/1000012426.jpg'
        },
        { name: 'Upasana Kundan Meher', role: 'Volunteer' },
        { name: 'Jyoti Satyendra Awasthi', role: 'Volunteer' }
    ];

    const communityTeam = [
        {
            name: 'Sejal Rai',
            role: 'PR & Outreach Lead',
            image: 'https://media.licdn.com/dms/image/v2/D4E03AQE0pqh_npE7bQ/profile-displayphoto-scale_200_200/B4EZlln7rdKQAY-/0/1758346591904?e=1766620800&v=beta&t=Z8phlcanXrqhmSGB_Q7PPxypHkc12KSHRogFe9aD4k0',
            linkedin: 'https://www.linkedin.com/in/sejal-rai-18334a321/'
        },
        {
            name: 'Sahas Santosh Bochare',
            role: 'Community & Marketing Head',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/sahas_bochare_EIH7Urf.jpg',
            linkedin: 'https://www.linkedin.com/in/sahasbochare',
            bio: 'Leading with passion | Growing with community 💖'
        },
        {
            name: 'Tanaya Mohan Bagade',
            role: 'Partnership Manager',
            image: 'https://i.ibb.co/75KrSkd/IMG-20251206-WA0008.jpg',
            linkedin: 'https://www.linkedin.com/in/tanaya-bagade-11b497330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/tanayabagade53-spec',
            instagram: 'https://www.instagram.com/_tanayabagade?igsh=Nm93Y3p6OTVhYjdy',
            bio: "Hey there! I’m a Partnership Manager who loves working with people and building connections that help our tech community grow. Whether it’s collaborating with organizations or supporting student initiatives, I’m always up for creating partnerships that make a difference."
        },
        {
            name: 'Pratishtha Upadhyay',
            role: 'Community and marketing member',
            image: 'https://i.ibb.co/GjQ7LKr/1000108151.jpg',
            linkedin: 'https://www.linkedin.com/in/pratishtha-upadhyay-ba42b4392?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/disco_potato___?igsh=NDF4czFhMHpmNHFs',
            bio: 'A second-year student who loves learning new tech skills. Excited to grow, collaborate, and explore opportunities through GDG.'
        },
        {
            name: 'Vaishnavi H Khandagale',
            role: 'Community and Marketing member',
            image: 'https://i.ibb.co/vvxSHbtD/1000128292.webp',
            linkedin: 'https://www.linkedin.com/in/vaishnavi-khandagale-519203371?utm_source=share_via&utm_content=profile&utm_medium=member_android'
        },
        { name: 'Sadaf Shakeel Asar', role: 'Community Coordinator' },
        { name: 'Vaibhav Somanna', role: 'Member' },
        { name: 'Saanj Dilsukh Bari', role: 'Member' },
        { name: 'Prachi R. Vishwakarma', role: 'Member' },
        { name: 'S. Madhav', role: 'Volunteer' },
        { name: 'Devyani Jadhav', role: 'Volunteer' },
        { name: 'Rupali Bharat Kashid', role: 'Volunteer' },
        { name: 'Priti Brijnath Vishwakarma', role: 'Volunteer' },
        { name: 'Dev Sehgal', role: 'Volunteer' },
        { name: 'Atharva Mallya', role: 'Volunteer' },
        { name: 'Om Manglure', role: 'Volunteer' }
    ];

    const mediaTeam = [
        {
            name: 'Abhijeet Rogye',
            role: 'Design & Media Head',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/abhijeet_rogye_DhOJ3Wv.jpg',
            linkedin: 'https://www.linkedin.com/in/abhijeetrogye/'
        },
        {
            name: 'Kushal Mali',
            role: 'Media Member',
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQEnJP7XBOHz6w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707369848628?e=1766620800&v=beta&t=tjxCvW6Wm9FvWWgvKd3B_rpR-hDgn5qWuui8xi8e6Ps',
            linkedin: 'https://www.linkedin.com/in/kushal-mali-b109b12b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/kushal9035?igsh=MTUyMWJrZ2I0eXlkOA==',
            bio: "Hi, I'm Kushal Mali, a passionate member of GDG Media. I love exploring new trends, creating engaging content, and connecting with like-minded individuals. Let's collaborate and make a positive impact together! 📱💻"
        },
        {
            name: 'Tanishka Gharat',
            role: 'Volunteer for Media & Design',
            image: 'https://i.ibb.co/RkdPV2tZ/1000109533.jpg',
            linkedin: 'https://linkedin.com/in/tanishka-gharat'
        },
        {
            name: 'Aarchi C. Pimple',
            role: 'Graphic Designer',
            image: 'https://i.ibb.co/spzPSs1P/IMG-20250330-WA0012.jpg',
            linkedin: 'https://www.linkedin.com/in/aarchi-pimple-0a2a0b374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
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
        { name: 'Siddhant Kiran Meher', role: 'Graphic Designer', image: 'https://i.ibb.co/Q3gRBMgj/EU2237020.jpg' },
        { name: 'Devanshu Pramod Pal', role: 'Social Media Manager' },
        { name: 'Viraj Tamhanekar', role: 'Member', image: 'https://media.licdn.com/dms/image/v2/D4D03AQHuJOwdR7GHIQ/profile-displayphoto-crop_800_800/B4DZqvjKeRIkAI-/0/1763881823603?e=1766620800&v=beta&t=bpxNqsH4OwnOTszb4C4Gd6hUe2yCYlfFqPZs3E3FZOE' },
        { name: 'Arya Kurup', role: 'Member' },
        { name: 'Prathamesh Dhatavkar', role: 'Member' },
        { name: 'Sarvesh Ambire', role: 'Member' },
        { name: 'Harsh Chaudhari', role: 'Member' },
        { name: 'Vidhisha Nitin Sonar', role: 'Member' },
        { name: 'Juee Subhash Patil', role: 'Member' },
        { name: 'Sai Deepak Alim', role: 'Volunteer' },
        { name: 'Shivanshu A. Mishra', role: 'Volunteer' },
        { name: 'Parveen A. Shaikh', role: 'Volunteer' },
        { name: 'Viren Suresh Soni', role: 'Volunteer' }
    ];

    const contentTeam = [
        {
            name: 'Aleena Maria Joji',
            role: 'Content Lead',
            image: 'https://i.ibb.co/ycV0QkCQ/1000153477.png',
            linkedin: 'https://www.linkedin.com/in/aleenajoji',
            instagram: 'https://www.instagram.com/_aleena21_?igsh=MXZhazlpMzdzYW9vdw=='
        },
        {
            name: 'Rashmi Sharad Chaudhari',
            role: 'Content and Research Team Member',
            image: 'https://i.ibb.co/jP7kQp1n/1000170841.jpg',
            linkedin: 'https://www.linkedin.com/in/rashmi-chaudhari-66105b386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/rashmii.2006?igsh=ZmE0aXpvY2Y4ZWI3'
        },
        {
            name: 'Rutuja Ramesh Gharat',
            role: 'Technical Writer',
            image: 'https://i.ibb.co/WNvns43P/IMG-20251013-WA0039.jpg',
            linkedin: 'https://www.linkedin.com/in/rutuja-gharat-6b8375372',
            github: 'https://github.com/RutujaGharat-11',
            instagram: 'https://www.instagram.com/rutujagharat_11'
        },
        { name: 'Durvesh Suresh Vinherkar', role: 'Content Lead' },
        { name: 'Siddhi Mahendra Akre', role: 'Member' },
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
                <h2 className="section-title-premium team-title" data-aos={animation} style={{ marginTop: '3rem' }}>{title}</h2>

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
        <section className="section team-section-container theme-provider-namespace-people-card">
            <div className="container">
                {/* Floating Background Blobs */}
                <div className="floating-blob blob-blue"></div>
                <div className="floating-blob blob-red"></div>
                <div className="floating-blob blob-yellow"></div>
                <div className="floating-blob blob-green"></div>

                <h1 className="section-title-premium" data-aos="fade-up">Visionary Leaders</h1>
                <ul className="organizers-grid faculty-grid">
                    {facultyAdvisor.map(renderOrganizerCard)}
                </ul>

                <div className="team-divider-premium"></div>

                <h1 className="section-title-premium" data-aos="fade-up">Core Team</h1>
                <ul className="organizers-grid">
                    {coreTeam.map(renderOrganizerCard)}
                </ul>

                <div className="team-divider-premium"></div>

                <h1 className="section-title-premium" data-aos="fade-up">Department Leads</h1>
                <ul className="organizers-grid department-leads-grid" style={{ justifyContent: 'center' }}>
                    {departmentLeads.map(renderOrganizerCard)}
                </ul>

                <div className="team-divider-premium"></div>

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
