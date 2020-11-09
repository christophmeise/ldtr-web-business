import { graphql, Link } from 'gatsby';
import i18n from 'i18next';
import React from 'react';
import { Button, Container, Icon } from 'semantic-ui-react';
import CallToActionBanner from '../components/call-to-action-banner/call-to-action-banner';
import HeaderOverlay from '../components/header-overlay/header-overlay';
import Layout from '../components/layout';
import { getPathWithLocale } from '../components/navigateWithLocale';
import SEO from '../components/seo';
import withI18next from '../components/withI18next/withI18next';

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
        mobileImage: any;
        desktopImage: any;
    };
}

class RttAreasPage extends React.Component<Props, any> {
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
                const sources = [
            data.mobileImage.childImageSharp.fluid,
            {
                ...data.desktopImage.childImageSharp.fluid,
                media: `(min-width: 768px)`,
            },
        ];
        const backgroundColor = '#0a0807';


        return (
            <Layout title={siteTitle} t={t} invertedHeader={true}>
                <SEO title={t('rtt-areas:Anwendungsbereiche')} />
                   <HeaderOverlay
                    sources={sources}
                    color={backgroundColor}
                    inverted={true}
                    content={<OverlayContent inverted={true} t={t} />}
                    darken={true}
                />
                <Container className="global-header-padding-small">
{/*                     <PlainHeader content={HeaderContent(t)} /> */}
                                 
                <div>
                    <Container>
                        <div>
                            <section>
                                <h3 className="medium-weight-font" style={{ marginBottom: '2.5rem' }}>{t('rtt-areas:Einleitung')}</h3>
                                <Container text>
                                <ul>
                                    <li>{t('rtt-areas:Angstverhalten')}</li>
                                    <li>{t('rtt-areas:Arbeit mit Kindern')}</li>
                                    <li>{t('rtt-areas:Beziehungsprobleme')}</li>
                                    <li>{t('rtt-areas:Entspannungsschwierigkeiten')}</li>
                                    <li>{t('rtt-areas:Erreichung des Idealgewichts')}</li>
                                    <li>{t('rtt-areas:Karriereprobleme')}</li>
                                    <li>{t('rtt-areas:Motivationsprobleme')}</li>
                                    <li>{t('rtt-areas:Selbstvertrauen')}</li>
                                    <li>{t('rtt-areas:Prüfungsangst')}</li>
                                    <li>{t('rtt-areas:Rauch- und Alkoholentwöhnung')}</li>
                                    <li>{t('rtt-areas:Schlafschwierigkeiten')}</li>
                                    <li>{t('rtt-areas:Schwangerschafts- und Fruchtbarkeitsproblemen')}</li>
                                    <li>{t('rtt-areas:Schuldgefühle')}</li>
                                    <li>{t('rtt-areas:Sexuelle Probleme')}</li>
                                    <li>{t('rtt-areas:Stress')}</li>
                                    <li>{t('rtt-areas:Sportliche Leistungsschwierigkeiten')}</li>
                                    <li>{t('rtt-areas:Vorträge')}</li>
                                </ul>
                                </Container>

                                <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
                                     <p style={{ fontSize: '1.14285714rem'}}>{t('rtt-areas:Haupttext')}</p>                                </Container>
                                <Container textAlign="center" style={{ paddingBottom: '3rem' }}>
                                    <Link to={getPathWithLocale('/rtt')}>
                                        <Button
                                            secondary={true}
                                            basic
                                            inverted={false}
                                            size="medium"
                                            className="rounded shadow hover-animate"
                                        >
                                            <Icon name="tasks" className="left" style={{ opacity: '1' }}></Icon>
                                            {t('rtt-button')}
                                        </Button>
                                    </Link>
                                </Container>
                                                                <Container style={{ paddingBottom: '3rem' }}>
                                     <CallToActionBanner
                                headline={t('rtt-areas:call-to-action-title')}
                                subheadline={t('rtt-areas:call-to-action-subtitle')}
                                text={t('rtt-areas:call-to-action-text')}
                                buttonText={t('rtt-areas:call-to-action-button')}
                                buttonSubtext={''}
                            ></CallToActionBanner>
                                </Container>
                            </section>
                        </div>
                    </Container>
                    </div>
                </Container>
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
                <h1
                    className={`header-overlay-headline ${inverted ? 'header-overlay-headline-inverted' : null}`}
                    style={{ marginBottom: '0rem' }}
                >
                    {t('rtt-areas:Anwendungsbereiche')}
                </h1>
                <h2 className={`header-overlay-subheadline ${inverted ? 'header-overlay-subheadline-inverted' : null}`}>
                    {t('rtt-areas:Finde heraus, wie die RTT™ Methode dir helfen kann')}
                </h2>
            </div>
        );
    }
}

const HeaderContent = (t) => {
    return (
        <div>
            <h1 className="header-overlay-headline hyphenate">{t('rtt-areas:Anwendungsbereiche')}</h1>
            <h2 className="header-overlay-subheadline">
                {t('rtt-areas:Finde heraus, wie die RTT™ Methode dir helfen kann')}
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
        desktopImage: file(relativePath: { eq: "anwendungsgebiete.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        mobileImage: file(relativePath: { eq: "anwendungsgebiete.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

export default withI18next(['common', 'rtt-areas'])(RttAreasPage);
