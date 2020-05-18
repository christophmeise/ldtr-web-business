import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, CardContent, CardHeader, Container } from 'semantic-ui-react';
// import '../css/index.css'; // add some style if you want!
import Layout from './../components/layout';
import SEO from './../components/seo';

interface Props {
    data: {
        allMarkdownRemark: any;
        site: {
            siteMetadata: {
                title: string;
                description: string;
            };
        };
    };
}

export default class Index extends React.Component<Props, Props> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        // use window.location here
    }

    render() {
        const data = this.props.data;
        const posts = data.allMarkdownRemark.edges;
        const siteTitle = data.site.siteMetadata.title;
        const description = data.site.siteMetadata.description;

        return (
            <Layout title={siteTitle}>
                <SEO lang="en" description={description} title="All posts" />
                <Container>
                    <div className="blog-posts">
                        {posts
                            .filter((post) => post.node.frontmatter.title.length > 0)
                            .map(({ node: post }) => {
                                return (
                                    <Card>
                                        <CardHeader>
                                            <div className="blog-post-preview" key={post.id}>
                                                <h2>
                                                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                                                </h2>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            {post.frontmatter.featuredImage != null && (
                                                <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                                            )}
                                        </CardContent>
                                        <Card.Content description={post.excerpt}></Card.Content>
                                        <Card.Content extra>
                                            <h2>{post.frontmatter.date}</h2>
                                        </Card.Content>
                                    </Card>
                                );
                            })}
                    </div>
                </Container>
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
