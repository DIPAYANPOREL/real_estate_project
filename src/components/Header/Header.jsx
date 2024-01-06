import React from 'react';


const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="h-container">
                <img src="./logo.png" alt="logo" width={100} />

                <div className="h-menu">
                    <a href="">
                        Residencies
                    </a>
                    <a href="">
                        Our Values
                    </a>
                    <a href="">
                        COntact Us
                    </a>
                    <a href="">
                        Get Started
                    </a>
                    <button className="button" >
                        <a href="">
                            Contacts
                        </a>
                    </button>
                </div>
            </div>

        </section>
    )
};

export default Header;