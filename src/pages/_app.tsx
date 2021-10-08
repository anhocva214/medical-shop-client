import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '@store/index';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

// import '../scss/bootstrap5.0.2/bootstrap.scss'
// import '../scss/font-awesome6pro/scss/fontawesome.scss'
// import 'antd/dist/antd.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>

        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Vicodin - Medical eCommerce HTML Template</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="Medical Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Place favicon.png in the root directory */}
        <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />
        {/* Font Icons css */}
        <link rel="stylesheet" href="/css/font-icons.css" />
        {/* plugins css */}
        <link rel="stylesheet" href="/css/plugins.css" />
        {/* Main Stylesheet */}
        <link rel="stylesheet" href="/css/style.css" />
        {/* Responsive css */}
        <link rel="stylesheet" href="/css/responsive.css" />


      </Head>

      <Alert stack={{ limit: 3 }} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

    </>
  )
}

export default App
