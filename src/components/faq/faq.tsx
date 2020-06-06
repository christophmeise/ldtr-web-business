import { Link } from 'gatsby';
import React from 'react';
import { Button, Container, Icon } from 'semantic-ui-react';
import { getPathWithLocale } from '../navigateWithLocale';
import SectionHeader from './../sectionHeader';
import FAQAccordion from './faq-accordion';
import './faq.less';

class FAQ extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const { t } = this.props;
        const faqContent = [
            {
                index: 0,
                titleKey: 'faq:q-what-is-hypnose',
                contentKey: 'faq:a-what-is-hypnose',
            },
            {
                index: 1,
                titleKey: 'faq:q-hypnose-real',
                contentKey: 'faq:a-hypnose-real',
            },
            {
                index: 2,
                titleKey: 'faq:q-can-anybody-hypnose',
                contentKey: 'faq:a-can-anybody-hypnose',
            },
            {
                index: 3,
                titleKey: 'faq:q-improve-hynose',
                contentKey: 'faq:a-improve-hynose',
            },
            {
                index: 4,
                titleKey: 'faq:q-hypnose-like-sleep',
                contentKey: 'faq:a-hypnose-like-sleep',
            },
        ];

        return (
            <Container text as="section">
                <SectionHeader
                    headline={t('faq-headline')}
                    subheadline={t('faq-subheadline')}
                    primary={true}
                    textAlign="center"
                ></SectionHeader>
                <FAQAccordion t={t} faqContent={faqContent}></FAQAccordion>
                <Container text textAlign="center" className="rtt-main-button-container">
                    <Link to={getPathWithLocale('/faq')}>
                        <Button primary={true} inverted={false} size="medium" className="rounded shadow hover-animate">
                            <Icon name="question circle" style={{ opacity: '1' }}></Icon> {t('faq:faq-learn-more')}
                        </Button>
                    </Link>
                </Container>
            </Container>
        );
    }
}

export default FAQ;
