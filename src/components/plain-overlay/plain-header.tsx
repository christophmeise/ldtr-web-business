import React from 'react';
import { Container } from 'semantic-ui-react';
import './plain-header.less';

const PlainHeader = ({ content }) => {
    return (
        <div className="plain-header">
            <Container className="plain-header-container">
                <div className="responsive-desktop-container plain-header-container-desktop">
                    <div className="plain-header-grid">
                        <div data-sal="slide-down" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                            {content}
                        </div>
                    </div>
                </div>
                <div className="responsive-mobile-container plain-header-container-mobile">
                    <div className="plain-header-grid">
                        <div data-sal="slide-down" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                            {content}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PlainHeader;
