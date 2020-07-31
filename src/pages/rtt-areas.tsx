import { graphql, Link } from 'gatsby';
import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import Layout from '../components/layout';
import { getPathWithLocale } from '../components/navigateWithLocale';
import PlainHeader from '../components/plain-overlay/plain-header';
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

        return (
            <Layout title={siteTitle} t={t}>
                <SEO title={t('rtt-areas:Anwendungsbereiche von RTT™')} />
                <Container className="global-header-padding">
                    <PlainHeader content={HeaderContent(t)} />
                    <Container text>
                        <div className="main-content-sections">
                            <section>
                                <p>{t('rtt-areas:Einleitung')}</p>
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
                                <p style={{ paddingTop: '6rem' }}>{t('rtt-areas:Haupttext')}</p>
                                <Container textAlign="center" style={{ paddingTop: '3rem' }}>
                                    <Link to={getPathWithLocale('/book-call')}>
                                        <Button primary size="medium" className="shadow hover-animate">
                                            {t('rtt-areas:Buchen')}
                                        </Button>
                                    </Link>
                                </Container>
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
            <h1 className="header-overlay-headline">{t('rtt-areas:Anwendungsbereiche von RTT™')}</h1>
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
    }
`;

export default withI18next(['common', 'rtt-areas'])(RttAreasPage);
