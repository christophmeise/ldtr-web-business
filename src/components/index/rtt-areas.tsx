import React from 'react';
import { Container, Grid, GridColumn, Image } from 'semantic-ui-react';
import SectionHeader from './../sectionHeader';
import './rtt.less';

const SectionRTTAreas = ({ t }) => {
    return (
        <section className="bg-secondary">
            <SectionHeader
                headline={t('index-rtt-areas-headline')}
                subheadline={t('index-rtt-areas-subheadline')}
                primary={false}
            ></SectionHeader>
            <Container>
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
