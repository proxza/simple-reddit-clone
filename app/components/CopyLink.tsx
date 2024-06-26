import { Share } from "lucide-react";

export function CopyLink() {
  return (
    <div>
      <button className="flex items-center gap-x-1">
        <Share className="h-4 w-4 text-muted-foreground" />
        <p>Share</p>
      </button>
    </div>
  );
}
