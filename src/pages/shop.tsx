import { graphql } from 'gatsby';
import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import HeaderOverlay from '../components/header-overlay/header-overlay';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface Props {
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

export default class Shop extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
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
            <Layout title={siteTitle} invertedHeader={true}>
                <SEO title="Shop" />
                <HeaderOverlay
                    sources={sources}
                    color="#000000"
                    inverted={true}
                    content={<OverlayContent inverted={true} />}
                />
                <Container className="global-header-padding">
                    <Grid style={{ paddingTop: '2em' }} stackable centered columns={3}>
                        <Grid.Column>
                            {products
                                .filter((product) => product.node.frontmatter.title.length > 0)
                                .map(({ node: product }) => {
                                    return <div>product.price</div>;
                                })}
                        </Grid.Column>
                    </Grid>
                </Container>
            </Layout>
        );
    }
}

const OverlayContent = ({ inverted }) => {
    return (
        <div>
            <h1 className={`header-overlay-headline ${inverted ? 'header-overlay-headline-inverted' : null}`}>
                Book Your Session
            </h1>
            <h2 className={`header-overlay-subheadline ${inverted ? 'header-overlay-subheadline-inverted' : null}`}>
                Learn from the world’s best teachers, on the world’s leading personal growth platform. Join our
                community of 12 million students from 80 countries.
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
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        product_name
                        price
                        tags
                        featuredImage {
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
