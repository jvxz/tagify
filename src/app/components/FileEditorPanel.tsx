"use client";
import useFileStore from "@/lib/store/files";
import { Button } from "@/components/ui/button";
import FileEditorPanelForm from "./FileEditorPanelForm";

export default function FileEditorPanel() {
  const { selectedFile } = useFileStore();

  return (
    <div className="flex flex-col">
      <div className="flex h-16 items-center justify-between border-b border-border/50 p-4">
        <p className="text-xl font-bold">
          {selectedFile?.name ? selectedFile.name : "no file selected"}
        </p>
        <div className="flex items-center gap-2">
          <Button isDisabled={!selectedFile} variant="destructive" size="sm">
            discard
          </Button>
          <Button isDisabled={!selectedFile} size="sm">
            save
          </Button>
        </div>
      </div>
      <FileEditorPanelForm />
    </div>
  );
}
