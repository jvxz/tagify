import { ScrollArea } from "@/components/ui/scroll-area";
import FileTree from "./FileTree";
import FileTreeToolbar from "./FileTreeToolbar";

export default function FileTreePanel() {
  return (
    <ScrollArea className="flex w-full flex-col">
      <div className="flex h-16 items-center justify-between border-b border-border/50 px-4">
        <p className="text-xl font-bold">tagify</p>
        <p>v0.0.1</p>
      </div>
      <FileTreeToolbar />
      <div className="flex flex-col gap-2">
        <FileTree />
      </div>
    </ScrollArea>
  );
}
