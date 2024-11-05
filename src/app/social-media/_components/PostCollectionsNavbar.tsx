import { AllSpaceBox } from "@/components/AllSpaceBox";
import { LinkType } from "@/types/components";
import Link from "next/link";

const SocialMediaCollectionsNavbarItem: LinkType[] = [
  {
    label: "Feed",
    link: "/social-media",
  },
  {
    label: "Liked",
    link: "/social-media?collection=liked",
  },
  {
    label: "Shared",
    link: "/social-media?collection=shared",
  },
];

export const SocialMediaPostCollectionsNavbar = () => {
  return (
    <div className="flex gap-4 w-full h-auto md:flex-col md:px-1 md:w-auto md:h-full md:block sticky top-0">
      {SocialMediaCollectionsNavbarItem.map((item) => (
        <AllSpaceBox
          key={item.label}
          className="text-center md:text-left px-2 py-1"
        >
          <Link href={item.link}>{item.label}</Link>
        </AllSpaceBox>
      ))}
    </div>
  );
};
