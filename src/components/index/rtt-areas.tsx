import React from 'react';
import { Container, Grid, GridColumn, GridRow, Image, Segment } from 'semantic-ui-react';
import './rtt.css';

const SectionRTTAreas = ({ t }) => {
    return (
        <section>
            <Segment inverted>
                <Container as="section">
                    <Grid width="16" columns="1">
                        <GridRow textAlign="center" centered>
                            <h2>{t('index-rtt-areas-headline')}</h2>
                        </GridRow>
                        <GridRow textAlign="center" centered>
                            <h3>{t('index-rtt-areas-subheadline')}</h3>
                        </GridRow>
                    </Grid>
                    <Grid columns="3" width="16" stackable>
                        <GridColumn>
                            <Image src="linisboetchen.jpg" rounded></Image>
                        </GridColumn>
                        <GridColumn>
                            <Image src="linisboetchen.jpg" rounded></Image>
                        </GridColumn>
                        <GridColumn>
                            <Image src="linisboetchen.jpg" rounded></Image>
                        </GridColumn>
                    </Grid>
                </Container>
            </Segment>
        </section>
    );
};

export default SectionRTTAreas;
