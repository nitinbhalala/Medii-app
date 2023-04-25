import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="sticky top-0 z-[100] bg-white">
        <Header />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
