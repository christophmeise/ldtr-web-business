import { graphql } from 'gatsby';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid } from 'semantic-ui-react';
import BlogPostCard from '../components/blog-post-card/blog-post-card';
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

export default class Blog extends React.Component<Props, Props> {
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
                <Container className="global-header-padding">
                    <Grid style={{ paddingTop: '2em' }} stackable centered columns={3}>
                        <Grid.Column>
                            {posts
                                .filter((post) => post.node.frontmatter.title.length > 0)
                                .map(({ node: post }) => {
                                    return (
                                        posts.findIndex((entry) => entry.node.id === post.id) % 3 === 0 && (
                                            <BlogPostCard post={post}></BlogPostCard>
                                        )
                                    );
                                })}
                        </Grid.Column>
                        <Grid.Column>
                            {posts
                                .filter((post) => post.node.frontmatter.title.length > 0)
                                .map(({ node: post }) => {
                                    return (
                                        posts.findIndex((entry) => entry.node.id === post.id) % 3 === 1 && (
                                            <BlogPostCard post={post}></BlogPostCard>
                                        )
                                    );
                                })}
                        </Grid.Column>
                        <Grid.Column>
                            {posts
                                .filter((post) => post.node.frontmatter.title.length > 0)
                                .map(({ node: post }) => {
                                    return (
                                        posts.findIndex((entry) => entry.node.id === post.id) % 3 === 2 && (
                                            <BlogPostCard post={post}></BlogPostCard>
                                        )
                                    );
                                })}
                        </Grid.Column>
                    </Grid>
                </Container>
            </Layout>
        );
    }
}

export const pageQuery = graphql`
    query BlogQuery {
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
