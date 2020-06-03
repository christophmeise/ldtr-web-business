import React from 'react';
import { Container, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import GlobalNavbar from './../global-navbar';
import Logo from './../logo';
import navigateWithLocale from './../navigateWithLocale';

interface HeaderState {
    sidebarOpened: boolean;
}

interface MobileContainerProps {
    location: any;
    t: any;
}

export default class MobileContainer extends React.Component<MobileContainerProps, HeaderState> {
    constructor(props) {
        super(props);
        this.state = { sidebarOpened: false };
    }

    handleItemClick = (e, { name }) => navigateWithLocale(name);
    handleSidebarHide = () => this.setState({ sidebarOpened: false });
    handleToggle = () => this.setState({ sidebarOpened: true });

    render() {
        const { children, t } = this.props;
        const { sidebarOpened } = this.state;

        return (
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    animation="overlay"
                    direction="top"
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
                        t={t}
                    />
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment inverted textAlign="center" style={{ padding: '0.35em 0em' }} vertical>
                        <Container>
                            <Menu inverted secondary size="large">
                                <Menu.Item
                                    style={{ padding: '0', alignSelf: 'center' }}
                                    name="/"
                                    link
                                    onClick={this.handleItemClick}
                                >
                                    <Logo inverted={true} />
                                </Menu.Item>
                                <Menu.Item position="right" onClick={this.handleToggle}>
                                    <Icon style={{ margin: '0', color: 'white' }} name="sidebar" />
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
