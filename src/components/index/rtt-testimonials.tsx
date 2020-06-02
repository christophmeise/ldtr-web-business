import React from 'react';
import Swiper from 'react-id-swiper';
import { Container, Icon, Label } from 'semantic-ui-react';
import 'swiper/css/swiper.css';
import SectionHeader from './../sectionHeader';
import './rtt.less';

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
        <Container as="section">
            <SectionHeader
                headline={t('rtt-testimonials-headline')}
                subheadline="Testimonials"
                primary={true}
                textAlign="center"
            ></SectionHeader>
            <Swiper {...params}>
                <div>
                    <RTTTestimonialCard
                        label="Hypnotherapy"
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                        author="Jessica Watson"
                    ></RTTTestimonialCard>
                </div>
                <div>
                    <RTTTestimonialCard
                        label="Hypnotherapy"
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                        author="Jessica Watson"
                    ></RTTTestimonialCard>
                </div>
                <div>
                    <RTTTestimonialCard
                        label="Hypnotherapy"
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                        author="Jessica Watson"
                    ></RTTTestimonialCard>
                </div>
            </Swiper>
        </Container>
    );
};

export default SectionRTTTestimonials;

export function RTTTestimonialCard({ label, text, author }) {
    return (
        <div className="rtt-testimonials-card">
            <Label as="a" ribbon="right">
                {label}
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
                        <Icon className="rtt-testimonials-card-text-quote text-secondary" name="quote right" />
                        <p className="rtt-testimonials-card-text-main">{text}</p>
                        <strong className="rtt-testimonials-card-text-author">{author}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
