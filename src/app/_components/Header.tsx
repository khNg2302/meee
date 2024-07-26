"use client";
import { PaddingBox } from "@/components/PaddingBox";
import { signOut } from "@/firebase/signOut";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();
  const { isAuth } = useAuth();
  return (
    <>
      {pathName === "/sign-in" ? (
        <></>
      ) : (
        <PaddingBox>
          <nav className=" flex justify-between items-center sticky top-0">
            <div></div>
            <ul>
              <li>
                <Link href="/social-media">Social</Link>
              </li>
            </ul>
            <ul>
              <li>
                {isAuth === undefined ? (
                  <></>
                ) : isAuth ? (
                  <button onClick={signOut}>Sign out</button>
                ) : (
                  <Link href="/sign-in">Sign in</Link>
                )}
              </li>
            </ul>
          </nav>
        </PaddingBox>
      )}
    </>
  );
};
