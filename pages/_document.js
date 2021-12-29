import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='es'>
        <Head>
          <meta name='description' content='EPS' />
          <meta
            name='keywords'
            content='EPS, Medical, Aseguradora, Medicina, Clinica, Ambulancia'
          />
          <meta name='author' content='EPS' />
          <link rel="shortcut icon" href="favicon/favicon.ico" />          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
