import { RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import useFileStore from "@/lib/store/files";
import { DialogTrigger } from "react-aria-components";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { TooltipButton } from "@/components/ui/tooltip-button";
import useModeStore from "@/lib/store/mode";

export default function FileTreeToolbarResetButton() {
  const { files, clearFiles, setSelectedFile } = useFileStore();
  const { mode, setMode } = useModeStore();
  return (
    <DialogTrigger>
      <TooltipButton
        isDisabled={files.length === 0}
        tooltip="Reset"
        className="aspect-square"
      >
        <RefreshCcw className="size-5" />
      </TooltipButton>
      <DialogOverlay isDismissable>
        <DialogContent>
          {({ close }) => (
            <>
              <DialogHeader>
                <DialogTitle>Reset files</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                You are trying to unload all files. This action cannot be
                undone.
              </DialogDescription>
              <DialogFooter>
                <Button size="sm" onPress={close}>
                  Cancel
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onPress={() => {
                    setMode({
                      ...mode,
                      checkbox: false,
                      edited: false,
                    });
                    clearFiles();
                    setSelectedFile(null);
                    close();
                  }}
                >
                  Reset
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  );
}
