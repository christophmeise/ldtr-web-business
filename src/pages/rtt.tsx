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
                <SEO title="Index" />
                <div className="global-header-padding">
                    <PlainHeader content={HeaderContent(t)} />
                    <div className="main-content-sections">
                        <section>
                            <Container>
                                <article>
                                    <Grid style={{ paddingTop: '2em', marginBottom: '5em' }} columns="2" stackable>
                                        <GridColumn>
                                            <Container textAlign="left">
                                                <h4>Die RTT™ Methode</h4>
                                                <p>
                                                    Rapid Transformational Therapy™ (RTT™) (deutsch: Sofortige
                                                    Transformierende Hypnotherapie) ist eine neuartige,
                                                    neurowissenschaftlich basierte Therapieform, die durch die
                                                    Kombination von Hypnotherapie, Psychotherapie, NLP und Kognitiver
                                                    Verhaltenstherapie schnelle, außergewöhnliche und dauerhafte
                                                    Ergebnisse erzielt. Diese preisgekrönte Technik wurde von der
                                                    international renommierten Therapeutin Marisa Peer (Link zu Stelle
                                                    auf Website) entwickelt und basiert auf über 30 Jahren intensiver
                                                    Forschung.
                                                </p>
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
                                    headline={t('Bekomme Zugang zu deinem größten Potential')}
                                    subheadline={t('Dein Unterbewusstsein')}
                                    primary={true}
                                    textAlign="left"
                                ></SectionHeader>
                                <p>
                                    RTT™ befreit von physischen, emotionalen und psychischen Blockaden, indem durch die
                                    direkte Arbeit mit dem Unterbewusstsein überholte Glaubenssätze, Werte, Gewohnheiten
                                    und tief verwurzelte Emotionen dauerhaft transformiert werden. Der Zustand der
                                    Hypnose ermöglicht es nicht nur die Ursache von sämtlichen Problemen, Mustern oder
                                    Verhaltensweisen aufzudecken. Durch die Hypnose können außerdem überholte,
                                    schmerzhafte und krankmachende Gedankenschleifen durch neue lebensbejahende
                                    Überzeugungen ersetzt werden, wodurch völlige Freiheit und tiefgehender Wandel jetzt
                                    für dich erreichbar sind.
                                </p>
                                <article>
                                    <Grid style={{ paddingTop: '2em' }} columns="2" stackable>
                                        <GridColumn stretched>
                                            <div className="rtt-image-wrapper">
                                                <Img className="rtt-image rounded shadow" fluid={seasideImage} />
                                            </div>
                                        </GridColumn>
                                        <GridColumn>
                                            <Container textAlign="left">
                                                <h4>Das "Warum" hinter den Problemen ist das Tor zur Freiheit</h4>
                                                <p>
                                                    Unser Unterbewusstsein und die dort gespeicherten Glaubenssätze
                                                    bestimmen jeden Moment unseres Lebens wie wir uns fühlen, wie wir
                                                    auf die Ereignisse in der Außenwelt reagieren und was wir für uns
                                                    selbst als erreichbar ansehen. Alles was wir erfahren und gelernt
                                                    haben ist in unserem Unterbewusstsein gespeichert und hat
                                                    Auswirkungen darauf, wie wir das Leben sehen und erfahren. Ja, ich
                                                    will es. Ja, ich weiß es macht Sinn. Warum aber stehe ich immer
                                                    wieder vor den gleichen Herausforderungen, warum erfahre ich immer
                                                    wieder Leid, warum gelingt es mir einfach nicht diese alten,
                                                    schmerzhaften Muster abzulegen? Der Grund dafür ist, dass
                                                    Willenskraft und Logik allein nicht die tiefgehenden Wurzeln von
                                                    schlechten Gewohnheiten oder Selbstzweifeln eliminieren können. Nur
                                                    wenn die Ursache des Problems gelöst ist, fallen auch alle Schichten
                                                    an der Oberfläche von dir ab.
                                                </p>
                                            </Container>
                                            <Container
                                                textAlign="center"
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
                                                        <Icon
                                                            name="question circle"
                                                            className="left"
                                                            style={{ opacity: '1' }}
                                                        ></Icon>
                                                        {t('faq:faq-learn-more')}
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
                                                {t('rtt-call-to-action-text')}
                                            </h2>
                                            <Button primary size="medium">
                                                {t('rtt-call-to-action-button')}
                                            </Button>
                                        </GridColumn>
                                    </Grid>
                                    <Container
                                        className="rtt-call-container-mobile responsive-mobile-container"
                                        textAlign="left"
                                    >
                                        <h2 className="call-to-action-text font-playfair">
                                            {t('rtt-call-to-action-text')}
                                        </h2>
                                        <Link to={getPathWithLocale('/book-call')}>
                                            <Button primary size="medium" className="shadow hover-animate">
                                                {t('rtt-call-to-action-button')}
                                            </Button>
                                        </Link>
                                    </Container>
                                </Container>
                            </BackgroundImage>
                        </section>

                        <SectionRTTSteps t={t}></SectionRTTSteps>
                        <div style={{ marginBottom: '6rem' }}>
                            <CallToActionBanner
                                headline={t('rtt-shop-call-to-action-headline')}
                                subheadline={t('rtt-shop-call-to-action-subheadline')}
                                text={t('rtt-shop-call-to-action-description')}
                                buttonText={t('rtt-call-to-action-button')}
                                buttonSubtext={t('rtt-shop-call-to-action-free')}
                            ></CallToActionBanner>
                        </div>
                        <section>
                            <Container>
                                <SectionHeader
                                    headline={t('Was unterscheidet RTT von herkömmlichen Therapien?')}
                                    subheadline={t('Warum RTT die Therapie-Welt revolutioniert')}
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
                                    headline={t('Marisa Peer, Erfinderin der Rapid Transformational Therapy')}
                                    subheadline={t('Wer entwickelte RTT und warum?')}
                                    primary={true}
                                    textAlign="left"
                                ></SectionHeader>
                                <p>
                                    Marisa Peer ist eine der weltweit angesehensten Therapeutinnen, Verhaltensexpertin,
                                    Bestseller-Autorin und die Erfinderin der Rapid Transformational Therapy (RTT™). Sie
                                    hinterfragte die immer noch verbreitete Überzeugung, dass etwas so Komplexes wie der
                                    Geist sich einer simplen und raschen Transformation entziehe. Mit dem, was sie in
                                    ihrer über 30-jährigen Karriere erreicht hat, bezeugt sie das Gegenteil: Klienten,
                                    denen andere Therapeuten und Ärzte nicht helfen konnten, transformierte sie meist in
                                    nur einer Sitzung durch die Anwendung ihrer eigens entwickelten Therapie-Methode.
                                </p>
                                <Grid style={{ paddingTop: '2em' }} columns="2" stackable>
                                    <GridRow>
                                        <GridColumn stretched>
                                            <div className="rtt-image-wrapper">
                                                <Img className="rtt-image rounded shadow" fluid={wunderkerzeImage} />
                                            </div>
                                        </GridColumn>
                                        <GridColumn>
                                            <Container textAlign="left">
                                                <h4>Headline***</h4>
                                                <p>
                                                    Indem sie jene Elemente aus verschiedensten Therapie-Ansätzen
                                                    vereinte, die bei ihren Klienten immer wieder schnellen und
                                                    wirksamen Erfolg gezeigt haben, entwickelte sie einen umfassenden
                                                    lösungsorientierten Ansatz der weit über die Resultate herkömmlicher
                                                    Therapien hinaus geht. In ihrer Arbeit mit Sportweltmeistern, Stars,
                                                    Olympia-Athleten, CEOs und politischen Führungskräften konnte sie
                                                    mit RTT™ außergewöhnliche Ergebnisse erzielen und über dreißig Jahre
                                                    Erfahrung in Psychotherapie, Hypnotherapie, kognitiver
                                                    Verhaltenstherapie (CBT) und neurolinguistischer Programmierung
                                                    (NLP) sammeln.
                                                </p>
                                            </Container>
                                        </GridColumn>
                                    </GridRow>
                                    <GridRow>
                                        <Container textAlign="left">
                                            <p>
                                                Vor einigen Jahren hat Marisa Peer begonnen, ihren innovativen
                                                Therapieansatz als umfangreiche Ausbildung anzubieten aus dem tiefen
                                                Wunsch heraus, mit RTT weltweit so viele Menschen wie nur möglich
                                                schnelle und wirksame Heilung zu ermöglichen. Ihre revolutionäre
                                                Therapie-Methode ist jetzt auch in Deutschland verfügbar. Entdecke hier
                                                wie RTT auch dein Leben verändern kann! (link zu Anwendungsgebieten)
                                            </p>
                                        </Container>
                                    </GridRow>
                                    <GridRow>
                                        <Container textAlign="left">
                                            <p>
                                                RTT® wird vom Allgemeinen Hypnotherapieregister, dem Rat für
                                                Komplementär- und Naturheilkunde, dem Nationalen und Internationalen Rat
                                                der Psychotherapeuten, dem American Board of Hypnotherapy, dem
                                                Internationalen Verband der Komplementärtherapeuten sowie dem
                                                Internationalen Institut für Komplementärtherapien befürwortet.
                                            </p>
                                        </Container>
                                    </GridRow>
                                    <GridRow>
                                        <Container>
                                            <BackgroundImage
                                                className="rtt-logos-image shadow rounded"
                                                fluid={data.approvedImage.childImageSharp.fluid}
                                            ></BackgroundImage>
                                        </Container>
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
            <h1 className="header-overlay-headline">{t('rtt-page-headline')}</h1>
            <h2 className="header-overlay-subheadline">{t('rtt-page-subheadline')}</h2>
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

export default withI18next(['common', 'faq'])(RttPage);
