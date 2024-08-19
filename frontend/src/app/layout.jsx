import { Cutive_Mono, Inter, Lekton, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import NAVBAR from "@/components/NAVBAR";
import FOOTER from "@/components/FOOTER";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const font2 = Cutive_Mono({ subsets: ["latin-ext"], weight: ['400'] })
const font3 = Ubuntu_Mono({ subsets: ["latin"], weight: ['400'] })
const font4 = Lekton({ subsets: ["latin"], weight: ['400'] })

export const metadata = {
  title: "JSON Visualizer",
  description: "a bloody app that is created by me!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font4.className}>
        <NAVBAR />

        <Toaster 
        position="top-center"
        toastOptions={{
          className: '',
          style: {
            border: '1px solid #636B74',
            padding: '16px',
            color: 'white',
            backgroundColor: '#171717'
          },
        }}
        
        />
        {children}
        <FOOTER />
      </body>
    </html>
  );
}