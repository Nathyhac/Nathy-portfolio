import React from "react";
import './header.css'
import CTA from "./CTA";
import Mine from './../../Mine.jpeg'
import Headersocials from "./Headersocials";

export default function header(){
    return(
      <header className="header">
        <div className="container header__container">
        <h5>HELLO I'M</h5>
        <h1>NATHANIEL ABEBE</h1>
        <h5 className="text-light">full-stack developer</h5>

        <CTA/>
        <Headersocials/>

        <div className="me">
        <img className="mine" src={Mine} alt="me"/>
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
      </header>
    )
}

