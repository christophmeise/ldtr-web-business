import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Grid, Image, Item, Label } from 'semantic-ui-react';
import { getPathWithLocale } from '../navigateWithLocale';
import './shop-article-card.css';

interface Props {
    article: any;
}

export default function ShopArticleCard({ article }: Props) {
    return (
        <Item>
            <Grid stackable columns={2} celled>
                <Grid.Column className="shop-article-grid-column" stretched>
                    <Link to={getPathWithLocale(article.frontmatter.path)}>
                        <Image className="shop-article-image">
                            {article.frontmatter.picture != null && (
                                <Img fluid={article.frontmatter.picture.childImageSharp.fluid} />
                            )}
                        </Image>
                    </Link>
                </Grid.Column>
                <Grid.Column stretched>
                    <Item.Content>
                        <Item.Header>
                            <Link to={getPathWithLocale(article.frontmatter.path)}>
                                <h2>{article.frontmatter.product_name}</h2>
                            </Link>
                        </Item.Header>
                        <Item.Meta>
                            <span className="cinema">Union Square 14</span>
                        </Item.Meta>
                        <Item.Description>{article.excerpt}</Item.Description>
                        <Item.Extra>
                            {article.frontmatter.tags.map((tag) => {
                                return <Label>{tag}</Label>;
                            })}
                        </Item.Extra>
                    </Item.Content>
                </Grid.Column>
            </Grid>
        </Item>
    );
}
