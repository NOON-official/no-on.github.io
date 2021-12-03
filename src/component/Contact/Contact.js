import Logo from '../images/logo.png';
import Symbol from '../images/symbol.svg';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-image">
                <img src={Symbol} className="contact-symbol"/>
                <br/>
                <img src={Logo} className="contact-logo"/>
                <br/>
                <p id="email">contact@no-on.info</p>
                {/* <form className="contact-form">
                    <div className="input-col-1">
                        <input type="text" placeholder="Name *"/><br/>
                        <input type="text" placeholder="E-mail *"/><br/>
                        <input type="text" placeholder="Subject *"/>
                    </div>
                    <div className="input-col-2">
                        <input type="text" placeholder="Message" className="input-message"/><br/>
                        <button type="submit" className="submit-btn">SEND</button>
                    </div>
                </form> */}
            </div>
        </div>
    )
}

export default Contact;