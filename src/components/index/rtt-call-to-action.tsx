import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { Button, Container, Grid, GridColumn } from 'semantic-ui-react';
import './rtt.less';

const SectionRTTCallToAction = ({ t }) => {
    const data = useStaticQuery(
        graphql`
            query {
                image: file(relativePath: { eq: "call-to-action-todo.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_noBase64
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
                    <Grid
                        className="header-overlay-container-desktop responsive-desktop-container"
                        verticalAlign="middle"
                    >
                        <GridColumn width={16} verticalAlign="middle">
                            <h2 className="call-to-action-text">Are You Ready For Your Transformation?</h2>
                            <Button primary size="large">
                                Get Started
                            </Button>
                        </GridColumn>
                    </Grid>
                    <Container
                        className="header-overlay-container-mobile responsive-mobile-container"
                        textAlign="center"
                    >
                        <h2 className="call-to-action-text">Are You Ready For Your Transformation?</h2>
                        <Button primary size="large">
                            Get Started
                        </Button>
                    </Container>
                </Container>
            </BackgroundImage>
        </section>
    );
};

export default SectionRTTCallToAction;
