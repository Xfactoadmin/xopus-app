import type { ReactNode } from "react";

export const metadata = {
  title: "XOpus — Application Facturation",
  description: "Application de facturation XOpus pour les professionnels français.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}