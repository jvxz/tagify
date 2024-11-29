import FileSelect from "./FileSelect";
import FileTree from "./FileTree";
import { FileTreeSort } from "./FileTreeSort";

export default function FileTreePanel() {
  return (
    <div className="flex flex-col">
      <div className="flex h-16 items-center border-b border-border px-4">
        <p className="font-mono text-lg font-bold">tagify</p>
      </div>
      <div className="flex flex-col">
        <div className="flex p-4">
          <div className="flex-1">
            <FileTreeSort />
          </div>
          <FileSelect />
        </div>
        <FileTree />
      </div>
    </div>
  );
}
