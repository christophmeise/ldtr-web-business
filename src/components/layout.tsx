import { Link } from 'gatsby';
import React from 'react';
import { cssTransition, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-less/semantic.less';
import '../components/i18n/i18n';
import { getPathWithLocale } from './navigateWithLocale';
import PageFooter from './page-footer/page-footer';
import ResponsiveContainer from './responsive-container/responsive-container';

interface Props {
    t: any;
    title: string;
    invertedHeader?: boolean;
    children?: any;
    headerOverlay?: any;
}

class Layout extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    notify = () =>
        toast(
            <p>
                By browsing this site, you agree to our
                <Link to={getPathWithLocale('/dataprotection')}> Privacy Policy</Link>
            </p>,
        );

    componentDidMount() {
        this.notify();
    }

    render() {
        const { children, invertedHeader, t } = this.props;
        const Zoom = cssTransition({
            enter: 'Toastify__bounce-enter',
            exit: 'Toastify__bounce-exit',
            appendPosition: true,
        });

        return (
            <React.Fragment>
                <ToastContainer position="bottom-center" autoClose={false} closeOnClick transition={Zoom} />
                <ResponsiveContainer invertedHeader={invertedHeader ? true : false} t={t}>
                    <div className="flex-container">
                        <main className="main-container">{children}</main>
                        <PageFooter t={t} />
                    </div>
                </ResponsiveContainer>
            </React.Fragment>
        );
    }
}

export default Layout;
