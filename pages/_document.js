import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}


// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {
//   const meta = {
//     title: 'Next.js Blog Starter Kit',
//     description: 'Clone and deploy your own Next.js portfolio in minutes.',
//     image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png'
//   }

//   return (
//     <Html lang="en">
//       <Head>
//         <meta name="robots" content="follow, index" />
//         <meta name="description" content={meta.description} />
//         <meta property="og:site_name" content={meta.title} />
//         <meta property="og:description" content={meta.description} />
//         <meta property="og:title" content={meta.title} />
//         <meta property="og:image" content={meta.image} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:site" content="@yourname" />
//         <meta name="twitter:title" content={meta.title} />
//         <meta name="twitter:description" content={meta.description} />
//         <meta name="twitter:image" content={meta.image} />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }
