import { graphql, Link } from 'gatsby';
import React from 'react';
import { Button } from 'semantic-ui-react';
import HeaderOverlay from '../components/header-overlay/header-overlay';
import Layout from '../components/layout';
import { getPathWithLocale } from '../components/navigateWithLocale';
import SEO from '../components/seo';
import FAQ from './../components/faq/faq';
import SectionRTT from './../components/index/rtt';
import SectionRTTAreas from './../components/index/rtt-areas';
import SectionRTTCallToAction from './../components/index/rtt-call-to-action';
import SectionRTTTestimonials from './../components/index/rtt-testimonials';
import withI18next from './../components/withI18next/withI18next';
import './index.less';

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
                <div className="main-content-sections">
                    <SectionRTT t={t}></SectionRTT>
                    <SectionRTTAreas t={t}></SectionRTTAreas>
                    <div data-sal="slide-up" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                        <SectionRTTTestimonials t={t}></SectionRTTTestimonials>
                    </div>
                    <div data-sal="slide-up" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                        <SectionRTTCallToAction t={t}></SectionRTTCallToAction>
                    </div>
                    <div data-sal="slide-up" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                        <FAQ t={t}></FAQ>
                    </div>
                </div>
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
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        mobileImage: file(relativePath: { eq: "main-banner-mobile.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

export default withI18next(['common', 'faq'])(Index);
