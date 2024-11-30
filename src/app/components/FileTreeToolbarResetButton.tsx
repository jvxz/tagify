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

export default function FileTreeToolbarResetButton() {
  const { files, clearFiles } = useFileStore();

  return (
    <DialogTrigger>
      <Button
        isDisabled={files.length === 0}
        variant="outline"
        size="icon"
        // onPress={clearFiles}
      >
        <RefreshCcw className="size-5" />
      </Button>
      <DialogOverlay isDismissable={false}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Unload all files</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            You are trying to unload all files. This action cannot be undone.
          </DialogDescription>
          <DialogFooter>
            <Button size="sm" onPress={close}>
              Cancel
            </Button>
            <Button size="sm" variant="destructive" onPress={close}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  );
}

{
  /* <DialogTrigger>
<Button variant="outline">Delete...</Button>
<DialogOverlay isDismissable={false}>
  <DialogContent role="alertdialog" className="sm:max-w-[425px]">
    {({ close }) => (
      <>
        <DialogHeader>
          <DialogTitle>Delete file</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          This will permanently delete the selected file. Continue?
        </DialogDescription>
        <DialogFooter>
          <Button onPress={close}>Cancel</Button>
          <Button variant="destructive" onPress={close}>
            Delete
          </Button>
        </DialogFooter>
      </>
    )}
  </DialogContent>
</DialogOverlay>
</DialogTrigger> */
}
