import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Renda & Filho",
  description: "Soluções audiovisuais e fotografia — quatro frentes, uma só história de família.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased bg-white text-neutral-900">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
