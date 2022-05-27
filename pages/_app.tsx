import 'bootstrap/dist/css/bootstrap.css';
import '../styles/flexslider.css';
import '../styles/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/popuo-box.css';
import '../styles/menu.css';


import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
};

// window.$ = window.jQuery = require('jquery');

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  
  return getLayout(<Component {...pageProps} />);
}
