import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'

interface Props extends DocumentInitialProps {
  statusCode: number
}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext): Promise<Props> {
    const initialProps = await Document.getInitialProps(ctx)

    console.log('client', { query: ctx.query })

    return {
      ...initialProps,
      statusCode: ctx.query.error ? 404 : 200
    }
  }

  render() {
    if (this.props.statusCode !== 200) {
      return <h1>This is an error page</h1>
    }

    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument