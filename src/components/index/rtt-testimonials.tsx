import React from 'react';
import Swiper from 'react-id-swiper';
import { Container } from 'semantic-ui-react';
import 'swiper/css/swiper.css';
import './rtt.css';

const SectionRTTTestimonials = ({ t }) => {
    const params = {
        slidesPerView: 2,
        spaceBetween: 40,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };
    return (
        <Container as="section" className="rtt-testimonials-container">
            <Swiper {...params}>
                <div className="rtt-testimonials-card">
                    <div className="rtt-testimonials-card-text">
                        <div>Quote</div>
                        <div className="rtt-testimonials-card-text-main">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever
                        </div>
                        <div>
                            <strong>Jessica Watson</strong>
                        </div>
                    </div>
                </div>
                <div className="rtt-testimonials-card">
                    <div className="rtt-testimonials-card-text">
                        <div>Quote</div>
                        <div className="rtt-testimonials-card-text-main">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever
                        </div>
                        <div>
                            <strong>Jessica Watson</strong>
                        </div>
                    </div>
                </div>
                <div className="rtt-testimonials-card">
                    <div className="rtt-testimonials-card-text">
                        <div>Quote</div>
                        <div className="rtt-testimonials-card-text-main">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever
                        </div>
                        <div>
                            <strong>Jessica Watson</strong>
                        </div>
                    </div>
                </div>
            </Swiper>
        </Container>
    );
};

export default SectionRTTTestimonials;
