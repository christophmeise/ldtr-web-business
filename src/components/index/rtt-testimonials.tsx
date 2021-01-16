import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Swiper, { ReactIdSwiperChildren } from 'react-id-swiper';
import { Container, Icon, Label } from 'semantic-ui-react';
import 'swiper/css/swiper.css';
import SectionHeader from './../sectionHeader';
import './rtt.less';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

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
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    const data = useStaticQuery(
        graphql`
            query {
                customer1: file(relativePath: { eq: "lini.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 100, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                customer2: file(relativePath: { eq: "Testimonial_Laetitia_Edited.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 100, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                customer3: file(relativePath: { eq: "antje.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 100, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                customer4: file(relativePath: { eq: "theresa.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 100, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `,
    );

    const card1 = (<div>
        <RTTTestimonialCard
            mobile={slidesPerView === 1}
            label={t('testimonials:customer1-label')}
            text={t('testimonials:customer1-text')}
            author="Celina, Berlin"
            src={data.customer1.childImageSharp.fluid}
        ></RTTTestimonialCard>
    </div>);
    const card2 = (<div>
        <RTTTestimonialCard
            mobile={slidesPerView === 1}
            label={t('testimonials:customer2-label')}
            text={t('testimonials:customer2-text')}
            author="Laetitia, Paris"
            src={data.customer2.childImageSharp.fluid}
        ></RTTTestimonialCard>
    </div>);
    const card3 = (<div>
        <RTTTestimonialCard
            mobile={slidesPerView === 1}
            label={t('testimonials:customer3-label')}
            text={t('testimonials:customer3-text')}
            author="Antje, Leipzig"
            src={data.customer3.childImageSharp.fluid}
        ></RTTTestimonialCard>
    </div>);
    const card4 = (<div>
        <RTTTestimonialCard
            mobile={slidesPerView === 1}
            label={t('testimonials:customer4-label')}
            text={t('testimonials:customer4-text')}
            author="Teresa, Berlin"
            src={data.customer4.childImageSharp.fluid}
        ></RTTTestimonialCard>
    </div>);

    const cards: ReactIdSwiperChildren = [card1, card2, card3, card4];
    shuffleArray(cards);

    return (
        <Container as="section">
            <SectionHeader
                headline={t('rtt-testimonials-headline')}
                subheadline={t('rtt-testimonials-subheadline')}
                primary={true}
                textAlign="center"
            ></SectionHeader>
            <Swiper {...params}>

                {cards.map((card) => {
                    return (
                        <div>
                            {card}
                        </div>
                    );
                })}

            </Swiper>
        </Container>
    );
};

export default SectionRTTTestimonials;

export function RTTTestimonialCard({ label, text, author, mobile, src }) {
    return (
        <div className="rtt-testimonials-card">
            {!mobile && (
                <Label as="a" ribbon="right">
                    {label}
                </Label>
            )}

            <div className="rtt-testimonials-card-text">
                <div className="rtt-testimonials-card-inner-container">
                    <div className="rtt-testimonials-avatar">
                        <Img className="img-fluid" fluid={src} />
                    </div>
                    <div>
                        <Icon className="rtt-testimonials-card-text-quote text-secondary" name="quote right" />
                        <p className="rtt-testimonials-card-text-main">{text}</p>
                        <strong className="rtt-testimonials-card-text-author">{author}</strong>
                    </div>
                </div>
            </div>
            {mobile && (
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Label tag size="small">
                        {label}
                    </Label>
                </div>
            )}
        </div>
    );
}
