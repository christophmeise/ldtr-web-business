import { graphql } from 'gatsby';
import React from 'react';
import BlogPostIntroduction from '../components/blog-post-introduction/blog-post-introduction';
import HeaderOverlay from './../components/header-overlay/header-overlay';
import Layout from './../components/layout';
import SEO from './../components/seo';
import withI18next from './../components/withI18next/withI18next';

function BlogPostTemplate({ data, t }) {
    const { markdownRemark: post } = data;

    const sources = [post.frontmatter.featuredImage.childImageSharp.fluid];

    return (
        <Layout title={post.frontmatter.title} invertedHeader={true} t={t}>
            <SEO lang="en" description={post.frontmatter.title} title={post.frontmatter.title} />
            <HeaderOverlay
                sources={sources}
                color="#000000"
                inverted={true}
                content={<OverlayContent title={post.frontmatter.title} inverted={true} />}
            />
            <BlogPostIntroduction content={post.frontmatter.blocks[0]}></BlogPostIntroduction>
        </Layout>
    );
}

export default withI18next('common')(BlogPostTemplate);

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
    query BlogPostByPath($originalPath: String!) {
        markdownRemark(frontmatter: { path: { eq: $originalPath } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                tags
                blocks {
                    content
                    template
                    title
                    images {
                        childImageSharp {
                            fluid(maxWidth: 800) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
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
