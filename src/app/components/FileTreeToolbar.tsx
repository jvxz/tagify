"use client";
import { FileTreeSort } from "./FileTreeToolbarSort";
import FileSelect from "./FileSelect";
import FileTreeToolbarResetButton from "./FileTreeToolbarResetButton";
import FileTreeToolbarCheckboxToggle from "./FileTreeToolbarCheckboxToggle";
import FileTreeToolbarSearchBar from "./FileTreeToolbarSearchBar";

export default function FileTreeToolbar() {
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
        <FileTreeToolbarSearchBar />
      </div>
    </div>
  );
}
