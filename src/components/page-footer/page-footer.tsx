import { Link } from 'gatsby';
import React from 'react';
import { Button, Container, Grid, Header, Icon, List } from 'semantic-ui-react';
import Logo from '../logo';
import { getPathWithLocale } from '../navigateWithLocale';
import './page-footer.less';

const PageFooter = ({ t }) => {
    return (
        <footer>
            <div className="footer-main">
                <Container>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header className="footer-nav-header" as="h3" content={t('footer-directory')} />
                                <List link>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/')}>{t('aboutme')}</Link>
                                    </List.Item>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/blog')}>{t('blog')}</Link>
                                    </List.Item>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/shop')}>{t('shop')}</Link>
                                    </List.Item>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/contact')}>{t('contact')}</Link>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header className="footer-nav-header" as="h3" content={t('footer-pages')} />
                                <List link>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/book-call')}>{t('book-call')}</Link>
                                    </List.Item>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/faq')}>{t('faq')}</Link>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header className="footer-nav-header" as="h3" content={t('footer-general')} />
                                <List link>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/impressum')}>{t('impressum')}</Link>
                                    </List.Item>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/dataprotection')}>{t('dataprotection')}</Link>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Header className="footer-nav-header" as="h3" content={t('footer-services')} />
                                <Link to={getPathWithLocale('/book-call')}>
                                    <Button
                                        className="shadow hover-animate rounded"
                                        primary={true}
                                        inverted={false}
                                        size="small"
                                    >
                                        {t('book-first-call')}
                                    </Button>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
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
                                        href="https://www.facebook.com"
                                        target="_blank"
                                        rel="noopener"
                                        aria-label="Facebook"
                                    >
                                        <Icon className="hover-animate" size="large" name="facebook" inverted></Icon>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com"
                                        target="_blank"
                                        rel="noopener"
                                        aria-label="Linkedin"
                                    >
                                        <Icon className="hover-animate" size="large" name="linkedin" inverted></Icon>
                                    </a>
                                    <a
                                        href="https://www.instagram.com"
                                        target="_blank"
                                        rel="noopener"
                                        aria-label="Instagram"
                                    >
                                        <Icon className="hover-animate" size="large" name="instagram" inverted></Icon>
                                    </a>
                                    <a
                                        href="https://www.youtube.com"
                                        target="_blank"
                                        rel="noopener"
                                        aria-label="Youtube"
                                    >
                                        <Icon className="hover-animate" size="large" name="youtube" inverted></Icon>
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
