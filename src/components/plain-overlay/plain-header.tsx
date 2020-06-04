import React from 'react';
import { Container, Grid, GridColumn } from 'semantic-ui-react';
import './plain-header.less';

const PlainHeader = ({ content }) => {
    return (
        <div className="plain-header">
            <Container className="plain-header-container">
                <div className="responsive-desktop-container plain-header-container-desktop">
                    <Grid className="plain-header-grid">
                        <GridColumn width={12}>
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
                </div>
                <div className="responsive-mobile-container plain-header-container-mobile">
                    <Grid>
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
                </div>
            </Container>
        </div>
    );
};

export default PlainHeader;
