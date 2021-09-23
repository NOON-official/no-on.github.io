import React from 'react';
import Symbol from '../images/symbol.png';
import './Main.css';
import '../../App.css';

function Main() {
    return (
        <>
            <div className="main-container">
                <div className="text-container">
                    <h2><strong>NO</strong> boundary<br/>
                    <strong>ON</strong> the change</h2>
                    <p>변화의 경계를 없애다</p>
                </div>
                <div className="image-container">
                    <img src={Symbol}/>
                </div>
            </div>
        </>
    )
}

export default Main;