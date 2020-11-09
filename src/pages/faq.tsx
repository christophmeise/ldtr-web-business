import { graphql, Link } from 'gatsby';
import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import Layout from '../components/layout';
import { getPathWithLocale } from '../components/navigateWithLocale';
import PlainHeader from '../components/plain-overlay/plain-header';
import SEO from '../components/seo';
import withI18next from '../components/withI18next/withI18next';
import FAQAccordion from './../components/faq/faq-accordion';

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

class FAQPage extends React.Component<Props, any> {
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
        const faqContent = [
            {
                index: 0,
                titleKey: 'faq:q-1',
                contentKey: 'faq:a-1',
            },
            {
                index: 1,
                titleKey: 'faq:q-2',
                contentKey: 'faq:a-2',
            },
            {
                index: 2,
                titleKey: 'faq:q-3',
                contentKey: 'faq:a-3',
            },
            {
                index: 3,
                titleKey: 'faq:q-4',
                contentKey: 'faq:a-4',
            },
            {
                index: 4,
                titleKey: 'faq:q-5',
                contentKey: 'faq:a-5',
            },
            {
                index: 5,
                titleKey: 'faq:q-6',
                contentKey: 'faq:a-6',
            },
            {
                index: 6,
                titleKey: 'faq:q-7',
                contentKey: 'faq:a-7',
            },
            {
                index: 7,
                titleKey: 'faq:q-8',
                contentKey: 'faq:a-8',
            },
            {
                index: 8,
                titleKey: 'faq:q-9',
                contentKey: 'faq:a-9',
            },
            {
                index: 9,
                titleKey: 'faq:q-10',
                contentKey: 'faq:a-10',
            },
            {
                index: 10,
                titleKey: 'faq:q-11',
                contentKey: 'faq:a-11',
            },
            {
                index: 11,
                titleKey: 'faq:q-12',
                contentKey: 'faq:a-12',
            },
            {
                index: 12,
                titleKey: 'faq:q-13',
                contentKey: 'faq:a-13',
            },
            {
                index: 13,
                titleKey: 'faq:q-14',
                contentKey: 'faq:a-14',
            },
            {
                index: 14,
                titleKey: 'faq:q-15',
                contentKey: 'faq:a-15',
            },
            {
                index: 15,
                titleKey: 'faq:q-16',
                contentKey: 'faq:a-16',
            },
            {
                index: 16,
                titleKey: 'faq:q-17',
                contentKey: 'faq:a-17',
            },
        ];

        return (
            <Layout title={siteTitle} t={t}>
                <SEO title={t('faq:faq-page-headline')} />
                <Container className="global-header-padding">
                    <PlainHeader content={HeaderContent(t)} />
                    <div className="main-content-sections">
                        <Container>
                            <p>{t('faq:Einleitung')}</p>
                        </Container>
                        <section>
                            <Container>
                                <FAQAccordion t={t} faqContent={faqContent}></FAQAccordion>
                            </Container>
                            <Container
                                textAlign="center"
                                style={{
                                    marginTop: '3rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Segment placeholder compact={false} padded="very">
                                    <Header icon>
                                        <Icon name="paper plane outline" style={{ marginBottom: '1rem' }} />
                                        {t('faq:Banner-Text')}
                                    </Header>
                                    <Segment.Inline>
                                        <Link to={getPathWithLocale('/contact')}>
                                            <Button
                                                primary={true}
                                                inverted={false}
                                                size="medium"
                                                className="shadow hover-animate"
                                            >
                                                {t('contact-me-button')}
                                                <Icon name="arrow right" style={{ opacity: '1' }}></Icon>
                                            </Button>
                                        </Link>
                                    </Segment.Inline>
                                </Segment>
                            </Container>
                        </section>
                    </div>
                </Container>
            </Layout>
        );
    }
}

const HeaderContent = (t) => {
    return (
        <div>
            <h1 className="header-overlay-headline">{t('faq:faq-page-headline')}</h1>
            <h2 className="header-overlay-subheadline">{t('faq:faq-page-subheadline')}</h2>
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

export default withI18next(['common', 'faq'])(FAQPage);
