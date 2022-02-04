import { Link } from 'react-router-dom';
import React from 'react';
import './Header.css';

export default ()=>{

    return(

        <div id="headerId" className="headerFull">
            
            <div className="header">
                <div className="logo">
                    <i class="fa fa-sketch"/>
                </div>
                <div className="menu">
                    <Link to="/"><a className="singleObject">HOME</a></Link>
                    <Link to="/skills"><a className="singleObject">SKILLS</a></Link>
                    <Link to="/contact"> <a className="singleObject">CONTACT</a></Link>
                </div>
            </div>


            
        </div>
    )
}
