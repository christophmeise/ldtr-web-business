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
                titleKey: 'faq:q-1',
                contentKey: 'faq:a-1',
            },
            {
                index: 1,
                titleKey: 'faq:q-2',
                contentKey: 'faq:a-2',
            },
            {
                index: 2,
                titleKey: 'faq:q-3',
                contentKey: 'faq:a-3',
            },
            {
                index: 3,
                titleKey: 'faq:q-4',
                contentKey: 'faq:a-4',
            },
            {
                index: 4,
                titleKey: 'faq:q-5',
                contentKey: 'faq:a-5',
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
