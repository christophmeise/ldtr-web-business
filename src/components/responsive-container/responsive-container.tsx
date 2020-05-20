import React from 'react';
import { Responsive, Sidebar } from 'semantic-ui-react';
import getWidth from './../../utils/device-width';
import DesktopContainer from './desktop-container';
import MobileContainer from './mobile-container';

interface ResponsiveContainerState {
    location: any;
}

interface ResponsiveContainerProps {
    invertedHeader: boolean;
}

class ResponsiveContainer extends React.Component<ResponsiveContainerProps, ResponsiveContainerState> {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                pathname: null,
            },
        };
    }

    componentWillMount() {
        const isSSR = typeof window === 'undefined';
        if (!isSSR) {
            this.setState({ location: window.location });
        }
    }

    render() {
        const { children } = this.props;
        const invertedHeader = this.props.invertedHeader;

        return (
            <React.Fragment>
                <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                    <DesktopContainer location={this.state.location} invertedHeader={invertedHeader}>
                        {children}
                    </DesktopContainer>
                </Responsive>
                <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
                    <MobileContainer location={this.state.location}>{children}</MobileContainer>
                </Responsive>
            </React.Fragment>
        );
    }
}

export default ResponsiveContainer;
