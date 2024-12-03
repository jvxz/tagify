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
        <div className="flex gap-2">
          {selectedFile && (
            <p>
              {selectedFile?.tags?.format?.duration &&
                formatDuration(selectedFile.tags.format.duration)}{" "}
              —{" "}
              {selectedFile?.tags?.format.bitrate &&
                formatBitrate(selectedFile.tags.format.bitrate)}{" "}
              —{" "}
              {selectedFile?.tags?.format.sampleRate &&
                `${selectedFile.tags.format.sampleRate} Hz`}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Select
            defaultSelectedKey="Basic"
            className="w-[200px]"
            placeholder="Select an animal"
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectPopover>
              <SelectListBox>
                <SelectItem key="basic">Basic</SelectItem>
                <SelectItem key="extended">Extended</SelectItem>
                <SelectItem key="raw">Raw</SelectItem>
              </SelectListBox>
            </SelectPopover>
          </Select>
        </div>
      </div>
      <FileEditorPanelForm />
    </div>
  );
}
