import Img from 'gatsby-image';
import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import './blog-post-introduction.less';

interface Props {
    content: any;
}

export default function BlogPostIntroduction({ content }: Props) {
    return (
        <Container>
            <Grid stackable>
                <Grid.Column width={8}>
                    <Image className="rounded-corners" wrapped ui={false}>
                        {content.images != null && <Img fluid={content.images[0].childImageSharp.fluid} />}
                    </Image>
                </Grid.Column>
                <Grid.Column width={8}>
                    <h2>{content.title}</h2>
                    <p>{content.content}</p>
                </Grid.Column>
            </Grid>
        </Container>
    );
}
