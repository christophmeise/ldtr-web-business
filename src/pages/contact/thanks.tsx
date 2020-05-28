import { graphql } from 'gatsby';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { Container } from 'semantic-ui-react';
import Layout from '../../components/layout';
import PlainHeader from '../../components/plain-overlay/plain-header';
import SEO from '../../components/seo';

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

class Thanks extends React.Component<Props, any> {
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
                    <Container></Container>
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
            <h1 className="header-overlay-headline">{t('contact-thanks-headline')}</h1>
            <h2 className="header-overlay-subheadline">{t('contact-thanks-subheadline')}</h2>
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

export default withTranslation(['common', 'contact'])(Thanks);
