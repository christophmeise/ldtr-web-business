import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { Container, Grid, GridColumn, Responsive } from 'semantic-ui-react';
import './header-overlay.css';

const getWidth = (): any => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const HeaderOverlay = () => {
    const { file } = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "main-banner.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1200, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `,
    );

    return (
        file != null && (
            <div className="header-overlay">
                <Container>
                    <BackgroundImage
                        Tag="section"
                        className="header-overlay-image header-overlay-center-cropped"
                        fluid={file.childImageSharp.fluid}
                        backgroundColor={`#040e18`}
                    >
                        <Grid>
                            <Responsive as={'div'} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
                                <GridColumn width={8}>
                                    <div className="header-overlay-content">
                                        <h1>Transform Your Life</h1>
                                        <h2>
                                            Learn from the world’s best teachers, on the world’s leading personal growth
                                            platform. Join our community of 12 million students from 80 countries.
                                        </h2>
                                    </div>
                                </GridColumn>
                            </Responsive>
                            <Responsive as={'div'} getWidth={getWidth} minWidth={Responsive.onlyMobile.maxWidth}>
                                <GridColumn width={8}>
                                    <div className="header-overlay-content">
                                        <h1>Transform Your Life</h1>
                                        <h2>
                                            Learn from the world’s best teachers, on the world’s leading personal growth
                                            platform. Join our community of 12 million students from 80 countries.
                                        </h2>
                                    </div>
                                </GridColumn>
                            </Responsive>
                        </Grid>
                    </BackgroundImage>
                </Container>
            </div>
        )
    );
};

export default HeaderOverlay;
