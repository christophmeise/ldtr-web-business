import { graphql } from 'gatsby';
import React from 'react';
import { Container } from 'semantic-ui-react';
import HeaderOverlayBlog from './../components/header-overlay/header-overlay-blog';
import Layout from './../components/layout';
import SEO from './../components/seo';
import withI18next from './../components/withI18next/withI18next';
import './blog-post.less';

function BlogPostTemplate({ data, t }) {
    const { markdownRemark: post } = data;

    const sources = [post.frontmatter.featuredImage.childImageSharp.fluid];
    /*     const blocks = post.frontmatter.blocks; */

    return (
        <Layout title={post.frontmatter.title} invertedHeader={true} t={t}>
            <SEO lang="en" description={post.frontmatter.title} title={post.frontmatter.title} />
            <HeaderOverlayBlog
                sources={sources}
                color="#000000"
                inverted={true}
                content={<OverlayContent title={post.frontmatter.title} inverted={true} />}
            />
            <Container>
                <div className="blog-content-sections">
                    <section className="blog-post">
                        <article dangerouslySetInnerHTML={{ __html: post.html }}></article>
                    </section>
                </div>
            </Container>
        </Layout>
    );
}

export default withI18next('common')(BlogPostTemplate);

const OverlayContent = ({ title, inverted }) => {
    return (
        <div>
            <h1
                className={`font-playfair text-shadow header-overlay-headline ${
                    inverted ? 'header-overlay-headline-inverted' : null
                }`}
            >
                {title}
            </h1>
        </div>
    );
};

export const pageQuery = graphql`
    query BlogPostByPath($originalPath: String!) {
        markdownRemark(frontmatter: { path: { eq: $originalPath } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
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
`;
