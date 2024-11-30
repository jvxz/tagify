"use client";
import useFileStore from "@/lib/store/files";
import getTags from "@/lib/get-tags";
import { Toggle } from "@/components/ui/toggle";

export default function FileTree() {
  const { files, setSelectedFile } = useFileStore();

  return files.map((file) => (
    <Toggle
      key={file.name}
      onPress={async () => {
        console.log(file.name);
        const tags = await getTags(file.file);
        setSelectedFile({
          name: file.name,
          file: file.file,
          tags: tags,
        });
      }}
      // variant="link"
      className="mx-4 h-fit cursor-pointer select-none justify-normal py-1 text-left text-sm text-foreground"
    >
      {file.name}
    </Toggle>
  ));
}
