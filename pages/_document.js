import Document, { Head, Html, NextScript, Main } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <body>
            <Main></Main>
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}

export default MyDocument;
