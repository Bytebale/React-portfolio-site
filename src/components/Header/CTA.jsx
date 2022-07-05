import React from "react";
import CV from '../../assets/CV.pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className={"btn"}> Download CV</a>
            <a href="#Contacts" className={"btn btn-primary"}> Contact with me</a>
        </div>
    )
}
export default CTA