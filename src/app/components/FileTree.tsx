"use client";
import useFileStore from "@/lib/store/files";
import { Toggle } from "@/components/ui/toggle";
import { useQueryClient } from "@tanstack/react-query";
import getTags from "@/lib/get-tags";
import { Checkbox } from "@/components/ui/checkbox";
import useModeStore from "@/lib/store/mode";
import useSearchStore from "@/lib/store/search";
import {
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function FileTree() {
  let switchAttempt = {
    name: "",
    file: new File([], ""),
  };

  const { files, setSelectedFile, selectedFile } = useFileStore();
  const { mode } = useModeStore();
  const { search } = useSearchStore();
  const queryClient = useQueryClient();

  async function handleToggle(
    pressed: boolean,
    file: { name: string; file: File },
  ) {
    if (pressed) {
      const result = await queryClient.fetchQuery({
        queryKey: ["tags", file.name],
        queryFn: () => getTags(file.file),
        staleTime: 1000 * 60 * 5,
      });

      setSelectedFile({ name: file.name, file: file.file, tags: result });
    } else {
      setSelectedFile(null);
    }
  }

  function handleSearch(file: { name: string; file: File }) {
    return file.name.toLowerCase().includes(search.toLowerCase());
  }

  return search !== ""
    ? files.map((file) => {
        if (handleSearch(file)) {
          return (
            <div key={file.name} className="mx-4 flex items-center gap-2">
              {mode.checkbox && <Checkbox />}
              <Toggle
                isSelected={selectedFile?.name === file.name}
                onChange={(pressed) => handleToggle(pressed, file)}
                className="motion-preset-slide-down-sm h-fit w-full cursor-pointer select-none justify-normal px-2 py-1 text-left text-sm text-foreground"
              >
                {file.name}
              </Toggle>
            </div>
          );
        }
      })
    : files.map((file) => {
        return (
          <div key={file.name} className="mx-4 flex items-center gap-2">
            {mode.checkbox && <Checkbox />}
            <DialogTrigger>
              <Toggle
                isSelected={selectedFile?.name === file.name}
                onChange={(pressed) => {
                  if (!mode.edited) {
                    handleToggle(pressed, file).catch(console.error);
                  } else {
                    switchAttempt = { name: file.name, file: file.file };
                  }
                }}
                className="motion-preset-slide-down-sm h-fit w-full cursor-pointer select-none justify-normal px-2 py-1 text-left text-sm text-foreground"
              >
                {file.name}
                {mode.edited && (
                  <DialogOverlay isDismissable={false}>
                    <DialogContent
                      role="alertdialog"
                      className="sm:max-w-[425px]"
                    >
                      {({ close }) => (
                        <>
                          <DialogHeader>
                            <DialogTitle>Switch file</DialogTitle>
                          </DialogHeader>
                          <DialogDescription>
                            There are unsaved changes. Continue?
                          </DialogDescription>
                          <DialogFooter>
                            <Button size="sm" onPress={close}>
                              Cancel
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onPress={() => {
                                close();
                                handleToggle(true, switchAttempt).catch(
                                  console.error,
                                );
                              }}
                            >
                              Switch
                            </Button>
                          </DialogFooter>
                        </>
                      )}
                    </DialogContent>
                  </DialogOverlay>
                )}
              </Toggle>
            </DialogTrigger>
          </div>
        );
      });
}
