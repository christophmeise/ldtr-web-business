import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Menu } from 'semantic-ui-react';

const Logo = () => {
    const { file } = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "Logo.png" }) {
                    childImageSharp {
                        fixed(width: 32, height: 32) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `,
    );

    return (
        file != null && (
            <Menu.Item>
                <Img fixed={file.childImageSharp.fixed} />
            </Menu.Item>
        )
    );
};

export default Logo;
