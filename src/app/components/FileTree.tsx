"use client";
import useFileStore from "@/lib/store/files";
import { Toggle } from "@/components/ui/toggle";
import { useQueryClient } from "@tanstack/react-query";
import getTags from "@/lib/get-tags";

export default function FileTree() {
  const { files, setSelectedFile, selectedFile } = useFileStore();
  const queryClient = useQueryClient();

  async function handleToggle(
    pressed: boolean,
    file: { name: string; file: File },
  ) {
    if (pressed) {
      const result = await queryClient.fetchQuery({
        queryKey: ["tags", file.name],
        queryFn: () => getTags(file.file),
        staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
      });

      setSelectedFile({ name: file.name, file: file.file, tags: result });
    } else {
      setSelectedFile(null);
    }
  }

  return files.map((file) => (
    <Toggle
      key={file.name}
      isSelected={selectedFile?.name === file.name}
      onChange={(pressed) => handleToggle(pressed, file)}
      className="mx-4 h-fit cursor-pointer select-none justify-normal py-1 text-left text-sm text-foreground"
    >
      {file.name}
    </Toggle>
  ));
}
