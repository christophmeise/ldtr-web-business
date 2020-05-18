import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Helmet } from 'react-helmet';

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
    data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
    const { markdownRemark: post } = data; // data.markdownRemark holds your post data
    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
    return (
        <div className="blog-post-container">
            <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
            <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
                <Img fluid={featuredImgFluid} />
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </div>
    );
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
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
