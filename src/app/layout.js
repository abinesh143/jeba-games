import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/seo/GoogleAnalytics";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Smiley News",
  description:
    "Stay informed with Smiley News – your trusted source for the latest breaking news, insightful analysis, and trending stories from around the world. Covering politics, entertainment, sports, tech, and more, we deliver fresh updates to keep you in the know. Explore Smiley News today for accurate, timely, and engaging content!",
  keywords: [
    "online",
    "games",
    "play",
    "racing",
    "online games",
    "shooting games",
    "zombie games",
    "new games",
  ],
  verification: {
    google: "Y8uHNeZ5EYtlOgN97AYsW8h5Jp40ahvLjWXfi6MLxuQ",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
