import { faDove, faListUl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import React from 'react';
import { Button, Container, Embed, Grid, GridColumn, GridRow, Icon } from 'semantic-ui-react';
import SectionRTTSteps from '../components/index/rtt-steps';
import Layout from '../components/layout';
import { getPathWithLocale } from '../components/navigateWithLocale';
import PlainHeader from '../components/plain-overlay/plain-header';
import SEO from '../components/seo';
import withI18next from '../components/withI18next/withI18next';
import CallToActionBanner from './../components/call-to-action-banner/call-to-action-banner';
import SectionHeader from './../components/sectionHeader';
import './rtt.less';

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
        rttImage: any;
        seasideImage: any;
        oceanwavesImage: any;
        wunderkerzeImage: any;
        approvedImage: any;
    };
}

class RttPage extends React.Component<Props, any> {
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
        const rttImage = data.rttImage.childImageSharp.fluid;
        const seasideImage = data.seasideImage.childImageSharp.fluid;
        const oceanwavesImage = data.oceanwavesImage.childImageSharp.fluid;
        const wunderkerzeImage = data.wunderkerzeImage.childImageSharp.fluid;
        const approvedImage = data.approvedImage.childImageSharp.fluid;

        return (
            <Layout title={siteTitle} t={t}>
                <SEO title={t('rtt:Rapid Transformational Therapy')} />
                <div className="global-header-padding">
                    <PlainHeader content={HeaderContent(t)} />
                    <div className="main-content-sections">
                        <section>
                            <Container>
                                <article>
                                    <Grid style={{ paddingTop: '2em', marginBottom: '5em' }} columns="2" stackable>
                                        <GridColumn>
                                            <Container textAlign="left">
                                                <h4>{t('rtt:Die RTT™ Methode')}</h4>
                                                <p>{t('rtt:Die RTT™ Methode - text')}</p>
                                            </Container>
                                            <Container
                                                textAlign="left"
                                                className="rtt-main-button-container"
                                                data-sal="slide-up"
                                                data-sal-delay="0"
                                                data-sal-duration="300"
                                                data-sal-easing="ease"
                                            >
                                                <a
                                                    href="https://marisapeer.com/"
                                                    target="_blank"
                                                    rel="noopener"
                                                    aria-label="Marisa Peer"
                                                >
                                                    <Button
                                                        secondary={true}
                                                        basic
                                                        inverted={false}
                                                        size="medium"
                                                        className="rounded shadow hover-animate"
                                                    >
                                                        <FontAwesomeIcon icon={faDove} style={{ opacity: '1' }} />
                                                        {t('rtt:Mehr zu Marisa Peer')}
                                                    </Button>
                                                </a>
                                            </Container>
                                        </GridColumn>
                                        <GridColumn stretched>
                                            <div className="rtt-image-wrapper">
                                                <Img className="rtt-image rounded shadow" fluid={rttImage} />
                                            </div>
                                        </GridColumn>
                                    </Grid>
                                </article>
                                <SectionHeader
                                    headline={t('rtt:Bekomme Zugang zu deinem größten Potential')}
                                    subheadline={t('rtt:Dein Unterbewusstsein')}
                                    primary={true}
                                    textAlign="left"
                                ></SectionHeader>
                                <p>{t('rtt:Bekomme Zugang zu deinem größten Potential - text')}</p>
                                <article>
                                    <Grid style={{ paddingTop: '2em' }} columns="2" stackable>
                                        <GridColumn stretched>
                                            <div className="rtt-image-wrapper">
                                                <Img className="rtt-image rounded shadow" fluid={seasideImage} />
                                            </div>
                                        </GridColumn>
                                        <GridColumn>
                                            <Container textAlign="left">
                                                <h4>{t('rtt:das-warum')}</h4>
                                                <p>{t('rtt:das-warum-text')}</p>
                                            </Container>
                                            <Container
                                                textAlign="left"
                                                className="rtt-main-button-container"
                                                data-sal="slide-up"
                                                data-sal-delay="0"
                                                data-sal-duration="300"
                                                data-sal-easing="ease"
                                            >
                                                <Link to={getPathWithLocale('/faq')}>
                                                    <Button
                                                        secondary={true}
                                                        basic
                                                        inverted={false}
                                                        size="medium"
                                                        className="rounded shadow hover-animate"
                                                    >
                                                        {t('faq:faq-learn-more')}
                                                        <Icon name="arrow right" style={{ opacity: '1' }}></Icon>
                                                    </Button>
                                                </Link>
                                            </Container>
                                        </GridColumn>
                                    </Grid>
                                </article>
                            </Container>
                        </section>

                        <section>
                            <BackgroundImage
                                className="rtt-call-to-action-image shadow"
                                fluid={data.oceanwavesImage.childImageSharp.fluid}
                            >
                                <Container className="rtt-call-to-action-image-container">
                                    <Grid
                                        className="rtt-call-container-desktop responsive-desktop-container"
                                        verticalAlign="middle"
                                    >
                                        <GridColumn width={16} verticalAlign="middle">
                                            <h2 className="call-to-action-text font-playfair">
                                                {t('rtt:Mit RTT zu deinem besten Selbst')}
                                            </h2>
                                            <Link to={getPathWithLocale('/book-call')}>
                                                <Button primary size="medium" className="rounded shadow hover-animate">
                                                    {t('rtt:Jetzt Termin vereinbaren')}
                                                </Button>
                                            </Link>
                                        </GridColumn>
                                    </Grid>
                                    <Container
                                        className="rtt-call-container-mobile responsive-mobile-container"
                                        textAlign="left"
                                    >
                                        <h2 className="call-to-action-text font-playfair">
                                            {t('rtt:Mit RTT zu deinem besten Selbst')}
                                        </h2>
                                        <Link to={getPathWithLocale('/book-call')}>
                                            <Button primary size="medium" className="rounded shadow hover-animate">
                                                {t('rtt:Jetzt Termin vereinbaren')}
                                            </Button>
                                        </Link>
                                    </Container>
                                </Container>
                            </BackgroundImage>
                        </section>

                        <SectionRTTSteps t={t}></SectionRTTSteps>
                        <div style={{ marginBottom: '6rem' }}>
                            <CallToActionBanner
                                headline={t('rtt:rtt-shop-call-to-action-headline')}
                                subheadline={t('rtt:rtt-shop-call-to-action-subheadline')}
                                text={t('rtt:rtt-shop-call-to-action-description')}
                                buttonText={t('rtt:rtt-call-to-action-button')}
                                buttonSubtext={t('rtt:rtt-shop-call-to-action-free')}
                            ></CallToActionBanner>
                        </div>
                        <section>
                            <Container>
                                <SectionHeader
                                    headline={t('rtt:Was unterscheidet RTT von herkömmlichen Therapien?')}
                                    subheadline={t('rtt:Warum RTT die Therapie-Welt revolutioniert')}
                                    primary={true}
                                    textAlign="center"
                                ></SectionHeader>
                                <Grid columns="1" centered stackable>
                                    <GridColumn width="12" className="index-rtt-video-container">
                                        <Embed
                                            id="nSdAb_O7McI"
                                            aspectRatio="16:9"
                                            className="video-wrapper shadow rounded hover-animate"
                                            placeholder="/youtube-placeholder-2.jpg"
                                            alt="youtube-image-placeholder"
                                            source="youtube"
                                            autoplay
                                        />
                                    </GridColumn>
                                </Grid>
                            </Container>
                        </section>
                        <section>
                            <Container>
                                <SectionHeader
                                    headline={t('rtt:Marisa Peer, Erfinderin der Rapid Transformational Therapy')}
                                    subheadline={t('rtt:Wer entwickelte RTT und warum?')}
                                    primary={true}
                                    textAlign="left"
                                ></SectionHeader>
                                <p>{t('rtt:Marisa Peer - text')}</p>
                                <Grid style={{ paddingTop: '2em' }} columns="2" stackable>
                                    <GridRow>
                                        <GridColumn stretched>
                                            <div className="rtt-image-wrapper">
                                                <Img className="rtt-image rounded shadow" fluid={wunderkerzeImage} />
                                            </div>
                                        </GridColumn>
                                        <GridColumn>
                                            <Container textAlign="left">
                                                <h4>{t('rtt:Marisa Peer - subheadline')}</h4>
                                                <p>{t('rtt:Marisa Peer - subtext1')}</p>
                                            </Container>
                                        </GridColumn>
                                    </GridRow>
                                    <GridRow>
                                        <Container textAlign="left">
                                            <p>{t('rtt:Marisa Peer - subtext2')}</p>
                                        </Container>
                                    </GridRow>
                                    <GridRow className="rtt-hacky-button" style={{ marginTop: '-3rem' }}>
                                        <Container
                                            textAlign="center"
                                            className="rtt-main-button-container"
                                            style={{ marginTop: '0 !important' }}
                                        >
                                            <Link to={getPathWithLocale('/rtt-areas')}>
                                                <Button
                                                    secondary={true}
                                                    basic
                                                    inverted={false}
                                                    size="medium"
                                                    className="rounded shadow hover-animate"
                                                >
                                                    <FontAwesomeIcon icon={faListUl} style={{ opacity: '1' }} />
                                                    {t('rtt-areas-button')}
                                                </Button>
                                            </Link>
                                        </Container>
                                    </GridRow>
                                    <GridRow>
                                        <Container textAlign="left">
                                            <p>{t('rtt:Marisa Peer - subtext3')}</p>
                                        </Container>
                                    </GridRow>
                                    <GridRow columns="1">
                                        <GridColumn stretched>
                                            <div className="rtt-logos-image">
                                                <Img className="rtt-image rounded shadow" fluid={data.approvedImage.childImageSharp.fluid} />
                                            </div>
                                        </GridColumn>

                                        {/*                                             <BackgroundImage
                                                className="rtt-logos-image shadow rounded"
                                                fluid={data.approvedImage.childImageSharp.fluid}
                                            ></BackgroundImage> */}
                                    </GridRow>
                                </Grid>
                            </Container>
                        </section>
                    </div>
                </div>
            </Layout>
        );
    }
}

const HeaderContent = (t) => {
    return (
        <div>
            <h1 className="header-overlay-headline">{t('rtt:Rapid Transformational Therapy')}</h1>
            <h2 className="header-overlay-subheadline">
                {t('rtt:Erfahre alles über die RTT Methode und der Begründerin Marisa Peer')}
            </h2>
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
        rttImage: file(relativePath: { eq: "rtt.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        seasideImage: file(relativePath: { eq: "seaside.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        wunderkerzeImage: file(relativePath: { eq: "wunderkerze.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        oceanwavesImage: file(relativePath: { eq: "oceanwaves.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        approvedImage: file(relativePath: { eq: "approved_logos.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

export default withI18next(['common', 'faq', 'rtt'])(RttPage);
