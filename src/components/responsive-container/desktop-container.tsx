import { navigate } from 'gatsby';
import React from 'react';
import { Container, Menu, Segment } from 'semantic-ui-react';
import GlobalNavbar from './../global-navbar';

interface DesktopContainerProps {
    location: any;
    invertedHeader: boolean;
}

export default class DesktopContainer extends React.Component<DesktopContainerProps, any> {
    constructor(props) {
        super(props);
    }

    handleItemClick = (e, { name, content }) => navigate(name);
    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render() {
        const { children } = this.props;
        const inverted = this.props.invertedHeader;

        return (
            <React.Fragment>
                <Segment
                    textAlign="center"
                    className="global-navbar"
                    style={{ padding: '0em 0em', marginBottom: '1em' }}
                    vertical
                >
                    <Menu fixed={'top'} inverted={inverted} pointing={false} secondary={true} size="large" borderless>
                        <Container>
                            <GlobalNavbar
                                location={this.props.location}
                                handleItemClick={this.handleItemClick}
                                inverted={inverted}
                                mobile={false}
                            />
                        </Container>
                    </Menu>
                </Segment>

                {children}
            </React.Fragment>
        );
    }
}
