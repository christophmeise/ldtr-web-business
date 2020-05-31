import React from 'react';
import 'semantic-ui-less/semantic.less';
import '../components/i18n/i18n';
import PageFooter from './page-footer';
import ResponsiveContainer from './responsive-container/responsive-container';

interface Props {
    t: any;
    title: string;
    invertedHeader?: boolean;
    children?: any;
    headerOverlay?: any;
}

const Layout = ({ children, invertedHeader, t }: Props) => {
    return (
        <ResponsiveContainer invertedHeader={invertedHeader ? true : false} t={t}>
            <div className="flex-container">
                <main className="main-container">{children}</main>
                <PageFooter />
            </div>
        </ResponsiveContainer>
    );
};

export default Layout;
