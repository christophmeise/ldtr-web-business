import { graphql, Link } from 'gatsby';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, CardHeader } from 'semantic-ui-react';

// import '../css/index.css'; // add some style if you want!

export default function Index({ data }) {
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <div className="blog-posts">
            {posts
                .filter((post) => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                    return (
                        <Card>
                            <CardHeader>
                                <div className="blog-post-preview" key={post.id}>
                                    <h1>
                                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                                    </h1>
                                </div>
                            </CardHeader>

                            <Card.Content description={post.excerpt}></Card.Content>
                            <Card.Content extra>
                                <h2>{post.frontmatter.date}</h2>
                            </Card.Content>
                        </Card>
                    );
                })}
        </div>
    );
}

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                    }
                }
            }
        }
    }
`;
