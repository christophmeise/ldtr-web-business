import { graphql } from 'gatsby';
import React from 'react';
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
            <div>
                <Layout title={siteTitle}>
                    <SEO title="404: Not Found" />
                    <h1>Not Found</h1>
                    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
                </Layout>
            </div>
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
