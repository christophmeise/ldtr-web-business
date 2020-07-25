import { graphql, Link } from 'gatsby';
import i18n from 'i18next';
import React from 'react';
import { Button } from 'semantic-ui-react';
import HeaderOverlay from '../components/header-overlay/header-overlay';
import Layout from '../components/layout';
import { getPathWithLocale } from '../components/navigateWithLocale';
import SEO from '../components/seo';
import FAQ from './../components/faq/faq';
import SectionRTT from './../components/index/rtt';
import SectionRTTAreas from './../components/index/rtt-areas';
import SectionRTTSteps from './../components/index/rtt-steps';
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
        const backgroundColor = '#e5e2d6';

        return (
            <Layout title={siteTitle} t={t}>
                <SEO title="Index" />
                <HeaderOverlay
                    sources={sources}
                    color={backgroundColor}
                    inverted={false}
                    content={<OverlayContent inverted={false} t={t} />}
                />
                <div className="main-content-sections">
                    <SectionRTT t={t}></SectionRTT>
                    <SectionRTTSteps t={t}></SectionRTTSteps>
                    <SectionRTTAreas t={t}></SectionRTTAreas>
                    <SectionRTTTestimonials t={t}></SectionRTTTestimonials>
                    {/*                     <div data-sal="slide-up" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                        <SectionRTTCallToAction t={t}></SectionRTTCallToAction>
                    </div> */}
                    {/* <SectionRTTBlog t={t}></SectionRTTBlog> */}
                    <FAQ t={t}></FAQ>
                </div>
            </Layout>
        );
    }
}

class OverlayContent extends React.Component<any, any> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { inverted, t } = this.props;
        let typedWords: string[];
        if (i18n.language === 'de') {
            typedWords = ['Stress?', 'Angst?', 'Sucht?'];
        } else {
            typedWords = ['Stress?', 'Anxiety?', 'Addiction?', 'Pain?'];
        }
        return (
            <div>
                <h1 className={`header-overlay-headline ${inverted ? 'header-overlay-headline-inverted' : null}`}>
                    {t('rtt-index-overlay-headline')}
                    {/*  <Typed strings={typedWords} backDelay={2500} typeSpeed={110} backSpeed={100} loop></Typed> */}
                </h1>
                <h2 className={`header-overlay-subheadline ${inverted ? 'header-overlay-subheadline-inverted' : null}`}>
                    {t('rtt-index-overlay-subheadline')}
                </h2>
                <Link to={getPathWithLocale('/book-call')}>
                    <Button className="shadow hover-animate rounded" primary>
                        {t('book-first-call')}
                    </Button>
                </Link>
            </div>
        );
    }
}

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
