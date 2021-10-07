import React from 'react';
import BringconLogo from '../images/logo_bringcon.svg';
import Rainbow from '../images/rainbow.svg';
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
                    <div className="rainbow-container">
                        <div className="planet-container">
                            <div className="bringcon-strong-1">
                                <img src={Planet} className="planet-img"/>
                                <div><p>콘텐츠 여행가들과 함께<br/>여행하며 즐거움을 찾겠습니다.</p></div>
                            </div>
                            <div className="bringcon-strong-2">
                                <img src={Planet} className="planet-img"/>
                                <div><p>콘텐츠 여행가들이 안전하게<br/>여행하도록 돕겠습니다.</p></div>
                            </div>
                            <div className="bringcon-strong-3">
                                <img src={Planet} className="planet-img"/>
                                <div><p>콘텐츠 여행가들의 니즈를<br/>계속해서 탐구하겠습니다.</p></div>
                            </div>   
                        </div>
                        <img src={Rainbow} className="rainbow"/>
                    </div>
                    <div className="notice-container">
                        <div className="notice-1">
                            <h2>간편하게 결제하는 <br className="pc mobile"/>영상 저작권</h2>
                            <p>브링콘(BRINGCON)은 유튜브 시장에서의 <br className="pc mobile"/>
                            원 저작자와 크리에이터 간 <br className="pc ipad"/>
                            콘텐츠 저작권 문제를 해결하기 위한 <br className="pc mobile"/>
                            '콘텐츠 저작권 전자상거래 플랫폼'입니다.</p>
                        </div>
                        <div className="notice-2">
                            <h2>원 저작자와 <br className="pc mobile"/>크리에이터의 <br className="mobile"/>WIN-WIN</h2>
                            <p>브링콘을 통하여 원 저작자는 <br className="pc mobile"/>
                            수수료를 지불하고 <br className="ipad"/> 자신의 콘텐츠 사용권을 판매, <br className="pc mobile"/>
                            크리에이터는 원하는 <br className="mobile"/>콘텐츠 사용권을 구매하여 <br className="pc ipad"/>
                            본인 채널에 활용할 수 있습니다.</p>
                        </div>
                        <div className="notice-3">
                            <h2>트렌드 분석을 통한 <br className="pc mobile"/>인기 콘텐츠 엄선</h2>
                            <p>브링콘(BRINGCON)은 크리에이터들이 <br className="pc mobile"/>
                            더 양질의 콘텐츠를 제공받을 수 있도록 <br className="pc ipad"/>
                            유튜브 콘텐츠를 지속적으로 분석하여 <br className="pc mobile"/>
                            실시간으로 자사 콘텐츠를 검수하고 있습니다.</p>
                        </div>
                        <div className="notice-4">
                            <h2>콘텐츠 저작권 보호 및 <br/>안전한 저작권 거래</h2>
                            <p>브링콘(BRINGCON)은 첫 회원가입 시, <br className="pc mobile"/>
                            유튜브 채널 인증을 통해 <br className="ipad"/>크리에이터의 채널에서 <br className="pc"/>
                            시시각각으로<br className="mobile"/>콘텐츠가 적법하게 사용되고 있는지 <br className="pc ipad"/>
                            확인하는 모니터링 알고리즘을<br className="mobile"/>시행하고 있습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bringcon;