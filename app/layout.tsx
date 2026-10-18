import type { Metadata } from "next";
import ShopProvider from "@/components/ShopProvider";
import Navbar from "@/components/Navbar";
import CartPanel from "@/components/CartPanel";
import Footer from "@/components/Footer";
import Notifications from "@/components/Notifications";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kopi Nusantara",
  description: "Cita rasa asli Indonesia - profil perusahaan Kopi Nusantara.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
          integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ShopProvider>
          <Navbar />
          <CartPanel />
          {children}
          <Footer />
          <Notifications />
          <BackToTop />
        </ShopProvider>
      </body>
    </html>
  );
}
