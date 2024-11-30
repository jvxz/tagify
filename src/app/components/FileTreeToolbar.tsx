"use client";
import { FileTreeSort } from "./FileTreeToolbarSort";
import FileSelect from "./FileSelect";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { List, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import FileTreeToolbarResetButton from "./FileTreeToolbarResetButton";

export default function FileTreeBar() {
  const [barState, setBarState] = useState<"search" | "normal">("normal");

  if (barState === "normal")
    return (
      <div className="flex gap-2 p-4">
        <Button
          onPress={() => setBarState("search")}
          variant="outline"
          size="icon"
        >
          <Search className="size-5" />
        </Button>

        <div className="flex-1">
          <FileTreeSort />
        </div>
        <FileTreeToolbarResetButton />
        <FileSelect />
      </div>
    );
  return (
    <div className="flex items-center gap-4 p-4">
      <Button
        size="icon"
        variant="outline"
        onPress={() => setBarState("normal")}
      >
        <List className="size-5" />
      </Button>
      <Input placeholder="Search" />
    </div>
  );
}
