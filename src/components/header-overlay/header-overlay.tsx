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
                    <div className="responsive-desktop-container">
                        <Grid>
                            <GridColumn width={8}>{content}</GridColumn>
                        </Grid>
                    </div>
                    <div className="responsive-mobile-container">
                        <Grid>
                            <GridColumn>{content}</GridColumn>
                        </Grid>
                    </div>
                </Container>
            </BackgroundImage>
        </div>
    );
};

export default HeaderOverlay;
