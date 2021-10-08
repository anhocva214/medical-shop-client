import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>

                    {/* Custom fonts for this template*/}

                </Head>
                <body>
                    <Main />
                    <NextScript />



                    {/* preloader area start */}
                    <div className="preloader d-none" id="preloader">
                        <div className="preloader-inner">
                            <div className="spinner">
                                <div className="dot1" />
                                <div className="dot2" />
                            </div>
                        </div>
                    </div>

                    <script src="/js/plugins.js"></script>
                    <script src="/js/main.js"></script>


                </body>
            </Html>
        )
    }
}

export default MyDocument;