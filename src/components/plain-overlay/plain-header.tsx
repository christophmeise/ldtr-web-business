import React from 'react';
import { Container, Grid, GridColumn, Responsive } from 'semantic-ui-react';
import getWidth from '../../utils/device-width';
import './plain-header.css';

const PlainHeader = ({ content }) => {
    return (
        <div className="plain-header">
            <Container className="plain-header-container">
                <Responsive
                    className="plain-header-container-desktop"
                    as={'div'}
                    getWidth={getWidth}
                    minWidth={Responsive.onlyMobile.maxWidth}
                >
                    <Grid className="plain-header-grid">
                        <GridColumn width={12}>{content}</GridColumn>
                    </Grid>
                </Responsive>
                <Responsive
                    className="plain-header-container-mobile"
                    as={'div'}
                    getWidth={getWidth}
                    maxWidth={Responsive.onlyMobile.maxWidth}
                >
                    <Grid>
                        <GridColumn>{content}</GridColumn>
                    </Grid>
                </Responsive>
            </Container>
        </div>
    );
};

export default PlainHeader;
