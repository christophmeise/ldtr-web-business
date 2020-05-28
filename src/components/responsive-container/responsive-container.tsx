import React from 'react';
import DesktopContainer from './desktop-container';
import MobileContainer from './mobile-container';

interface ResponsiveContainerState {
    location: any;
}

interface ResponsiveContainerProps {
    invertedHeader: boolean;
    t: any;
}

class ResponsiveContainer extends React.Component<ResponsiveContainerProps, ResponsiveContainerState> {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                pathname: null,
            },
        };
        const isSSR = typeof window === 'undefined';
        if (!isSSR) {
            this.state = { location: window.location };
        }
    }

    render() {
        const { children, t } = this.props;
        const invertedHeader = this.props.invertedHeader;

        return (
            <React.Fragment>
                <div className="responsive-desktop-container">
                    <DesktopContainer location={this.state.location} invertedHeader={invertedHeader} t={t}>
                        {children}
                    </DesktopContainer>
                </div>
                <div className="responsive-mobile-container">
                    <MobileContainer location={this.state.location} t={t}>
                        {children}
                    </MobileContainer>
                </div>
            </React.Fragment>
        );
    }
}

export default ResponsiveContainer;
