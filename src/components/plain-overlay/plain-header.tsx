import React from 'react';
import { Container, Grid, GridColumn } from 'semantic-ui-react';
import './plain-header.less';

const PlainHeader = ({ content }) => {
    return (
        <div className="plain-header">
            <Container className="plain-header-container">
                <div className="responsive-desktop-container plain-header-container-desktop">
                    <Grid className="plain-header-grid">
                        <GridColumn width={12}>{content}</GridColumn>
                    </Grid>
                </div>
                <div className="responsive-mobile-container plain-header-container-mobile">
                    <Grid>
                        <GridColumn>{content}</GridColumn>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default PlainHeader;
