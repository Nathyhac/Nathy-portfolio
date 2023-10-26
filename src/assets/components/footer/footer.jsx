import React from "react";
import './footer.css';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {LiaTelegram} from 'react-icons/lia';
import {BsGithub} from 'react-icons/bs';


export default function footer(){
    return(
    <footer>
    <a href="#" className="footer_logo"><h1>Nathaniel</h1></a>

    <ul className="pagelinks">
    <li><a href="#">HOME</a></li>
    <li><a href="#about">ABOUT</a></li>
    <li><a href="#services">SERVICES</a></li>
    <li><a href="contact">CONTACT</a></li>
    </ul>

    <div className="footer__socials">
    <a href="https://linkedin.com"><AiOutlineLinkedin/></a>
    <a href="https://github.com"><BsGithub/></a>
    <a href="https://telegram.com"><LiaTelegram/></a>
    </div>
    <div className="footer__copyright">
    <small>&copy; Nathaniel Abebe. all rights reserved.</small>
    </div>
    </footer>
    )
}