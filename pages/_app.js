// import '../styles/style.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import '../styles/style.css'
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}