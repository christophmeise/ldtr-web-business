import { graphql, Link } from 'gatsby';
import React from 'react';
import { Button, Container, Grid, Icon, List } from 'semantic-ui-react';
import HeaderOverlay from '../components/header-overlay/header-overlay';
import Layout from '../components/layout';
import { getPathWithLocale } from '../components/navigateWithLocale';
import SEO from '../components/seo';
import navigateWithLocale from './../components/navigateWithLocale';
import SectionHeader from './../components/sectionHeader';
import withI18next from './../components/withI18next/withI18next';
import './shop.less';

interface Props {
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
        allMarkdownRemark: any;
    };
}

interface State {
    selectedPackageKey: number;
}

export type CheckoutOption = 'Basic' | 'Plus' | 'Exclusive';

class Shop extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { selectedPackageKey: 2 };
    }

    handleOnSelect = (key: number) => (e) => {
        this.setState({ selectedPackageKey: key });
    };

    handleOnCheckout = (option: CheckoutOption) => (e) => {
        navigateWithLocale('/shop/checkout?option=' + option);
    };

    render() {
        const { t } = this.props;
        const data = this.props.data;
        const products = data.allMarkdownRemark.edges;
        const siteTitle = data.site.siteMetadata.title;
        const description = data.site.siteMetadata.description;

        const sources = [
            data.mobileImage.childImageSharp.fluid,
            {
                ...data.desktopImage.childImageSharp.fluid,
                media: `(min-width: 768px)`,
            },
        ];

        return (
            <Layout title={siteTitle} invertedHeader={true} t={t}>
                <SEO title="Shop" />
                <HeaderOverlay
                    sources={sources}
                    color="#000000"
                    inverted={true}
                    content={<OverlayContent inverted={true} t={t} />}
                />
                <div className="main-content-sections">
                    <Container>
                        <section>
                            <SectionHeader
                                headline={t('rtt-shop-main-headline')}
                                subheadline={t('rtt-shop-main-subheadline')}
                                primary={true}
                                textAlign="left"
                            ></SectionHeader>
                            <Grid stackable columns="3" className="rtt-shop-grid">
                                <Grid.Column>
                                    <PricingComponent
                                        t={t}
                                        pricingData={pricingData[1]}
                                        isSelected={this.state.selectedPackageKey === 1}
                                        handleOnCheckout={this.handleOnCheckout('Basic')}
                                        handleOnSelect={this.handleOnSelect(1)}
                                    ></PricingComponent>
                                </Grid.Column>
                                <Grid.Column>
                                    <PricingComponent
                                        t={t}
                                        pricingData={pricingData[2]}
                                        isSelected={this.state.selectedPackageKey === 2}
                                        handleOnCheckout={this.handleOnCheckout('Plus')}
                                        handleOnSelect={this.handleOnSelect(2)}
                                    ></PricingComponent>
                                </Grid.Column>
                                <Grid.Column>
                                    <PricingComponent
                                        t={t}
                                        pricingData={pricingData[3]}
                                        isSelected={this.state.selectedPackageKey === 3}
                                        handleOnCheckout={this.handleOnCheckout('Exclusive')}
                                        handleOnSelect={this.handleOnSelect(3)}
                                    ></PricingComponent>
                                </Grid.Column>
                            </Grid>
                        </section>
                        <section>
                            <Container
                                className="rtt-shop-call-to-action bg-secondary rounded shadow"
                                data-sal="slide-up"
                                data-sal-delay="0"
                                data-sal-duration="300"
                                data-sal-easing="ease"
                            >
                                <Grid columns={2} stackable>
                                    <Grid.Column>
                                        <h3 className="global-subtitle text-primary">
                                            {t('rtt-shop-call-to-action-headline')}
                                        </h3>
                                        <h4>{t('rtt-shop-call-to-action-subheadline')}</h4>
                                        <p>{t('rtt-shop-call-to-action-description')}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign="center" verticalAlign="middle">
                                        <Link to={getPathWithLocale('/book-call')}>
                                            <Button primary size="large" className="rounded shadow hover-animate">
                                                {t('rtt-call-to-action-button')}
                                            </Button>
                                        </Link>
                                        <p style={{ marginTop: '0.5rem' }}>{t('rtt-shop-call-to-action-free')}</p>
                                    </Grid.Column>
                                </Grid>
                            </Container>
                        </section>
                        {/*      <Grid style={{ paddingTop: '2em' }} centered columns={1}>
                        <Grid.Column width={10}>
                            <Item.Group>
                                {products
                                    .filter((product) => product.node.frontmatter.product_name.length > 0)
                                    .map(({ node: product }) => {
                                        return <ShopArticleCard article={product} />;
                                    })}
                            </Item.Group>
                        </Grid.Column>
                    </Grid> */}
                    </Container>
                </div>
            </Layout>
        );
    }
}

export default withI18next('common')(Shop);

const OverlayContent = ({ inverted, t }) => {
    return (
        <div>
            <h1 className={`header-overlay-headline ${inverted ? 'header-overlay-headline-inverted' : null}`}>
                {t('rtt-shop-overlay-headline')}
            </h1>
            <h2 className={`header-overlay-subheadline ${inverted ? 'header-overlay-subheadline-inverted' : null}`}>
                {t('rtt-shop-overlay-subheadline')}
            </h2>
        </div>
    );
};

