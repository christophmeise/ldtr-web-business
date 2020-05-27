import { graphql } from 'gatsby';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { Container } from 'semantic-ui-react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Calendly from './../components/calendly/calendly';
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

class BookCall extends React.Component<Props> {
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
                        <Calendly></Calendly>
                    </Container>
                </Container>
            </Layout>
        );
    }
}

const HeaderContent = (t) => {
    return (
        <div>
            <h1 className="header-overlay-headline">{t('book-first-call-headline')}</h1>
            <h2 className="header-overlay-subheadline">{t('book-first-call-subheadline')}</h2>
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

export default withTranslation('common')(BookCall);
