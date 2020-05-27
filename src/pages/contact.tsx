import { graphql } from 'gatsby';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { Container, Form } from 'semantic-ui-react';
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

class Contact extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

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
                        >
                            <input type="hidden" name="bot-field" />
                            <Form.Group widths="equal">
                                <div className="field">
                                    <label>First name</label>
                                    <div className="ui fluid input">
                                        <input type="text" name="first_name" placeholder="First name" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Last name</label>
                                    <div className="ui fluid input">
                                        <input type="text" name="last_name" placeholder="Last name" />
                                    </div>
                                </div>
                            </Form.Group>
                            <Form.Group widths="equal">
                                <div className="field">
                                    <label>Last name</label>
                                    <div className="ui fluid input">
                                        <input type="text" name="email" placeholder="E-Mail" />
                                    </div>
                                </div>
                            </Form.Group>
                            <div className="field">
                                <label>About</label>
                                <textarea name="About" placeholder="Tell us more about you..." rows={3}></textarea>
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
