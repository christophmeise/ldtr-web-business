import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Card, CardContent, CardHeader, CardMeta, Image, Label } from 'semantic-ui-react';
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
};

export default function BlogPostCard({ post }: Props) {
    return (
        <Card className="rounded" fluid centered>
            <Link to={getPathWithLocale(post.frontmatter.path)}>
                <Image className="rounded-corners-top" wrapped ui={false}>
                    {post.frontmatter.featuredImage != null && (
                        <Img className="center-cropped" fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                    )}
                </Image>
            </Link>
            <CardContent>
                <CardHeader>
                    <Link className="text-secondary" to={post.frontmatter.path}>
                        {post.frontmatter.title}
                    </Link>
                </CardHeader>
                <CardMeta>{post.frontmatter.date}</CardMeta>
                <Card.Description>{post.excerpt}</Card.Description>
            </CardContent>
            <CardContent extra>
                <Label.Group className="blog-post-tag-label-group">
                    {post.frontmatter.tags.map((tag) => {
                        return (
                            <Label size="small" basic className="blog-post-tag-label rounded">
                                {tag}
                            </Label>
                        );
                    })}
                </Label.Group>
            </CardContent>
        </Card>
    );
}
