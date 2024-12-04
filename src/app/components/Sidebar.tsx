"use client";

import { Button } from "@/components/ui/button";
import { Cog, Download, Info, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import useModeStore from "@/lib/store/mode";

export default function Sidebar() {
  const { mode } = useModeStore();

  return (
    <div className="flex h-screen w-20 flex-col items-center gap-4 border-l border-border bg-background py-4 shadow-md">
      <div className="flex flex-1 flex-col items-center gap-4">
        <Button isDisabled={!mode.edited} size="icon">
          <Download />
        </Button>
        <Button isDisabled={!mode.edited} variant="destructive" size="icon">
          <X />
        </Button>
      </div>
      <div className="flex flex-col items-center gap-4">
        <ThemeToggle variant="outline" />
        <Button variant="outline" size="icon">
          <Cog />
        </Button>
        <Button variant="outline" size="icon">
          <Info />
        </Button>
      </div>
    </div>
  );
}
