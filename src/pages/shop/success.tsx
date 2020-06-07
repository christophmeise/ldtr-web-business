import { graphql } from 'gatsby';
import React from 'react';
import { Container } from 'semantic-ui-react';
import Layout from '../../components/layout';
import PlainHeader from '../../components/plain-overlay/plain-header';
import SEO from '../../components/seo';
import withI18next from '../../components/withI18next/withI18next';
import './success.less';
const Checkout = require('../../../static/checkout.inline.svg') as string;

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
                <SEO title="Index" />
                <Container className="global-header-padding">
                    <PlainHeader content={HeaderContent(t)} />
                    <Container text className="checkout-success-container">
                        <Checkout></Checkout>
                    </Container>
                </Container>
            </Layout>
        );
    }
}

const HeaderContent = (t) => {
    return (
        <div>
            <h1 className="header-overlay-headline">{t('checkout-success-headline')}</h1>
            <h2 className="header-overlay-subheadline">{t('checkout-success-subheadline')}</h2>
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
