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
                                            <p>
                                                Wenn Du diese Worte liest, gehörst Du zu den außergewöhnlichen Menschen, die sich in ihrem Leben nicht mehr mit „okay“ zufrieden geben möchten. Die sich nicht mehr damit abfinden, dass die Vergangenheit ihre Gegenwart und Zukunft bestimmt. Die ihre Zeit und ihr Geld nicht mehr in langwierigen, ineffizienten Therapien stecken wollen, um endlich das Leben leben zu können, das sie verdienen. Ich könnte nicht dankbarer sein, dass Du den Weg zu mir gefunden hast, denn alles, was du dir wünschst ist für Dich erreichbar – jetzt und für immer.
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
                                                    <h4>Wer ich bin</h4>
                                                    <p>
                                                    Von ganzem Herzen bin ich der Überzeugung, dass jeder Einzelne genau das Leben verdient von dem er träumt – ob es eine glückliche Beziehung ist, eine erfüllende Karriere, vollkommene Gesundheit oder unerschütterliches Selbstvertrauen. Mein Name ist Christin Meise und ich bin qualifizierter Hypnose-Coach nach der Rapid Transformational Therapy™. Daher weiß ich, dass dieses Leben für absolut jeden erreichbar ist. Ich schätze mich sehr glücklich, die Begründerin der bahnbrechenden Methode RTT™ – Marisa Peer – als Lehrerin und Mentorin haben zu dürfen, die mich befähigt hat, meinen Klienten schnell und dauerhaft Freiheit schenken zu können.
                                                    </p>
                                                    <h4>Dein bestes Leben beginnt, wenn du wahrhaft frei bist</h4>
                                                    <p>
                                                        Nachdem ich als Coach und Mentorin mit Kindern und Jugendlichen aus sozial und wirtschaftlich benachteiligten Verhältnissen unter dem Konzept von ROCK YOUR LIFE! gearbeitet habe, um ihnen das Leben zu ermöglichen von dem sie träumen und was sie verdienen, ist mir immer wieder bewusst geworden, dass wir nur die Symptome an der Oberfläche erreichen. Mein Anspruch ist es meinen Klienten nicht nur zu ermöglichen mit ihren Problemen zurechtzukommen, sondern sie dauerhaft von der Ursache ihrer Probleme zu befreien. Wenn ein Klient mit emotionalen oder körperlichen Blockaden zu mir kommt, dann braucht er keine langwierigen Gespräche darüber wie schmerzvoll es ist, sondern Erlösung davon. Und nur eine bis drei Sessions nach der Rapid Transformational Therapy™-Methode machen das auch für Dich möglich.
                                                    </p>
                                                </Container>
                                            </GridColumn>
                                        </Grid>
                                    </article>
                                    <article style={{ marginTop: '2em' }}>
                                        <Container textAlign="left">
                                        <h4>Reise mit mir in dein Unterbewusstsein</h4>
                                            <p>
                                            Die schönste und wertvollste Reise im Leben ist die zu deinem wahren Selbst. Zu deinem ganzen Potential. Zu deiner Freiheit. Ich bin für Dich da, um dich bei dieser Reise zu begleiten, deine Vergangenheit hinter dir zu lassen und deine Zukunft nach deinen Vorstellungen zu kreieren. Ich unterstütze dich dabei  deine unterbewussten Glaubenssätze zu erkennen und zu transformieren, deinen inneren Frieden wiederzufinden und dein bestes Selbst in allen Lebensbereichen zu erschaffen. Denn meine größte Motivation ist es dein inneres Licht wieder zum Strahlen zu bringen - für dich, für deine Liebsten und für die ganze Welt. Denn du bist wichtig, du bist gewollt, du bist genug - ganz genauso wie du bist.
                                            </p>
                                        </Container>
                                    </article>
                                    </Container>
                                <div style={{ marginTop: '4em' }}>
                                    <CallToActionBanner
                                        headline="Bist du bereit deine Macht zurückzufordern über dich, dein Leben und deine Zukunft?"
                                        subheadline="Buche noch heute dein Gespräch mit mir"
                                        text="Denn der ersehnte Wandel in deinem Leben ist jetzt und dauerhaft für Dich erreichbar."
                                        buttonText="Gratis Beratung buchen"
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
