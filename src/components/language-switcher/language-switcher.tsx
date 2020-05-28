import { i18n } from 'i18next';
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Dropdown, Flag, FlagNameValues, Menu } from 'semantic-ui-react';
import './language-switcher.css';

type LanguageSwitcherProps = {
    i18n: i18n;
    t: any;
    direction: 'left' | 'right';
};

class LanguageSwitcher extends Component<LanguageSwitcherProps, any> {
    constructor(props) {
        super(props);

        this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    }

    handleChangeLanguage(e, data) {
        const { i18n } = this.props;
        i18n.changeLanguage(data.value);
    }

    componentDidMount() {
        this.forceUpdate();
    }

    render() {
        const { i18n } = this.props;
        const { t } = this.props;
        const { direction } = this.props;
        const languages = [
            { flag: 'us', key: 'English', text: 'English', value: 'en' },
            { flag: 'de', key: 'Deutsch', text: 'Deutsch', value: 'de' },
        ];

        return (
            <Menu.Item position="right">
                <Dropdown
                    className="icon dropdown-icon-left"
                    labeled
                    floating
                    direction={direction}
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
                </Dropdown>
            </Menu.Item>
        );
    }
}

const DropdownTrigger = (i18n: i18n, t) => {
    let language = i18n.language;
    let flagCode: FlagNameValues = 'de';
    if (language === 'en') {
        flagCode = 'us'; // Semantic UI uses non-standard language keys...
    }
    return (
        <span>
            <Flag name={flagCode} />
            {t('current_language')}
        </span>
    );
};

export default withTranslation('common')(LanguageSwitcher);
