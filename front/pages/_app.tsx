import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { WithSideNav } from "@/components/withSideNav";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";

const roboto = Roboto({ subsets: ["latin", "cyrillic-ext"], weight: "400" });

export const metadata: Metadata = {
  title: "Тональность отзывов",
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://0.0.0.0:8000/get_feedback_by_restaurant")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <CssBaseline />
      <div className={roboto.className}>
        <WithSideNav data={data} isLoading={isLoading}>
          <Component data={data} {...pageProps} />
        </WithSideNav>
      </div>
    </>
  );
}
