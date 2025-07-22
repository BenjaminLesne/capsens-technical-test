import "@/styles/globals.css";

import { type Metadata } from "next";
import { Montserrat } from "next/font/google";
import DefaultLayout from "./_components/layouts/default-layout";

export const metadata: Metadata = {
  title: "L'agence des meilleures plateformes fintechs | Capsens",
  description:
    "Agence web d'excellence. Capsens change la finance en travaillant pour ceux qui réinventent l'épargne et le financement de projets",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={montserrat.className}>
      <body className="bg-light-grey flex min-h-screen flex-col">
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
