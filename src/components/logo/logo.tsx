import React from 'react';
import './logo.less';
const logoGold = require('./logo-gold.svg');
const logoWhite = require('./logo-inverted.svg');

const Logo = ({ inverted }) => {
    const logo = inverted ? logoWhite : logoGold;

    return (
        <div className="logo-container">
            <img src={logo}></img>
        </div>
    );
};

export default Logo;
