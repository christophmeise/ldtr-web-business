import React from 'react';
import { Container, Grid, GridColumn, Icon } from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import SectionHeader from './../sectionHeader';

const SectionRTTSteps = ({ t }) => {
    return (
        <Container as="section">
            <SectionHeader
                headline={t('rtt-steps-headline')}
                subheadline={t('rtt-steps-subheadline')}
                primary={true}
                textAlign="left"
            ></SectionHeader>
            <Grid stackable columns="3" textAlign="left" style={{ marginTop: '2rem' }}>
                <GridColumn>
                    <IconCircleWithText
                        color="primary"
                        icon="bell outline"
                        headline={t('rtt-steps-step1-headline')}
                        description={t('rtt-steps-step1-description')}
                    ></IconCircleWithText>
                </GridColumn>
                <GridColumn>
                    <IconCircleWithText
                        color="secondary"
                        icon="gem outline"
                        headline={t('rtt-steps-step2-headline')}
                        description={t('rtt-steps-step2-description')}
                    ></IconCircleWithText>
                </GridColumn>
                <GridColumn>
                    <IconCircleWithText
                        color="primary"
                        icon="heart outline"
                        headline={t('rtt-steps-step3-headline')}
                        description={t('rtt-steps-step3-description')}
                    ></IconCircleWithText>
                </GridColumn>
            </Grid>
        </Container>
    );
};

export default SectionRTTSteps;

type IconCircleWithTextProps = {
    color: 'primary' | 'secondary';
    icon: SemanticICONS;
    headline: string;
    description: string;
};

const IconCircleWithText = ({ color, icon, headline, description }: IconCircleWithTextProps) => {
    return (
        <div
            className="icon-circle-with-text"
            data-sal="slide-up"
            data-sal-delay="0"
            data-sal-duration="300"
            data-sal-easing="ease"
        >
            <div
                className={`rtt-icon-circle ${
                    color === 'primary' ? 'rtt-icon-circle-primary' : 'rtt-icon-circle-secondary'
                }`}
            >
                <Icon className={color === 'primary' ? 'text-primary' : 'text-secondary'} name={icon} size="big"></Icon>
            </div>
            <h3>{headline}</h3>
            <p>{description}</p>
        </div>
    );
};
