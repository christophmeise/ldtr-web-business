import { navigate } from 'gatsby';
import React from 'react';
import { Responsive, Visibility } from 'semantic-ui-react';
import GlobalNavbar from './global-navbar';

interface HeaderState {
    fixed: boolean;
    location: any;
}

const getWidth = (): any => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

export default class DesktopContainer extends React.Component<any, HeaderState> {
    constructor(props) {
        super(props);
        this.state = {
            fixed: false,
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

    handleItemClick = (e, { name, content }) => navigate(name);
    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render() {
        const { children } = this.props;
        const { fixed } = this.state;

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <GlobalNavbar
                        fixed={fixed}
                        location={this.state.location.pathname}
                        handleItemClick={this.handleItemClick}
                    />
                </Visibility>

                {children}
            </Responsive>
        );
    }
}
