import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderOverlay from './../components/header-overlay';

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

export default class Shop extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        // const posts = data.allMarkdownRemark.edges;
        const siteTitle = data.site.siteMetadata.title;
        const description = data.site.siteMetadata.description;

        return (
            <Layout title={siteTitle}>
                <SEO title="Shop" />
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
