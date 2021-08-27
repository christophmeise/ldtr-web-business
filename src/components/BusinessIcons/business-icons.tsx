import React from 'react';
import { Container, Grid, GridColumn, Header } from 'semantic-ui-react';
import './business-icons.less';
import LordIcon from './lordicon';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'lord-icon': React.DetailedHTMLProps<any, any>;
        }
    }
}

const BusinessIcons = ({ t }) => {

    return (
        <section>
            <Container>
                <Header
                    data-sal="slide-up"
                    data-sal-delay="0"
                    data-sal-duration="300"
                    data-sal-easing="ease"
                    textAlign='left'
                    className="global-flex-column global-no-margin"
                >
                    <h2 className="global-headline">{t('business:icons-headline')}</h2>
                </Header>
                <Grid columns="4" stackable centered>
                    <GridColumn>
                        <div className="innovation-tile">
                            <LordIcon src="/business/icons/users.json"></LordIcon>
                            <strong>{t('business:icon-text-1.1')}</strong>
                            <p>{t('business:icon-text-1.2')}</p>
                        </div>
                    </GridColumn>
                    <GridColumn>
                        <div className="innovation-tile">
                            <LordIcon src="/business/icons/team.json"></LordIcon>
                            <strong>{t('business:icon-text-2.1')}</strong>
                            <p>{t('business:icon-text-2.2')}</p>
                        </div>
                    </GridColumn>
                    <GridColumn>
                        <div className="innovation-tile">
                            <LordIcon src="/business/icons/funnel.json"></LordIcon>
                            <strong>{t('business:icon-text-3.1')}</strong>
                            <p>{t('business:icon-text-3.2')}</p>
                        </div>
                    </GridColumn>
                    <GridColumn>
                        <div className="innovation-tile">
                            <LordIcon src="/business/icons/investment.json"></LordIcon>
                            <strong>{t('business:icon-text-4.1')}</strong>
                            <p>{t('business:icon-text-4.2')}</p>
                        </div>
                    </GridColumn>
                </Grid>
            </Container>
        </section>
    );
};

export default BusinessIcons;
