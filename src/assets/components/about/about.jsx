import React from "react";
import './about.css'
import AboutPic from './../../about_me-pic.jpg';
import {FaGraduationCap} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillProject} from 'react-icons/ai'

export default function about(){
    return(
        <section id="about">
        <h5>Here we go</h5>
        <h2>About me</h2>
         <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                  <img src={AboutPic} alt="my pic" />
            </div>
          </div>
          
          <div className="about__content">

          <div className="about__cards">
          <article className="about__card">
          <FaGraduationCap/>
          <h5>Experience</h5>
          <small>1+ year of experience</small>
          </article>


          <article className="about__card">
          <FiUsers/>
          <h5>Clients</h5>
          <small>10+ Clients</small>
          </article>

          <article className="about__card">
          <AiFillProject/>
          <h5>My work</h5>
          <small>10+ mini projects</small>
          </article>
          </div>
          
          <p>
          Dear Hiring Manager,
          I am Nathaniel Abebe, a passionate and dedicated software developer with a strong skill set in coding languages including JavaScript, HTML, CSS, React, Node.js, and MongoDB. 
          Over the years, I have honed my abilities through hands-on experience and a commitment to staying updated with industry trends.
          My journey in web development has allowed me to work on diverse projects, from crafting responsive user interfaces with HTML and CSS to building dynamic web applications using React and Node.js.
          I thrive on solving complex problems and take pride in delivering clean, efficient code that enhances user experiences.
          With a proactive approach to learning and a keen eye for detail, I am driven to contribute my technical expertise to your team. 
          I am excited about the opportunity to collaborate, innovate, and help drive your organization's success through cutting-edge web development.
          Thank you for considering my application. I look forward to discussing how my skills and experience align with your company's goals and objectives.
          
          Sincerely,
          Nathaniel Abebe
          </p>

          <a href="#contact" className="btn btn-primary">We can chat</a>

          
          </div>
         </div>
        </section>
    )
}