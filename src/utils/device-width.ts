import { Responsive } from 'semantic-ui-react';

const getWidth = (): any => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};
export default getWidth;
