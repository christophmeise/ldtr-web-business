import React from 'react';
import PageFooter from './page-footer';
import ResponsiveContainer from './responsive-container/responsive-container';

interface Props {
    title: string;
    children?: any;
    headerOverlay?: any;
}

const Layout = ({ children }: Props) => {
    return (
        <ResponsiveContainer>
            <div className="flex-container">
                <main className="main-container">{children}</main>
                <PageFooter />
            </div>
        </ResponsiveContainer>
    );
};

export default Layout;
