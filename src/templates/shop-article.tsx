import { graphql, Link } from 'gatsby';
import React from 'react';
// import '../css/blog-post.css'; // make it pretty!
import SEO from '../components/seo';

export default function ShopArticleTemplate({
    data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
    const { markdownRemark: post } = data; // data.markdownRemark holds your post dat

    return (
        <div className="blog-post-container">
            <SEO lang="en" description={post.frontmatter.product_name} title={post.frontmatter.product_name} />
            <div className="blog-post">
                <h1>{post.frontmatter.product_name}</h1>
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <Link to="/">Back to the Future</Link>
        </div>
    );
}

export const pageQuery = graphql`
    query ShopArticleByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                product_name
                price
            }
        }
    }
`;
