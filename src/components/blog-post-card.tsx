import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Card, CardContent, CardHeader, CardMeta, Grid, Image } from 'semantic-ui-react';

interface Props {
    post: any;
}

export default function BlogPostCard({ post }: Props) {
    return (
        <Grid.Column>
            <Card fluid centered textAlign="left">
                <Image wrapped ui={false}>
                    {post.frontmatter.featuredImage != null && (
                        <Img className="center-cropped" fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                    )}
                </Image>
                <CardContent>
                    <CardHeader>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                    </CardHeader>
                    <CardMeta>{post.frontmatter.date}</CardMeta>
                    <Card.Description>{post.excerpt}</Card.Description>
                </CardContent>
            </Card>
        </Grid.Column>
    );
}
