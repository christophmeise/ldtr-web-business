import { graphql } from 'gatsby';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { Container } from 'semantic-ui-react';
import ContactForm from '../components/contactForm';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PlainHeader from './../components/plain-overlay/plain-header';

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

class Contact extends React.Component<Props, any> {
    constructor(props) {
        super(props);
        this.state = { first_name: '', last_name: '', email: '', message: '' };
    }

    /*     handleChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': 'contact',
                ...this.state,
            }),
        })
            .then(() => this.successPopup())
            .catch((error) => this.failurePopup());
    }; */

    render() {
        const { t } = this.props;
        const data = this.props.data;
        const siteTitle = data.site.siteMetadata.title;
        const description = data.site.siteMetadata.description;
        const { first_name, last_name, email, message } = this.state;
        return (
            <Layout title={siteTitle}>
                <SEO title="Index" />
                <Container className="global-header-padding">
                    <PlainHeader content={HeaderContent(t)} />
                    <Container>
                        <ContactForm></ContactForm>
                    </Container>
                </Container>
            </Layout>
        );
    }
}

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
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

export default withTranslation(['common', 'contact'])(Contact);
