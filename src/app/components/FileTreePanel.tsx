import FileTree from "./FileTree";
import FileTreeBar from "./FileTreeToolbar";

export default function FileTreePanel() {
  return (
    <div className="flex flex-col">
      <div className="flex h-16 items-center justify-between border-b border-border/50 px-4">
        <p className="text-xl font-bold">tagify</p>
        <p>v0.0.1</p>
      </div>
      <FileTreeBar />
      <div className="flex flex-col">
        <FileTree />
      </div>
    </div>
  );
}
