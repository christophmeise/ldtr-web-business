import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { Container, Grid, GridColumn } from 'semantic-ui-react';
import './header-overlay.css';

const HeaderOverlay = ({ sources, color, inverted, content }) => {
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
                    <Grid className="header-overlay-container-desktop responsive-desktop-container">
                        <GridColumn width={8}>{content}</GridColumn>
                    </Grid>
                    <Grid className="header-overlay-container-mobile responsive-mobile-container">
                        <GridColumn>{content}</GridColumn>
                    </Grid>
                </Container>
            </BackgroundImage>
        </div>
    );
};

export default HeaderOverlay;
