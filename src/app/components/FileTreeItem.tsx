"use client";
import { Button } from "@/components/ui/button";
import useFileStore from "@/lib/store/files";
import { useQuery } from "@tanstack/react-query";
import getTags from "@/lib/get-tags";

interface FileItem {
  name: string;
  file: File;
}

export default function FileTreeItem({ file }: { file: FileItem }) {
  const { setSelectedFile } = useFileStore();
  const { data: tags } = useQuery({
    queryKey: ["tags", file.name],
    queryFn: () => getTags(file.file),
  });

  return (
    <Button
      onPress={() =>
        setSelectedFile({
          name: file.name,
          file: file.file,
          tags: tags,
        })
      }
      variant="link"
      className="h-fit cursor-default select-none p-0 text-sm text-foreground"
    >
      {file.name}
    </Button>
  );
}
