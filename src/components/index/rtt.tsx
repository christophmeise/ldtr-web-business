import { Link } from 'gatsby';
import React from 'react';
import { Button, Container, Embed, Icon } from 'semantic-ui-react';
import { getPathWithLocale } from '../navigateWithLocale';
import SectionHeader from './../sectionHeader';
import './rtt.less';

const SectionRTT = ({ t }) => {
    return (
        <section className="bg-secondary">
            <Container>
                <SectionHeader
                    headline={t('rtt-main-headline')}
                    subheadline={t('rtt-main-subheadline')}
                    primary={false}
                    textAlign="center"
                ></SectionHeader>
                <article>
                    <div className="index-rtt-video-container">
                        <Embed
                            id="3rzZHje8NhA"
                            aspectRatio="16:9"
                            className="video-wrapper shadow rounded hover-animate"
                            placeholder="/youtube-placeholder.jpg"
                            alt="youtube-image-placeholder"
                            source="youtube"
                            autoplay
                        />
                    </div>
                    <Container text textAlign="center" className="rtt-main-button-container">
                        <Link to={getPathWithLocale('/rtt')}>
                            <Button
                                primary={true}
                                inverted={false}
                                size="medium"
                                className="shadow hover-animate rounded"
                            >
                                {t('rtt-main-button')} <Icon name="arrow right" style={{ opacity: '1' }}></Icon>
                            </Button>
                        </Link>
                    </Container>
                </article>
            </Container>
        </section>
    );
};

export default SectionRTT;
