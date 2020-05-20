import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const Logo = ({ inverted }) => {
    const data = useStaticQuery(
        graphql`
            query {
                logo: file(relativePath: { eq: "Logo.png" }) {
                    childImageSharp {
                        fixed(height: 32) {
                            ...GatsbyImageSharpFixed_noBase64
                        }
                    }
                }
                logoInverted: file(relativePath: { eq: "Logo-inverted.png" }) {
                    childImageSharp {
                        fixed(height: 32) {
                            ...GatsbyImageSharpFixed_noBase64
                        }
                    }
                }
            }
        `,
    );

    let logo;
    if (data != null) {
        logo = inverted ? data.logoInverted.childImageSharp.fixed : data.logo.childImageSharp.fixed;
    }

    return <Img loading="eager" fixed={logo} />;
};

export default Logo;
