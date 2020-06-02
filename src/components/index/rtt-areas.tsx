import { graphql, Link, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { Container, Grid, GridColumn, GridRow } from 'semantic-ui-react';
import SectionHeader from './../sectionHeader';
import './rtt.less';

const SectionRTTAreas = ({ t }) => {
    const RTTAreaCard = ({ source, text }) => {
        return (
            <Link to="/">
                <BackgroundImage
                    Tag="div"
                    data-sal="slide-up"
                    data-sal-delay="0"
                    data-sal-duration="300"
                    data-sal-easing="ease"
                    className="rounded hover-animate shadow-lg dark-overlay rtt-areas-card-background"
                    fluid={source}
                >
                    <div className="rtt-areas-card-background-text-wrapper">
                        <h3 className="rtt-areas-card-background-text">{text}</h3>
                    </div>
                </BackgroundImage>
            </Link>
        );
    };

    const data = useStaticQuery(
        graphql`
            query {
                relationship: file(relativePath: { eq: "rtt-areas/relationship.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 600, quality: 100) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                confidence: file(relativePath: { eq: "rtt-areas/confidence.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 600, quality: 100) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                addiction: file(relativePath: { eq: "rtt-areas/addiction.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 600, quality: 100) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                fears: file(relativePath: { eq: "rtt-areas/fears.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 600, quality: 100) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                weight: file(relativePath: { eq: "rtt-areas/weight.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 600, quality: 100) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                stress: file(relativePath: { eq: "rtt-areas/stress.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 600, quality: 100) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
            }
        `,
    );

    return (
        <section className="bg-secondary">
            <Container>
                <SectionHeader
                    headline={t('index-rtt-areas-headline')}
                    subheadline={t('index-rtt-areas-subheadline')}
                    primary={false}
                    textAlign="left"
                ></SectionHeader>
                <Grid columns="equal" width="16" stackable doubling>
                    <GridRow only="mobile computer large screen widescreen">
                        <GridColumn>
                            <RTTAreaCard source={data.relationship.childImageSharp.fluid} text={t('rtt-area-1')} />
                        </GridColumn>
                        <GridColumn>
                            <RTTAreaCard source={data.confidence.childImageSharp.fluid} text={t('rtt-area-2')} />
                        </GridColumn>
                        <GridColumn>
                            <RTTAreaCard source={data.addiction.childImageSharp.fluid} text={t('rtt-area-3')} />
                        </GridColumn>
                    </GridRow>
                    <GridRow only="mobile computer large screen widescreen">
                        <GridColumn>
                            <RTTAreaCard source={data.fears.childImageSharp.fluid} text={t('rtt-area-4')} />
                        </GridColumn>
                        <GridColumn>
                            <RTTAreaCard source={data.weight.childImageSharp.fluid} text={t('rtt-area-5')} />
                        </GridColumn>
                        <GridColumn>
                            <RTTAreaCard source={data.stress.childImageSharp.fluid} text={t('rtt-area-6')} />
                        </GridColumn>
                    </GridRow>
                    <GridRow only="tablet">
                        <GridColumn>
                            <RTTAreaCard source={data.relationship.childImageSharp.fluid} text={t('rtt-area-1')} />
                        </GridColumn>
                        <GridColumn>
                            <RTTAreaCard source={data.confidence.childImageSharp.fluid} text={t('rtt-area-2')} />
                        </GridColumn>
                    </GridRow>
                    <GridRow only="tablet">
                        <GridColumn>
                            <RTTAreaCard source={data.addiction.childImageSharp.fluid} text={t('rtt-area-3')} />
                        </GridColumn>
                        <GridColumn>
                            <RTTAreaCard source={data.fears.childImageSharp.fluid} text={t('rtt-area-4')} />
                        </GridColumn>
                    </GridRow>
                    <GridRow only="tablet">
                        <GridColumn>
                            <RTTAreaCard source={data.weight.childImageSharp.fluid} text={t('rtt-area-5')} />
                        </GridColumn>
                        <GridColumn>
                            <RTTAreaCard source={data.stress.childImageSharp.fluid} text={t('rtt-area-6')} />
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Container>
        </section>
    );
};

export default SectionRTTAreas;
