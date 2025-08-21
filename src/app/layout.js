import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // you can adjust weights as needed
});

export const metadata = {
  title: "GenAI Healthcare",
  description:
    "GenAI Healthcare Inc. proudly receives the prestigious Best New Startup 2024 Award, recognizing our innovative contributions to healthcare technology and our commitment to transforming patient care through AI-driven solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
