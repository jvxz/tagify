"use client";
import useFileStore from "@/lib/store/files";
import { Button } from "@/components/ui/button";
import FileEditorPanelForm from "./FileEditorPanelForm";
import useModeStore from "@/lib/store/mode";
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "react-aria-components";
import FileEditorPanelModeDropdown from "./FileEditorPanelModeDropdown";
import { Badge } from "@/components/ui/badge";
export default function FileEditorPanel() {
  const { selectedFile } = useFileStore();
  const { mode } = useModeStore();

  function formatDuration(duration: number) {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  function formatBitrate(bitrate: number) {
    return `${Math.round(bitrate / 1000)} kbps`;
  }

  return (
    <div className="flex flex-col">
      <div className="flex h-16 items-center gap-4 border-b border-border/50 p-4">
        <p className="flex-1 text-xl font-bold">
          {selectedFile?.name ? selectedFile.name : "no file selected"}
        </p>
        {selectedFile && (
          <div className="flex gap-2">
            <Badge variant="outline">
              {selectedFile?.tags?.format?.duration &&
                formatDuration(selectedFile.tags.format.duration)}
            </Badge>
            <Badge variant="outline">
              {selectedFile?.tags?.format.bitrate &&
                formatBitrate(selectedFile.tags.format.bitrate)}
            </Badge>
            <Badge variant="outline">
              {selectedFile?.tags?.format.sampleRate &&
                `${selectedFile.tags.format.sampleRate} hz`}
            </Badge>
          </div>
        )}

        <div className="flex items-center gap-2">
          <FileEditorPanelModeDropdown />
        </div>
      </div>
      <FileEditorPanelForm />
    </div>
  );
}
