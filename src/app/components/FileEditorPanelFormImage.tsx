import useFileStore from "@/lib/store/files";
import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FileEditorPanelFormImage() {
  const { selectedFile } = useFileStore();

  if (selectedFile?.tags?.common?.picture?.[0]?.data != null)
    return (
      <Image
        src={`data:image/jpeg;base64,${Buffer.from(selectedFile.tags?.common.picture[0].data).toString("base64")}`}
        blurDataURL={`data:image/jpeg;base64,${Buffer.from(selectedFile.tags?.common.picture[0].data).toString("base64")}`}
        alt={selectedFile.tags.common.album ?? "album cover"}
        width={350}
        height={350}
        className="rounded-md shadow-md"
      />
    );
  return (
    <div className="grid aspect-square w-full place-items-center rounded-md border-2 border-border">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Button
        isDisabled={!selectedFile}
        size="icon"
        variant="ghost"
        className="size-16 p-1"
      >
        <ImagePlus className="size-16 text-border" />
      </Button>
    </div>
  );
}
