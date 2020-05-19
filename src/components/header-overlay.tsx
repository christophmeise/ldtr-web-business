import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import './header-overlay.css';

const HeaderOverlay = () => {
    const { file } = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "meditation.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `,
    );

    return (
        file != null && (
            <div className="header-overlay">
                <Img className="header-overlay-imag header-overlay-center-cropped" fluid={file.childImageSharp.fluid} />
            </div>
        )
    );
};

export default HeaderOverlay;
