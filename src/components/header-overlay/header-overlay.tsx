import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { Container, Grid, GridColumn, Responsive } from 'semantic-ui-react';
import getWidth from './../../utils/device-width';
import './header-overlay.css';

const HeaderOverlay = () => {
    const data = useStaticQuery(
        graphql`
            query {
                desktopImage: file(relativePath: { eq: "main-banner.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1600, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                mobileImage: file(relativePath: { eq: "main-banner-mobile.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1200, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `,
    );
    let sources;
    if (data != null) {
        sources = [
            data.mobileImage.childImageSharp.fluid,
            {
                ...data.desktopImage.childImageSharp.fluid,
                media: `(min-width: 768px)`,
            },
        ];
    }

    return (
        data != null && (
            <div className="header-overlay">
                <BackgroundImage
                    Tag="section"
                    className="header-overlay-image header-overlay-center-cropped"
                    fluid={sources}
                >
                    <Container className="header-overlay-container">
                        <Responsive
                            className="header-overlay-container-desktop"
                            as={'div'}
                            getWidth={getWidth}
                            minWidth={Responsive.onlyMobile.maxWidth}
                        >
                            <Grid>
                                <GridColumn width={8}>
                                    <OverlayContent></OverlayContent>
                                </GridColumn>
                            </Grid>
                        </Responsive>
                        <Responsive
                            className="header-overlay-container-mobile"
                            as={'div'}
                            getWidth={getWidth}
                            maxWidth={Responsive.onlyMobile.maxWidth}
                        >
                            <Grid>
                                <GridColumn>
                                    <OverlayContent></OverlayContent>
                                </GridColumn>
                            </Grid>
                        </Responsive>
                    </Container>
                </BackgroundImage>
            </div>
        )
    );
};

export default HeaderOverlay;

const OverlayContent = () => {
    return (
        <div>
            <h1 className="header-overlay-headline">Transform Your Life</h1>
            <h2 className="header-overlay-subheadline">
                Learn from the world’s best teachers, on the world’s leading personal growth platform. Join our
                community of 12 million students from 80 countries.
            </h2>
        </div>
    );
};
