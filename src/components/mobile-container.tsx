import { navigate } from 'gatsby';
import React from 'react';
import { Button, Container, Icon, Menu, Responsive, Segment, Sidebar } from 'semantic-ui-react';
import Logo from './logo';

interface HeaderState {
    activeItem: string;
    sidebarOpened: boolean;
}

const getWidth = (): any => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

export default class MobileContainer extends React.Component {
    state: HeaderState = { activeItem: null, sidebarOpened: false };

    handleItemClick = (e, { name, content }) => {
        this.setState({ activeItem: content });
        navigate(name);
    };

    handleSidebarHide = () => this.setState({ sidebarOpened: false });

    handleToggle = () => this.setState({ sidebarOpened: true });

    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        const { activeItem } = this.state;
        const { sidebarOpened } = this.state;

        return (
            <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
                <Sidebar
                    as={Menu}
                    animation="push"
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Logo />
                    <Menu.Item
                        name="/"
                        content="About me"
                        link
                        active={activeItem === 'aboutMe'}
                        onClick={this.handleItemClick}
                    ></Menu.Item>
                    <Menu.Item
                        name="/shop"
                        content="Shop"
                        link
                        active={activeItem === 'shop'}
                        onClick={this.handleItemClick}
                    ></Menu.Item>
                    <Menu.Item
                        name="/blog"
                        content="Blog"
                        link
                        active={activeItem === 'blog'}
                        onClick={this.handleItemClick}
                    ></Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment inverted textAlign="center" style={{ padding: '1em 0em' }} vertical>
                        <Container>
                            <Menu inverted pointing secondary size="large">
                                <Menu.Item onClick={this.handleToggle}>
                                    <Icon name="sidebar" />
                                </Menu.Item>
                                <Menu.Item position="right">
                                    <Button as="a" inverted>
                                        Log in
                                    </Button>
                                    <Button as="a" inverted style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                                    </Button>
                                </Menu.Item>
                            </Menu>
                        </Container>
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Responsive>
        );
    }
}
