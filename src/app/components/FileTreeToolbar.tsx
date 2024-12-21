"use client";
import FileSelect from "./FileSelect";
import FileTreeToolbarResetButton from "./FileTreeToolbarResetButton";
import FileTreeToolbarCheckboxToggle from "./FileTreeToolbarCheckboxToggle";
import FileTreeToolbarSearchBar from "./FileTreeToolbarSearchBar";

export default function FileTreeToolbar() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-2">
        <FileTreeToolbarCheckboxToggle />
        <FileTreeToolbarResetButton />
        <FileSelect />
      </div>
      <div className="z-50 flex h-fit items-center gap-2">
        <FileTreeToolbarSearchBar />
      </div>
    </div>
  );
}
