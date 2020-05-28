import { graphql, Link } from 'gatsby';
import React from 'react';
import { Button } from 'semantic-ui-react';
import HeaderOverlay from '../components/header-overlay/header-overlay';
import Layout from '../components/layout';
import { getPathWithLocale } from '../components/navigateWithLocale';
import SEO from '../components/seo';
import withI18next from './../components/withI18next/withI18next';

interface Props {
    t: any;
    pageContext: any;
    data: {
        site: {
            siteMetadata: {
                title: string;
                description: string;
            };
        };
        mobileImage: any;
        desktopImage: any;
    };
}

class Index extends React.Component<Props> {
    constructor(props: Props) {
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
        const sources = [
            data.mobileImage.childImageSharp.fluid,
            {
                ...data.desktopImage.childImageSharp.fluid,
                media: `(min-width: 768px)`,
            },
        ];
        return (
            <Layout title={siteTitle} t={t}>
                <SEO title="Index" />
                <HeaderOverlay sources={sources} color="#f5f4f0" inverted={false} content={OverlayContent(false, t)} />
            </Layout>
        );
    }
}

const OverlayContent = (inverted, t) => {
    return (
        <div>
            <h1 className={`header-overlay-headline ${inverted ? 'header-overlay-headline-inverted' : null}`}>
                Transform Your Life
            </h1>
            <h2 className={`header-overlay-subheadline ${inverted ? 'header-overlay-subheadline-inverted' : null}`}>
                Learn from the world’s best teachers, on the world’s leading personal growth platform. Join our
                community of 12 million students from 80 countries.
            </h2>
            <Link to={getPathWithLocale('/book-call')}>
                <Button primary>{t('book-first-call')}</Button>
            </Link>
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
        desktopImage: file(relativePath: { eq: "main-banner.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        mobileImage: file(relativePath: { eq: "main-banner-mobile.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default withI18next('common')(Index);
