import SiteNavBar from "@/components/SiteNavBar";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/SiteFooter";

export async function generateMetadata() {
  // SEO Data Fetch
  return {
    title: "Homes",
    keyword: "",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#2299DD" height={3} speed={200} />
        <SiteNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
