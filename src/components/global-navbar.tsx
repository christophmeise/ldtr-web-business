import React from 'react';
import { Container, Menu, Segment } from 'semantic-ui-react';
import Logo from './logo';

export default function GlobalNavbar({ location, handleItemClick, inverted }) {
    return (
        <Segment
            textAlign="center"
            className="global-navbar"
            style={{ padding: '0em 0em', marginBottom: '1em' }}
            vertical
        >
            <Menu fixed={'top'} inverted={inverted} pointing={false} secondary={true} size="large" borderless>
                <Container>
                    <Menu.Item name="/" link onClick={handleItemClick}>
                        <Logo inverted={inverted} />
                    </Menu.Item>
                    <Menu.Item
                        name="/"
                        content="About"
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
                    {/*   <Menu.Item position="right">
                        <Button as="a" inverted={!fixed}>
                            Log in
                        </Button>
                        <Button as="a" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                            Sign Up
                        </Button>
                    </Menu.Item> */}
                </Container>
            </Menu>
        </Segment>
    );
}
