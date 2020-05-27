import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Dropdown, Flag, Menu } from 'semantic-ui-react';
import './language-switcher.css';

class LanguageSwitcher extends Component<any, any> {
    constructor(props) {
        super(props);

        this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    }

    handleChangeLanguage(e, data) {
        const { i18n } = this.props;
        console.log(data);
        i18n.changeLanguage(data.value);
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
                    trigger={DropdownTrigger(i18n.language, t)}
                >
                    <Dropdown.Menu>
                        <Dropdown.Header icon="world" content={t('select_language')} />
                        {languages.map((language) => {
                            return (
                                <Dropdown.Item
                                    flag={language.flag}
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

const DropdownTrigger = (name, t) => {
    if (name === 'en') {
        name = 'us'; // Semantic UI uses non-standard language keys...
    }
    return (
        <span>
            <Flag name={name} />
            {t('current_language')}
        </span>
    );
};

export default withTranslation('common')(LanguageSwitcher);
