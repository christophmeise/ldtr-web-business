import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { Container, Grid, GridColumn, Responsive } from 'semantic-ui-react';
import getWidth from './../../utils/device-width';
import './header-overlay.css';

const HeaderOverlay = ({ sources, color, inverted }) => {
    return (
        <div
            className="header-overlay"
            style={{
                backgroundColor: color,
            }}
        >
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
                                <OverlayContent inverted={inverted}></OverlayContent>
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
                                <OverlayContent inverted={inverted}></OverlayContent>
                            </GridColumn>
                        </Grid>
                    </Responsive>
                </Container>
            </BackgroundImage>
        </div>
    );
};

export default HeaderOverlay;

const OverlayContent = ({ inverted }) => {
    return (
        <div>
            <h1 className={`header-overlay-headline ${inverted ? 'header-overlay-headline-inverted' : null}`}>
                Transform Your Life
            </h1>
            <h2 className={`header-overlay-subheadline ${inverted ? 'header-overlay-subheadline-inverted' : null}`}>
                Learn from the world’s best teachers, on the world’s leading personal growth platform. Join our
                community of 12 million students from 80 countries.
            </h2>
        </div>
    );
};
