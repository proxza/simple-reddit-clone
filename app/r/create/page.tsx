import { createCommunity } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function SubredditPage() {
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col mt-4">
      <form action={createCommunity}>
        <h1 className="text-3xl font-bold tracking-tight">Create Community</h1>
        <Separator className="my-4" />
        <Label className="text-lg">Name</Label>
        <p className="text-muted-foreground">Community names including capitalization cannot be changed!</p>

        <div className="relative mt-2">
          <p className="absolute left-0 w-8 flex items-center justify-center h-full text-muted-foreground">r/</p>
          <Input name="name" required minLength={2} maxLength={28} className="pl-6" />
        </div>

        <div className="w-full flex mt-5 gap-x-5 justify-end">
          <Button asChild variant="secondary">
            <Link href="/">Cancel</Link>
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
