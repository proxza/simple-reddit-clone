import SmileIcon from "@/public/logo-name.svg";
import SmileIconMobile from "@/public/reddit-full.svg";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserDropdown } from "./UserDropdown";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="h-[10vh] w-full flex items-center border-b px-5 lg:px-14 justify-between">
      <Link href="/" className="flex items-center gap-x-3">
        <Image src={SmileIconMobile} alt="SmileVault Mobile Icon" className="h-10 w-fit" />
        <Image src={SmileIcon} alt="SmileVault Icon" className="h-9 w-fit hidden lg:block" />
      </Link>

      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        {user ? (
          <UserDropdown />
        ) : (
          <div className="flex items-center gap-x-4">
            <Button variant="secondary" asChild>
              <RegisterLink>Sign up</RegisterLink>
            </Button>
            <Button asChild>
              <LoginLink>Log in</LoginLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
