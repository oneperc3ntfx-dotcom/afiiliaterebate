import "./globals.css";

export const metadata = {
  title: "Affiliate Rebate",
  description:
    "100% Komisi Kembali ke Trader"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
