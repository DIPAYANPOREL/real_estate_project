import React from 'react';
import "./GetStarted.css";

const GetStarted = () => {
    return (
        <section className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">Get Started with Homles.</span>
                    <span className="secondaryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad
                        <br />sequi esse hic ex quisquam, temporibus repellendus ipsum
                    </span>
                    <nutton className="button">
                        <a href="mailto:dipayanporelcllg@gmail.com">
                            Get Started
                        </a>
                    </nutton>
                </div>
            </div>
        </section>
    )
}

export default GetStarted;