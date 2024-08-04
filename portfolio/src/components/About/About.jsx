import React from 'react'
import './about.css'
import ME2 from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {AiFillFolder} from 'react-icons/ai';



const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2 id='ame'>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME2} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Student</small>
            </article>

            <article className='about_card'>
              <AiFillFolder className='about_icon'/>
              <h5>Projects</h5>
              <small>8+ completed</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Interests</h5>
              <small>Physical Training</small>
            </article>

          </div>

          <p>
          Hello! My name is SIVA R, and I am an ambitious and motivated student pursuing my B.Tech at St.Joesph's Institute of Technology. I have a strong passion for Web Development and a genuine desire to make a positive impact in this field.
          </p>

          <a href="#contact" className='btn btn-primary'>Lets's Talk</a>
        

        </div>
      </div>
    </section>
  )
}

export default About