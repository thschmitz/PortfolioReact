import React from 'react';
import { Link } from "react-router-dom";
import Header from "./structure/Header.js"
import Footer from "./structure/Footer.js"
import "./Skills.css"
import JS from "./img/JS.png"
import RT from "./img/REACT.png"
import Node from "./img/NODE.png"
import Python from "./img/PYTHON.png"
import HTML from "./img/HTML.png"
import CSS from "./img/CSS3.png"
import C from "./img/C.png"
import { FaBars } from 'react-icons/fa';
import Responsivo from "./structure/ResponsiveMenu.js"
import { FaUndo } from 'react-icons/fa';

const Skills = () => {
    function botao(e){
        e.preventDefault();
        document.getElementById("mainContentId").style.display="none";
        document.getElementById("menuResponsivo").style.display="block";
        document.getElementById("botaoVoltar").style.display="block";
    }

    function botaoVoltar(e){
        e.preventDefault();
        document.getElementById("mainContentId").style.display="block";
        document.getElementById("menuResponsivo").style.display="none";
        document.getElementById("botaoVoltar").style.display="none";
    }
    return (
        <div id="main" >
            <div id="botaoVoltar" className="botao">
                <Link to="/"><a onClick={(e)=>botaoVoltar(e)} className="voltar"><FaUndo/></a></Link>
            </div>
            <div id="menuResponsivo">
                <Responsivo/>
            </div>
            <div id="mainContentId">
                <header>
                    <Header/>
                </header>
                <div className="header2">
                    <div className="icone">
                        <a onClick={(e)=>botao(e)}><FaBars/></a>
                    </div>
                </div>

                <div className="mainContent">
                    <div className="containerSkills">
                        <div className="title">
                            <img src={JS}/>
                            <h2>Vanilla Javascript</h2>
                        </div>
                        <div className="singleContent">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="containerSkills">
                        <div className="title">
                            <img src={RT}/>
                            <img src={Node}/>
                            <h2>React, Node.js</h2>
                        </div>
                        <div className="singleContent">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="containerSkills">
                        <div className="title">
                            <img src={Python}/>
                            <h2>Python</h2>
                        </div>
                        <div className="singleContent">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="containerSkills">
                        <div className="title">
                            <img src={C}/>
                            <h2>C</h2>
                        </div>
                        <div className="singleContent">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="containerSkills">
                        <div className="title">
                            <img src={HTML}/>
                            <img src={CSS}/>
                            <h2>HTML, CSS</h2>
                        </div>
                        <div className="singleContent">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>

                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
            
        </div>
    );
}

export default Skills;