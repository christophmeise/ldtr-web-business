import React from 'react';
import '../components/i18n/i18n';
import PageFooter from './page-footer';
import ResponsiveContainer from './responsive-container/responsive-container';

interface Props {
    title: string;
    invertedHeader?: boolean;
    children?: any;
    headerOverlay?: any;
}

const Layout = ({ children, invertedHeader }: Props) => {
    return (
        <ResponsiveContainer invertedHeader={invertedHeader ? true : false}>
            <div className="flex-container">
                <main className="main-container">{children}</main>
                <PageFooter />
            </div>
        </ResponsiveContainer>
    );
};

export default Layout;
