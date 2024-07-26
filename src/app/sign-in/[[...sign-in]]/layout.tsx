import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Next App - Sign in",
    description: "Sign in next app",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>{children}</div>
  );
}
