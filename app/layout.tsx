import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "AIBotcaller AI - Human-Like Voice AI Assistants",
  description:
    "Downsize your staff and increase your reach at the click of a button. Make thousands of calls, book more appointments, and never miss a lead again with your very own no code 24/7 human AI agent.",
  icons: {
    icon: "/logo-blue.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased font-poppins">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
