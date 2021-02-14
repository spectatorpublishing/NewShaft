import React from "react";
import '../css/Housing101.css';
import newProcess from "../components/newProcess.js";
import specialHousing from "../components/specialHousing.js";
import usingtheSHAFT from "../components/usingtheSHAFT.js";
import {
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";

class Housing101 extends React.Component {
  render() {
        return (
            <HashRouter>
                <div>
                    <div class="header">
                        <div class="li"><NavLink exact to="/" activeClassName="active">using the<strong>SHAFT</strong></NavLink></div>
                        <div class="li"><NavLink to="/newProcess">the new process</NavLink></div>
                        <div class="li"><NavLink to="/specialHousing">special housing</NavLink></div>
                    </div>
                    <div className="content">
                        <Route exact path="/" component={usingtheSHAFT}/>
                        <Route path="/newProcess" component={newProcess}/>
                        <Route path="/specialHousing" component={specialHousing}/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Housing101;


