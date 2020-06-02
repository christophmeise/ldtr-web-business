import React from 'react';
import { Accordion, Container, Icon } from 'semantic-ui-react';
import SectionHeader from './../sectionHeader';

class FAQ extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex });
    };

    render() {
        const { activeIndex } = this.state;
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
            <Container as="section">
                <SectionHeader
                    headline={t('faq-headline')}
                    subheadline={t('faq-subheadline')}
                    primary={true}
                    textAlign="center"
                ></SectionHeader>
                <Accordion fluid styled>
                    {faqContent.map((faq) => {
                        return (
                            <AccordionItem
                                t={t}
                                activeIndex={activeIndex}
                                index={faq.index}
                                handleClick={this.handleClick}
                                titleKey={faq.titleKey}
                                contentKey={faq.contentKey}
                            ></AccordionItem>
                        );
                    })}
                </Accordion>
            </Container>
        );
    }
}

export default FAQ;

const AccordionItem = ({ t, activeIndex, index, handleClick, titleKey, contentKey }) => {
    return (
        <React.Fragment>
            <Accordion.Title active={activeIndex === index} index={index} onClick={handleClick}>
                <Icon name="dropdown" />
                {t(titleKey)}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === index}>
                <p>{t(contentKey)}</p>
            </Accordion.Content>
        </React.Fragment>
    );
};
