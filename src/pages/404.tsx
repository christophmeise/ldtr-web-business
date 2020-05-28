import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import withI18next from './../components/withI18next/withI18next';

interface Props {
    t: any;
    data: {
        site: {
            siteMetadata: {
                title: string;
            };
        };
    };
}

const NotFoundPage = ({ data }: Props) => {
    const siteTitle = data.site.siteMetadata.title;
    const { t } = this.props;

    return (
        <Layout title={siteTitle} t={t}>
            <SEO title="404: Not Found" />
            <h1>Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Layout>
    );
};

export default withI18next('common')(NotFoundPage);

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
