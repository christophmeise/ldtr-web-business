import { Link } from 'gatsby';
import React from 'react';
import { cssTransition, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-less/semantic.less';
import { Container, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import '../components/i18n/i18n';
import GlobalNavbar from './global-navbar';
import Logo from './logo';
import navigateWithLocale, { getPathWithLocale } from './navigateWithLocale';
import PageFooter from './page-footer/page-footer';

interface Props {
    t: any;
    title: string;
    invertedHeader?: boolean;
    children?: any;
    headerOverlay?: any;
}

class Layout extends React.Component<Props, any> {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpened: false,
            location: {
                pathname: null,
            },
        };

        const isSSR = typeof window === 'undefined';
        if (!isSSR) {
            this.state = { location: window.location };
        }
    }

    notify = () => {
        const { t } = this.props;
        toast(
            <p>
                {t('cookie-notification-1')}
                <Link to={getPathWithLocale('/dataprotection')}> {t('cookie-notification-2')}</Link>
            </p>,
        );
    };

    componentDidMount() {
        this.notify();
    }

    handleItemClick = (e, { name }) => navigateWithLocale(name);
    handleSidebarHide = () => this.setState({ sidebarOpened: false });
    handleToggle = () => this.setState({ sidebarOpened: true });

    render() {
        const { children, invertedHeader, t } = this.props;
        const Zoom = cssTransition({
            enter: 'Toastify__bounce-enter',
            exit: 'Toastify__bounce-exit',
            appendPosition: true,
        });

        const { sidebarOpened, location } = this.state;

        return (
            <React.Fragment>
                <ToastContainer position="bottom-center" autoClose={false} closeOnClick transition={Zoom} />
                <div className="flex-container">
                    <Sidebar.Pushable>
                        <Sidebar
                            as={Menu}
                            animation="overlay"
                            direction="top"
                            className="responsive-mobile-container"
                            inverted
                            onHide={this.handleSidebarHide}
                            vertical
                            visible={sidebarOpened}
                            width="wide"
                        >
                            <GlobalNavbar
                                location={location}
                                handleItemClick={this.handleItemClick}
                                inverted={true}
                                mobile={true}
                                t={t}
                            />
                        </Sidebar>

                        <Sidebar.Pusher dimmed={sidebarOpened}>
                            <Segment
                                inverted
                                textAlign="center"
                                className="responsive-mobile-container"
                                style={{ padding: '0.35em 0em' }}
                                vertical
                            >
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
                            <section
                                className="global-navbar responsive-desktop-container"
                                style={{ padding: '0em 0em', marginBottom: '1em', border: 'none', textAlign: 'center' }}
                            >
                                <Menu
                                    inverted={invertedHeader}
                                    pointing={false}
                                    secondary={true}
                                    size="large"
                                    borderless
                                >
                                    <Container>
                                        <GlobalNavbar
                                            location={location}
                                            handleItemClick={this.handleItemClick}
                                            inverted={invertedHeader}
                                            mobile={false}
                                            t={t}
                                        />
                                    </Container>
                                </Menu>
                            </section>

                            <main role="main" className="main-container">
                                {children}
                            </main>
                            <PageFooter t={t} />
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            </React.Fragment>
        );
    }
}

export default Layout;
