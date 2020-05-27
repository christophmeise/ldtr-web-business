import React from 'react';
import { withTranslation } from 'react-i18next';
import { Form } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}

class ContactForm extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { first_name: '', last_name: '', email: '', message: '' };
    }

    errorPopup = () => {
        const MySwal = withReactContent(Swal);

        MySwal.fire({
            onOpen: () => {
                MySwal.clickConfirm();
            },
        }).then(() => {
            return MySwal.fire('Sorry!', 'Something went wrong, please try again later!', 'error');
        });
    };

    successPopup = (form) => {
        form.reset();
        const MySwal = withReactContent(Swal);

        MySwal.fire({
            onOpen: () => {
                MySwal.clickConfirm();
            },
        }).then(() => {
            return MySwal.fire('Good job!', 'Your message has arrived!', 'success');
        });
    };

    handleChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state,
            }),
        })
            .then(() => this.successPopup(form))
            .catch((error) => this.errorPopup());
    };

    render() {
        const { t } = this.props;
        const { first_name, last_name, email, message } = this.state;

        return (
            <form
                name="form-contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/thanks"
            >
                <input type="hidden" name="form-name" value="form-contact" />
                <input type="hidden" name="bot-field" />
                <Form.Group widths="equal">
                    <div className="field">
                        <label>{t('contact:first-name')}</label>
                        <div className="ui fluid input">
                            <input
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
                                type="email"
                                name="email"
                                value={email}
                                placeholder={t('contact:email')}
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
            </form>
        );
    }
}

export default withTranslation('common')(ContactForm);
