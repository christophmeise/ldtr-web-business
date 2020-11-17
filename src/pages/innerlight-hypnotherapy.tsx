import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Container, Grid, GridColumn } from 'semantic-ui-react';
import Layout from '../components/layout';
import PlainHeader from '../components/plain-overlay/plain-header';
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
        const wavesImg = data.waveImg.childImageSharp.fluid;

        return (
            <Layout title={siteTitle} t={t}>
                <SEO title={t('hypnotherapy:Inner Light Hypnotherapie')} />
                <Container className="global-header-padding">
                    <PlainHeader content={HeaderContent(t)} />
                    <Container>
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
                                                    {wavesImg != null && (
                                                        <Img className="waves-image rounded shadow" fluid={wavesImg} />
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
                    </Container>
                </Container>
            </Layout>
        );
    }
}

const HeaderContent = (t) => {
    return (
        <div>
            <h1 className="header-overlay-headline">{t('hypnotherapy:Inner Light Hypnotherapie')}</h1>
            <h2 className="header-overlay-subheadline">{t('hypnotherapy:innerlight-hypnotherapy-subheadline')}</h2>
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
        waveImg: file(relativePath: { eq: "waves.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

export default withI18next(['common', 'hypnotherapy'])(InnerlightHypnotherapy);
