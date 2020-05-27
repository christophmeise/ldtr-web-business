import { navigate } from 'gatsby';
import React from 'react';
import { Container, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import GlobalNavbar from './../global-navbar';

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
            <Sidebar.Pushable>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation="slide along"
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                        width="wide"
                    >
                        <GlobalNavbar
                            location={this.props.location}
                            handleItemClick={this.handleItemClick}
                            inverted={true}
                            mobile={true}
                        />
                    </Sidebar>

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
            </Sidebar.Pushable>
        );
    }
}
