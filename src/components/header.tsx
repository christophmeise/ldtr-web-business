import { graphql, navigate, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Menu } from 'semantic-ui-react';

interface HeaderState {
    activeItem: string;
}

export default class Header extends React.Component {
    state: HeaderState = { activeItem: null };

    handleItemClick = (e, { name, content }) => {
        this.setState({ activeItem: content });
        navigate(name);
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { activeItem } = this.state;

        return (
            <Menu stackable>
                <StaticQuery
                    query={graphql`
                        query {
                            file(relativePath: { eq: "Logo.png" }) {
                                childImageSharp {
                                    fixed(width: 32, height: 32) {
                                        ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                        }
                    `}
                    render={(data) =>
                        data.file != null && (
                            <Menu.Item>
                                <Img fixed={data.file.childImageSharp.fixed} />
                            </Menu.Item>
                        )
                    }
                />
                <Menu.Item
                    name="/"
                    content="About me"
                    link
                    active={activeItem === 'aboutMe'}
                    onClick={this.handleItemClick}
                ></Menu.Item>
                <Menu.Item
                    name="/shop"
                    content="Shop"
                    link
                    active={activeItem === 'shop'}
                    onClick={this.handleItemClick}
                ></Menu.Item>
                <Menu.Item
                    name="/blog"
                    content="Blog"
                    link
                    active={activeItem === 'blog'}
                    onClick={this.handleItemClick}
                ></Menu.Item>
            </Menu>
        );
    }
}
