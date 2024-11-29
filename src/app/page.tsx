import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import FileTreePanel from "./components/FileTreePanel";
import FileEditorPanel from "./components/FileEditorPanel";

export default function Page() {
  return (
    <ResizablePanelGroup direction="horizontal" className="flex bg-background">
      <ResizablePanel
        className="w-[300px] shadow-md"
        minSize={25}
        maxSize={50}
        defaultSize={25}
      >
        <FileTreePanel />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="flex flex-1 flex-col">
        <FileEditorPanel />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
