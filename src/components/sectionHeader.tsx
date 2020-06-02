import React from 'react';
import { Header } from 'semantic-ui-react';

export default function SectionHeader({ headline, subheadline, primary, textAlign }) {
    return (
        <Header textAlign={textAlign} className="global-flex-column global-no-margin">
            <h3 className={`global-subtitle ${primary ? 'text-primary' : 'text-secondary'}`}>{subheadline}</h3>
            <h2 className="global-headline">{headline}</h2>
        </Header>
    );
}
