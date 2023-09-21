import {ChakraProvider, useBoolean} from "@chakra-ui/react";
import FullScreenLoader from "components/FullScreenLoader";
import {AppProps} from "next/app";
import {useRouter} from "next/router";
import {useEffect} from "react";
import 'styles/globals.css'
import theme from "utils/theme";
import Script from "next/script";

const MyApp = ({Component, pageProps}: AppProps) => {
    const router = useRouter();
    const [loading, {on, off}] = useBoolean();

    useEffect(() => {
        //<-- this useEffect will be triggered just one time at component initialization
        router.events.on("routeChangeStart", () => {
            on();
        });
        router.events.on("routeChangeComplete", () => {
            off();
        });
    }, []);

    return (
        <>
            {/*Google tag (gtag.js)*/}
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-CE6LQGSPGP"/>
            <Script id="google-analytics" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-CE6LQGSPGP');`}
            </Script>
            <ChakraProvider theme={theme}>
                {loading ? <FullScreenLoader/> : <Component {...pageProps} />}
            </ChakraProvider>
        </>
    );
};

export default MyApp;