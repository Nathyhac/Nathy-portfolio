import React from "react";
import './nav.css'
import {AiFillHome} from "react-icons/ai" 
import {SiAboutdotme} from "react-icons/si" 
import {BsFillBookFill} from "react-icons/bs" 
import {MdMiscellaneousServices} from "react-icons/md" 
import {IoMdContact} from "react-icons/io" 
import { useState } from "react";



export default function Nav(){
    const[activeNav,setActiveNav]= useState('#')
    return(
        <nav>
        <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav==='#'? 'active':""}><AiFillHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about'? 'active':""}><SiAboutdotme/></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav==='#services' ? 'active':""}><BsFillBookFill/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav==='#experience'? 'active':""}><MdMiscellaneousServices/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav==='#contact'? 'active':""}><IoMdContact/></a>
        </nav>
    )
}
     