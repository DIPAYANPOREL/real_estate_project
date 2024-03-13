import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* Left */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="logo" width={120} />
                    <span className="secondaryText">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br /> Illo nostrum sed modi, impedit consequatur
                    </span>
                </div>
                {/* Right */}
                <div className="f-right flexColStart">
                    <span className="primaryText">
                        Information</span>
                    <span className="secondayText">123 ABCD Road, FL 34, Abcd</span>
                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer