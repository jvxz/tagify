import FileSelect from "./FileSelect";
import FileTree from "./FileTree";
import { FileTreeSort } from "./FileTreeSort";

export default function FileTreePanel() {
  return (
    <div className="flex flex-col">
      <div className="flex p-4">
        <div className="flex-1">
          <FileTreeSort />
        </div>
        <FileSelect />
      </div>
      <FileTree />
    </div>
  );
}
