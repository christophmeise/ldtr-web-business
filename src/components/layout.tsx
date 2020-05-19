import React from 'react';
import Header from '../components/header';

interface Props {
    title: string;
    children?: any;
}

const Layout = ({ children }: Props) => {
    return (
        <div
            style={{
                marginLeft: `auto`,
                marginRight: `auto`,
            }}
        >
            <Header></Header>
            <main>{children}</main>
            <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        </div>
    );
};

export default Layout;
