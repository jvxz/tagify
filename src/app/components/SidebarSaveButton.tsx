"use client";
import { TooltipButton } from "@/components/ui/tooltip-button";
import useModeStore from "@/lib/store/mode";
import { Save } from "lucide-react";

export default function SidebarSaveButton() {
  const { mode } = useModeStore();

  return (
    <TooltipButton
      onPress={() => {
        console.log("save");
      }}
      isDisabled={!mode.edited}
      tooltip="Save"
      variant="default"
    >
      <Save />
    </TooltipButton>
  );
}
