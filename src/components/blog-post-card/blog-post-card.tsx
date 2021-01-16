import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { Card, CardContent, CardMeta, Label } from 'semantic-ui-react';
import { getPathWithLocale } from '../navigateWithLocale';
import './blog-post-card.less';

interface Props {
    post: Post;
}

type Post = {
    frontmatter: PostFrontmatter;
    excerpt: any;
};

type PostFrontmatter = {
    title: string;
    date: string;
    path: string;
    tags: any;
    featuredImage: any;
    abstract: string;
};

export default function BlogPostCard({ post }: Props) {
    return (
        <Link to={getPathWithLocale(post.frontmatter.path)}>
            <Card className="rounded hover-animate shadow" fluid centered>
                <div></div>
                <BackgroundImage
                    Tag="div"
                    className="rounded-corners-top dark-overlay-blog rtt-areas-card-background"
                    fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                >
                    <Label.Group className="blog-post-tag-label-group">
                        {post.frontmatter.tags.slice(0, 3).map((tag, index) => {
                            return (
                                <Label
                                    size="small"
                                    circular
                                    basic
                                    key={"tag-" + index + post.frontmatter.path}
                                    className="blog-post-tag-label blog-post-tag-transparent"
                                >
                                    {tag}
                                </Label>
                            );
                        })}
                    </Label.Group>
                    <div className="rtt-areas-card-background-text-wrapper">
                        <h3 className="rtt-areas-card-background-text">{post.frontmatter.title}</h3>
                    </div>
                </BackgroundImage>
                <CardContent className="blog-post-card-content">
                    {/*                 <CardHeader>
                    <Link className="text-secondary" to={post.frontmatter.path}>
                        {post.frontmatter.title}
                    </Link>
                </CardHeader> */}

                    <Card.Description>{post.frontmatter.abstract}</Card.Description>
                </CardContent>
                <CardContent extra>
                    <CardMeta>{post.frontmatter.date}</CardMeta>
                </CardContent>
            </Card>
        </Link>
    );
}
