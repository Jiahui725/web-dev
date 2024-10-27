import localFont from "next/font/local";
import MainLayout from "@/components/MainLayout";
import "./globals.css";
import FilterContextProvider from "@/context/FilterContext";

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

export const metadata = {
  title: "Integrations | Clay.com",
  description:
    "Clay- Uplevel your data enrichment. Scale personalized outreach.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <FilterContextProvider>
          <MainLayout>{children}</MainLayout>
        </FilterContextProvider>
      </body>
    </html>
  );
}
