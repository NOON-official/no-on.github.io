import Logo from '../images/logo.png';
import Symbol from '../images/symbol.svg';
import '../../App.css';
import './Footer.css';


function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-element">
                <div className="footer-image">
                    <img src={Logo} className="footer-logo"/>
                    <img src={Symbol} className="footer-symbol"/>
                </div>
                <div className="footer-text">
                    <p>노온(NO:ON)</p>
                    <p><span className="footer-span">대표이사</span> 남한솔</p>
                    <p><span className="footer-span">사업자등록번호</span> 811-29-00871</p>
                    <p><span className="footer-span">주소</span>서울시 성북구 장월로 1마길 56 DAC 스타트업 인큐베이팅센터</p>
                    <p><span className="footer-span">이메일</span>contact@no-on.info</p>
                    <p><span className="footer-span">전화번호</span>010-8774-0290</p>
                    <p><a href="https://www.notion.so/youcon/2bf798ce7736449cba8b29a017cc0ed8">개인정보처리방침</a></p>
                </div>
            </div>
        </div>

    )
}

export default Footer;