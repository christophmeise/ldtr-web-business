import { graphql, Link } from 'gatsby';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, CardHeader } from 'semantic-ui-react';

// import '../css/index.css'; // add some style if you want!

interface Props {
    data: {
        allMarkdownRemark: any;
        site: {
            siteMetadata: {
                title: string;
            };
        };
    };
}

export default class Index extends React.Component<Props, Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        const posts = data.allMarkdownRemark.edges;
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
}

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
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
