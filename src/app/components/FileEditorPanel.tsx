"use client";
import useFileStore from "@/lib/store/files";

export default function FileEditorPanel() {
  const { selectedFile } = useFileStore();

  return (
    <div className="p-8">
      <p className="text-4xl font-bold">{selectedFile}</p>
    </div>
  );
}
