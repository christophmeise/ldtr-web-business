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
        this.state = {};
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
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
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
                            data-netlify-recaptcha="true"
                            name="contact-form"
                            onSubmit={this.handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact-form" />
                            <input type="hidden" name="bot-field" />
                            <Form.Group widths="equal">
                                <div className="field">
                                    <label>First name</label>
                                    <div className="ui fluid input">
                                        <input
                                            type="text"
                                            name="first_name"
                                            placeholder="First name"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Last name</label>
                                    <div className="ui fluid input">
                                        <input
                                            type="text"
                                            name="last_name"
                                            placeholder="Last name"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </Form.Group>
                            <Form.Group widths="equal">
                                <div className="field">
                                    <label>Last name</label>
                                    <div className="ui fluid input">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="E-Mail"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </Form.Group>
                            <div className="field">
                                <label>About</label>
                                <textarea
                                    name="About"
                                    placeholder="Tell us more about you..."
                                    rows={3}
                                    onChange={this.handleChange}
                                ></textarea>
                            </div>
                            <div data-netlify-recaptcha="true"></div>
                            <div className="field">
                                <button className="ui button primary" type="submit">
                                    Send
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

export default withTranslation('common')(Contact);
