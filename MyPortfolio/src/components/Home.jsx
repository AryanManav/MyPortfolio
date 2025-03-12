import React from 'react'
import "./Home.css"

import aryanbw from "./aryanbw.jpg"

const Home = () => {
    return (
        <div id="home" className="home">
            <div className="container1">
                <div className="left">
                    <div className="aryan">Aryan</div>
                    <div className="manav">Manav</div>
                </div>
                <div className="right">
                    <img src={aryanbw} alt="Aryan Manav" className="profile-image" />
                </div>
            </div>
        </div>
    )
}

export default Home
