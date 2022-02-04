import { Link } from 'react-router-dom';
import React from 'react';
import './ResponsiveMenu.css';
import Footer from "./Footer.js"

export default ()=>{

    return(

        <div className="telaResponsivo">

            <div className="menuResponsivo">
                <div className="homeResponsivo">
                    <Link to="/"><a className="objeto">HOME</a></Link>
                </div>
                <div className="skillsResponsivo">
                    <Link to="/skills"><a className="objeto">SKILLS</a></Link>
                </div>
                <div className="contatoResponsivo">
                    <Link to="/contact"><a className="objeto">CONTACT</a></Link>
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
