import React, {Fragment} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const Rotas = () =>{
    return(
        <Router>
            <Fragment>
                <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/skills">
                        <Skills/>
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                </Route>
            </Fragment>

        </Router>
    )
}

export default Rotas;