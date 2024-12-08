"use client";
import React from "react";
import { FileTrigger } from "react-aria-components";
import useFileStore from "@/lib/store/files";
import { TooltipButton } from "@/components/ui/tooltip-button";
import { Import } from "lucide-react";

function FileSelect({ mode }: { mode: "audio" | "image" }) {
  const { addFiles } = useFileStore();
  return (
    <FileTrigger
      allowsMultiple={mode === "audio"}
      onSelect={(e) => {
        if (!e) return;
        if (mode === "audio") {
          const files = Array.from(e).map((file) => ({
            name: file.name,
            file: file,
          }));
          addFiles(files);
        }
        if (mode === "image") {
          console.log(e);
        }
      }}
    >
      <TooltipButton
        tooltip={mode === "audio" ? "Import" : "New cover"}
        className="size-10"
      >
        <Import className="size-5" />
      </TooltipButton>
    </FileTrigger>
  );
}
export default FileSelect;
