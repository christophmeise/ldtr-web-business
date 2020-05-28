import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Card, CardContent, CardHeader, CardMeta, Image } from 'semantic-ui-react';
import { getPathWithLocale } from '../navigateWithLocale';
import './blog-post-card.css';

interface Props {
    post: any;
}

export default function BlogPostCard({ post }: Props) {
    return (
        <Card className="rounded-corners" fluid centered textAlign="left">
            <Link to={getPathWithLocale(post.frontmatter.path)}>
                <Image className="rounded-corners-top" wrapped ui={false}>
                    {post.frontmatter.featuredImage != null && (
                        <Img className="center-cropped" fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                    )}
                </Image>
            </Link>
            <CardContent>
                <CardHeader>
                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </CardHeader>
                <CardMeta>{post.frontmatter.date}</CardMeta>
                <Card.Description>{post.excerpt}</Card.Description>
            </CardContent>
        </Card>
    );
}
