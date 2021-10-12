import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@theme/index';
// import { Provider } from 'mobx-react';
// import { useStore } from '@stores/index';
import { UserContextProvider } from '@contexts/useAuth';
import { UIContextProvider } from '@contexts/useUI';
import Page from '@layouts/page';

export default function App({ Component, pageProps }) {
  // const store = useStore(pageProps.initialState);

  return (
    <ChakraProvider theme={theme} resetCSS>
      {/* <Provider
        ui={store.ui}
        home={store.home}
        auth={store.auth}
        course={store.course}
        courseQuestions={store.courseQuestions}
        trending={store.trending}
        userWishlist={store.userWishlist}
        instructor={store.instructor}
      > */}
      <UserContextProvider>
        <UIContextProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </UIContextProvider>
      </UserContextProvider>
      {/* </Provider> */}
    </ChakraProvider>
  );
}

// export function reportWebVitals(metric) {
//   const print = (metrc) =>
//     console.log(metrc.name, metrc.startTime, metrc.value);

//   if (metric.label === 'web-vital') {
//     switch (metric.name) {
//       case 'FCP':
//         // handle FCP results
//         print(metric);
//         break;
//       case 'LCP':
//         // handle LCP results
//         print(metric);
//         break;
//       case 'CLS':
//         // handle CLS results
//         print(metric);
//         break;
//       case 'FID':
//         // handle FID results
//         print(metric);
//         break;
//       case 'TTFB':
//         // handle TTFB results
//         print(metric);
//         break;
//       default:
//         break;
//     }
//   }

//   if (metric.label === 'custom') {
//     print(metric);
//   }
// }
