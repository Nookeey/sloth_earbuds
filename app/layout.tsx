import "./globals.css";
import { Montserrat } from "next/font/google";
import ReduxProvider from "@/redux/provider";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Wireless Earbuds",
  description: "Wireless Earbuds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
