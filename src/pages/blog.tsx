import { graphql } from 'gatsby';
import React from 'react';
import { Container, Grid, Header, Label } from 'semantic-ui-react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPostCard from './../components/blog-post-card/blog-post-card';
import HeaderOverlay from './../components/header-overlay/header-overlay';
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
        comingSoonImage: any;
        comingSoonImageMobile: any;
    };
}

interface BlogState {
    tagFilter: string;
}

class Blog extends React.Component<Props, BlogState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            tagFilter: this.props.t('blog:Alle'),
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
        const tags = [this.props.t('blog:Alle'), ...new Set(allTagsFlat)];
        return tags;
    }

    render() {
        const { t } = this.props;
        const data = this.props.data;
        const comingSoonImage = data.comingSoonImage.childImageSharp.fluid;
        const comingSoonImageMobile = data.comingSoonImageMobile.childImageSharp.fluid;
        let posts = data.allMarkdownRemark.edges;
        const siteTitle = data.site.siteMetadata.title;
        const description = data.site.siteMetadata.description;
        const tags = this.getTags(posts);
        posts = posts
            .filter((post) => new Date(post.node.frontmatter.date) <= new Date())
        if (this.state.tagFilter.length > 0 && this.state.tagFilter != this.props.t('blog:Alle')) {
            posts = posts
                .filter((post) => post.node.frontmatter.tags.includes(this.state.tagFilter));
        }

        const sources = [
            comingSoonImageMobile,
            {
                ...comingSoonImage,
                media: `(min-width: 768px)`,
            },
        ];

        return (
            <Layout title={siteTitle} t={t} invertedHeader={true}>
                <SEO lang="en" description={description} title="All posts" />
                <HeaderOverlay
                    sources={sources}
                    color="#000000"
                    inverted={true}
                    content={<OverlayContent inverted={true} t={t}></OverlayContent>}
                    darken={true}
                />
                <div>
                    <div className="blog-content-sections bg-secondary">
                        <Container>
                            <Header
                                data-sal="slide-up"
                                data-sal-delay="0"
                                data-sal-duration="300"
                                data-sal-easing="ease"
                                textAlign="center"
                                className="global-flex-column global-no-margin"
                            >
                                <h3 className="blog-headline">{t('blog:Nach Stichwort filtern')}</h3>
                            </Header>
                            <Label.Group className="blog-tag-label-group">
                                {tags.map((tag, index) => {
                                    return (
                                        <Label
                                            key={"tag-" + index}
                                            as="a"
                                            active={this.state.tagFilter === tag}
                                            className="blog-post-tag-label"
                                            circular
                                            onClick={this.filterByLabel.bind(this)}
                                        >
                                            {tag}
                                        </Label>
                                    );
                                })}
                            </Label.Group>
                            <section>
                                <Grid style={{ paddingTop: '2em' }} stackable centered columns={3}>
                                    <Grid.Column>
                                        {posts
                                            .filter((post) => post.node.frontmatter.title.length > 0)
                                            .map(({ node: post }) => {
                                                return (
                                                    posts.findIndex((entry) => entry.node.id === post.id) % 3 === 0 && (
                                                        <div className="blog-post-card-wrapper">
                                                            <BlogPostCard post={post}></BlogPostCard>
                                                        </div>
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
                                                        <div className="blog-post-card-wrapper">
                                                            <BlogPostCard post={post}></BlogPostCard>
                                                        </div>
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
                                                        <div className="blog-post-card-wrapper">
                                                            <BlogPostCard post={post}></BlogPostCard>
                                                        </div>
                                                    )
                                                );
                                            })}
                                    </Grid.Column>
                                </Grid>
                            </section>
                        </Container>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default withI18next(['common', 'blog'])(Blog);

const HeaderContent = ({ t }) => {
    return (
        <div>
            <h1 className="header-overlay-headline">{t('blog:Neuigkeiten von Inner Light')}</h1>
            <h2 className="header-overlay-subheadline">
                {t('blog:Blogeinträge rund um die Themen Hypnotherapie, RTT™ und innerer Transformation')}
            </h2>
        </div>
    );
};

const OverlayContent = ({ inverted, t }) => {
    return (
        <div>
            {/*             <h1 className={`header-overlay-headline ${inverted ? 'header-overlay-headline-inverted' : null}`}>
                {t('blog:Neuigkeiten von Inner Light')}
            </h1> */}
            <h1
                className={`header-overlay-headline ${inverted ? 'header-overlay-headline-inverted' : null}`}
                style={{ marginBottom: '0rem' }}
            >
                {t('blog:Neuigkeiten von Inner Light')}
                {/*  <Typed strings={typedWords} backDelay={2500} typeSpeed={110} backSpeed={100} loop></Typed> */}
            </h1>
            <h1 className="header-overlay-headline header-overlay-headline-inverted header-overlay-inner-light">
                Inner Light
            </h1>
            <h2 className={`header-overlay-subheadline ${inverted ? 'header-overlay-subheadline-inverted' : null}`}>
                {t('blog:Blogeinträge rund um die Themen Hypnotherapie, RTT™ und innerer Transformation')}
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
        comingSoonImage: file(relativePath: { eq: "tree_sunset.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        comingSoonImageMobile: file(relativePath: { eq: "tree_sunset_mobile.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
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
