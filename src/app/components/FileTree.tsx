"use client";
import useFileStore from "@/lib/store/files";
import { Toggle } from "@/components/ui/toggle";
import { useQueryClient } from "@tanstack/react-query";
import getTags from "@/lib/get-tags";
import { Checkbox } from "@/components/ui/checkbox";
import useModeStore from "@/lib/store/mode";

export default function FileTree() {
  const { files, setSelectedFile, selectedFile } = useFileStore();
  const { mode } = useModeStore();
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

  return files.map((file) => (
    <div key={file.name} className="mx-4 flex items-center gap-2">
      {mode.checkbox && <Checkbox />}
      <Toggle
        isSelected={selectedFile?.name === file.name}
        onChange={(pressed) => handleToggle(pressed, file)}
        className="h-fit w-full cursor-pointer select-none justify-normal px-2 py-1 text-left text-sm text-foreground"
      >
        {file.name}
      </Toggle>
    </div>
  ));
}
