import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const Logo = () => {
    const { file } = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "Logo.png" }) {
                    childImageSharp {
                        fixed(height: 32) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `,
    );

    return file != null && <Img fixed={file.childImageSharp.fixed} />;
};

export default Logo;
