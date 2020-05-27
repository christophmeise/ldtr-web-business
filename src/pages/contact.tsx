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
                                <Form.Input fluid label="First name" placeholder="First name" />
                                <Form.Input fluid label="Last name" placeholder="Last name" />
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.Input fluid label="E-Mail" placeholder="E-Mail" />
                            </Form.Group>
                            <Form.TextArea label="About" placeholder="Tell us more about you..." />
                            <div data-netlify-recaptcha="true"></div>
                            <button className="ui button primary" type="submit">
                                Send
                            </button>
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
