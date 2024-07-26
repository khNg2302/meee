import type { Metadata } from "next";
import { SocialHeader } from "./_components/Header";
import { SocialMediaPostCollectionsNavbar } from "./_components/PostCollectionsNavbar";
import { AllSpaceBox } from "@/components/AllSpaceBox";

export const metadata: Metadata = {
  title: "Create Next App-Social media",
  description: "Social media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AllSpaceBox className="!overflow-hidden">
      <SocialHeader />
      {children}
    </AllSpaceBox>
  );
}
