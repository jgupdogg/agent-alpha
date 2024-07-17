import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
import "./app.css"; 
import ClientLayout from './components/ClientLayout'; // Import ClientLayout
import Navbar from './components/navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full w-full m-0`}>
        <Navbar />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
