import { graphql, useStaticQuery } from 'gatsby';
import i18n from 'i18next';
import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
    description?: string;
    lang?: string;
    meta?: any[];
    title: string;
}

const SEO = ({ description, meta, title }: Props) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `,
    );

    const pinterestBusinessContent = "affd6bb3f35488450ecc164162762b6c";
    const facebookVerification = "cl8hnoy7frgop4ohh9lhogphylxrux";

    const metaDescription = description || site.siteMetadata.description;
    const lang = i18n.language;
    return (
        <React.Fragment>
            <Helmet
                htmlAttributes={{
                    lang,
                }}
                title={title}
                titleTemplate={`%s`}
                script={[
                    {
                        type: 'text/javascript',
                        innerHTML: `
                            (function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
                            var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
                            f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
                            var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
                            _.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

                            var ml_account = ml('accounts', '2640527', 'j8z7t0x0z3', 'load');
                        `
                    }
                ]}
                meta={[
                    {
                        name: `p:domain_verify`,
                        content: pinterestBusinessContent,
                    },
                    {
                        name: `facebook-domain-verification`,
                        content: facebookVerification,
                    },
                    {
                        name: `description`,
                        content: metaDescription,
                    },
                    {
                        property: `og:title`,
                        content: title,
                    },
                    {
                        property: `og:description`,
                        content: metaDescription,
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                    {
                        name: `twitter:card`,
                        content: `summary`,
                    },
                    {
                        name: `twitter:creator`,
                        content: site.siteMetadata.author,
                    },
                    {
                        name: `twitter:title`,
                        content: title,
                    },
                    {
                        name: `twitter:description`,
                        content: metaDescription,
                    },
                ].concat(meta || [])}
            />
        </React.Fragment>
    );
};

export default SEO;
