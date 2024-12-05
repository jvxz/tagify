import { ScrollArea } from "@/components/ui/scroll-area";
import FileTree from "./FileTree";
import FileTreeToolbar from "./FileTreeToolbar";

export default function FileTreePanel() {
  return (
    <div className="flex h-full w-full flex-col pb-4">
      <div className="flex min-h-16 items-center justify-between border-b border-border/50 px-4">
        <p className="text-xl font-bold">tagify</p>
        <p>v0.0.1</p>
      </div>
      <div className="motion-preset-fade-sm">
        <FileTreeToolbar />
        <ScrollArea className="flex flex-col gap-2">
          <FileTree />
        </ScrollArea>
      </div>
    </div>
  );
}
