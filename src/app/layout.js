import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Cars",
  description: "Explore variety of cars",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-[100vh] bg-[#eaeef0]">
        {/* <Header />   */}
        <div className="pt-10 md:px-10 bg-[#eaeef0]">
          {children}
        </div>
      </body>
    </html>
  );
}
