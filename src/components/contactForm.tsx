import React from 'react';
import { Form } from 'semantic-ui-react';

class ContactForm extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { first_name: '', last_name: '', email: '', phone: '', message: '' };
    }

    handleChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    render() {
        const { disabled, t } = this.props;
        const { first_name, last_name, email, phone, message } = this.state;

        return (
            <form
                className="ui form"
                name="form-contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/contact/thanks"
            >
                <fieldset style={{ border: 'none' }} disabled={disabled}>
                    <input type="hidden" name="form-name" value="form-contact" />
                    <input type="hidden" name="bot-field" />
                    <Form.Group widths="equal">
                        <div className="field">
                            <label>{t('contact:first-name')}</label>
                            <div className="ui fluid input">
                                <input
                                    required
                                    type="text"
                                    name="first_name"
                                    value={first_name}
                                    placeholder={t('contact:first-name')}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label>{t('contact:last-name')}</label>
                            <div className="ui fluid input">
                                <input
                                    required
                                    type="text"
                                    name="last_name"
                                    value={last_name}
                                    placeholder={t('contact:last-name')}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group widths="equal">
                        <div className="field">
                            <label>{t('contact:email')}</label>
                            <div className="ui fluid input">
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={email}
                                    placeholder={t('contact:email')}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label>{t('contact:phone')}</label>
                            <div className="ui fluid input">
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    value={phone}
                                    placeholder={t('contact:phone')}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </Form.Group>
                    <div className="field">
                        <label>{t('contact:message')}</label>
                        <textarea
                            name="message"
                            placeholder={t('contact:message-placeholder')}
                            value={message}
                            rows={3}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <div className="field">
                        <button className="ui button primary" type="submit">
                            {t('contact:form-submit')}
                        </button>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default ContactForm;
