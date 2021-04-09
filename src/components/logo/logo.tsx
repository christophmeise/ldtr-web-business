import React from 'react';
import './logo.less';

const Logo = ({ inverted }) => {
    const logo = inverted ? 'logo/logo-inverted.svg' : 'logo/logo-gold.svg';

    return (
        <div className="logo-container">
            <img src={logo}></img>
        </div>
    );
};

export default Logo;
