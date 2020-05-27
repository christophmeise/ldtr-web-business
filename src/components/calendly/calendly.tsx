import React, { Component } from 'react';
import { InlineWidget } from 'react-calendly';

export default class Calendly extends Component {
    styles = {
        promAlert: {
            height: '700px',
        } as React.CSSProperties,
    };

    render() {
        return <InlineWidget styles={this.styles.promAlert} url="https://calendly.com/christin-meise" />;
    }
}
