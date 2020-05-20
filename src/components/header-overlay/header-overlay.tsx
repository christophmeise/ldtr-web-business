import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { Container, Grid, GridColumn, Responsive } from 'semantic-ui-react';
import getWidth from './../../utils/device-width';
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
                    <Responsive
                        className="header-overlay-container-desktop"
                        as={'div'}
                        getWidth={getWidth}
                        minWidth={Responsive.onlyMobile.maxWidth}
                    >
                        <Grid>
                            <GridColumn width={8}>{content}</GridColumn>
                        </Grid>
                    </Responsive>
                    <Responsive
                        className="header-overlay-container-mobile"
                        as={'div'}
                        getWidth={getWidth}
                        maxWidth={Responsive.onlyMobile.maxWidth}
                    >
                        <Grid>
                            <GridColumn>{content}</GridColumn>
                        </Grid>
                    </Responsive>
                </Container>
            </BackgroundImage>
        </div>
    );
};

export default HeaderOverlay;
