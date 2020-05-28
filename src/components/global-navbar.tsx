import { Link } from 'gatsby';
import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import LanguageSwitcher from './language-switcher/language-switcher';
import Logo from './logo';
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
                <Menu.Item name="/" link onClick={handleItemClick}>
                    <Logo inverted={inverted} />
                </Menu.Item>
                <Menu.Item
                    name="/"
                    content={t('aboutme')}
                    link
                    active={location.pathname === '/'}
                    onClick={handleItemClick}
                ></Menu.Item>
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
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Link to={getPathWithLocale('/book-call')}>
                            <Button primary={!inverted} inverted={inverted} size="small">
                                {t('book-first-call')}
                            </Button>
                        </Link>
                    </Menu.Item>
                    <LanguageSwitcher t={t} mobile={mobile}></LanguageSwitcher>
                </Menu.Menu>
            </React.Fragment>
        );
    }
}

export default GlobalNavbar;
