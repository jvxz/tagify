"use client";
import useFileStore from "@/lib/store/files";
import { Button } from "@/components/ui/button";
import getTags from "@/lib/get-tags";

export default function FileTree() {
  const { files, setSelectedFile } = useFileStore();
  // const { data: tags, refetch } = useQuery({
  //   queryKey: ["tags"],
  //   queryFn: () => getTags(),
  //   enabled: false
  // });

  return files.map((file) => (
    <Button
      key={file.name}
      onPress={async () => {
        const tags = await getTags(file.file);
        setSelectedFile({
          name: file.name,
          file: file.file,
          tags: tags,
        });
      }}
      variant="link"
      className="h-fit cursor-default select-none p-0 text-sm text-foreground"
    >
      {file.name}
    </Button>
  ));
}
