import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import React from 'react';
import { Button, Container, Embed, Grid, GridColumn, GridRow, Icon, Label } from 'semantic-ui-react';
import BusinessIcons from '../components/BusinessIcons/business-icons';
import CallToActionBanner from '../components/call-to-action-banner/call-to-action-banner';
import HeaderOverlay from '../components/header-overlay/header-overlay';
import SectionRTTSteps from '../components/index/rtt-steps';
import Layout from '../components/layout';
import { getPathWithLocale } from '../components/navigateWithLocale';
import SectionHeader from '../components/sectionHeader';
import SEO from '../components/seo';
import withI18next from '../components/withI18next/withI18next';
import './business.less';

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
        officeImage: any;
        oceanwavesImage: any;
        wunderkerzeImage: any;
        approvedImage: any;
    };
}

class BusinessPage extends React.Component<Props, any> {
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
        const oceanwavesImage = data.oceanwavesImage.childImageSharp.fluid;
        const wunderkerzeImage = data.wunderkerzeImage.childImageSharp.fluid;
        const approvedImage = data.approvedImage.childImageSharp.fluid;

        const sources = [
            data.officeImage.childImageSharp.fluid,
            {
                ...data.officeImage.childImageSharp.fluid,
                media: `(min-width: 768px)`,
            },
        ];

        const tagLabels1 = [
            t('business:text-7.2-li-1'),
            t('business:text-7.2-li-2'),
            t('business:text-7.2-li-3'),
            t('business:text-7.2-li-4'),
            t('business:text-7.2-li-5'),
            t('business:text-7.2-li-6'),
            t('business:text-7.2-li-7'),
            t('business:text-7.2-li-8'),
            t('business:text-7.2-li-9'),
            t('business:text-7.2-li-10'),
            t('business:text-7.2-li-11')
        ];
        const tagLabels2 = [
            t('business:text-7.3-li-1'),
            t('business:text-7.3-li-2'),
            t('business:text-7.3-li-3'),
            t('business:text-7.3-li-4'),
            t('business:text-7.3-li-5'),
            t('business:text-7.3-li-6'),
            t('business:text-7.3-li-7'),
            t('business:text-7.3-li-8'),
            t('business:text-7.3-li-9'),
            t('business:text-7.3-li-10'),
            t('business:text-7.3-li-11'),
            t('business:text-7.3-li-12'),
            t('business:text-7.3-li-13'),
            t('business:text-7.3-li-14'),
            t('business:text-7.3-li-15'),
        ];

        return (
            <Layout title={siteTitle} t={t}>
                <SEO title={t('rtt:Rapid Transformational Therapy')} />
                <HeaderOverlay
                    sources={sources}
                    color="#FFFFFF"
                    inverted={false}
                    content={<OverlayContent inverted={true} t={t} />}
                    darken={true}
                    veryDark={true}
                    width={10}
                />
                <div className="main-content-sections">
                    <section>
                        <Container>
                            <article>
                                <SectionHeader
                                    headline={t('business:Die innovative Lösung für Ihr Human Resource Management')}
                                    subheadline={t('business:Business Coaching')}
                                    primary={true}
                                    textAlign="left"
                                ></SectionHeader>
                                <ul>
                                    <li>{t('business:text-0-li-1')}</li>
                                    <li>{t('business:text-0-li-2')}</li>
                                    <li>{t('business:text-0-li-3')}</li>
                                    <li>{t('business:text-0-li-4')}</li>
                                    <li>{t('business:text-0-li-5')}</li>
                                </ul>
                            </article>
                            <hr />
                            <p>{t('business:text-1')}</p>
                            <p>{t('business:text-2')}</p>
                            <ul>
                                <li>{t('business:text-2-li-1')}</li>
                                <li>{t('business:text-2-li-2')}</li>
                                <li>{t('business:text-2-li-3')}</li>
                            </ul>
                            <h4>{t('business:Warum es besonders wichtig ist JETZT zu handeln!')}</h4>
                            <p>{t('business:text-3')}</p>
                            <p>{t('business:text-4')}</p>
                            <p>{t('business:text-5')}</p>
                            <h4>{t('business:Innovative Unternehmen brauchen zukunftsweisendes Business-Coaching')}</h4>
                            <p>{t('business:text-6')}</p>

                            {/* insert moving icons */}
                            <BusinessIcons t={t}></BusinessIcons>

                            <h4>{t('business:text-7')}</h4>
                            <p>{t('business:text-7.1')}</p>
                            <strong>{t('business:text-7.2')}</strong>
                            <Label.Group className="business-tag-label-group">
                                {tagLabels1.map((tag, index) => {
                                    return (
                                        <Label
                                            key={"tag-" + index}
                                            as="a"
                                            className="blog-post-tag-label"
                                            circular
                                        >
                                            {tag}
                                        </Label>
                                    );
                                })}
                            </Label.Group>
                            <strong>{t('business:text-7.3')}</strong>
                            <Label.Group className="business-tag-label-group">
                                {tagLabels2.map((tag, index) => {
                                    return (
                                        <Label
                                            key={"tag-" + index}
                                            as="a"
                                            className="blog-post-tag-label"
                                            circular
                                        >
                                            {tag}
                                        </Label>
                                    );
                                })}
                            </Label.Group>
                            <p>{t('business:text-7.4')}</p>
                            <h4>{t('business:text-8')}</h4>
                            <p>{t('business:text-8.1')}</p>
                            <h5>{t('business:text-9')}</h5>
                            <p>{t('business:text-9.1')}</p>
                            <h5>{t('business:text-10')}</h5>
                            <p>{t('business:text-10.1')}</p>
                            <h5>{t('business:text-11')}</h5>
                            <p>{t('business:text-11.1')}</p>

                            <h4>{t('business:text-12')}</h4>
                            <ul>
                                <li>{t('business:text-12-li-1.1')}</li>
                                <li>{t('business:text-12-li-1.2')}</li>
                                <li>{t('business:text-12-li-2.1')}</li>
                                <li>{t('business:text-12-li-2.2')}</li>
                                <li>{t('business:text-12-li-3.1')}</li>
                                <li>{t('business:text-12-li-3.2')}</li>
                                <li>{t('business:text-12-li-4.1')}</li>
                                <li>{t('business:text-12-li-4.2')}</li>
                            </ul>
                            <h4>{t('business:text-13')}</h4>
                            {/* table here */}
                            <h4>{t('business:text-14')}</h4>
                            <p>{t('business:text-14.1')}</p>
                            <p>{t('business:text-14.2')}</p>
                            <article>
                                <Grid style={{ paddingTop: '2em' }} columns="2" stackable>
                                    {/*  <GridColumn stretched>
                                            <div className="rtt-image-wrapper">
                                                <Img className="rtt-image rounded shadow" fluid={seasideImage} />
                                            </div>
                                        </GridColumn> */}
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
                    {t('business:headline')}
                </h1>
                <h2 className={`header-overlay-subheadline ${inverted ? 'header-overlay-subheadline-inverted' : null}`}>
                    {t('business:subheadline')}
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
        rttImage: file(relativePath: { eq: "rtt.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        officeImage: file(relativePath: { eq: "business/office.jpg" }) {
            childImageSharp {
                fluid(quality: 100) {
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

export default withI18next(['common', 'faq', 'rtt', 'business'])(BusinessPage);
