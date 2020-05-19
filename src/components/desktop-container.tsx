import { navigate } from 'gatsby';
import React from 'react';
import { Button, Container, Menu, Responsive, Segment, Visibility } from 'semantic-ui-react';
import Logo from './logo';

interface HeaderState {
    fixed: boolean;
}

const getWidth = (): any => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

export default class DesktopContainer extends React.Component {
    state: HeaderState = { fixed: false };

    handleItemClick = (e, { name, content }) => {
        this.setState({ activeItem: content });
        navigate(name);
    };

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        const { fixed } = this.state;

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <Segment
                        textAlign="center"
                        className="global-navbar"
                        style={{ padding: '0em 0em', marginBottom: '1em' }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            //inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size="large"
                        >
                            <Container>
                                <Logo />
                                <Menu.Item
                                    name="/"
                                    content="About me"
                                    link
                                    active={location.pathname === '/'}
                                    onClick={this.handleItemClick}
                                ></Menu.Item>
                                <Menu.Item
                                    name="/shop"
                                    content="Shop"
                                    link
                                    active={location.pathname === '/shop'}
                                    onClick={this.handleItemClick}
                                ></Menu.Item>
                                <Menu.Item
                                    name="/blog"
                                    content="Blog"
                                    link
                                    active={location.pathname === '/blog'}
                                    onClick={this.handleItemClick}
                                ></Menu.Item>
                                <Menu.Item position="right">
                                    <Button as="a" inverted={!fixed}>
                                        Log in
                                    </Button>
                                    <Button as="a" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        );
    }
}
