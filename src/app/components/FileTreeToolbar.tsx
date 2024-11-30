"use client";
import { FileTreeSort } from "./FileTreeToolbarSort";
import FileSelect from "./FileSelect";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { List, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function FileTreeBar() {
  const [barState, setBarState] = useState<"open" | "closed">("closed");

  if (barState === "closed")
    return (
      <div className="flex gap-2 p-4">
        <Button
          onPress={() => setBarState("open")}
          variant="outline"
          size="icon"
        >
          <Search className="size-5" />
        </Button>

        <div className="flex-1">
          <FileTreeSort />
        </div>
        <FileSelect />
      </div>
    );
  return (
    <div className="flex items-center gap-4 p-4">
      <Button
        size="icon"
        variant="outline"
        onPress={() => setBarState("closed")}
      >
        <List className="size-5" />
      </Button>
      <Input placeholder="Search" />
    </div>
  );
}
