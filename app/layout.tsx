import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Donovan the Trainer — Dad Transformation Coaching",
  description:
    "Donovan helps busy dads lose fat, build muscle, and get their confidence back with realistic training, simple nutrition, and real accountability. Text (737) 287-5352 for a free consultation.",
  openGraph: {
    type: "website",
    title: "Donovan the Trainer — Dad Transformation Coaching",
    description:
      "Drop the dad bod. Build the strong dad. 1:1 coaching built around real life — free consultation, no forms.",
    images: ["/images/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
