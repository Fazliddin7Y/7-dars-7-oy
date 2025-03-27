import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Defender</title>
        <meta name="description" content="Professional security services" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-100 text-gray-900`}>
        <Navbar />
        <main className="flex-1 container mx-auto p-4 space-y-12">
          {children}  {/* 🔥 MUHIM: Home.jsx shu yerda chiqadi */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
