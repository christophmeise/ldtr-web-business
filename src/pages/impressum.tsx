import { graphql } from 'gatsby';
import React from 'react';
import { Container } from 'semantic-ui-react';
import Layout from '../components/layout';
import PlainHeader from '../components/plain-overlay/plain-header';
import SEO from '../components/seo';
import withI18next from '../components/withI18next/withI18next';

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

class Impressum extends React.Component<Props, any> {
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
                <SEO title={t('imprint-headline')} />
                <Container className="global-header-padding">
                    <PlainHeader content={HeaderContent(t)} />
                    <Container text>
                        <div className="main-content-sections">
                            <section>
                                <p>
                                    <b>Inner Light Hypnotherapy</b>
                                </p>
                                <p>Christin Meise</p>
                                <p>Kiefholzstraße 14</p>
                                <p>12435 Berlin</p>
                                <p>T: 01523 8971546</p>
                                <p>E: info@innerlight-hypnotherapy.com</p>
                            </section>
                        </div>
                    </Container>
                </Container>
            </Layout>
        );
    }
}

const HeaderContent = (t) => {
    return (
        <div>
            <h1 className="header-overlay-headline">{t('imprint-headline')}</h1>
            <h2 className="header-overlay-subheadline">{t('imprint-subheadline')}</h2>
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

export default withI18next(['common'])(Impressum);
