import type { Metadata } from "next";
import localFont from "next/font/local";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import store from "@/lib/store";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Redytable",
  description: "Kuch pal apno ke liye",
};

/**
 * @description `root` layout is the index or root file that is `rendered` for the first time
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <ReactQueryProvider>
            <Toaster
              richColors={true}
              closeButton={true}
              duration={300}
              position="top-center"
              theme="dark"
              toastOptions={{ style: { appearance: "progress-bar" } }}
            />
            <Navbar />

            {children}

            <Footer />
          </ReactQueryProvider>
        </Provider>
      </body>
    </html>
  );
}
