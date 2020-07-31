import { Link } from 'gatsby';
import React from 'react';
import { Button, Dropdown, Icon, Menu } from 'semantic-ui-react';
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

        return (
            <React.Fragment>
                <Menu.Item className="menu-item-logo" name="/" link onClick={handleItemClick}>
                    <Logo inverted={inverted} />
                </Menu.Item>
                <Dropdown item text={t('navbar-therapy')} simple>
                    <Dropdown.Menu className="global-navbar-dropdown">
                        <Link to={getPathWithLocale('/innerlight-hypnotherapy')}>
                            <Dropdown.Item>
                                <Icon name="heart outline" className="left"></Icon>
                                {t('navbar-innerlight-hypnotherapy')}
                            </Dropdown.Item>
                        </Link>
                        <Link to={getPathWithLocale('/rtt')}>
                            <Dropdown.Item>
                                <Icon name="compass outline" className="left"></Icon>
                                {t('navbar-rtt')}
                            </Dropdown.Item>
                        </Link>
                        <Link to={getPathWithLocale('/rtt-areas')}>
                            <Dropdown.Item>
                                <Icon name="th list" className="left"></Icon>
                                {t('navbar-rtt-areas')}
                            </Dropdown.Item>
                        </Link>
                        <Link to={getPathWithLocale('/faq')}>
                            <Dropdown.Item>
                                <Icon name="question circle outline" className="left"></Icon>
                                {t('faq')}
                            </Dropdown.Item>
                        </Link>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item
                    name="/shop"
                    content={t('shop')}
                    link
                    active={location.pathname === '/shop'}
                    onClick={handleItemClick}
                ></Menu.Item>
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
                                <Button primary={!inverted} inverted={inverted} size="small">
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
