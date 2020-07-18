import { Link } from 'gatsby';
import React from 'react';
import { Button, Container, Grid } from 'semantic-ui-react';
import { getPathWithLocale } from '../navigateWithLocale';
import './call-to-action-banner.less';

const CallToActionBanner = ({ headline, subheadline, text, buttonText, buttonSubtext }) => {
    return (
        <Container
            className="rtt-call-to-action bg-secondary rounded shadow"
            data-sal="slide-up"
            data-sal-delay="0"
            data-sal-duration="300"
            data-sal-easing="ease"
        >
            <Grid columns={2} stackable>
                <Grid.Column>
                    <h3 className="global-subtitle text-primary">{headline}</h3>
                    <h4>{subheadline}</h4>
                    <p>{text}</p>
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                    <Link to={getPathWithLocale('/book-call')}>
                        <Button primary size="large" className="rounded shadow hover-animate">
                            {buttonText}
                        </Button>
                    </Link>
                    <p style={{ marginTop: '0.5rem' }}>{buttonSubtext}</p>
                </Grid.Column>
            </Grid>
        </Container>
    );
};

export default CallToActionBanner;
