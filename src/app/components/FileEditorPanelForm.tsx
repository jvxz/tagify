import { JollyTextField } from "@/components/ui/textfield";
import useFileStore from "@/lib/store/files";
import { useEffect, useRef } from "react";
import { Form } from "react-aria-components";
import FileEditorPanelFormImage from "./FileEditorPanelFormImage";
import useModeStore from "@/lib/store/mode";
import { type IAudioMetadata } from "music-metadata";
import { type Tags } from "@/lib/types";

export default function FileEditorPanelForm({
  data,
}: {
  data: IAudioMetadata | null | undefined;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const { selectedFile, setSelectedFile } = useFileStore();
  const { mode, setMode } = useModeStore();
  const disabled = !selectedFile;

  useEffect(() => {
    if (selectedFile) {
      setMode({
        ...mode,
        edited: false,
      });

      const genre: string | undefined = data?.common.genre?.[0];
      const comments: string | undefined = data?.common.comment?.[0]?.text;
      const composer: string | undefined = data?.common.composer?.[0];

      setSelectedFile({
        ...selectedFile,
        tags: {
          artist: data?.common.artist ?? "",
          title: data?.common.title ?? "",
          albumArtist: data?.common.albumartist ?? "",
          album: data?.common.album ?? "",
          trackNumber: data?.common.track.no ?? 0,
          totalTracks: data?.common.track.of ?? 0,
          discNumber: data?.common.disk.no ?? 0,
          totalDiscs: data?.common.disk.of ?? 0,
          genre: genre ?? "",
          comments: comments ?? "",
          composer: composer ?? "",
          grouping: data?.common.grouping ?? "",
          year: data?.common.year ?? 0,
        },
      });
    } else {
      setSelectedFile(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, setMode]);

  function handleChange(name: string, value: string) {
    if (!selectedFile) return;

    setSelectedFile({
      name: selectedFile.name,
      file: selectedFile.file,
      tags: {
        ...selectedFile.tags,
        [name]: value,
      } as Tags,
    });

    setMode({
      ...mode,
      edited: true,
    });
  }

  return (
    <Form
      ref={formRef}
      className="motion-preset-fade-sm flex w-full flex-row gap-4 p-4"
      onSubmit={() => console.log(selectedFile)}
    >
      <div className="flex w-full flex-col gap-4">
        <div className="flex gap-4 *:flex-1">
          <JollyTextField
            isDisabled={disabled}
            name="artist"
            label="artist"
            value={selectedFile?.tags?.artist ?? ""}
            onChange={(value) => handleChange("artist", value)}
          />
          <JollyTextField
            isDisabled={disabled}
            name="title"
            label="title"
            value={selectedFile?.tags?.title ?? ""}
            onChange={(value) => handleChange("title", value)}
          />
        </div>
        <div className="flex gap-4 *:flex-1">
          <JollyTextField
            isDisabled={disabled}
            name="album artist"
            label="album artist"
            value={selectedFile?.tags?.albumArtist ?? ""}
            onChange={(value) => handleChange("albumArtist", value)}
          />
          <JollyTextField
            isDisabled={disabled}
            name="album"
            label="album"
            value={selectedFile?.tags?.album ?? ""}
            onChange={(value) => handleChange("album", value)}
          />
        </div>

        <JollyTextField
          className="max-h-[350px]"
          isDisabled={disabled}
          onChange={(value) => handleChange("comments", value)}
          textArea
          name="comments"
          label="comments"
          value={selectedFile?.tags?.comments ?? ""}
        />
      </div>
      <div className="flex flex-col gap-4">
        <FileEditorPanelFormImage data={data} />
        <JollyTextField
          isDisabled={disabled}
          onChange={(value) => handleChange("year", value)}
          name="year"
          label="year"
          value={selectedFile?.tags?.year?.toString() ?? ""}
        />
        <div className="flex gap-4">
          <JollyTextField
            isDisabled={disabled}
            onChange={(value) => handleChange("trackNumber", value)}
            name="track number"
            label="track number"
            value={selectedFile?.tags?.trackNumber?.toString() ?? ""}
          />
          <JollyTextField
            isDisabled={disabled}
            onChange={(value) => handleChange("totalTracks", value)}
            name="total tracks"
            label="total tracks"
            value={selectedFile?.tags?.totalTracks?.toString() ?? ""}
          />
        </div>
        <JollyTextField
          isDisabled={disabled}
          onChange={(value) => handleChange("genre", value)}
          name="genre"
          label="genre"
          value={selectedFile?.tags?.genre ?? ""}
        />
        <div className="flex gap-4">
          <JollyTextField
            isDisabled={disabled}
            onChange={(value) => handleChange("discNumber", value)}
            name="disk number"
            label="disk number"
            value={selectedFile?.tags?.discNumber?.toString() ?? ""}
          />
          <JollyTextField
            isDisabled={disabled}
            onChange={(value) => handleChange("totalDiscs", value)}
            name="total disks"
            label="total disks"
            value={selectedFile?.tags?.totalDiscs?.toString() ?? ""}
          />
        </div>
      </div>
    </Form>
  );
}
