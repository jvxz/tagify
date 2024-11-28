import FileTree from "./components/FileTree";
import ThemeToggle from "./components/ThemeToggle";

export default function Page() {
  return (
    <main className="flex h-screen flex-row bg-background">
      <div className="h-full w-[300px] border-r border-border p-4 shadow-md">
        <ThemeToggle />
        <FileTree />
      </div>
      <div className="flex h-full flex-1 flex-col"></div>
    </main>
  );
}
