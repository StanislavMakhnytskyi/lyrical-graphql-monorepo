import {Html, Head, Main, NextScript, DocumentProps} from 'next/document'

type Props = DocumentProps;

export default function Document<Props>() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
