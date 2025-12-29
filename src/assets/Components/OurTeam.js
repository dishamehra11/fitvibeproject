import React from 'react';
import "./OurTeam.css";
import { Link } from 'react-router-dom';

function OurTeam() {
    const teamMembers = [
        { img: require('../images/1.jpg'), name: 'Jane William', role: 'Spa Message' },
        { img: require('../images/i2.jpg'), name: 'John Doe', role: 'Massage Expert' },
        { img: require('../images/i3.jpg'), name: 'Alice Smith', role: 'Meditation Coach' },
        { img: require('../images/i4.jpg'), name: 'Bob Brown', role: 'Yoga Trainer' },
        { img: require('../images/i2.jpg'), name: 'Mary Johnson', role: 'Spa Message' },
        { img: require('../images/1.jpg'), name: 'David Lee', role: 'Massage Expert' },
    ];

    return (
        <section className='team-section'>
            <div className='team-container'>
                <div className='team-left'>
                    <div className='sidebar-sticky'>
                        <p className='team-subtitle'>OUR TEAM</p>
                        <h2 className='team-title'>Meet our experienced yoga and meditation experts</h2>
                        <p className='team-desc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation.
                        </p>

                        <Link className='team-btn' to="/Team">
                            LEARN MORE →
                        </Link>
                    </div>
                </div>

                <div className='team-right'>
                    {teamMembers.map((member, index) => (
                        <div key={index} className='team-card'>
                            <img src={member.img} alt={`${member.name} coach`} />
                            <div className="team-overlay">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>

                                <Link className="overlay-btn" to="/Team">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurTeam;
