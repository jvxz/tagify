"use client";
import { TooltipButton } from "@/components/ui/tooltip-button";
import useModeStore from "@/lib/store/mode";
import { Loader2, Save } from "lucide-react";
import saveTags from "@/lib/save-tags";
import useFileStore from "@/lib/store/files";
import { useToast } from "@/hooks/use-toast";
export default function SidebarSaveButton() {
  const { mode, setMode } = useModeStore();
  const { selectedFile } = useFileStore();
  const { toast } = useToast();

  return (
    <TooltipButton
      onPress={async () => {
        if (!selectedFile) return;

        toast({
          title: "Saving edited file...",
        });
        setMode({ ...mode, saving: true });
        await saveTags(selectedFile.file, selectedFile.tags!).then((res) => {
          console.log(res);
        });
        setMode({ ...mode, saving: false });
      }}
      isDisabled={!mode.edited || mode.saving}
      placement="left"
      tooltip="Save"
      variant="default"
    >
      {mode.saving ? <Loader2 className="size-4 animate-spin" /> : <Save />}
    </TooltipButton>
  );
}
