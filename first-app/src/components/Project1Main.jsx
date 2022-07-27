import React from 'react';
import profile from '../images/profile.jpg';
import email from '../images/Mail.jpg';
import linkedin from '../images/Linkedin Icon.jpg';

const Project1Main = () => {
    return (
        <main>
            <img src={profile} alt="" className='profile' />
            <section className='profile-details'>
                <h3>Sodiq Far'han</h3>
                <p className='role'>Fullstack Developer</p>
                <p className='website'>www.codeHokage.io</p>

                <div className='buttons'>
                    <button className='email'> <img src={email} alt="" /> Email</button>
                    <button className='linkedin-btn'> <img src={linkedin} alt="" className='linkedin-btn-logo' /> LinkedIn</button>
                </div>

                <div className='about-me'>
                    <h4 className='about-heading'>About</h4>
                    <p className='about-content'>
                        I am a Fullstack Developer with a particular interest in solving problems.
                        I personally agree that teaching stregthens one's knowledge so I try to teach 
                        the things I learn. Conclusively, I love soft life.
                    </p><br />
                    <h4 className='interests-heading'>Interests</h4>
                    <p className='interests-content'>
                        Technology. Teaching. Academic Debating. Basketball. Travelling. Networking.
                        Anime. Martial Arts.
                    </p>
                </div>

            </section>
            
      </main>
  )
}

export default Project1Main