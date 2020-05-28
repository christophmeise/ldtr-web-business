import { graphql } from 'gatsby';
import React from 'react';
import { Container } from 'semantic-ui-react';
import ContactForm from '../components/contactForm';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PlainHeader from './../components/plain-overlay/plain-header';
import withI18next from './../components/withI18next/withI18next';

interface Props {
    pageContext: any;
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
    }

    render() {
        const {
            pageContext: { locale },
            t,
        } = this.props;
        const data = this.props.data;
        const siteTitle = data.site.siteMetadata.title;
        const description = data.site.siteMetadata.description;

        return (
            <Layout title={siteTitle} t={t}>
                <SEO title="Index" />
                <Container className="global-header-padding">
                    <PlainHeader content={HeaderContent(t)} />
                    <Container>
                        <ContactForm disabled={false} t={t}></ContactForm>
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

export default withI18next(['common', 'contact'])(Contact);
