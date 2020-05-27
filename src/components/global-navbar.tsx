import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from 'semantic-ui-react';
import LanguageSwitcher from './language-switcher/language-switcher';
import Logo from './logo';

const GlobalNavbar = ({ location, handleItemClick, inverted, mobile }) => {
    const { t, i18n, ready } = useTranslation('common');

    if (!ready) return null;

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
                active={location.pathname === '/blog'}
                onClick={handleItemClick}
            ></Menu.Item>
            <LanguageSwitcher direction={mobile ? 'right' : 'left'}></LanguageSwitcher>
        </React.Fragment>
    );
};

export default GlobalNavbar;
