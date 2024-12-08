import Image from "next/image";
import { Download, ImageDown, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type IAudioMetadata } from "music-metadata";
import FileSelect from "./FileSelect";
import { TooltipButton } from "@/components/ui/tooltip-button";
import { saveAs } from "file-saver";

export default function FileEditorPanelFormImage({
  data,
}: {
  data: IAudioMetadata | null | undefined;
}) {
  if (data?.common?.picture?.[0]?.data != null)
    return (
      <div className="group relative">
        <Image
          src={`data:image/jpeg;base64,${Buffer.from(data.common.picture[0].data).toString("base64")}`}
          blurDataURL={`data:image/jpeg;base64,${Buffer.from(data.common.picture[0].data).toString("base64")}`}
          alt={data.common.album ?? "album cover"}
          width={350}
          height={350}
          className="motion-preset-fade-sm rounded-md border border-border shadow-md"
        />
        <div className="absolute left-0 top-0 z-10 flex size-full items-center justify-center gap-2 rounded-md bg-background/50 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
          <FileSelect mode="image" />
          <TooltipButton
            onPress={() => {
              if (data?.common.picture?.[0]?.data)
                saveAs(
                  new Blob([data.common.picture[0].data], {
                    type: "image/png",
                  }),
                  `${data.common.artist} - ${data.common.album}.png`,
                );
            }}
            tooltip="Download cover"
          >
            <ImageDown className="size-5" />
          </TooltipButton>
        </div>
      </div>
    );
  return (
    <div className="grid aspect-square w-full place-items-center rounded-md border-2 border-border">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Button
        isDisabled={!data}
        size="icon"
        variant="ghost"
        className="size-16 p-1"
      >
        <ImagePlus className="size-16 text-border" />
      </Button>
    </div>
  );
}
