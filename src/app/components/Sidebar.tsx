import { CircleHelp, Cog } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { TooltipButton } from "@/components/ui/tooltip-button";
import SidebarDiscardButton from "./SidebarDiscardButton";
import SidebarSaveButton from "./SidebarSaveButton";

export default function Sidebar() {
  return (
    <div className="flex h-screen w-20 flex-col items-center gap-4 border-l border-border bg-background py-4 shadow-md">
      <div className="flex flex-1 flex-col items-center gap-4">
        {/* <Button isDisabled={!mode.edited} size="icon">
          <Download />
        </Button> */}
        {/* <Button isDisabled={!mode.edited} variant="destructive" size="icon">
          <X />
        </Button> */}
        <SidebarSaveButton />
        <SidebarDiscardButton />
      </div>
      <div className="flex flex-col items-center gap-4">
        <ThemeToggle variant="outline" />
        {/* <Button variant="outline" size="icon">
          <Cog />
        </Button> */}
        <TooltipButton placement="left" tooltip="Info">
          <CircleHelp className="size-5" />
        </TooltipButton>
        <TooltipButton placement="left" tooltip="Settings">
          <Cog className="size-5" />
        </TooltipButton>
      </div>
    </div>
  );
}
