import { navigate } from 'gatsby';
import i18n from 'i18next';
import React, { Component } from 'react';
import { Flag, FlagNameValues, Menu } from 'semantic-ui-react';
import './language-switcher.less';

type LanguageSwitcherProps = {
    t: any;
    mobile: boolean;
};

class LanguageSwitcher extends Component<LanguageSwitcherProps, any> {
    constructor(props) {
        super(props);

        this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
        this.switchLanguage = this.switchLanguage.bind(this);
        this.navigateToCurrentLocationWithLocal = this.navigateToCurrentLocationWithLocal.bind(this);
    }

    handleChangeLanguage(e, data) {
        i18n.changeLanguage(data.value);
        this.navigateToCurrentLocationWithLocal();
    }

    switchLanguage() {
        if (i18n.language === 'de') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('de');
        }
        this.navigateToCurrentLocationWithLocal();
    }

    navigateToCurrentLocationWithLocal() {
        let pathSplit = location.pathname.split('/');
        pathSplit.splice(0, 1);
        let purePath;
        if (pathSplit[0] === 'en') {
            pathSplit.splice(0, 1);
            purePath = '/' + pathSplit.join('/');
        } else {
            purePath = location.pathname;
        }
        if (i18n.language != 'de') {
            navigate('/' + i18n.language + purePath + location.search);
        } else {
            navigate(purePath + location.search);
        }
    }

    componentDidMount() {
        this.forceUpdate();
    }

    render() {
        const { t } = this.props;

        const { mobile } = this.props;
        const languages = [
            { flag: 'us', key: 'English', text: 'English', value: 'en' },
            { flag: 'de', key: 'Deutsch', text: 'Deutsch', value: 'de' },
        ];

        return (
            <Menu.Item onClick={this.switchLanguage}>
                {LanuageSwitcherMobile(i18n, t)}
                {/*  <Dropdown
                    className="icon dropdown-icon-left"
                    labeled
                    floating
                    direction="left"
                    icon={null}
                    trigger={DropdownTrigger(i18n, t)}
                >
                    <Dropdown.Menu>
                        <Dropdown.Header icon="world" content={t('select_language')} />
                        {languages.map((language) => {
                            return (
                                <Dropdown.Item
                                    flag={language.flag}
                                    key={language.key}
                                    text={language.text}
                                    active={i18n.language === language.value}
                                    onClick={this.handleChangeLanguage}
                                    value={language.value}
                                />
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown> */}
            </Menu.Item>
        );
    }
}

/* const DropdownTrigger = (i18n, t) => {
    let language = i18n.language;
    let flagCode: FlagNameValues = 'de';
    if (language === 'en') {
        flagCode = 'us'; // Semantic UI uses non-standard language keys...
    }
    return (
        <span className="language-switcher-desktop">
            <Flag name={flagCode} />
            {t('current_language')}
        </span>
    );
}; */

const LanuageSwitcherMobile = (i18n, t) => {
    let language = i18n.language;
    let flagCode: FlagNameValues = 'de';
    if (language === 'en') {
        flagCode = 'us'; // Semantic UI uses non-standard language keys...
    }
    return (
        <span className="language-switcher-mobile">
            <Flag name={flagCode} />
            {t('current_language')}
        </span>
    );
};

export default LanguageSwitcher;
