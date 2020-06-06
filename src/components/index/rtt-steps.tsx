import { Link } from 'gatsby';
import React from 'react';
import { Button, Container, Grid, GridColumn, Icon } from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import { getPathWithLocale } from '../navigateWithLocale';
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
            <Container
                className="rtt-steps-call-to-action bg-secondary rounded shadow"
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-duration="300"
                data-sal-easing="ease"
            >
                <Grid columns={2} stackable>
                    <Grid.Column>
                        <h3 className="global-subtitle text-primary">Book your Session today</h3>
                        <h4>Directory is the best way to find & discover great local businesses</h4>
                        <p>
                            One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in
                            his bed in
                        </p>
                    </Grid.Column>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                        <Link to={getPathWithLocale('/book-call')}>
                            <Button primary size="large" className="rounded shadow hover-animate">
                                {t('rtt-call-to-action-button')}
                            </Button>
                        </Link>
                        <p style={{ marginTop: '0.5rem' }}>It's free!</p>
                    </Grid.Column>
                </Grid>
            </Container>
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
