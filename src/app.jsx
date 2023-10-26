import React from "react";
import Contact from "./assets/components/contact/contact";
import Services from "./assets/components/services/services";
import About from "./assets/components/about/about";
import Header from "./assets/components/header/header";
import Footer from "./assets/components/footer/footer";
import Nav from "./assets/components/Nav/Nav";

export default function app(){
    return(
        <div>
        <Header />
        <Nav/>
        <About />
        <Services />
        <Contact />
        <Footer />
        </div>
    )
}