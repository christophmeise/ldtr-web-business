import { faHandHoldingHeart, faListUl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';
import { Button, Dropdown, Header, Icon, Menu } from 'semantic-ui-react';
import LanguageSwitcher from './language-switcher/language-switcher';
import Logo from './logo//logo';
import { getPathWithLocale } from './navigateWithLocale';

interface Props {
    t: any;
    location: any;
    handleItemClick: any;
    inverted: boolean;
    mobile: boolean;
}

class GlobalNavbar extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { location, handleItemClick, inverted, mobile, t } = this.props;
        const options = [
            {
                key: 1,
                text: 'Mobile',
                value: 1,
                content: <Header icon="mobile" content="Mobile" subheader="The smallest size" />,
            },
            {
                key: 2,
                text: 'Tablet',
                value: 2,
                content: <Header icon="tablet" content="Tablet" subheader="The size in the middle" />,
            },
            {
                key: 3,
                text: 'Desktop',
                value: 3,
                content: <Header icon="desktop" content="Desktop" subheader="The largest size" />,
            },
        ];

        return (
            <React.Fragment>
                {!mobile && (
                    <Menu.Item className="menu-item-logo" name="/" link onClick={handleItemClick}>
                        <Logo inverted={inverted} />
                    </Menu.Item>
                )}
                {!mobile && (
                    <Dropdown className="link item" text={t('navbar-therapy')} simple>
                        <Dropdown.Menu className="global-navbar-dropdown">
                            <Link to={getPathWithLocale('/innerlight-hypnotherapy')}>
                                <Dropdown.Item>
                                    <FontAwesomeIcon icon={faHandHoldingHeart} style={{ opacity: '1' }} />
                                    {t('navbar-innerlight-hypnotherapy')}
                                </Dropdown.Item>
                            </Link>
                            <Link to={getPathWithLocale('/rtt')}>
                                <Dropdown.Item>
                                    <Icon name="gem outline" className="left"></Icon>
                                    {t('navbar-rtt')}
                                </Dropdown.Item>
                            </Link>
                            <Link to={getPathWithLocale('/rtt-areas')}>
                                <Dropdown.Item>
                                    <FontAwesomeIcon icon={faListUl} style={{ opacity: '1' }} />
                                    {t('navbar-rtt-areas')}
                                </Dropdown.Item>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                )}
                {mobile && (
                    <React.Fragment>
                        <Menu.Item
                            name="/innerlight-hypnotherapy"
                            content={t('navbar-innerlight-hypnotherapy')}
                            link
                            active={location.pathname === '/innerlight-hypnotherapy'}
                            onClick={handleItemClick}
                        ></Menu.Item>
                        <Menu.Item
                            name="/rtt"
                            content={t('navbar-rtt')}
                            link
                            active={location.pathname === '/rtt'}
                            onClick={handleItemClick}
                        ></Menu.Item>
                        <Menu.Item
                            name="/rtt-areas"
                            content={t('navbar-rtt-areas')}
                            link
                            active={location.pathname === '/rtt-areas'}
                            onClick={handleItemClick}
                        ></Menu.Item>
                        <Menu.Item
                            name="/faq"
                            content={t('faq')}
                            link
                            active={location.pathname === '/faq'}
                            onClick={handleItemClick}
                        ></Menu.Item>
                    </React.Fragment>
                )}

                {/*  <Menu.Item
                    name="/shop"
                    content={t('shop')}
                    link
                    active={location.pathname === '/shop'}
                    onClick={handleItemClick}
                ></Menu.Item> */}
                <Menu.Item
                    name="/blog"
                    content={t('blog')}
                    link
                    active={location.pathname === '/blog'}
                    onClick={handleItemClick}
                ></Menu.Item>
                <Menu.Item
                    name="/contact"
                    content={t('contact')}
                    link
                    active={location.pathname === '/contact'}
                    onClick={handleItemClick}
                ></Menu.Item>
                <Menu.Item
                    name="/faq"
                    content={t('faq')}
                    link
                    active={location.pathname === '/faq'}
                    onClick={handleItemClick}
                ></Menu.Item>
                {!mobile && (
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Link to={getPathWithLocale('/book-call')}>
                                <Button
                                    className="shadow hover-animate rounded"
                                    primary={!inverted}
                                    inverted={inverted}
                                    size="small"
                                >
                                    {t('book-first-call')}
                                </Button>
                            </Link>
                        </Menu.Item>
                        <LanguageSwitcher t={t} mobile={mobile}></LanguageSwitcher>
                    </Menu.Menu>
                )}
                {mobile && (
                    <React.Fragment>
                        <LanguageSwitcher t={t} mobile={mobile}></LanguageSwitcher>
                        <Menu.Item>
                            <Link to={getPathWithLocale('/book-call')}>
                                <Button primary={true} inverted={false} size="small">
                                    {t('book-first-call')}
                                </Button>
                            </Link>
                        </Menu.Item>
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

export default GlobalNavbar;
