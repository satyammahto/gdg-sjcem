import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import './Organizers.css';

const Organizers = () => {
    const [selectedOrganizer, setSelectedOrganizer] = useState(null);

    // Lock body scroll when modal is open
    useEffect(() => {
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
            twitter: null
        }
    ];

    const coreTeam = [
        {
            name: 'Dhiraj Chaudhari',
            role: 'GDGoC Organizer',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/dhiraj_chaudhari.jpeg',
            twitter: 'https://twitter.com/DhirajC39511965',
            bio: 'Passionate about building communities and empowering students through technology.'
        },
        {
            name: 'Aayush Bari',
            role: 'Co-Organizer',
            image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/aayush_bari.jpg',
            twitter: 'https://twitter.com/aayush_bari02',
            bio: 'Tech enthusiast and community builder.'
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
            name: 'Sejal Rai',
            role: 'Marketing Head',
            image: 'https://media.licdn.com/dms/image/v2/D4E03AQE0pqh_npE7bQ/profile-displayphoto-scale_200_200/B4EZlln7rdKQAY-/0/1758346591904?e=1766620800&v=beta&t=Z8phlcanXrqhmSGB_Q7PPxypHkc12KSHRogFe9aD4k0'
        }
    ];

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').substring(0, 2);
    };

    const renderOrganizerCard = (org, index) => (
        <Tilt
            key={index}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={400}
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
                        <img
                            src={org.image}
                            alt={org.name}
                            loading="lazy"
                            decoding="async"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                        />
                    ) : (
                        <span className="initials">{getInitials(org.name)}</span>
                    )}
                </div>

                <div className="People-styles-info">
                    <h2 className="organizer-name-premium" dir="auto">{org.name}</h2>
                    <p className="organizer-role-premium" dir="auto">{org.role}</p>
                </div>
            </li>
        </Tilt>
    );

    return (
        <section id="organizers" className="section organizers-section theme-provider-namespace-people-card">
            <div className="container">
                <h1 className="section-title" data-aos="fade-up">Visionary Leaders</h1>
                <ul className="organizers-grid faculty-grid">
                    {facultyAdvisor.map(renderOrganizerCard)}
                </ul>

                <h1 className="section-title" data-aos="fade-up" style={{ marginTop: '3rem' }}>Core Team</h1>
                <ul className="organizers-grid">
                    {coreTeam.map(renderOrganizerCard)}
                </ul>

                <h1 className="section-title" data-aos="fade-up" style={{ marginTop: '3rem' }}>Department Leads</h1>
                <ul className="organizers-grid team-grid">
                    {departmentLeads.map(renderOrganizerCard)}
                </ul>

                <div className="view-more-container" style={{ textAlign: 'center', marginTop: '60px' }} data-aos="fade-up">
                    <Link to="/team" className="btn btn-outline" style={{
                        padding: '16px 40px',
                        fontSize: '1.2rem',
                        borderRadius: '50px',
                        borderWidth: '2px',
                        fontWeight: '600'
                    }}>
                        Meet the Full Team →
                    </Link>
                </div>
            </div>

            {/* Modal */}
            {selectedOrganizer && (
                <div className="organizer-modal-overlay" onClick={() => setSelectedOrganizer(null)}>
                    <div className="organizer-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setSelectedOrganizer(null)}>&times;</button>
                        <div className="modal-header">
                            <div className="modal-avatar"
                                style={{
                                    backgroundColor: selectedOrganizer.image ? 'transparent' : '#4285F4'
                                }}>
                                {selectedOrganizer.image ? (
                                    <img
                                        src={selectedOrganizer.image}
                                        alt={selectedOrganizer.name}
                                        loading="lazy"
                                        decoding="async"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
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
                            {selectedOrganizer.twitter && (
                                <a href={selectedOrganizer.twitter} target="_blank" rel="noreferrer" className="modal-social-link">View Profile</a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Organizers;
