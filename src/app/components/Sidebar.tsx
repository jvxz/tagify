import { Button } from "@/components/ui/button";
import { Cog, Info } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  return (
    <div className="flex h-screen w-20 flex-col items-center gap-4 border-r border-border bg-background py-4 shadow-md">
      <ThemeToggle variant="outline" />
      <Button variant="outline" size="icon">
        <Cog />
      </Button>
      <Button variant="outline" size="icon">
        <Info />
      </Button>
    </div>
  );
}
