import React from "react";
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/min_hacker.png'
import Social from "./Social";

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello, i'm</h5>
                <h1>Vladimir Gribov</h1>
                <h5 className="text_light"> </h5>
                <CTA/>
                <Social/>
                <div className={"header_container me"}>
                    <img src={ME} alt={'me'} />
                </div>
                <a href={"#Contacts"} className={"Scroll_down"}>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header