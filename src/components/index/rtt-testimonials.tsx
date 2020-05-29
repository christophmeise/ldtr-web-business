import React from 'react';
import Swiper from 'react-id-swiper';
import { Container, Icon, Label } from 'semantic-ui-react';
import 'swiper/css/swiper.css';
import './rtt.css';

const SectionRTTTestimonials = ({ t }) => {
    const isSSR = typeof window === 'undefined';
    let slidesPerView = 2;
    if (!isSSR) {
        if (window.innerWidth < 768) {
            slidesPerView = 1;
        } else {
            slidesPerView = 2;
        }
    }

    const params = {
        slidesPerView: slidesPerView,
        spaceBetween: 40,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };
    return (
        <Container as="section" className="rtt-testimonials-container">
            <Container text textAlign="center">
                <p className="global-subtitle text-primary">Testimonials</p>
                <h2 style={{ marginTop: '0.5rem' }}>{t('rtt-testimonials-headline')}</h2>
            </Container>
            <Swiper {...params}>
                <div>
                    <div className="rtt-testimonials-card">
                        <Label as="a" color="teal" ribbon="right">
                            Hypnotherapy
                        </Label>
                        <div className="rtt-testimonials-card-text">
                            <div className="rtt-testimonials-card-inner-container">
                                <div className="rtt-testimonials-avatar">
                                    <img
                                        className="img-fluid"
                                        src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/avatar/avatar-3.jpg"
                                        alt="..."
                                    />
                                </div>
                                <div>
                                    <Icon
                                        color="blue"
                                        className="rtt-testimonials-card-text-quote"
                                        name="quote right"
                                    />
                                    <p className="rtt-testimonials-card-text-main">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever
                                    </p>
                                    <strong className="rtt-testimonials-card-text-author">Jessica Watson</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="rtt-testimonials-card">
                        <Label as="a" color="teal" ribbon="right">
                            Hypnotherapy
                        </Label>
                        <div className="rtt-testimonials-card-text">
                            <div className="rtt-testimonials-card-inner-container">
                                <div className="rtt-testimonials-avatar">
                                    <img
                                        className="img-fluid"
                                        src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/avatar/avatar-3.jpg"
                                        alt="..."
                                    />
                                </div>
                                <div>
                                    <Icon
                                        color="blue"
                                        className="rtt-testimonials-card-text-quote"
                                        name="quote right"
                                    />
                                    <p className="rtt-testimonials-card-text-main">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever
                                    </p>
                                    <strong className="rtt-testimonials-card-text-author">Jessica Watson</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="rtt-testimonials-card">
                        <Label as="a" color="teal" ribbon="right">
                            Hypnotherapy
                        </Label>
                        <div className="rtt-testimonials-card-text">
                            <div className="rtt-testimonials-card-inner-container">
                                <div className="rtt-testimonials-avatar">
                                    <img
                                        className="img-fluid"
                                        src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/avatar/avatar-3.jpg"
                                        alt="..."
                                    />
                                </div>
                                <div>
                                    <Icon
                                        color="blue"
                                        className="rtt-testimonials-card-text-quote"
                                        name="quote right"
                                    />
                                    <p className="rtt-testimonials-card-text-main">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever
                                    </p>
                                    <strong className="rtt-testimonials-card-text-author">Jessica Watson</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Swiper>
        </Container>
    );
};

export default SectionRTTTestimonials;
