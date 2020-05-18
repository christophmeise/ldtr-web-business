import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, CardContent, CardHeader } from 'semantic-ui-react';
// import '../css/index.css'; // add some style if you want!
import Layout from './../components/layout';
import SEO from './../components/seo';

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
        const siteTitle = data.site.siteMetadata.title;

        return (
            <Layout location={window.location} title={siteTitle}>
                <SEO title="All posts" />
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
                                    <CardContent>
                                        <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                                    </CardContent>
                                    <Card.Content description={post.excerpt}></Card.Content>
                                    <Card.Content extra>
                                        <h2>{post.frontmatter.date}</h2>
                                    </Card.Content>
                                </Card>
                            );
                        })}
                </div>
            </Layout>
        );
    }
}

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
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
    }
`;
