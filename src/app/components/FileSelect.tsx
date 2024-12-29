"use client";
import React from "react";
import { FileTrigger } from "react-aria-components";
import useFileStore from "@/lib/store/files";
import { Import } from "lucide-react";
import { Button } from "@/components/ui/button";
import { acceptedFileTypes } from "@/lib/config";

function FileSelect() {
  const { addFiles } = useFileStore();
  return (
    <FileTrigger
      allowsMultiple
      acceptedFileTypes={acceptedFileTypes}
      onSelect={(e) => {
        if (!e) return;
        const files = Array.from(e).map((file) => ({
          name: file.name,
          file: file,
        }));
        addFiles(files);
      }}
    >
      <Button variant="outline" className="w-full gap-2">
        Import <Import className="size-5" />
      </Button>
    </FileTrigger>
  );
}
export default FileSelect;
