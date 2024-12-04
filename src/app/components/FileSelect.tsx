"use client";
import React from "react";
import { FileTrigger } from "react-aria-components";
import useFileStore from "@/lib/store/files";
import { TooltipButton } from "@/components/ui/tooltip-button";
import { Import } from "lucide-react";

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
      <TooltipButton tooltip="Import">
        <Import className="size-5" />
      </TooltipButton>
    </FileTrigger>
  );
}
export default FileSelect;
