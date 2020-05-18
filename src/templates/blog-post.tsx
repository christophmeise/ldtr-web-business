import { graphql, Link } from 'gatsby';
import React from 'react';
// import '../css/blog-post.css'; // make it pretty!
import SEO from './../components/seo';

export default function Template({
    data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
    const { markdownRemark: post } = data; // data.markdownRemark holds your post dat

    return (
        <div className="blog-post-container">
            <SEO lang="en" description={post.frontmatter.title} title={post.frontmatter.title} />
            <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <Link to="/">Back to the Future</Link>
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
            }
        }
    }
`;
