"use client";
import useFileStore from "@/lib/store/files";
import FileEditorPanelForm from "./FileEditorPanelForm";
import FileEditorPanelModeArrows from "./FileEditorPanelModeArrows";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import getTags from "@/lib/get-tags";
import { Skeleton } from "@/components/ui/skeleton";
export default function FileEditorPanel() {
  const { selectedFile } = useFileStore();

  const { data, isLoading } = useQuery({
    queryKey: ["tags", selectedFile?.name],
    queryFn: () => (selectedFile ? getTags(selectedFile.file) : null),
    enabled: !!selectedFile,
  });

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
        {isLoading && <Skeleton className="h-6 w-full" />}
        {selectedFile && !isLoading && (
          <p className="motion-preset-fade-sm flex-1">{selectedFile.name}</p>
        )}
        {!selectedFile && <p className="flex-1">no file selected</p>}
        {selectedFile && !isLoading && (
          <div className="flex gap-2">
            <Badge variant="outline">
              {data?.format.duration && formatDuration(data.format.duration)}
            </Badge>
            <Badge variant="outline">
              {data?.format.bitrate && formatBitrate(data.format.bitrate)}
            </Badge>
            <Badge variant="outline">
              {data?.format.sampleRate && `${data.format.sampleRate} hz`}
            </Badge>
          </div>
        )}

        <div className="flex items-center gap-2">
          <FileEditorPanelModeArrows />
        </div>
      </div>
      <FileEditorPanelForm data={data} />
    </div>
  );
}
