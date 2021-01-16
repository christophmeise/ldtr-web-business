import { graphql, Link, useStaticQuery } from 'gatsby';
import i18n from 'i18next';
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
                german: allMarkdownRemark(
                    filter: { fileAbsolutePath: { regex: "/(posts\\W)/" } }
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
                english: allMarkdownRemark(
                    filter: { fileAbsolutePath: { regex: "/(postsenglish)/" } }
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
        `,
    );


    let posts;
    if (i18n.language === 'de') {
        posts = data.german.edges;
    } else {
        posts = data.english.edges;
    }
    posts = posts
        .filter((post) => new Date(post.node.frontmatter.date) <= new Date())

    return (
        <section className="bg-secondary">
            <Container>
                <SectionHeader
                    headline={t('blog:Blogeinträge rund um die Themen Hypnotherapie, RTT™ und innerer Transformation')}
                    subheadline={t('blog:Neuigkeiten von Inner Light') + ' Inner Light'}
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
