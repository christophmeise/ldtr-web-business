import React from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

export default class FAQAccordion extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { activeIndex: null };
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex });
    };

    render() {
        const { activeIndex } = this.state;
        const { faqContent, t } = this.props;

        return (
            <Accordion fluid>
                {faqContent.map((faq) => {
                    return (
                        <div key={faq.index}>
                            <AccordionItem
                                t={t}
                                activeIndex={activeIndex}
                                index={faq.index}
                                handleClick={this.handleClick}
                                titleKey={faq.titleKey}
                                contentKey={faq.contentKey}
                            ></AccordionItem>
                        </div>
                    );
                })}
            </Accordion>
        );
    }
}

class AccordionItem extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const { t, activeIndex, index, handleClick, titleKey, contentKey } = this.props;
        return (
            <div className="accordion-item">
                <Accordion.Title
                    className="accordion-title"
                    key={'title' + index}
                    active={activeIndex === index}
                    index={index}
                    onClick={handleClick}
                >
                    {t(titleKey)}
                    <Icon name="dropdown" />
                </Accordion.Title>
                <Accordion.Content key={'content' + index} active={activeIndex === index}>
                    {/* <Transition visible={activeIndex === index} animation="fade down" duration={300}> */}
                    <p>{t(contentKey)}</p>
                    {/*  </Transition> */}
                </Accordion.Content>
            </div>
        );
    }
}
