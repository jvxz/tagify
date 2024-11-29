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
        const files = Array.from(e);
        const filenames = files.map((file) => ({
          id: file.name,
          name: file.name,
        }));
        addFiles(filenames);
      }}
    >
      <Button size="icon" variant="outline">
        <Import className="size-5" />
      </Button>
    </FileTrigger>
  );
}
export default FileSelect;
