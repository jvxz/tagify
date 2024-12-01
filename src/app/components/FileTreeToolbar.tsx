"use client";
import { FileTreeSort } from "./FileTreeToolbarSort";
import FileSelect from "./FileSelect";
import { Input } from "@/components/ui/input";
import FileTreeToolbarResetButton from "./FileTreeToolbarResetButton";
import FileTreeToolbarCheckboxToggle from "./FileTreeToolbarCheckboxToggle";

export default function FileTreeBar() {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex gap-2 pt-4">
        {/* <Button
          onPress={() => setBarState("search")}
          variant="outline"
          size="icon"
        >
          <Search className="size-5" />
        </Button> */}
        <div className="w-full flex-1">
          <FileTreeSort />
        </div>
        <FileTreeToolbarCheckboxToggle />
        <FileTreeToolbarResetButton />
        <FileSelect />
      </div>
      <div className="z-50 flex h-fit items-center gap-2">
        <Input placeholder="Search" className="h-10" />
      </div>
    </div>
  );
}
