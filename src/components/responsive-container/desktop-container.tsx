import { navigate } from 'gatsby';
import React from 'react';
import { Visibility } from 'semantic-ui-react';
import GlobalNavbar from './../global-navbar';

interface DesktopContainerProps {
    location: any;
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

        return (
            <React.Fragment>
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <GlobalNavbar location={this.props.location} handleItemClick={this.handleItemClick} />
                </Visibility>

                {children}
            </React.Fragment>
        );
    }
}
