import { graphql } from 'gatsby';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { Container, Form } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PlainHeader from './../components/plain-overlay/plain-header';

interface Props {
    t: any;
    data: {
        site: {
            siteMetadata: {
                title: string;
                description: string;
            };
        };
    };
}

class Contact extends React.Component<Props, any> {
    constructor(props) {
        super(props);
        this.state = { first_name: '', last_name: '', email: '', message: '' };
    }

    failurePopup = () => {
        const MySwal = withReactContent(Swal);

        MySwal.fire({
            onOpen: () => {
                MySwal.clickConfirm();
            },
        }).then(() => {
            return MySwal.fire('Sorry!', 'Something went wrong, please try again later!', 'error');
        });
    };

    successPopup = () => {
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
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': 'contact',
                ...this.state,
            }),
        })
            .then(() => this.successPopup())
            .catch((error) => this.failurePopup());
    };

    render() {
        const { t } = this.props;
        const data = this.props.data;
        const siteTitle = data.site.siteMetadata.title;
        const description = data.site.siteMetadata.description;
        const { first_name, last_name, email, message } = this.state;
        return (
            <Layout title={siteTitle}>
                <SEO title="Index" />
                <Container className="global-header-padding">
                    <PlainHeader content={HeaderContent(t)} />
                    <Container>
                        <form
                            className="ui form"
                            method="post"
                            netlify-honeypot="bot-field"
                            data-netlify="true"
                            name="contact"
                            action="/contact"
                            onSubmit={this.handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact" />
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
                    </Container>
                </Container>
            </Layout>
        );
    }
}

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}

const HeaderContent = (t) => {
    return (
        <div>
            <h1 className="header-overlay-headline">{t('contact-headline')}</h1>
            <h2 className="header-overlay-subheadline">{t('contact-subheadline')}</h2>
        </div>
    );
};

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

export default withTranslation(['common', 'contact'])(Contact);
