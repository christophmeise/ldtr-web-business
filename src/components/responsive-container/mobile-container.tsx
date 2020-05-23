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

    componentWillMount() {
        const isSSR = typeof window === 'undefined';
        if (!isSSR) {
            this.forceUpdate();
        }
    }

    render() {
        const { children } = this.props;
        const { sidebarOpened } = this.state;
        return (
            <Sidebar.Pushable as={Segment}>
                {typeof window !== 'undefined' && (
                    <Sidebar
                        as={Menu}
                        animation="slide along"
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                        width="thin"
                    >
                        {/* <Logo /> */}
                        <Menu.Item
                            name="/"
                            content="About me test"
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
                )}

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment inverted textAlign="center" style={{ padding: '1em 0em' }} vertical>
                        <Container>
                            <Menu inverted pointing secondary size="large">
                                <Menu.Item onClick={this.handleToggle}>
                                    <Icon name="sidebar" />
                                </Menu.Item>
                            </Menu>
                        </Container>
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}
