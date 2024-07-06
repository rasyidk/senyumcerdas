import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Rumah Korea",
  description: "Rumah Korea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
