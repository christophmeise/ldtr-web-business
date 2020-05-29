import React from 'react';
import { Button, Container, Grid, GridColumn } from 'semantic-ui-react';
import './rtt.css';

const SectionRTT = ({ t }) => {
    return (
        <Container as="section">
            <Grid columns="2" width="16" stackable>
                <GridColumn width="8" className="index-rtt-video-container">
                    <div className="aspect-ratio">
                        <iframe
                            src="https://www.youtube.com/embed/HyjhRKM2VCA"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </GridColumn>
                <GridColumn width="8">
                    <div data-sal="slide-up" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                        <h2>{t('index-what-is-rtt-headline')}</h2>
                        <p style={{ textAlign: 'justify' }}>{t('index-what-is-rtt-text')}</p>
                        <Button primary>{t('index-what-is-rtt-button')}</Button>
                    </div>
                </GridColumn>
            </Grid>
        </Container>
    );
};

export default SectionRTT;
