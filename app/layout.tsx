import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./index.css";
import StoreProvider from "@/helper/redux-store/StoreProvider";
import SmoothScroll from "@/components/animation/SmoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/next";
const itim = Sen({
  weight: "400",
  display: "swap",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <StoreProvider>
        <body className={`${itim.className}`}>
          <SmoothScroll>{children}
            <SpeedInsights/>
          </SmoothScroll>
        </body>
      </StoreProvider>
    </html>
  );
}
