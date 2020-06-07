import { graphql } from 'gatsby';
import React from 'react';
import { Container } from 'semantic-ui-react';
import BlogPostIntroduction from '../components/blog-post-introduction/blog-post-introduction';
import BlogPostFullText from './../components/blog-post-full-text/blog-post-full-text';
import HeaderOverlayBlog from './../components/header-overlay/header-overlay-blog';
import Layout from './../components/layout';
import SEO from './../components/seo';
import withI18next from './../components/withI18next/withI18next';

function containsTemplate(blocks: any[], template) {
    return blocks.map((block) => block.template).includes(template);
}

function getBlockContentForTemplate(blocks: any[], template) {
    const blockIndex = blocks.map((block) => block.template).indexOf(template);
    return blocks[blockIndex];
}

function BlogPostTemplate({ data, t }) {
    const { markdownRemark: post } = data;

    const sources = [post.frontmatter.featuredImage.childImageSharp.fluid];
    const blocks = post.frontmatter.blocks;

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
                <div className="main-content-sections">
                    {containsTemplate(blocks, 'introduction') && (
                        <BlogPostIntroduction
                            content={getBlockContentForTemplate(blocks, 'introduction')}
                        ></BlogPostIntroduction>
                    )}
                    {containsTemplate(blocks, 'fulltext') && (
                        <BlogPostFullText content={getBlockContentForTemplate(blocks, 'fulltext')}></BlogPostFullText>
                    )}
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
