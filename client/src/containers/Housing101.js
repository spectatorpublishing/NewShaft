import React, { useEffect, useState } from "react";
import '../css/Housing101.css';
import NewProcess from "../components/NewProcess.js";
import SpecialHousing from "../components/SpecialHousing.js";
import UsingtheSHAFT from "../components/UsingtheSHAFT.js";

const Housing101 = (props) => {
    const [currentPage, setPage] = useState("/")

    const CurrentPage = () => {

        if (currentPage === "specialHousing") {
            return <SpecialHousing />
        } else if (currentPage === "newProcess") {
            return <NewProcess />
        } else {
            return <UsingtheSHAFT/>
        }
    }

    const PageHeader = () => {
        if (currentPage === "specialHousing") {
            return (
                <div className="header-container">
                    <div className="title2">
                        Special Housing
                    </div>
                    <div className="subtitle">
                        Take the road less traveled?
                    </div>
                </div>
            )
        } else if (currentPage === "newProcess") {
            return (
                <div className="header-container">
                    <div className="title2">
                        The Process
                    </div>
                    <div className="subtitle">
                
                    </div>
                </div>
            )
        } else {
            return (
                <div className="header-container">
                    <div className="title2">
                        Using the<strong>SHAFT</strong>
                    </div>
                    <div className="subtitle">
                        tools and features that make housing <i>easy</i>.
                    </div>
                </div>
            )
        }
    }

    // return (
    //     <div>
    //         <div class="header">
    //             {PageHeader()}
    //         </div>
    //         <div class="header2">
    //             <div className = "tab-navigation">
    //             <div className="li"><div onClick={() => setPage("/")} className={(currentPage === "/" ? "active" : "btntext")}>Using the<strong>SHAFT</strong></div></div>
    //             <div className="li"><div onClick={() => setPage("newProcess")} className={(currentPage === "newProcess" ? "active" : "btntext")}>The New Process</div></div>
    //             <div className="li"><div onClick={() => setPage("specialHousing")} className={(currentPage === "specialHousing" ? "active" : "btntext")}>Special Housing</div></div>
    //             </div>
    //         </div> 
    //         <div className="content">
    //         <CurrentPage />
    //         </div>
    //     </div>
    // )
    return (
        <div>
          <div className="header">
            {PageHeader()}
          </div>
          <div className="header2">
            <div className="tab-navigation">
              <div className={`li ${currentPage === "/" ? "active" : ""}`} onClick={() => setPage("/")}>
                Using the<strong>SHAFT</strong>
              </div>
              <div className={`li ${currentPage === "newProcess" ? "active" : ""}`} onClick={() => setPage("newProcess")}>
                The Process
              </div>
              <div className={`li ${currentPage === "specialHousing" ? "active" : ""}`} onClick={() => setPage("specialHousing")}>
                Special Housing
              </div>
            </div>
          </div>
          <div className="content">
            <CurrentPage />
          </div>
        </div>
      )
}

export default Housing101;


