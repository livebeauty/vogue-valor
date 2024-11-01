import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavbarPage from "./components/Navbar/page";
import FooterPage from "./components/Footer/page";
import { WixClientContextProvider } from "./context/wixContext";

const montserrat = Montserrat({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin", "latin-ext"],
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin", "latin-ext"],
});

export const metadata = {
  title: "Vogue Valour",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${playfairDisplay.className}`}>
      <WixClientContextProvider>
      <NavbarPage />
        {children}
      <FooterPage/>
      </WixClientContextProvider>
      </body>
    </html>
  );
}
