import LocationBanner from "@/components/location-banner";
import OrderBanner from "@/components/top-navigation/order-banner";
import FoodDeliveryNavbar from "@/components/top-navigation/ShopTopNavigation";
import "@/styles/globals.css";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={lexend.variable}>
      <LocationBanner />
      <FoodDeliveryNavbar />
       <OrderBanner />
      <Component {...pageProps} />
    </main>
  );
}
