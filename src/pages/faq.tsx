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
                titleKey: 'faq:q-what-is-hypnose',
                contentKey: 'faq:a-what-is-hypnose',
            },
            {
                index: 1,
                titleKey: 'faq:q-hypnose-real',
                contentKey: 'faq:a-hypnose-real',
            },
            {
                index: 2,
                titleKey: 'faq:q-can-anybody-hypnose',
                contentKey: 'faq:a-can-anybody-hypnose',
            },
            {
                index: 3,
                titleKey: 'faq:q-improve-hynose',
                contentKey: 'faq:a-improve-hynose',
            },
            {
                index: 4,
                titleKey: 'faq:q-hypnose-like-sleep',
                contentKey: 'faq:a-hypnose-like-sleep',
            },
            {
                index: 5,
                titleKey: 'faq:q-what-is-hypnose',
                contentKey: 'faq:a-what-is-hypnose',
            },
            {
                index: 6,
                titleKey: 'faq:q-hypnose-real',
                contentKey: 'faq:a-hypnose-real',
            },
            {
                index: 7,
                titleKey: 'faq:q-can-anybody-hypnose',
                contentKey: 'faq:a-can-anybody-hypnose',
            },
            {
                index: 8,
                titleKey: 'faq:q-improve-hynose',
                contentKey: 'faq:a-improve-hynose',
            },
            {
                index: 9,
                titleKey: 'faq:q-hypnose-like-sleep',
                contentKey: 'faq:a-hypnose-like-sleep',
            },
        ];

        return (
            <Layout title={siteTitle} t={t}>
                <SEO title="Index" />
                <Container className="global-header-padding">
                    <PlainHeader content={HeaderContent(t)} />
                    <Container>
                        <FAQAccordion t={t} faqContent={faqContent}></FAQAccordion>
                    </Container>
                    <Container
                        textAlign="center"
                        style={{ marginTop: '3rem', marginBottom: '3rem', display: 'flex', justifyContent: 'center' }}
                    >
                        <Segment placeholder compact={false} padded="very">
                            <Header icon>
                                <Icon name="paper plane outline" style={{ marginBottom: '1rem' }} />
                                Any questions that are still unanswered?
                            </Header>
                            <Segment.Inline>
                                <Link to={getPathWithLocale('/rtt')}>
                                    <Button
                                        primary={true}
                                        inverted={false}
                                        size="medium"
                                        className="shadow hover-animate"
                                    >
                                        {t('contact-me-button')}{' '}
                                        <Icon name="arrow right" style={{ opacity: '1' }}></Icon>
                                    </Button>
                                </Link>
                            </Segment.Inline>
                        </Segment>
                    </Container>
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
