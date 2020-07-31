import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { Container, Grid, GridColumn } from 'semantic-ui-react';
import './header-overlay.less';

const HeaderOverlay = ({ sources, color, inverted, content, darken = false }) => {
    return (
        <div
            className="header-overlay"
            style={{
                backgroundColor: color,
            }}
        >
            <div className="header-overlay-image-wrapper">
                <BackgroundImage
                    Tag="section"
                    className={`header-overlay-center-cropped ${darken ? 'dark-overlay' : null}`}
                    fluid={sources}
                >
                    <Container className="header-overlay-container">
                        <Grid className="header-overlay-container-desktop responsive-desktop-container">
                            <GridColumn width={7}>
                                <div
                                    data-sal="slide-down"
                                    data-sal-delay="0"
                                    data-sal-duration="300"
                                    data-sal-easing="ease"
                                >
                                    {content}
                                </div>
                            </GridColumn>
                        </Grid>
                        <Grid className="header-overlay-container-mobile responsive-mobile-container">
                            <GridColumn>
                                <div
                                    data-sal="slide-down"
                                    data-sal-delay="0"
                                    data-sal-duration="300"
                                    data-sal-easing="ease"
                                >
                                    {content}
                                </div>
                            </GridColumn>
                        </Grid>
                    </Container>
                </BackgroundImage>
            </div>
        </div>
    );
};

export default HeaderOverlay;
