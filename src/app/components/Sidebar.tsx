import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  return (
    <div className="flex h-screen w-20 flex-col items-center gap-4 border-r border-border bg-background py-4">
      <Button variant="outline" size="icon">
        <ThemeToggle />
      </Button>
      <Button variant="outline" size="icon">
        <Settings />
      </Button>
    </div>
  );
}
