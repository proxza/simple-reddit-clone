"use client";

import { Button } from "@/components/ui/button";
import { EditorContent, useEditor, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const Menubar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-5">
      <Button type="button">H1</Button>
    </div>
  );
};

export function TipTapEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hellow</p>",
  });

  return (
    <div>
      <Menubar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
