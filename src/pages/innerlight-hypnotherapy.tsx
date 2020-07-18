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
                <SEO title="Index" />
                <Container className="global-header-padding">
                    <PlainHeader content={HeaderContent(t)} />
                    <Container>
                        <div className="main-content-sections">
                            <section>
                                <Container>
                                    <SectionHeader
                                        headline={t('innerlight-hypnotherapy-article1-headline')}
                                        subheadline={t('innerlight-hypnotherapy-article1-subheadline')}
                                        primary={true}
                                        textAlign="left"
                                    ></SectionHeader>
                                    <article>
                                        <Container textAlign="left">
                                            <p>
                                                Wenn sie diese Worte lesen, gehören Sie zu den außergewöhnlichen
                                                Menschen, die sich in ihrem Leben nicht mehr mit „okay“ zufrieden geben
                                                möchten. Die sich nicht mehr damit abfinden, dass die Vergangenheit ihre
                                                Gegenwart und Zukunft bestimmt. Die ihre Zeit und ihr Geld nicht mehr in
                                                langwierigen, ineffizienten Therapien stecken wollen, um endlich das
                                                Leben leben zu können, das sie verdienen. Ich könnte nicht dankbarer
                                                sein, dass Sie den Weg zu mir gefunden haben, denn alles, was sie sich
                                                wünschen ist für sie erreichbar – jetzt und für immer.
                                            </p>
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
                                                    <h4>Überschrift***</h4>
                                                    <p>
                                                        Von ganzem Herzen bin ich der Überzeugung, dass jeder einzelne
                                                        genau das Leben verdient von dem er träumt – ob es eine
                                                        glückliche Beziehung ist, eine erfüllende Karriere, vollkommene
                                                        Gesundheit oder unerschütterliches Selbstvertrauen. Und als RTT
                                                        Therapeutin weiß ich, dass dieses Leben für absolut jeden
                                                        erreichbar ist. Ich schätze mich sehr glücklich, die Begründerin
                                                        der bahnbrechenden Methode RTT – Marisa Peer (Link)– als
                                                        Lehrerin und Mentorin haben zu dürfen, die mich befähigt hat,
                                                        meinen Klienten schnell und dauerhaft Freiheit schenken zu
                                                        können.
                                                    </p>
                                                    <h4>Überschrift***</h4>
                                                    <p>
                                                        Nachdem ich als Coach und Mentorin mit Kindern und Jugendlichen
                                                        aus sozial und wirtschaftlich benachteiligten Verhältnissen
                                                        unter dem Konzept von ROCK YOUR LIFE gearbeitet habe, um ihnen
                                                        das Leben zu ermöglichen von dem sie träumen und was sie
                                                        verdienen, ist mir immer wieder bewusst geworden, dass wir nur
                                                        die Symptome an der Oberfläche erreichen. Mein Anspruch ist es,
                                                        es meinen Klienten nicht nur zu ermöglichen mit ihren Problemen
                                                        zurechtzukommen, sondern sie dauerhaft von der Ursache ihrer
                                                        Probleme zu befreien. Wenn ein Klient mit emotionalen oder
                                                        körperlichen Schmerzen zu mir kommt, dann braucht er keine
                                                        langwierigen Gespräche darüber wie schmerzvoll es ist, sondern
                                                        Heilung. Und nur eine bis drei Sessions nach der Rapid
                                                        Transformational Therapy-Methode machen das möglich.
                                                    </p>
                                                </Container>
                                            </GridColumn>
                                        </Grid>
                                    </article>
                                </Container>
                                <CallToActionBanner
                                    headline="Buch deine Session heute"
                                    subheadline="Der ersehnten Wandel in Ihrem Leben ist jetzt und dauerhaft für Sie erreichbar."
                                    text="Buchen Sie hier direkt ihr individuelles Paket (Link Shop) oder lesen Sie
                            hier mehr zu der bahnbrechenden Methode RTT (Link RTT)."
                                    buttonText="Individuelles Paket buchen"
                                    buttonSubtext=""
                                ></CallToActionBanner>
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
            <h1 className="header-overlay-headline">{t('innerlight-hypnotherapy-headline')}</h1>
            <h2 className="header-overlay-subheadline">{t('innerlight-hypnotherapy-subheadline')}</h2>
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

export default withI18next(['common'])(InnerlightHypnotherapy);
