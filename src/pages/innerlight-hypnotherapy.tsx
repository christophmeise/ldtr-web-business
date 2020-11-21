import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Container, Grid, GridColumn } from 'semantic-ui-react';
import HeaderOverlay from '../components/header-overlay/header-overlay';
import Layout from '../components/layout';
import SEO from '../components/seo';
import withI18next from '../components/withI18next/withI18next';
import CallToActionBanner from './../components/call-to-action-banner/call-to-action-banner';
import SectionHeader from './../components/sectionHeader';
import './innerlight-hypnotherapy.less';

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
        waveImg: any;
        christinImg: any;
    };
}

class InnerlightHypnotherapy extends React.Component<Props, any> {
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
        const christinImg = data.christinImg.childImageSharp.fluid;
        const backgroundColor = '#bdaf9d';
        const sources = [
            data.waveImg.childImageSharp.fluid,
            {
                ...data.waveImg.childImageSharp.fluid,
                media: `(min-width: 768px)`,
            },
        ];

        return (
            <Layout title={siteTitle} t={t} invertedHeader={false}>
                <SEO title={t('hypnotherapy:Inner Light Hypnotherapie')} />
                <HeaderOverlay
                    sources={sources}
                    color={backgroundColor}
                    inverted={false}
                    content={<OverlayContent inverted={true} t={t} />}
                    darken={true}
                />
                <div className="main-content-sections">
                    <section>
                        <Container>
                            <SectionHeader
                                headline={t('hypnotherapy:innerlight-hypnotherapy-article1-headline')}
                                subheadline={t('hypnotherapy:innerlight-hypnotherapy-article1-subheadline')}
                                primary={true}
                                textAlign="left"
                            ></SectionHeader>
                            <article>
                                <Container textAlign="left">
                                    <p>{t('hypnotherapy:introduction')}</p>
                                </Container>
                            </article>
                            <article>
                                <Grid style={{ paddingTop: '2em' }} columns="2" stackable>
                                    <GridColumn stretched>
                                        <div className="waves-image-wrapper">
                                            {christinImg != null && (
                                                <Img className="waves-image rounded shadow" fluid={christinImg} />
                                            )}
                                        </div>
                                    </GridColumn>
                                    <GridColumn>
                                        <Container textAlign="left">
                                            <h4>{t('hypnotherapy:subheadline-1')}</h4>
                                            <p>{t('hypnotherapy:text-1')}</p>
                                            <h4> {t('hypnotherapy:subheadline-2')}</h4>
                                            <p>{t('hypnotherapy:text-2')}</p>
                                        </Container>
                                    </GridColumn>
                                </Grid>
                            </article>
                            <article style={{ marginTop: '2em' }}>
                                <Container textAlign="left">
                                    <h4>{t('hypnotherapy:subheadline-3')}</h4>
                                    <p>{t('hypnotherapy:text-3')}</p>
                                </Container>
                            </article>
                        </Container>
                        <div style={{ marginTop: '4em' }}>
                            <CallToActionBanner
                                headline={t('hypnotherapy:calltoaction-headline')}
                                subheadline={t('hypnotherapy:calltoaction-subheadline')}
                                text={t('hypnotherapy:calltoaction-text')}
                                buttonText={t('hypnotherapy:calltoaction-buttonText')}
                                buttonSubtext=""
                            ></CallToActionBanner>
                        </div>
                    </section>
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
        return (
            <div>
                <h1
                    className="header-overlay-headline header-overlay-headline-inverted header-overlay-inner-light"
                    style={{ marginBottom: '0rem', marginTop: '0rem' }}
                >
                    Inner Light
                </h1>
                <h1
                    className={`header-overlay-headline ${inverted ? 'header-overlay-headline-inverted' : null}`}
                    style={{ marginBottom: '0rem', marginTop: '0rem' }}
                >
                    {t('hypnotherapy:Inner Light Hypnotherapie')}
                </h1>
                <h2 className={`header-overlay-subheadline ${inverted ? 'header-overlay-subheadline-inverted' : null}`}>
                    {t('hypnotherapy:innerlight-hypnotherapy-subheadline')}
                </h2>
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
        waveImg: file(relativePath: { eq: "test.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        christinImg: file(relativePath: { eq: "christin.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

export default withI18next(['common', 'hypnotherapy'])(InnerlightHypnotherapy);
