import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import i18n from './src/i18n';
import createStore from './src/state/createStore';

export async function replaceRenderer({ bodyComponent, replaceBodyHTMLString }) {
    i18n.loadNamespaces(['common'], () => {
        const store = createStore();
        const ConnectedBody = () => <Provider store={store}>{bodyComponent}</Provider>;
        replaceBodyHTMLString(renderToString(<ConnectedBody />));
    });
}
