import { graphql, Link, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { Button, Container, Grid, GridColumn } from 'semantic-ui-react';
import { getPathWithLocale } from '../navigateWithLocale';
import './rtt.less';

const SectionRTTCallToAction = ({ t }) => {
    const data = useStaticQuery(
        graphql`
            query {
                image: file(relativePath: { eq: "call-to-action-todo.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `,
    );

    return (
        <section>
            <BackgroundImage className="rtt-call-to-action-image" fluid={data.image.childImageSharp.fluid}>
                <Container className="rtt-call-to-action-image-container">
                    <Grid className="rtt-call-container-desktop responsive-desktop-container" verticalAlign="middle">
                        <GridColumn width={16} verticalAlign="middle">
                            <h2 className="call-to-action-text font-playfair">{t('rtt-call-to-action-text')}</h2>
                            <Button primary size="medium">
                                {t('rtt-call-to-action-button')}
                            </Button>
                        </GridColumn>
                    </Grid>
                    <Container className="rtt-call-container-mobile responsive-mobile-container" textAlign="left">
                        <h2 className="call-to-action-text font-playfair">{t('rtt-call-to-action-text')}</h2>
                        <Link to={getPathWithLocale('/book-call')}>
                            <Button primary size="medium" className="shadow hover-animate">
                                {t('rtt-call-to-action-button')}
                            </Button>
                        </Link>
                    </Container>
                </Container>
            </BackgroundImage>
        </section>
    );
};

export default SectionRTTCallToAction;
