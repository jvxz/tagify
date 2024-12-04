"use client";
import { TooltipButton } from "@/components/ui/tooltip-button";
import useModeStore from "@/lib/store/mode";
import { X } from "lucide-react";

export default function SidebarDiscardButton() {
  const { mode } = useModeStore();

  return (
    <TooltipButton
      variant="destructive"
      tooltip="Discard"
      isDisabled={!mode.edited}
    >
      <X />
    </TooltipButton>
  );
}
