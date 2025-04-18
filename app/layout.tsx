import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";

import ComingSoon from "@/components/page";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import StoreProvider from "@/providers/StoreProvider";
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
        <StoreProvider>
          <ReactQueryProvider>
            <Toaster
              richColors={true}
              closeButton={false}
              duration={3000}
              visibleToasts={1}
              expand={false}
              hotkey={["escape", "Escape"]}
              gap={20}
              position="top-center"
              theme="dark"
              toastOptions={{ style: { appearance: "progress-bar" } }}
            />
            {/* <Navbar />
            {children}
            <FooterWrapper /> */}
            {/* TODO Work InProgress **/}
            <ComingSoon />
          </ReactQueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
