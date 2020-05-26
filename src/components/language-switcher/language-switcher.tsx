import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Dropdown, Menu } from 'semantic-ui-react';

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
        const { t } = this.props;
        const languages = [
            { code: 'en', key: 'English', text: 'English', value: 'en' },
            { code: 'de', key: 'Deutsch', text: 'Deutsch', value: 'de' },
        ];

        return (
            <Menu.Item position="right">
                <Dropdown
                    button
                    className="icon"
                    labeled
                    floating
                    icon="world"
                    options={languages}
                    text={t('current_language')}
                    onChange={this.handleChangeLanguage}
                />
            </Menu.Item>
        );
    }
}

export default withTranslation('common')(LanguageSwitcher);
