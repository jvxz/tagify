import { Button } from "@/components/ui/button";
import useFileStore from "@/lib/store/files";

export default function FileTreeItem({ name }: { name: string }) {
  const { setSelectedFile } = useFileStore();

  return (
    <Button
      onPress={() => setSelectedFile(name)}
      variant="link"
      className="h-fit cursor-default select-none p-0 text-sm text-foreground"
    >
      {name}
    </Button>
  );
}
