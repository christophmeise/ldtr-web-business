import { graphql, navigate } from 'gatsby';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { Container } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ContactForm from '../../components/contactForm';
import Layout from '../../components/layout';
import PlainHeader from '../../components/plain-overlay/plain-header';
import SEO from '../../components/seo';

interface Props {
    t: any;
    data: {
        site: {
            siteMetadata: {
                title: string;
                description: string;
            };
        };
    };
}

class Thanks extends React.Component<Props, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const MySwal = withReactContent(Swal);

        MySwal.fire({
            title: 'Good job!',
            text: 'Your message has arrived!',
            icon: 'success',
            confirmButtonText: 'Confirm',
            onClose: () => {
                navigate('/');
            },
        });
    }

    render() {
        const { t } = this.props;
        const data = this.props.data;
        const siteTitle = data.site.siteMetadata.title;
        const description = data.site.siteMetadata.description;

        return (
            <Layout title={siteTitle}>
                <SEO title="Index" />
                <Container className="global-header-padding">
                    <PlainHeader content={HeaderContent(t)} />
                    <Container>
                        <ContactForm disabled={true}></ContactForm>
                    </Container>
                </Container>
            </Layout>
        );
    }
}

const HeaderContent = (t) => {
    return (
        <div>
            <h1 className="header-overlay-headline">{t('contact-headline')}</h1>
            <h2 className="header-overlay-subheadline">{t('contact-subheadline')}</h2>
        </div>
    );
};

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

export default withTranslation(['common', 'contact'])(Thanks);
