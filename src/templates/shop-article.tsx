import { graphql, Link } from 'gatsby';
import React from 'react';
import { Container } from 'semantic-ui-react';
import SEO from '../components/seo';
import HeaderOverlay from './../components/header-overlay/header-overlay';
import Layout from './../components/layout';
import withI18next from './../components/withI18next/withI18next';

function ShopArticleTemplate({ data, t }) {
    const { markdownRemark: post } = data;

    const sources = [post.frontmatter.picture.childImageSharp.fluid];

    return (
        <Layout title={post.frontmatter.title} invertedHeader={true} t={t}>
            <SEO lang="en" description={post.frontmatter.title} title={post.frontmatter.title} />
            <HeaderOverlay
                sources={sources}
                color="#000000"
                inverted={true}
                content={<OverlayContent title={post.frontmatter.title} inverted={true} />}
            />
            <Container>
                <div className="blog-post-container">
                    <div className="blog-post">
                        <h1>{post.frontmatter.product_name}</h1>
                        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                    </div>
                    <Link to="/">Back to the Future</Link>
                </div>
            </Container>
        </Layout>
    );
}

export default withI18next('common')(ShopArticleTemplate);

const OverlayContent = ({ title, inverted }) => {
    return (
        <div>
            <h1 className={`header-overlay-headline ${inverted ? 'header-overlay-headline-inverted' : null}`}>
                {title}
            </h1>
        </div>
    );
};

export const pageQuery = graphql`
    query ShopArticleByPath($originalPath: String!) {
        markdownRemark(frontmatter: { path: { eq: $originalPath } }) {
            html
            frontmatter {
                product_name
                path
                price
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
`;