export type Product = {
    priceId: string;
    title: string;
    price: string;
    duration: string;
    content: boolean[];
};

export const pricingData = {
    1: {
        priceId: 'price_1GrKUOCbDUY84ofe8W6LJHcA',
        title: 'Basic',
        price: '299€',
        duration: 'für 1 Monat',
        content: [true, true, true, true, false, false, false, false],
    },
    2: {
        priceId: 'price_1GrNeNCbDUY84ofeeEVHaF9g',
        title: 'Plus',
        price: '499€',
        duration: 'für 3 Monate',
        content: [true, true, true, true, true, true, false, false],
    },
    3: {
        priceId: 'price_1GrNfuCbDUY84ofe6aQWfr6b',
        title: 'Exclusive',
        price: '599€',
        duration: 'für 6 Monate',
        content: [true, true, true, true, true, true, true, true],
    },
};

export const PricingComponent = ({ t, pricingData, isSelected, handleOnSelect, handleOnCheckout }) => {
    return (
        <Container
            className={`rtt-shop-pricing-container rounded shadow ${
                isSelected ? 'rtt-shop-pricing-container-selected' : null
            }`}
        >
            <div className="rtt-shop-pricing-header">
                <h3>{pricingData.title}</h3>
                <p>
                    <span className="rtt-shop-pricing-price">{pricingData.price}</span>
                    <span className="rtt-shop-pricing-duration">{pricingData.duration}</span>
                </p>
                <hr />
            </div>
            <div className="rtt-shop-pricing-body">
                <List>
                    <List.Item className="rtt-shop-pricing-list-item">
                        <Icon
                            name={pricingData.content[0] ? 'check' : 'cancel'}
                            className={pricingData.content[0] ? 'text-primary' : 'text-muted'}
                        />
                        <List.Content>Kostenloses Erstgespräch</List.Content>
                    </List.Item>
                    <List.Item className="rtt-shop-pricing-list-item">
                        <Icon
                            name={pricingData.content[1] ? 'check' : 'cancel'}
                            className={pricingData.content[1] ? 'text-primary' : 'text-muted'}
                        />
                        <List.Content>3-Stündige Live Session</List.Content>
                    </List.Item>
                    <List.Item className="rtt-shop-pricing-list-item">
                        <Icon
                            name={pricingData.content[2] ? 'check' : 'cancel'}
                            className={pricingData.content[2] ? 'text-primary' : 'text-muted'}
                        />
                        <List.Content>21-tägige Manifestation durch Recordings</List.Content>
                    </List.Item>
                    <List.Item className="rtt-shop-pricing-list-item">
                        <Icon
                            name={pricingData.content[3] ? 'check' : 'cancel'}
                            className={pricingData.content[3] ? 'text-primary' : 'text-muted'}
                        />
                        <List.Content>Kostenloses Nachgepräch</List.Content>
                    </List.Item>
                    <List.Item className="rtt-shop-pricing-list-item">
                        <Icon
                            name={pricingData.content[4] ? 'check' : 'cancel'}
                            className={pricingData.content[4] ? 'text-primary' : 'text-muted'}
                        />
                        <List.Content>Langzeit Betreuung</List.Content>
                    </List.Item>
                    <List.Item className="rtt-shop-pricing-list-item">
                        <Icon
                            name={pricingData.content[5] ? 'check' : 'cancel'}
                            className={pricingData.content[5] ? 'text-primary' : 'text-muted'}
                        />
                        <List.Content>Zugang zu 3 weiteren Live-Recordings</List.Content>
                    </List.Item>
                    <List.Item className="rtt-shop-pricing-list-item">
                        <Icon
                            name={pricingData.content[6] ? 'check' : 'cancel'}
                            className={pricingData.content[6] ? 'text-primary' : 'text-muted'}
                        />
                        <List.Content>Follow-up Live Session</List.Content>
                    </List.Item>
                    <List.Item className="rtt-shop-pricing-list-item">
                        <Icon
                            name={pricingData.content[7] ? 'check' : 'cancel'}
                            className={pricingData.content[7] ? 'text-primary' : 'text-muted'}
                        />
                        <List.Content>Zugang zu allen Live Events und Meetups</List.Content>
                    </List.Item>
                </List>
            </div>
            {handleOnSelect != null && (
                <div className="rtt-shop-pricing-button-wrapper">
                    {!isSelected ? (
                        <Button primary basic className="rounded shadow hover-animate" onClick={handleOnSelect}>
                            {t('rtt-shop-pricing-select')}
                        </Button>
                    ) : (
                        <Button primary className="rounded shadow hover-animate" onClick={handleOnCheckout}>
                            <Icon name="lock" style={{ opacity: 1 }}></Icon>
                            {t('rtt-shop-pricing-checkout')}
                        </Button>
                    )}
                </div>
            )}
        </Container>
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
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/(articles)/" } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        product_name
                        price
                        path
                        tags
                        picture {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
        desktopImage: file(relativePath: { eq: "shop-banner.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        mobileImage: file(relativePath: { eq: "shop-banner.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
