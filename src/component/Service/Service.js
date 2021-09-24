import React from 'react';
import BringconLogo from '../images/logo_bringcon.svg';
import UFO from '../images/ufo.svg';
import Planet from '../images/planet.svg';
import './Service.css';
import '../../App.css';

function Service() {
    const openBringcon = () => {
        window.open('/bringcon');
    }

    return (
        <>
            <div className="bringcon-container">
                <div className="planet">
                    <img src={Planet}/>
                </div>
                <div className="bringcon-info">
                    <img src={BringconLogo}/>
                    <br/>
                    <h2>유튜브 동영상 콘텐츠 저작권 거래 플랫폼</h2>
                    <br/>
                    <button className="bringcon-more-btn"
                    onClick = {openBringcon}>
                        더 알아보기
                    </button>
                </div>
                <div className="ufo">
                    <img src={UFO}/>
                </div>
            </div>
        </>
    )
}

export default Service;