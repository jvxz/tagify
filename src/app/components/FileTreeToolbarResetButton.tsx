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

export default function FileTreeToolbarResetButton() {
  const { files, clearFiles, setSelectedFile } = useFileStore();

  return (
    <DialogTrigger>
      <TooltipButton isDisabled={files.length === 0} tooltip="Reset">
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
