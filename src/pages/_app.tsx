import React from 'react';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'next-auth/client';

import '../styles/global.css';
import { SEO } from '@/components/SEO';
import LayoutWrapper from '@/components/LayoutWrapper';
import MDXComponents from '@/components/MDXComponent';

function MyApp({ Component, pageProps }) {
  const queryClientRef = React.useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider session={pageProps.session}>
          <ThemeProvider attribute="class">
            <MDXProvider components={MDXComponents}>
              <DefaultSeo {...SEO} />
              <LayoutWrapper>
                <Component {...pageProps} />
              </LayoutWrapper>
            </MDXProvider>
          </ThemeProvider>
        </Provider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
