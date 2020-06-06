import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Button, Container, Grid, Icon } from 'semantic-ui-react';
import { getPathWithLocale } from '../navigateWithLocale';
import SectionHeader from '../sectionHeader';
import BlogPostCard from './../blog-post-card/blog-post-card';

const SectionRTTBlog = ({ t }) => {
    const data = useStaticQuery(
        graphql`
            query LatestBlogQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
                allMarkdownRemark(
                    filter: { fileAbsolutePath: { regex: "/(posts)/" } }
                    sort: { fields: [frontmatter___date], order: DESC }
                    limit: 3
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
        `,
    );

    let posts = data.allMarkdownRemark.edges;

    return (
        <section className="bg-secondary">
            <Container>
                <SectionHeader
                    headline={t('rtt-blog-headline')}
                    subheadline={t('rtt-blog-subheadline')}
                    primary={false}
                    textAlign="left"
                ></SectionHeader>
                <Grid style={{ paddingTop: '2em' }} stackable centered columns={3}>
                    <Grid.Column data-sal="slide-up" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                        {posts
                            .filter((post) => post.node.frontmatter.title.length > 0)
                            .map(({ node: post }) => {
                                return (
                                    posts.findIndex((entry) => entry.node.id === post.id) % 3 === 0 && (
                                        <BlogPostCard key={post.id} post={post}></BlogPostCard>
                                    )
                                );
                            })}
                    </Grid.Column>
                    <Grid.Column data-sal="slide-up" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                        {posts
                            .filter((post) => post.node.frontmatter.title.length > 0)
                            .map(({ node: post }) => {
                                return (
                                    posts.findIndex((entry) => entry.node.id === post.id) % 3 === 1 && (
                                        <BlogPostCard key={post.id} post={post}></BlogPostCard>
                                    )
                                );
                            })}
                    </Grid.Column>
                    <Grid.Column data-sal="slide-up" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                        {posts
                            .filter((post) => post.node.frontmatter.title.length > 0)
                            .map(({ node: post }) => {
                                return (
                                    posts.findIndex((entry) => entry.node.id === post.id) % 3 === 2 && (
                                        <BlogPostCard key={post.id} post={post}></BlogPostCard>
                                    )
                                );
                            })}
                    </Grid.Column>
                </Grid>
                <Container
                    textAlign="center"
                    className="rtt-main-button-container"
                    data-sal="slide-up"
                    data-sal-delay="0"
                    data-sal-duration="300"
                    data-sal-easing="ease"
                >
                    <Link to={getPathWithLocale('/blog')}>
                        <Button
                            secondary={true}
                            basic
                            inverted={false}
                            size="medium"
                            className="rounded shadow hover-animate"
                        >
                            <Icon name="grid layout" className="left" style={{ opacity: '1' }}></Icon>
                            {t('rtt-blog-button')}
                        </Button>
                    </Link>
                </Container>
            </Container>
        </section>
    );
};

export default SectionRTTBlog;
