import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Header from "../components/Header";
import "../public/css/siteground.css";
// import "./globals.css";

export const metadata = {
  title: "Uber For HR", 
  description: "Recruitment Automation Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <body>
        <Header/>

        <main>
          {children}
          <Body/>
        </main>

        <Footer />
      </body>
    </html>
  );
}
