import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Card, CardContent, CardHeader, CardMeta, Image } from 'semantic-ui-react';
import './shop-article-card.css';

interface Props {
    article: any;
}

export default function ShopArticleCard({ article }: Props) {
    return (
        <Card className="rounded-corners" fluid centered textAlign="left">
            <Link to={article.frontmatter.path}>
                <Image className="rounded-corners-top" wrapped ui={false}>
                    {article.frontmatter.picture != null && (
                        <Img className="center-cropped" fluid={article.frontmatter.picture.childImageSharp.fluid} />
                    )}
                </Image>
            </Link>
            <CardContent>
                <CardHeader>
                    <Link to={article.frontmatter.path}>{article.frontmatter.product_name}</Link>
                </CardHeader>
                <CardMeta>{article.frontmatter.price}</CardMeta>
                <Card.Description>{article.excerpt}</Card.Description>
            </CardContent>
        </Card>
    );
}
