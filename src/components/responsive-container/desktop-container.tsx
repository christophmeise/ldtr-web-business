import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import GlobalNavbar from './../global-navbar';
import navigateWithLocale from './../navigateWithLocale';

interface DesktopContainerProps {
    location: any;
    invertedHeader: boolean;
    t: any;
}

export default class DesktopContainer extends React.Component<DesktopContainerProps, any> {
    constructor(props) {
        super(props);
    }

    handleItemClick = (e, { name, content }) => navigateWithLocale(name);

    render() {
        const { children, t } = this.props;
        const inverted = this.props.invertedHeader;

        return (
            <React.Fragment>
                <section
                    className="global-navbar"
                    style={{ padding: '0em 0em', marginBottom: '1em', border: 'none', textAlign: 'center' }}
                >
                    <Menu inverted={inverted} pointing={false} secondary={true} size="large" borderless>
                        <Container>
                            <GlobalNavbar
                                location={this.props.location}
                                handleItemClick={this.handleItemClick}
                                inverted={inverted}
                                mobile={false}
                                t={t}
                            />
                        </Container>
                    </Menu>
                </section>

                {children}
            </React.Fragment>
        );
    }
}
