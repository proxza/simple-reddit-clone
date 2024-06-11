import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import DefaultUserIcon from "@/public/default-user-icon.png";
import Image from "next/image";

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />

          <Image src={DefaultUserIcon} alt="Default Avatar" className="rounded-full h-8 w-8 hidden lg:block" />
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
