import React from 'react';
import { cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

class Layout extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    /*   notify = () =>
        toast(
            <p>
                To make this page work, we log user data. By using our services, you agree to our
                <Link to={getPathWithLocale('/dataprotection')}> Privacy Policy</Link>, including our cookie policy.
            </p>,
        ); */

    componentDidMount() {
        // this.notify();
    }

    render() {
        const { children, invertedHeader, t } = this.props;
        const Zoom = cssTransition({
            enter: 'Toastify__bounce-enter',
            exit: 'Toastify__bounce-exit',
            appendPosition: true,
        });

        return (
            <ResponsiveContainer invertedHeader={invertedHeader ? true : false} t={t}>
                <div className="flex-container">
                    {/* <ToastContainer position="top-center" autoClose={false} closeOnClick transition={Zoom} /> */}
                    <main className="main-container">{children}</main>
                    <PageFooter t={t} />
                </div>
            </ResponsiveContainer>
        );
    }
}

export default Layout;
