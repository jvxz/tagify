import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import FileSelect from "./components/FileSelect";
import FileTree from "./components/FileTree";
import { FileTreeSort } from "./components/FileTreeSort";

export default function Page() {
  return (
    <ResizablePanelGroup direction="horizontal" className="flex bg-background">
      <ResizablePanel className="w-[300px] shadow-md">
        <div className="flex p-4">
          <div className="flex-1">
            <FileTreeSort />
          </div>
          <FileSelect />
        </div>
        <FileTree />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="flex flex-col flex-1"></ResizablePanel>
    </ResizablePanelGroup>
  );
}
