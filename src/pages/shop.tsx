import { graphql } from 'gatsby';
import React from 'react';
import { Button, Container, Grid, Icon, List } from 'semantic-ui-react';
import CallToActionBanner from '../components/call-to-action-banner/call-to-action-banner';
import HeaderOverlay from '../components/header-overlay/header-overlay';
import Layout from '../components/layout';
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
                    darken={true}
                />
                <div className="main-content-sections">
                    <section>
                        <Container>
                            <SectionHeader
                                headline={t('shop:main-headline')}
                                subheadline={t('shop:main-subheadline')}
                                primary={true}
                                textAlign="left"
                            ></SectionHeader>
                        </Container>
                        <Container>
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
                        </Container>
                        <div style={{ marginTop: '6rem' }}>
                            <CallToActionBanner
                                headline={t('shop:call-to-action-headline')}
                                subheadline={t('shop:call-to-action-subheadline')}
                                text={t('shop:call-to-action-description')}
                                buttonText={t('shop:call-to-action-button')}
                                buttonSubtext={t('shop:call-to-action-free')}
                            ></CallToActionBanner>
                        </div>
                        <Container textAlign="center" style={{ marginTop: '3rem' }}>
                            <p>
                                Meine RTT™-Sitzungen können auf Englisch oder Deutsch durchgeführt werden. Damit Du dich
                                während deiner Session mit mir in deine vertraute Umgebung befindest, finden die
                                Therapie-Sitzungen über Skype oder Zoom statt. Im Raum Berlin besteht außerdem die
                                Möglichkeit, dass ich zu Dir komme.
                            </p>
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
                </div>
            </Layout>
        );
    }
}

export default withI18next(['common', 'shop'])(Shop);

const OverlayContent = ({ inverted, t }) => {
    return (
        <div>
            <h1 className={`header-overlay-headline ${inverted ? 'header-overlay-headline-inverted' : null}`}>
                {t('shop:overlay-headline')}
            </h1>
            <h2 className={`header-overlay-subheadline ${inverted ? 'header-overlay-subheadline-inverted' : null}`}>
                {t('shop:overlay-subheadline')}
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
        priceId: 'price_1HDWfZCbDUY84ofe3pJUcXs4',
        title: 'Basic',
        price: '349€',
        duration: 'für 1 Monat',
        content: [true, true, true, true, false, false, false, false],
    },
    2: {
        priceId: 'price_1HDWfpCbDUY84ofeldhT5QyE',
        title: 'Plus',
        price: '599€',
        duration: 'für 2 Monate',
        content: [true, true, true, true, true, true, true, false],
    },
    3: {
        priceId: 'price_1HDWg9CbDUY84ofeqzHT0hC2',
        title: 'Exclusive',
        price: '899€',
        duration: 'für 3 Monate',
        content: [true, true, true, true, true, true, true, true],
    },
    4: {
        priceId: 'price_1HDVhTCbDUY84ofeOfYf3qkM',
        title: 'Test',
        price: '1€',
        duration: 'für 3 Monate',
        content: [true, true, true, true, true, true, true, true],
    },
};

export const PricingComponent = ({ t, pricingData, isSelected, handleOnSelect, handleOnCheckout }) => {
    return (
        <div
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
                        <List.Content>{t('shop:package-item-1')}</List.Content>
                    </List.Item>
                    <List.Item className="rtt-shop-pricing-list-item">
                        <Icon
                            name={pricingData.content[1] ? 'check' : 'cancel'}
                            className={pricingData.content[1] ? 'text-primary' : 'text-muted'}
                        />
                        <List.Content>{t('shop:package-item-2')}</List.Content>
                    </List.Item>
                    <List.Item className="rtt-shop-pricing-list-item">
                        <Icon
                            name={pricingData.content[2] ? 'check' : 'cancel'}
                            className={pricingData.content[2] ? 'text-primary' : 'text-muted'}
                        />
                        <List.Content>{t('shop:package-item-3')}</List.Content>
                    </List.Item>
                    <List.Item className="rtt-shop-pricing-list-item">
                        <Icon
                            name={pricingData.content[3] ? 'check' : 'cancel'}
                            className={pricingData.content[3] ? 'text-primary' : 'text-muted'}
                        />
                        <List.Content>{t('shop:package-item-4')}</List.Content>
                    </List.Item>
                    <List.Item className="rtt-shop-pricing-list-item">
                        <Icon
                            name={pricingData.content[4] ? 'check' : 'cancel'}
                            className={pricingData.content[4] ? 'text-primary' : 'text-muted'}
                        />
                        <List.Content>{t('shop:package-item-5')}</List.Content>
                    </List.Item>
                    <List.Item className="rtt-shop-pricing-list-item">
                        <Icon
                            name={pricingData.content[5] ? 'check' : 'cancel'}
                            className={pricingData.content[5] ? 'text-primary' : 'text-muted'}
                        />
                        <List.Content>{t('shop:package-item-6')}</List.Content>
                    </List.Item>
                    <List.Item className="rtt-shop-pricing-list-item">
                        <Icon
                            name={pricingData.content[6] ? 'check' : 'cancel'}
                            className={pricingData.content[6] ? 'text-primary' : 'text-muted'}
                        />
                        <List.Content>
                            {t('shop:package-item-7')
                                .toString()
                                .replace('{0}', pricingData.content[7] ? 'zwei' : 'einem')}
                        </List.Content>
                    </List.Item>
                    <List.Item className="rtt-shop-pricing-list-item">
                        <Icon
                            name={pricingData.content[7] ? 'check' : 'cancel'}
                            className={pricingData.content[7] ? 'text-primary' : 'text-muted'}
                        />
                        <List.Content>{t('shop:package-item-8')}</List.Content>
                    </List.Item>
                </List>
            </div>
            {handleOnSelect != null && (
                <div className="rtt-shop-pricing-button-wrapper">
                    {!isSelected ? (
                        <Button primary basic className="rounded shadow hover-animate" onClick={handleOnSelect}>
                            {t('shop:pricing-select')}
                        </Button>
                    ) : (
                        <Button primary className="rounded shadow hover-animate" onClick={handleOnCheckout}>
                            <Icon name="lock" style={{ opacity: 1 }}></Icon>
                            {t('shop:pricing-checkout')}
                        </Button>
                    )}
                </div>
            )}
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
        desktopImage: file(relativePath: { eq: "sunset_shop.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        mobileImage: file(relativePath: { eq: "sunset_shop_mobile.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
