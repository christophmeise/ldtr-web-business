import { graphql, Link } from 'gatsby';
import React from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react';
import ContactForm from '../components/contactForm';
import Layout from '../components/layout';
import { getPathWithLocale } from '../components/navigateWithLocale';
import SEO from '../components/seo';
import PlainHeader from './../components/plain-overlay/plain-header';
import withI18next from './../components/withI18next/withI18next';

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

class Contact extends React.Component<Props, any> {
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
                <SEO title={t('contact')} />
                <Container className="global-header-padding">
                    <PlainHeader content={HeaderContent(t)} />
                    <div className="main-content-sections">
                        <Container>
                            <Container textAlign="center">
                                <p>
                                    Das ist dein Schritt in Richtung Freiheit von all den Themen, die dich davon
                                    abhalten das Leben zu führen, von dem du träumst - ich gratuliere dir! Unabhängig
                                    davon, ob Du bereits mit Hypnose vertraut bist oder nicht, hast du möglicherweise
                                    noch einige Fragen, Bedenken oder möchtest einfach nur ein Gefühl dafür bekommen,
                                    wie RTT™ oder ich dir zu deinem ersehnten Durchbruch verhelfen können. Schreibe mir
                                    gern eine Nachricht oder{' '}
                                    <Link to={getPathWithLocale('/book-call')}>vereinbare hier</Link> direkt ein
                                    kostenloses, unverbindliches Beratungsgespräch!
                                </p>
                            </Container>
                            <section>
                                <ContactForm disabled={false} t={t}></ContactForm>
                                <Grid textAlign="center" style={{ marginTop: '3rem' }}>
                                    <Grid.Row>
                                        <h3>{t('contact:Folge mir auf')}</h3>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <div>
                                            <a
                                                href="https://www.facebook.com/innerlighthypnotherapy"
                                                target="_blank"
                                                rel="noopener"
                                                aria-label="Facebook"
                                                className="text-secondary"
                                            >
                                                <Icon className="hover-animate" size="big" name="facebook"></Icon>
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/in/christinmeise/"
                                                target="_blank"
                                                rel="noopener"
                                                aria-label="Linkedin"
                                                className="text-secondary"
                                            >
                                                <Icon className="hover-animate" size="big" name="linkedin"></Icon>
                                            </a>
                                            <a
                                                href="https://instagram.com/iamenoughbymarisapeer?igshid=owrg3d6x2h7v"
                                                target="_blank"
                                                rel="noopener"
                                                aria-label="Instagram"
                                                className="text-secondary"
                                            >
                                                <Icon className="hover-animate" size="big" name="instagram"></Icon>
                                            </a>
                                            {/* <a
                                                href="https://www.youtube.com"
                                                target="_blank"
                                                rel="noopener"
                                                aria-label="Youtube"
                                                className="text-secondary"
                                            >
                                                <Icon className="hover-animate" size="big" name="youtube"></Icon>
                                            </a> */}
                                        </div>
                                    </Grid.Row>
                                </Grid>
                            </section>
                        </Container>
                    </div>
                </Container>
            </Layout>
        );
    }
}

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}

const HeaderContent = (t) => {
    return (
        <div>
            <h1 className="header-overlay-headline">{t('contact:Kontaktiere Inner Light')}</h1>
            <h2 className="header-overlay-subheadline">
                {t('contact:Hinterlasse deine Nachricht, oder buch jetzt dein kostenloses Erstgespräch!')}
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

export default withI18next(['common', 'contact'])(Contact);
