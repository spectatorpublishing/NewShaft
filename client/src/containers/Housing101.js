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
            return <UsingtheSHAFT />
        }
    }

    return (
        <div>
            <div class="header">
                <div className="li"><div onClick={() => setPage("/")} className={(currentPage === "/" ? "active" : "btntext")}>using the<strong>SHAFT</strong></div></div>
                <div className="li"><div onClick={() => setPage("newProcess")} className={(currentPage === "newProcess" ? "active" : "btntext")}>the new process</div></div>
                <div className="li"><div onClick={() => setPage("specialHousing")} className={(currentPage === "specialHousing" ? "active" : "btntext")}>special housing</div></div>
            </div>
            <div className="content">
            <CurrentPage />
            </div>
        </div>
    )
}

export default Housing101;


