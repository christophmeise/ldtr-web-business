import { navigate } from 'gatsby';
import React from 'react';
import GlobalNavbar from './../global-navbar';

interface DesktopContainerProps {
    location: any;
    invertedHeader: boolean;
}

export default class DesktopContainer extends React.Component<DesktopContainerProps, any> {
    constructor(props) {
        super(props);
    }

    handleItemClick = (e, { name, content }) => navigate(name);
    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render() {
        const { children } = this.props;
        const inverted = this.props.invertedHeader;

        return (
            <React.Fragment>
                <GlobalNavbar
                    location={this.props.location}
                    handleItemClick={this.handleItemClick}
                    inverted={inverted}
                />

                {children}
            </React.Fragment>
        );
    }
}
