import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.min.js';
import Bootstrap from "@/components/Bootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Immigration Hub",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/src/assets/images/logo2.0.png" />
      </head>
      <body className={inter.className} id="root">
      <Bootstrap/>
        <Navbar />
        {children}
        <Footer />
        <Script
          id='translate'
          dangerouslySetInnerHTML={{
            __html: `
                function googleTranslateElementInit() {
                  new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
                }
              `,
          }}
        />
        <Script
          type='text/javascript'
          src={`https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`}
        />
        {/* for bootstrap */}
        <Script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-pzjw8FS03U02KQFku1LqFvBzp4JGcRM9SMoCMmJZl5qME5z8'
          crossOrigin='anonymous'
        ></Script>
      </body>
    </html>
  );
}
