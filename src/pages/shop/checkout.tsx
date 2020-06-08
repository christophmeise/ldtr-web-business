import { loadStripe } from '@stripe/stripe-js';
import { graphql } from 'gatsby';
import queryString from 'query-string';
import React from 'react';
import { Button, Container, Grid, Icon, Message } from 'semantic-ui-react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import withI18next from '../../components/withI18next/withI18next';
import SectionHeader from './../../components/sectionHeader';
import { PricingComponent, pricingData, Product } from './../shop';
import './checkout.less';

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

interface State {
    checkoutOption: string | string[];
}

class ShopCheckoutPage extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const isSSR = typeof window === 'undefined';
        if (!isSSR) {
            let params = queryString.parse(location.search);
            this.setState({ checkoutOption: params.option });
        }
    }

    render() {
        const {
            pageContext: { locale },
            t,
        } = this.props;
        const data = this.props.data;
        const siteTitle = data.site.siteMetadata.title;
        const description = data.site.siteMetadata.description;
        const checkoutOption = this.state.checkoutOption;
        console.log(checkoutOption);
        let product: Product;
        if (checkoutOption === 'Basic') {
            product = pricingData[1];
        } else if (checkoutOption === 'Plus') {
            product = pricingData[2];
        } else if (checkoutOption === 'Exclusive') {
            product = pricingData[3];
        }

        return (
            <Layout title={siteTitle} t={t}>
                <SEO title="Index" />
                <Container className="checkout-header-padding">
                    <Grid columns="2" stackable className="checkout-grid">
                        <Grid.Column width="10">
                            <SectionHeader
                                headline={t('shop-checkout-headline')}
                                subheadline={t('shop-checkout-subheadline') + checkoutOption}
                                primary={true}
                                textAlign="left"
                            ></SectionHeader>
                            <Message
                                icon="heart outline"
                                header="This package is on people's minds."
                                content="It's been viewed 43 times past week."
                                success
                            />
                            <hr />
                            <h4>What you can expect</h4>
                            <div className="icon-circle-with-text">
                                <div className="rtt-icon-circle rtt-icon-circle-secondary">
                                    <Icon className="text-secondary" name="envelope outline" size="big"></Icon>
                                </div>
                                <p>
                                    You will receive an E-Mail with your access codes for our sessions and your
                                    recordings
                                </p>
                            </div>
                            <div className="icon-circle-with-text">
                                <div className="rtt-icon-circle rtt-icon-circle-secondary">
                                    <Icon className="text-secondary" name="history" size="big"></Icon>
                                </div>
                                <p>Inner Light offers a full refund if you are unhappy after our session!</p>
                            </div>
                            <div className="icon-circle-with-text">
                                <div className="rtt-icon-circle rtt-icon-circle-secondary">
                                    <Icon className="text-secondary" name="payment" size="big"></Icon>
                                </div>
                                <p>Checkout and pay with your favorite payment method!</p>
                            </div>
                            <hr />
                        </Grid.Column>
                        <Grid.Column width="6">
                            <PricingComponent
                                t={t}
                                pricingData={product}
                                handleOnCheckout={null}
                                handleOnSelect={null}
                                isSelected={false}
                            ></PricingComponent>
                        </Grid.Column>
                    </Grid>
                    <Container textAlign="center">
                        <Button animated primary onClick={redirectToCheckout(product)}>
                            <Button.Content visible>
                                {' '}
                                <Icon name="lock"></Icon>
                                Secure Checkout
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name="arrow right" />
                            </Button.Content>
                        </Button>
                    </Container>
                </Container>
            </Layout>
        );
    }
}

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const redirectToCheckout = (product: Product) => async (event) => {
    event.preventDefault();
    const stripe = await stripePromise;
    console.log(location.protocol + '://' + location.host + '/');
    const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: product.priceId, quantity: 1 }],
        mode: 'payment',
        successUrl: location.protocol + '//' + location.host + '/shop/success',
        cancelUrl: location.protocol + '//' + location.host + '/shop',
    });
    if (error) {
        console.warn('Error:', error);
    }
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

export default withI18next(['common'])(ShopCheckoutPage);
