import React from 'react';
import { Container, Grid, GridColumn } from 'semantic-ui-react';
import './plain-header.css';

const PlainHeader = ({ content }) => {
    return (
        <div className="plain-header">
            <Container className="plain-header-container">
                <div className="responsive-desktop-container">
                    <Grid className="plain-header-grid">
                        <GridColumn width={12}>{content}</GridColumn>
                    </Grid>
                </div>
                <div className="responsive-mobile-container">
                    <Grid>
                        <GridColumn>{content}</GridColumn>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default PlainHeader;
