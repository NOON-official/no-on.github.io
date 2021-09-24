import React from 'react';
import BringconLogo from '../images/logo_bringcon.svg';
import UFO from '../images/ufo.svg';
import Planet from '../images/planet.svg';
import './Service.css';
import '../../App.css';
import './Bringcon.css';

function Bringcon() {
    const goBringcon = () => {
        window.open('http://bringcon.shop/');
    }

    return (
        <>
            <div className="bringcon-info-container">
                <div className="bringcon-logo-container">
                    <img src={BringconLogo} className="bringcon-logo"/>
                    <br/>
                    <h2>광활한 콘텐츠의 우주에 오신 것을 환영합니다.<br/>
                    저는 당신의 콘텐츠 여행을 돕는 가이드, BRINGCON입니다.</h2>
                    <button
                        onClick={goBringcon}
                        className="bringcon-link-btn">
                            <img src={BringconLogo}/>
                            <div>바로 가기</div>
                    </button>
                </div>
                <br/>
            </div>
        </>
    )
}

export default Bringcon;