import React from "react";
import "./Footer.css"
import whats from "../img/whats-app.png"
import telegram from "../img/telegram.png"


const Footer = ()=>{
    return(
        <>
        <div className="Footer">
            <div className="shapedividers_com-9746"></div>
        </div>
        <div className="endFooter">
            <div className="container">
                <h4>{`Made By Sara Adel`}</h4>
                <div>
                    <a href="https://wa.me/01020870630"><img src={whats} alt=""/></a>
                    <a href="https://t.me/01020870630"><img src={telegram} alt=""/></a>
                </div>
            </div>
        </div>
        </>
    )

}
export default Footer