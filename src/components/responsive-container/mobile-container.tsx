import { navigate } from 'gatsby';
import React from 'react';
import { Container, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';

interface HeaderState {
    sidebarOpened: boolean;
}

interface MobileContainerProps {
    location: any;
}

export default class MobileContainer extends React.Component<MobileContainerProps, HeaderState> {
    constructor(props) {
        super(props);
        this.state = { sidebarOpened: false };
    }

    handleItemClick = (e, { name }) => navigate(name);
    handleSidebarHide = () => this.setState({ sidebarOpened: false });
    handleToggle = () => this.setState({ sidebarOpened: true });

    render() {
        const { children } = this.props;
        const { sidebarOpened } = this.state;

        return (
            <React.Fragment>
                <Sidebar
                    as={Menu}
                    animation="push"
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    {/* <Logo /> */}
                    <Menu.Item
                        name="/"
                        content="About me"
                        link
                        active={this.props.location.pathname === 'aboutMe'}
                        onClick={this.handleItemClick}
                    ></Menu.Item>
                    <Menu.Item
                        name="/shop"
                        content="Shop"
                        link
                        active={this.props.location.pathname === 'shop'}
                        onClick={this.handleItemClick}
                    ></Menu.Item>
                    <Menu.Item
                        name="/blog"
                        content="Blog"
                        link
                        active={this.props.location.pathname === 'blog'}
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
                                {/*                                 <Menu.Item position="right">
                                    <Button as="a" inverted>
                                        Log in
                                    </Button>
                                    <Button as="a" inverted style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                                    </Button>
                                </Menu.Item> */}
                            </Menu>
                        </Container>
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </React.Fragment>
        );
    }
}
