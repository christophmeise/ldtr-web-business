import React from 'react';
import { Container, Grid, GridColumn, Header, Image } from 'semantic-ui-react';
import './rtt.less';

const SectionRTTAreas = ({ t }) => {
    return (
        <section className="bg-secondary">
            <Header textAlign="center">
                <h3 className="global-subtitle text-secondary">{t('index-rtt-areas-headline')}</h3>
                <h2 style={{ marginTop: '0.5rem' }}>{t('index-rtt-areas-subheadline')}</h2>
            </Header>
            <Container style={{ marginTop: '2.5rem' }}>
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
        </section>
    );
};

export default SectionRTTAreas;
