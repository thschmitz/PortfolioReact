import React from 'react';
import { Link } from 'react-router-dom';
import "./Contact.css"
import Header from "./structure/Header.js"
import Footer from "./structure/Footer.js"
import { FaBars } from 'react-icons/fa';
import { FaUndo } from 'react-icons/fa';
import Responsivo from "./structure/ResponsiveMenu.js"

const Contact = () => {
    function botao(e){
        e.preventDefault();
        document.getElementById("tudo").style.display="none";
        document.getElementById("menuResponsivo").style.display="block";
        document.getElementById("botaoVoltar").style.display="block";
      }
  
      function botaoVoltar(e){
        e.preventDefault();
        document.getElementById("tudo").style.display="block";
        document.getElementById("menuResponsivo").style.display="none";
        document.getElementById("botaoVoltar").style.display="none";
      }
    return (
        <div>
            <div id="botaoVoltar" className="botao">
                <Link to="/"><a onClick={(e)=>botaoVoltar(e)}className="voltar"><FaUndo/></a></Link>
            </div>
            <div id="menuResponsivo">
                <Responsivo/>
            </div>
            <div id="tudo">
            <header>
                <Header/>
            </header>
            <div className="header2">
                <div className="icone">
                    <a onClick={(e)=>botao(e)}><FaBars/></a>
                </div>
            </div>
            <section id="contato" class="contato">
                <h1>Entre em Contato</h1>
                <div>
                    <form method="post">
                        <input type="text" placeholder="Seu nome..."/>
                        <input type="email" placeholder="Seu e-mail..."/>
                        <textarea placeholder="Sua mensagem..."></textarea>
                        <input type="submit" nome="acao" value="Enviar!"/>
                    </form>
                </div>
            </section>
            <footer>
                <Footer/>
            </footer>
            </div>
            
        </div>
    );
}

export default Contact;