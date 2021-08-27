import { graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import React from 'react';
import { Button, Container, Grid, GridColumn, Label, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react';
import BusinessIcons from '../components/BusinessIcons/business-icons';
import HeaderOverlay from '../components/header-overlay/header-overlay';
import Layout from '../components/layout';
import { getPathWithLocale } from '../components/navigateWithLocale';
import SectionHeader from '../components/sectionHeader';
import SEO from '../components/seo';
import withI18next from '../components/withI18next/withI18next';
import './business.less';

interface Props {
    pageContext: any;
    t: any;
    data: {
        site: {
            siteMetadata: {
                title: string;
                description: string;
            };
        };
        rttImage: any;
        officeImage: any;
        bannerImage: any;
        wunderkerzeImage: any;
        approvedImage: any;
    };
}

class BusinessPage extends React.Component<Props, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            pageContext: { locale },
            t,
        } = this.props;
        const data = this.props.data;
        const siteTitle = data.site.siteMetadata.title;
        const description = data.site.siteMetadata.description;
        const rttImage = data.rttImage.childImageSharp.fluid;
        const bannerImage = data.bannerImage.childImageSharp.fluid;
        const wunderkerzeImage = data.wunderkerzeImage.childImageSharp.fluid;
        const approvedImage = data.approvedImage.childImageSharp.fluid;

        const sources = [
            data.officeImage.childImageSharp.fluid,
            {
                ...data.officeImage.childImageSharp.fluid,
                media: `(min-width: 768px)`,
            },
        ];

        const tagLabels1 = [
            t('business:text-7.2-li-1'),
            t('business:text-7.2-li-2'),
            t('business:text-7.2-li-3'),
            t('business:text-7.2-li-4'),
            t('business:text-7.2-li-5'),
            t('business:text-7.2-li-6'),
            t('business:text-7.2-li-7'),
            t('business:text-7.2-li-8'),
            t('business:text-7.2-li-9'),
            t('business:text-7.2-li-10'),
            t('business:text-7.2-li-11')
        ];
        const tagLabels2 = [
            t('business:text-7.3-li-1'),
            t('business:text-7.3-li-2'),
            t('business:text-7.3-li-3'),
            t('business:text-7.3-li-4'),
            t('business:text-7.3-li-5'),
            t('business:text-7.3-li-6'),
            t('business:text-7.3-li-7'),
            t('business:text-7.3-li-8'),
            t('business:text-7.3-li-9'),
            t('business:text-7.3-li-10'),
            t('business:text-7.3-li-11'),
            t('business:text-7.3-li-12'),
            t('business:text-7.3-li-13'),
            t('business:text-7.3-li-14'),
            t('business:text-7.3-li-15'),
        ];

        return (
            <Layout title={siteTitle} t={t}>
                <SEO title={t('rtt:Rapid Transformational Therapy')} />
                <HeaderOverlay
                    sources={sources}
                    color="#FFFFFF"
                    inverted={false}
                    content={<OverlayContent inverted={true} t={t} />}
                    darken={true}
                    veryDark={true}
                    width={10}
                />
                <div className="main-content-sections">
                    <section>
                        <Container>
                            <article id="rtt-business">
                                <SectionHeader
                                    headline={t('business:Die innovative Lösung für Ihr Human Resource Management')}
                                    subheadline={t('business:Business Coaching')}
                                    primary={true}
                                    textAlign="left"
                                ></SectionHeader>
                                <h4>{t('business:overview')}</h4>
                                <ul>
                                    <li><a href="#rtt-business">{t('business:text-0-li-1')}</a></li>
                                    <li><a href="#gruende-rtt-business">{t('business:text-0-li-2')}</a></li>
                                    <li><a href="#goals-rtt-business">{t('business:text-0-li-3')}</a></li>
                                    <li><a href="#together-rtt-business">{t('business:text-0-li-4')}</a></li>
                                    <li><a href="#conclusion-rtt-business">{t('business:text-0-li-5')}</a></li>
                                </ul>
                            </article>
                            <hr />
                            <p>{t('business:text-1')}</p>
                            <p>{t('business:text-2')}</p>
                            <ul>
                                <li>{t('business:text-2-li-1')}</li>
                                <li>{t('business:text-2-li-2')}</li>
                                <li>{t('business:text-2-li-3')}</li>
                            </ul>
                            <h4>{t('business:Warum es besonders wichtig ist JETZT zu handeln!')}</h4>
                            <p>{t('business:text-3')}</p>
                            <p>{t('business:text-4')}</p>
                            <p>{t('business:text-5')}</p>
                            <h4>{t('business:Innovative Unternehmen brauchen zukunftsweisendes Business-Coaching')}</h4>
                            <p id="gruende-rtt-business">{t('business:text-6')}</p>

                            {/* insert moving icons */}
                            <BusinessIcons t={t}></BusinessIcons>
                        </Container>
                    </section>
                    <section>
                        <BackgroundImage
                            className="rtt-call-to-action-image shadow"
                            fluid={data.bannerImage.childImageSharp.fluid}
                        >
                            <Container className="rtt-call-to-action-image-container">
                                <Grid
                                    className="rtt-call-container-desktop responsive-desktop-container"
                                    verticalAlign="middle"
                                >
                                    <GridColumn width={16} verticalAlign="middle">
                                        <h2 className="call-to-action-text font-playfair">
                                            {t('business:banner')}
                                        </h2>
                                        <Link to={getPathWithLocale('/book-call')}>
                                            <Button primary size="medium" className="rounded shadow hover-animate">
                                                {t('rtt:Jetzt Termin vereinbaren')}
                                            </Button>
                                        </Link>
                                    </GridColumn>
                                </Grid>
                                <Container
                                    className="rtt-call-container-mobile responsive-mobile-container"
                                    textAlign="left"
                                >
                                    <h2 className="call-to-action-text font-playfair">
                                        {t('rtt:Mit RTT zu deinem besten Selbst')}
                                    </h2>
                                    <Link to={getPathWithLocale('/book-call')}>
                                        <Button primary size="medium" className="rounded shadow hover-animate">
                                            {t('rtt:Jetzt Termin vereinbaren')}
                                        </Button>
                                    </Link>
                                </Container>
                            </Container>
                        </BackgroundImage>
                    </section>
                    <section id="goals-rtt-business">
                        <Container>
                            <h3>{t('business:text-7')}</h3>
                            <p>{t('business:text-7.1')}</p>
                            <h5>{t('business:text-7.2')}</h5>
                            <Label.Group className="business-tag-label-group">
                                {tagLabels1.map((tag, index) => {
                                    return (
                                        <Label
                                            key={"tag-" + index}
                                            as="a"
                                            className="blog-post-tag-label"
                                            circular
                                        >
                                            {tag}
                                        </Label>
                                    );
                                })}
                            </Label.Group>
                            <h5>{t('business:text-7.3')}</h5>
                            <Label.Group className="business-tag-label-group">
                                {tagLabels2.map((tag, index) => {
                                    return (
                                        <Label
                                            key={"tag-" + index}
                                            as="a"
                                            className="blog-post-tag-label"
                                            circular
                                        >
                                            {tag}
                                        </Label>
                                    );
                                })}
                            </Label.Group>
                            <p>{t('business:text-7.4')}</p>
                            <div id="together-rtt-business" className="anchor-point"></div>
                            <h4>{t('business:text-8')}</h4>
                            <p>{t('business:text-8.1')}</p>
                            <Grid style={{ paddingTop: '2em' }} columns="3" stackable>
                                <GridColumn>
                                    <Container textAlign="left">
                                        <h5>{t('business:text-9')}</h5>
                                        <p>{t('business:text-9.1')}</p>
                                    </Container>
                                </GridColumn>
                                <GridColumn>
                                    <Container textAlign="left">
                                        <h5>{t('business:text-10')}</h5>
                                        <p>{t('business:text-10.1')}</p>
                                    </Container>
                                </GridColumn>
                                <GridColumn>
                                    <Container textAlign="left">
                                        <h5>{t('business:text-11')}</h5>
                                        <p>{t('business:text-11.1')}</p>
                                    </Container>
                                </GridColumn>
                            </Grid>
                            <h4>{t('business:text-12')}</h4>
                            <h5>{t('business:text-12-li-1.1')}</h5>
                            <p>{t('business:text-12-li-1.2')}</p>

                            <h5>{t('business:text-12-li-2.1')}</h5>
                            <p>{t('business:text-12-li-2.2')}</p>

                            <h5>{t('business:text-12-li-3.1')}</h5>
                            <p>{t('business:text-12-li-3.2')}</p>

                            <h5>{t('business:text-12-li-4.1')}</h5>
                            <p>{t('business:text-12-li-4.2')}</p>

                            <div id="conclusion-rtt-business" className="anchor-point"></div>
                            <h4></h4>

                            <SectionHeader
                                headline={t('business:text-13-main')}
                                subheadline={t('business:text-13-sub')}
                                primary={true}
                                textAlign="left"
                            ></SectionHeader>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHeaderCell>Vorteile für das Unternehmen</TableHeaderCell>
                                        <TableHeaderCell>Vorteile für den Arbeitnehmer</TableHeaderCell>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow textAlign="left">
                                        <TableCell>{t('business:table-1.business')}</TableCell>
                                        <TableCell>{t('business:table-1.worker')}</TableCell>
                                    </TableRow>
                                    <TableRow textAlign="left">
                                        <TableCell>{t('business:table-2.business')}</TableCell>
                                        <TableCell>{t('business:table-2.worker')}</TableCell>
                                    </TableRow>
                                    <TableRow textAlign="left">
                                        <TableCell>{t('business:table-3.business')}</TableCell>
                                        <TableCell>{t('business:table-3.worker')}</TableCell>
                                    </TableRow>
                                    <TableRow textAlign="left">
                                        <TableCell>{t('business:table-4.business')}</TableCell>
                                        <TableCell>{t('business:table-4.worker')}</TableCell>
                                    </TableRow>
                                    <TableRow textAlign="left">
                                        <TableCell>{t('business:table-5.business')}</TableCell>
                                        <TableCell>{t('business:table-5.worker')}</TableCell>
                                    </TableRow>
                                    <TableRow textAlign="left">
                                        <TableCell>{t('business:table-6.business')}</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>

                            <h4>{t('business:text-14')}</h4>
                            <p>{t('business:text-14.1')}</p>
                            <p>{t('business:text-14.2')}</p>
                        </Container>
                    </section>
                    <section>
                        <Container>
                            <div className="rtt-logos-image">
                                <Img className="rtt-image rounded shadow" fluid={data.approvedImage.childImageSharp.fluid} />
                            </div>
                        </Container>
                    </section>
                </div>
            </Layout>
        );
    }
}

class OverlayContent extends React.Component<any, any> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { inverted, t } = this.props;
        return (
            <div>
                <h1
                    className="header-overlay-headline header-overlay-headline-inverted header-overlay-inner-light"
                    style={{ marginBottom: '0rem', marginTop: '0rem' }}
                >
                    Inner Light
                </h1>
                <h1
                    className={`header-overlay-headline ${inverted ? 'header-overlay-headline-inverted' : null}`}
                    style={{ marginBottom: '0rem', marginTop: '0rem' }}
                >
                    {t('business:headline')}
                </h1>
                <h2 className={`header-overlay-subheadline ${inverted ? 'header-overlay-subheadline-inverted' : null}`}>
                    {t('business:subheadline')}
                </h2>
            </div>
        );
    }
}

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        rttImage: file(relativePath: { eq: "rtt.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        officeImage: file(relativePath: { eq: "business/office.jpg" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        wunderkerzeImage: file(relativePath: { eq: "wunderkerze.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        bannerImage: file(relativePath: { eq: "business/banner.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        approvedImage: file(relativePath: { eq: "approved_logos.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

export default withI18next(['common', 'faq', 'rtt', 'business'])(BusinessPage);
