/* eslint-disable @next/next/no-img-element */
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import DefaultUserIcon from "@/public/default-user-icon.png";
import Image from "next/image";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

interface UserDropdownProps {
  userImage: string | null;
}

export function UserDropdown({ userImage }: UserDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />

          <img src={userImage ?? DefaultUserIcon} alt="User Icon" className="rounded-full h-8 w-8 hidden lg:block" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link className="w-full" href="/r/create">
            Create Community
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="w-full" href="/create">
            Create Post
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="w-full" href="/settings">
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutLink className="w-full">Logout</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
