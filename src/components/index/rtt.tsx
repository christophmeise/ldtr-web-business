import React from 'react';
import { Container, Grid, GridColumn, Header } from 'semantic-ui-react';
import './rtt.less';

const SectionRTT = ({ t }) => {
    return (
        <Container as="section">
            <Header textAlign="center">
                <h3 className="global-subtitle text-primary">Rapid Transformational Therapy™</h3>
                <h2 className="global-headline" style={{ marginTop: '0.5rem' }}>
                    A Novel Combination of Hypnotherapy, Psychotherapy and Cognitive Behavioural Therapy
                </h2>
            </Header>
            <article>
                <Grid columns="1" centered stackable>
                    <GridColumn width="12" className="index-rtt-video-container">
                        <div className="aspect-ratio video-wrapper shadow rounded">
                            <iframe
                                src="https://www.youtube.com/embed/HyjhRKM2VCA"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </GridColumn>
                </Grid>
            </article>
            {/*  <Segment raised={false} textAlign="center" style={{ marginBottom: '3rem' }}>
                <p >Rapid Transformational Therapy™</p>
                <h2 style={{ marginTop: '0.5rem' }}>
                   
                </h2>
            </Segment>
 */}
            {/*  <Grid columns="1" centered stackable>
                <GridColumn width="12" className="index-rtt-video-container">
                    <div className="aspect-ratio">
                        <iframe
                            src="https://www.youtube.com/embed/HyjhRKM2VCA"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </GridColumn>
            </Grid>
            <Grid columns="3" textAlign="center">
                <GridColumn>
                    <div className="rtt-icon-circle">
                        <Icon color="blue" name="calendar check outline" size="big"></Icon>
                    </div>
                    <h3>Book your Session</h3>
                    <p>
                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his
                        bed in
                    </p>
                </GridColumn>
                <GridColumn>
                    <div className="rtt-icon-circle">
                        <Icon color="blue" name="calendar check outline" size="big"></Icon>
                    </div>
                    <h3>Book your Session</h3>
                    <p>
                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his
                        bed in
                    </p>
                </GridColumn>{' '}
                <GridColumn>
                    <div className="rtt-icon-circle">
                        <Icon color="blue" name="calendar check outline" size="big"></Icon>
                    </div>
                    <h3>Book your Session</h3>
                    <p>
                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his
                        bed in
                    </p>
                </GridColumn>
                </Grid> */}
            {/*  <div data-sal="slide-up" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                        <h2>{t('index-what-is-rtt-headline')}</h2>
                        <p style={{ textAlign: 'justify' }}>{t('index-what-is-rtt-text')}</p>
                        <Button primary>{t('index-what-is-rtt-button')}</Button>
                    </div> */}
        </Container>
    );
};

export default SectionRTT;
