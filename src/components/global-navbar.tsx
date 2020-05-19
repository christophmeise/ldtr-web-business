import React from 'react';
import { Button, Container, Menu, Segment } from 'semantic-ui-react';
import Logo from './logo';

export default function GlobalNavbar({ fixed, location, handleItemClick }) {
    return (
        <Segment
            textAlign="center"
            className="global-navbar"
            style={{ padding: '0em 0em', marginBottom: '1em' }}
            vertical
        >
            <Menu
                fixed={fixed ? 'top' : null}
                //inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size="large"
            >
                <Container>
                    <Logo />
                    <Menu.Item
                        name="/"
                        content="About me"
                        link
                        active={location.pathname === '/'}
                        onClick={handleItemClick}
                    ></Menu.Item>
                    <Menu.Item
                        name="/shop"
                        content="Shop"
                        link
                        active={location.pathname === '/shop'}
                        onClick={handleItemClick}
                    ></Menu.Item>
                    <Menu.Item
                        name="/blog"
                        content="Blog"
                        link
                        active={location.pathname === '/blog'}
                        onClick={handleItemClick}
                    ></Menu.Item>
                    <Menu.Item position="right">
                        <Button as="a" inverted={!fixed}>
                            Log in
                        </Button>
                        <Button as="a" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                            Sign Up
                        </Button>
                    </Menu.Item>
                </Container>
            </Menu>
        </Segment>
    );
}
