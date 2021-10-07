import React from 'react';
import Symbol from '../images/symbol.svg';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className = "vision-container">
                <div className="symbol">
                    <img src={Symbol}/>
                </div>
                <div className="vision-text">
                    <h2><strong>NO</strong> boundary <strong>ON</strong> the change.</h2>
                    <p className="our-vision">노온은 2020년도 처음으로 모여<br/>
                    '상식을 바꾸고 세상을 변화시키자'라는 모토로<br/>
                    다양한 사업과 엑설러레이팅을 실현하고 있습니다.<br/>
                    이제껏 보지 못했던 편리하고 혁신적인 서비스,<br/>
                    노온이 당신의 일상을 바꾸겠습니다.</p>
                </div>
            </div>
            <div className="value-container">
                <div className="value-text">
                    <h2><strong>NO:ON</strong>의 핵심 가치</h2>
                    <p className="our-value">
                    1. 도전과 성장 <br/>
                    2. 성과보다 원칙 <br/>
                    3. 고객에 대한 집착 <br/>
                    4. 장기적 시각 견지 <br/>
                    </p>
                </div>
            </div>
            <div className="start-up-container">
                <div className="start-up-text">
                    <h2><strong>NO:ON</strong>의 <br className="mobile"/> Start-up Accelerating</h2>
                    <p className="our-career">
                        노온은 빅데이터를 활용한 자가용 광고판 사업, <br className="mobile"/>
                        메타버스를 활용한 역사 교육 서비스, <br/>
                        재창업을 위한 중고 사무용 가구 플랫폼, <br className="mobile"/>
                        은퇴자와 청년들의 멘토링 매칭 서비스 등<br/>
                        다양한 사업을 Accelerating 중입니다.
                    </p>
                </div>
            </div>
            <div className="invest-container">
                <div className="invest-text">
                    <h2><strong>NO:ON</strong>의 <br className="mobile"/> Venture Capital &#38; Investing</h2>
                    <p className="our-invest">
                        노온은 현재 다양한 기업에 투자를 계획하고 있으며, <br/>
                        최종적으로 스타트업과 여러 상장기업의 <br className="mobile"/>
                        지주회사를 목표로 하고 있습니다.<br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;