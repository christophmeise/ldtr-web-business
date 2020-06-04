import { Link } from 'gatsby';
import React from 'react';
import { Button, Container, Embed, Grid, GridColumn, Icon } from 'semantic-ui-react';
import { getPathWithLocale } from '../navigateWithLocale';
import SectionHeader from './../sectionHeader';
import './rtt.less';

const SectionRTT = ({ t }) => {
    return (
        <Container as="section">
            <SectionHeader
                headline={t('rtt-main-headline')}
                subheadline={t('rtt-main-subheadline')}
                primary={true}
                textAlign="center"
            ></SectionHeader>
            <article>
                <Grid columns="1" centered stackable>
                    <GridColumn width="12" className="index-rtt-video-container">
                        <Embed
                            id="HyjhRKM2VCA"
                            aspectRatio="16:9"
                            className="video-wrapper shadow rounded hover-animate"
                            placeholder="/youtube-placeholder.jpg"
                            alt="youtube-image-placeholder"
                            source="youtube"
                            autoplay
                        />
                    </GridColumn>
                </Grid>
                <Container text textAlign="center" className="rtt-main-button-container">
                    <Link to={getPathWithLocale('/rtt')}>
                        <Button primary={true} inverted={false} size="medium" className="shadow hover-animate">
                            {t('rtt-main-button')} <Icon name="arrow right" style={{ opacity: '1' }}></Icon>
                        </Button>
                    </Link>
                </Container>
            </article>
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
