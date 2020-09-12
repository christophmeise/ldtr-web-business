import { Link } from 'gatsby';
import React from 'react';
import { cssTransition, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-less/semantic.less';
import { Container, Icon, Menu, Sidebar } from 'semantic-ui-react';
import '../components/i18n/i18n';
import GlobalNavbar from './global-navbar';
import Logo from './logo/logo';
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
        if (typeof window !== 'undefined' && localStorage.getItem('cookie-accept') !== 'true') {
            toast(
                <p onClick={this.onCookieClick}>
                    {t('cookie-notification-1')}
                    <Link to={getPathWithLocale('/dataprotection')}> {t('cookie-notification-2')}</Link>
                </p>,
            );
        }
    };

    onCookieClick() {
        localStorage.setItem('cookie-accept', 'true');
    }

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
                <Menu className="responsive-mobile-container global-navbar-mobile" fixed="top" size="large" borderless>
                    <Menu.Item
                        style={{ paddingBottom: '0', paddingTop: '0', alignSelf: 'center' }}
                        name="/"
                        link
                        onClick={this.handleItemClick}
                    >
                        <Logo inverted={false} />
                    </Menu.Item>
                    <Menu.Item position="right" onClick={this.handleToggle}>
                        <Icon style={{ margin: '0', color: '#b99450' }} name="sidebar" />
                    </Menu.Item>
                </Menu>

                <Sidebar.Pushable className="flex-container">
                    <Sidebar
                        as={Menu}
                        animation="overlay"
                        direction="top"
                        className="responsive-mobile-container"
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                        width="wide"
                    >
                        {(typeof window === 'undefined' ||
                            (typeof window !== 'undefined' && window.innerWidth < 768)) && (
                            <GlobalNavbar
                                location={location}
                                handleItemClick={this.handleItemClick}
                                inverted={true}
                                mobile={true}
                                t={t}
                            />
                        )}
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened}>
                        {(typeof window === 'undefined' ||
                            (typeof window !== 'undefined' && window.innerWidth >= 768)) && (
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
                        )}
                        <main role="main">
                            {children}
                            <PageFooter t={t} />
                        </main>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </React.Fragment>
        );
    }
}

export default Layout;
