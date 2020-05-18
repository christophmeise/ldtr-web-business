import { Link } from 'gatsby';
import React from 'react';

interface Props {
    location: Location;
    title: string;
    children?: any;
}

const Layout = ({ location, title, children }: Props) => {
    let header = (
        <h1
            style={{
                marginTop: 0,
            }}
        >
            <Link
                style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                }}
                to={`/`}
            >
                {title}
            </Link>
        </h1>
    );

    return (
        <div
            style={{
                marginLeft: `auto`,
                marginRight: `auto`,
            }}
        >
            <header>{header}</header>
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
