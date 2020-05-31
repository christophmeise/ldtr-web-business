import { graphql } from 'gatsby';
import React from 'react';
import { Container, Grid, Label } from 'semantic-ui-react';
import BlogPostCard from '../components/blog-post-card/blog-post-card';
import Layout from '../components/layout';
import PlainHeader from '../components/plain-overlay/plain-header';
import SEO from '../components/seo';
import withI18next from './../components/withI18next/withI18next';
import './blog.less';

interface Props {
    t: any;
    data: {
        s;
        allMarkdownRemark: any;
        site: {
            siteMetadata: {
                title: string;
                description: string;
            };
        };
    };
}

interface BlogState {
    tagFilter: string;
}

class Blog extends React.Component<Props, BlogState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            tagFilter: '',
        };
    }

    componentDidMount() {
        // use window.location here
    }

    filterByLabel(e, data) {
        this.setState({ tagFilter: data.children });
    }

    getTags(posts: any) {
        const flatten = (ary) => ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
        const allTags = posts
            .filter((post) => post.node.frontmatter.tags != null && post.node.frontmatter.tags.length > 0)
            .map(({ node: post }) => {
                return post.frontmatter.tags;
            });
        const allTagsFlat = flatten(allTags);
        const tags = ['All', ...new Set(allTagsFlat)];
        return tags;
    }

    render() {
        const { t } = this.props;
        const data = this.props.data;
        let posts = data.allMarkdownRemark.edges;
        const siteTitle = data.site.siteMetadata.title;
        const description = data.site.siteMetadata.description;
        const tags = this.getTags(posts);
        if (this.state.tagFilter.length > 0 && this.state.tagFilter != 'All') {
            posts = posts.filter((post) => post.node.frontmatter.tags.includes(this.state.tagFilter));
        }

        return (
            <Layout title={siteTitle} t={t}>
                <SEO lang="en" description={description} title="All posts" />
                <Container className="global-header-padding">
                    <PlainHeader content={<HeaderContent />} />
                    <Label.Group className="blog-tag-label-group" color="blue">
                        {tags.map((tag) => {
                            return (
                                <Label as="a" onClick={this.filterByLabel.bind(this)}>
                                    {tag}
                                </Label>
                            );
                        })}
                    </Label.Group>
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

export default withI18next('common')(Blog);

const HeaderContent = () => {
    return (
        <div>
            <h1 className="header-overlay-headline">Latest on the blog</h1>
            <h2 className="header-overlay-subheadline">
                Learn from the world’s best teachers, on the world’s leading personal growth platform. Join our
                community of 12 million students from 80 countries.
            </h2>
        </div>
    );
};

export const pageQuery = graphql`
    query BlogQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/(posts)/" } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        tags
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
