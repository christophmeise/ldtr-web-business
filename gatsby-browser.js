import './src/styles/global.less';
// { routerProps: { location }

export const shouldUpdateScroll = () => {
    document.body.scrollTop = 0;
};

export const onServiceWorkerUpdateReady = () => window.location.reload();