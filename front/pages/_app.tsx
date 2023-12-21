import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { WithSideNav } from "@/components/withSideNav";
import { AppProps } from "next/app";

const roboto = Roboto({ subsets: ["latin", "cyrillic-ext"], weight: "400" });

export const metadata: Metadata = {
  title: "Тональность отзывов",
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <div className={roboto.className}>
        <WithSideNav>
          <Component {...pageProps} />
        </WithSideNav>
      </div>
    </>
  );
}
