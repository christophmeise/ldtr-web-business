import { graphql } from 'gatsby';
import React from 'react';
import HeaderOverlay from '../components/header-overlay/header-overlay';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface Props {
    data: {
        site: {
            siteMetadata: {
                title: string;
                description: string;
            };
        };
    };
}

export default class Index extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        const siteTitle = data.site.siteMetadata.title;
        const description = data.site.siteMetadata.description;

        return (
            <Layout title={siteTitle}>
                <SEO title="Index" />
                <HeaderOverlay />
            </Layout>
        );
    }
}

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
