import "./globals.css";

export const metadata = {
  title: "MarketFarmer.in | Agricultural Market Price Dashboard",
  description: "Daily agricultural market price dashboard for commodities, states, mandis, livestock, poultry, fish, and dairy."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
