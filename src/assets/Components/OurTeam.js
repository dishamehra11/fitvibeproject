import React from 'react';
import "./OurTeam.css";

function OurTeam() {
    return (
        <section className='team-section'>
            <div className='team-container'>

                {/* LEFT SIDE TEXT */}
                <div className='team-left'>
                    <div className='sidebar-sticky'>
                    <p className='team-subtitle'>OUR TEAM</p>
                    <h2 className='team-title'>Our expert Yoga Coaches</h2>
                    <p className='team-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation.
                    </p>

                    <button className='team-btn'>LEARN MORE →</button>
                </div>
</div>
                {/* RIGHT SIDE CARDS */}
                <div className='team-right'>
                    {/* CARD 1 */}
                    <div className='team-card'>
                        <img src={require('../images/1.jpg')} alt='Coaches' />
                        <div className="team-overlay">
                            <h3>Jane William</h3>
                            <p>Spa Message</p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className='team-card'>
                        <img src={require('../images/i2.jpg')} alt='Coaches' />
                        <div className="team-overlay">
                            <h3>Jane William</h3>
                            <p>Spa Message</p>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className='team-card'>
                        <img src={require('../images/i3.jpg')} alt='Coaches' />
                        <div className="team-overlay">
                            <h3>Jane William</h3>
                            <p>Spa Message</p>
                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div className='team-card'>
                        <img src={require('../images/i4.jpg')} alt='Coaches' />
                        <div className="team-overlay">
                            <h3>Jane William</h3>
                            <p>Spa Message</p>
                        </div>
                    </div>

                      {/* CARD 4 */}
                    <div className='team-card'>
                        <img src={require('../images/i2.jpg')} alt='Coaches' />
                        <div className="team-overlay">
                            <h3>Jane William</h3>
                            <p>Spa Message</p>
                        </div>
                    </div>

                    {/* CARD 6 */}
                    <div className='team-card'>
                        <img src={require('../images/1.jpg')} alt='Coaches' />
                        <div className="team-overlay">
                            <h3>Jane William</h3>
                            <p>Spa Message</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default OurTeam
