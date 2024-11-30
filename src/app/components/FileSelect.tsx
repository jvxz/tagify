"use client";
import React from "react";
import { FileTrigger } from "react-aria-components";
import { Button } from "@/components/ui/button";
import { Import } from "lucide-react";
import useFileStore from "@/lib/store/files";

export function FileSelect() {
  const { addFiles } = useFileStore();
  return (
    <FileTrigger
      onSelect={(e) => {
        if (!e) return;
        const files = Array.from(e).map((file) => ({
          name: file.name,
          file: file,
        }));
        addFiles(files);
      }}
    >
      <Button size="icon" variant="outline">
        <Import className="size-5" />
      </Button>
    </FileTrigger>
  );
}
export default FileSelect;
