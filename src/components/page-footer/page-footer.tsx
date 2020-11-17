import { graphql, Link, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { Container, Grid, GridRow, Header, Icon, List } from 'semantic-ui-react';
import Logo from '../logo/logo';
import { getPathWithLocale } from '../navigateWithLocale';
import './page-footer.less';

const PageFooter = ({ t }) => {
    const data = useStaticQuery(
        graphql`
            query {
                certificate: file(relativePath: { eq: "footer/rtt-certificate.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 200, quality: 100) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
            }
        `,
    );

    return (
        <footer>
            <div className="footer-main">
                <Container>
                    <Grid centered stackable columns="2">
                        <Grid.Column width={8}>
                            <GridRow
                                columns="2"
                                style={{
                                    height: '100%',
                                }}
                            >
                                <Grid.Column
                                    style={{
                                        display: 'inline-block',
                                        width: '50%',
                                        height: '100%',
                                        verticalAlign: 'top',
                                    }}
                                >
                                    <BackgroundImage
                                        Tag="div"
                                        style={{
                                            height: '100%',
                                            width: '48%',
                                            minWidth: '140px',
                                        }}
                                        fluid={data.certificate.childImageSharp.fluid}
                                    ></BackgroundImage>
                                </Grid.Column>
                                <Grid.Column style={{ display: 'inline-block', width: '50%', verticalAlign: 'top' }}>
                                    <Header className="footer-nav-header" as="h3" content={t('footer-directory')} />
                                    <List link>
                                        <List.Item>
                                            <Link to={getPathWithLocale('/rtt')}>{t('navbar-rtt')}</Link>
                                        </List.Item>
                                        <List.Item>
                                            <Link to={getPathWithLocale('/rtt-areas')}>{t('navbar-rtt-areas')}</Link>
                                        </List.Item>
                                        <List.Item>
                                            <Link to={getPathWithLocale('/blog')}>{t('blog')}</Link>
                                        </List.Item>

                                        {/*  <List.Item>
                                            <Link to={getPathWithLocale('/shop')}>{t('shop')}</Link>
                                        </List.Item> */}
                                        <List.Item>
                                            <Link to={getPathWithLocale('/faq')}>{t('faq')}</Link>
                                        </List.Item>
                                    </List>
                                </Grid.Column>
                            </GridRow>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <GridRow columns="2">
                                <Grid.Column style={{ display: 'inline-block', width: '50%', verticalAlign: 'top' }}>
                                    <Header className="footer-nav-header" as="h3" content={t('footer-pages')} />
                                    <List link>
                                        <List.Item>
                                            <Link to={getPathWithLocale('/innerlight-hypnotherapy')}>
                                                {t('aboutme')}
                                            </Link>
                                        </List.Item>
                                        <List.Item>
                                            <Link to={getPathWithLocale('/contact')}>{t('contact')}</Link>
                                        </List.Item>
                                        <List.Item>
                                            <Link to={getPathWithLocale('/book-call')}>{t('book-call')}</Link>
                                        </List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column style={{ display: 'inline-block', width: '50%', verticalAlign: 'top' }}>
                                    <Header className="footer-nav-header" as="h3" content={t('footer-general')} />
                                    <List link>
                                        <List.Item>
                                            <Link to={getPathWithLocale('/impressum')}>{t('impressum')}</Link>
                                        </List.Item>
                                        <List.Item>
                                            <Link to={getPathWithLocale('/dataprotection')}>{t('dataprotection')}</Link>
                                        </List.Item>
                                    </List>
                                    {/*  <Header className="footer-nav-header" as="h3" content={t('footer-services')} />
                                    <Link to={getPathWithLocale('/book-call')}>
                                        <Responsive minWidth={768}>
                                            <Button
                                                className="shadow hover-animate rounded"
                                                primary={true}
                                                inverted={false}
                                                size="small"
                                            >
                                                {t('book-first-call')}
                                            </Button>
                                        </Responsive>
                                        <Responsive maxWidth={767}>
                                            <Button
                                                className="shadow hover-animate rounded"
                                                primary={true}
                                                inverted={false}
                                                size="mini"
                                            >
                                                {t('book-first-call')}
                                            </Button>
                                        </Responsive>
                                    </Link> */}
                                </Grid.Column>
                            </GridRow>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
            <div className="footer-secondary">
                <Container>
                    <Grid inverted>
                        <Grid.Row centered columns="equal">
                            <Grid.Column>
                                <Logo inverted={true} />
                            </Grid.Column>
                            <Grid.Column only="tablet computer" textAlign="center" verticalAlign="middle">
                                <a
                                    className="footer-trademark-link"
                                    href="https://explorechristoph.com"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    © 2020, ExploreChristoph. All rights reserved.
                                </a>
                            </Grid.Column>
                            <Grid.Column textAlign="right" verticalAlign="middle">
                                <div>
                                    <a
                                        href="https://www.facebook.com/innerlighthypnotherapy"
                                        target="_blank"
                                        rel="noopener"
                                        aria-label="Facebook"
                                    >
                                        <Icon className="hover-animate" size="large" name="facebook" inverted></Icon>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/christinmeise/"
                                        target="_blank"
                                        rel="noopener"
                                        aria-label="Linkedin"
                                    >
                                        <Icon className="hover-animate" size="large" name="linkedin" inverted></Icon>
                                    </a>
                                    <a
                                        href="https://instagram.com/iamenoughbymarisapeer?igshid=owrg3d6x2h7v"
                                        target="_blank"
                                        rel="noopener"
                                        aria-label="Instagram"
                                    >
                                        <Icon className="hover-animate" size="large" name="instagram" inverted></Icon>
                                    </a>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        </footer>
    );
};

export default PageFooter;
