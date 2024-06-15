import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function SubRedditRoute() {
  return (
    <div className="max-w-[1000px] mx-auto flex gap-x-10 mt-4">
      <div>
        <h1>Hello from this subred</h1>
      </div>

      <div>
        <Card>
          <div>About Community</div>
          <div>
            <div>
              <Image src={`https://avatar.vercel.sh/proxz`} width={60} height={60} alt="Community Icon" />
              <Link href="/">r/proxz</Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
