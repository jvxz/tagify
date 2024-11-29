import FileTree from "./FileTree";
import FileTreeBar from "./FileTreeBar";

export default function FileTreePanel() {
  return (
    <div className="flex flex-col">
      <div className="flex h-16 items-center justify-between border-b border-border px-4">
        <p className="text-lg font-bold">tagify</p>
        <p>v0.0.1</p>
      </div>
      <FileTreeBar />
      <div className="flex flex-col">
        <FileTree />
      </div>
    </div>
  );
}
