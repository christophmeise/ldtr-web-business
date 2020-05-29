import React from 'react';
import { Container, Grid, GridColumn, GridRow, Image, Segment } from 'semantic-ui-react';
import './rtt.css';

const SectionRTTAreas = ({ t }) => {
    return (
        <section>
            <Segment inverted>
                <Container as="section">
                    <Grid width="16" columns="1" stackable>
                        <GridRow textAlign="center" centered>
                            <h2>{t('index-rtt-areas-headline')}</h2>
                        </GridRow>
                        <GridRow textAlign="center" centered>
                            <h3>{t('index-rtt-areas-subheadline')}</h3>
                        </GridRow>
                    </Grid>
                    <Grid columns="3" width="16" stackable>
                        <GridColumn>
                            <div data-sal="slide-up" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                                <Image src="linisboetchen.jpg" rounded></Image>
                            </div>
                        </GridColumn>
                        <GridColumn>
                            <div data-sal="slide-up" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                                <Image src="linisboetchen.jpg" rounded></Image>
                            </div>
                        </GridColumn>
                        <GridColumn>
                            <div data-sal="slide-up" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                                <Image src="linisboetchen.jpg" rounded></Image>
                            </div>
                        </GridColumn>
                    </Grid>
                </Container>
            </Segment>
        </section>
    );
};

export default SectionRTTAreas;
