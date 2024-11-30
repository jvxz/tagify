import useFileStore from "@/lib/store/files";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

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
      <ImageIcon className="size-16 text-border" />
    </div>
  );
}
