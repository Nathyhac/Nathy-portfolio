import React from "react";
import './services.css'
import {BiCheckShield} from 'react-icons/bi'

export default function services(){
    return(
       
        <section className="services">
        
       <h5>What i offer as a service</h5>
       <h2>Services</h2>

       <div className="container services__container">
       
       <article className="service">
       <div className="service__head">
       <h3>Front-End</h3>
       </div>
       <ul className="services__list">
       <li>
       <BiCheckShield className="service__list-icon"/>
      <p>HTML & Semantic Markup: Proficient in creating structured HTML5 code for accessibility and SEO.</p> 
      </li>
      <li>
      <BiCheckShield className="service__list-icon"/>
      <p>CSS Styling: Skilled in responsive layouts, animations, and Bootstrap.</p>
      </li>
      <li>
      <BiCheckShield className="service__list-icon"/>
      <p>JavaScript: Expert in DOM manipulation, event handling, and AJAX.</p>
      </li>
      <li>
      <BiCheckShield className="service__list-icon"/>
      <p>React.js: Builds SPAs with components and state management.</p>
       </li>
       </ul>
       </article>
         

       <article className="service">
       <div className="service__head">
       <h3>Back-End</h3>
       </div>
       <ul className="services__list">
       <li>
       <BiCheckShield className="service__list-icon"/>
      <p>Node.js Development: Proficient in building server-side applications using Node.js, leveraging its non-blocking I/O for high-performance solutions.
      </p> 
      </li>
      <li>
      <BiCheckShield className="service__list-icon"/>
      <p>MongoDB: Experienced in NoSQL database design and management, using MongoDB for flexible and scalable data storage.</p>
      </li>
      <li>
      <BiCheckShield className="service__list-icon"/>
      <p>MySQL Database: Proficient in relational database design and management with MySQL, ensuring data integrity and SQL querying.</p>
      </li>
       </ul>
       </article>


       <article className="service">
       <div className="service__head">
       <h3>Mobile application development</h3>
       </div>
       <ul className="services__list">
       <li>
       <BiCheckShield className="service__list-icon"/>
      <p>i can develop mobile apps using kotlin</p> 
      </li>
      <li>
      <BiCheckShield className="service__list-icon"/>
      <p>Also can use kotlin jetpack compose is neccesary which actually is better.</p>
      </li>
       </ul>
       </article>
       </div>
       </section>
    )
}