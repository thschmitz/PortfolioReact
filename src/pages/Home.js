import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import foto from "./img/minhaFoto.png"
import Header from "./structure/Header.js"
import Responsivo from "./structure/ResponsiveMenu.js"
import { FaBars } from 'react-icons/fa';
import { FaUndo } from 'react-icons/fa';
import Footer from "./structure/Footer"

const Home = () =>{
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
    <div id="App" className="App">
        <div id="botaoVoltar" className="botao">
          <Link to="/"><a onClick={(e)=>botaoVoltar(e)}className="voltar"><FaUndo/></a></Link>
        </div>
        <div id="menuResponsivo">
          <Responsivo/>
        </div>
      <div id="tudo" className="tudo">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale =1.0"/>

        <header>
          <div className="menos-espacamento">
            <Header/>
          </div>  
        </header>
        <div className="header2">
            <div className="icone">
                <a onClick={(e)=>botao(e)}><FaBars/></a>
            </div>
        </div>
        <div className="mainContent">
          <div className="nome">
            <h1>Hi, I'm Thomas</h1>
            <img src={foto}/>
          </div>
          <div className="caracteristicas">
            <h5>-Introduction</h5>
            <h3>Full Stack Developer</h3>
            <div className="skills">
              <p><b>Experience</b> in developing user interfaces</p>
              <p><b>Able</b> to work <b>independently</b> and <b>within a team</b></p>
              <p><b>Clean code</b> is the highest priority</p>
            </div>
            <div class="contact">
              <i id="first" class="fa fa-github"></i>
              <i class="fa fa-linkedin"></i>
              <i class="fa fa-instagram"></i>
              <i class="fa fa-facebook"></i>
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

export default Home;