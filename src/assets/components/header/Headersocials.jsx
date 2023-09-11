import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiUpwork} from 'react-icons/si'
import './header.css'
function Headersocials() {
  return (
    <div className="header_socials">
    <a href="https://linkedin.com" target="_npm blank"><BsLinkedin/></a>
    <a href="https://github.com" target="_blank"><FaGithub/></a>
    <a href="https://upwork.com" target="_blank"><SiUpwork/></a>
    </div>
  )
}
export default Headersocials