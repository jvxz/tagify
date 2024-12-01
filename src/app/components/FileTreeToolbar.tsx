"use client";
import { FileTreeSort } from "./FileTreeToolbarSort";
import FileSelect from "./FileSelect";
import { Input } from "@/components/ui/input";
import FileTreeToolbarResetButton from "./FileTreeToolbarResetButton";
import FileTreeToolbarCheckboxToggle from "./FileTreeToolbarCheckboxToggle";
import useFileStore from "@/lib/store/files";

export default function FileTreeToolbar() {
  const { files } = useFileStore();

  return (
    <div className="flex flex-col gap-4 px-4 pb-4">
      <div className="flex gap-2 pt-4">
        <div className="w-full flex-1">
          <FileTreeSort />
        </div>
        <FileTreeToolbarResetButton />
        <FileSelect />
      </div>
      <div className="z-50 flex h-fit items-center gap-2">
        <FileTreeToolbarCheckboxToggle />
        <Input
          placeholder="Search"
          disabled={files.length === 0}
          className="h-10"
        />
      </div>
    </div>
  );
}
