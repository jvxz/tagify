import { JollyTextField } from "@/components/ui/textfield";
import useFileStore from "@/lib/store/files";
import { useEffect, useRef, useState } from "react";
import { Form } from "react-aria-components";
import FileEditorPanelFormImage from "./FileEditorPanelFormImage";
import useModeStore from "@/lib/store/mode";
import { type IAudioMetadata } from "music-metadata";

export default function FileEditorPanelForm({
  data,
}: {
  data: IAudioMetadata | null | undefined;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<{
    artist: string;
    title: string;
    albumArtist: string;
    album: string;
    trackNumber: number;
    totalTracks: number;
    discNumber: number;
    totalDiscs: number;
    genre: () => string | undefined;
    comments: () => string | undefined;
    composer: () => string | undefined;
    grouping: string;
    year: number;
  }>({
    artist: "",
    title: "",
    albumArtist: "",
    album: "",
    trackNumber: 0,
    totalTracks: 0,
    discNumber: 0,
    totalDiscs: 0,
    genre: () => "",
    comments: () => "",
    composer: () => "",
    grouping: "",
    year: 0,
  });
  const { selectedFile } = useFileStore();
  const { mode, setMode } = useModeStore();
  const disabled = !selectedFile;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
  }

  useEffect(() => {
    if (selectedFile) {
      setMode({
        ...mode,
        edited: false,
      });
      const genre = () => {
        if (Array.isArray(data?.common.genre)) {
          return data?.common.genre.join(", ");
        }
        return data?.common.genre;
      };

      const comments = () => {
        if (Array.isArray(data?.common.comment)) {
          return data?.common.comment.map((comment) => comment.text).join(", ");
        }
        return data?.common.comment;
      };

      const composer = () => {
        if (Array.isArray(data?.common.composer)) {
          return data?.common.composer.join(", ");
        }
        return data?.common.composer;
      };

      setFormData({
        artist: data?.common.artist ?? "",
        title: data?.common.title ?? "",
        albumArtist: data?.common.albumartist ?? "",
        album: data?.common.album ?? "",
        trackNumber: data?.common.track.no ?? 0,
        totalTracks: data?.common.track.of ?? 0,
        discNumber: data?.common.disk.no ?? 0,
        totalDiscs: data?.common.disk.of ?? 0,
        genre,
        comments,
        composer,
        grouping: data?.common.grouping ?? "",
        year: data?.common.year ?? 0,
      });
    } else {
      setFormData({
        artist: "",
        title: "",
        albumArtist: "",
        album: "",
        trackNumber: 0,
        totalTracks: 0,
        discNumber: 0,
        totalDiscs: 0,
        genre: () => undefined,
        comments: () => undefined,
        composer: () => undefined,
        grouping: "",
        year: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, setMode]);

  function handleChange(name: string, value: string) {
    setFormData({
      ...formData,
      [name]: value,
    });
    setMode({
      ...mode,
      edited: true,
    });
  }

  return (
    <Form
      ref={formRef}
      className="flex w-full flex-row gap-4 p-4"
      onSubmit={() => console.log(formData)}
    >
      <div className="motion-preset-fade flex w-full flex-col gap-4">
        <div className="flex gap-4 *:flex-1">
          <JollyTextField
            isDisabled={disabled}
            name="artist"
            label="artist"
            value={formData.artist}
            onChange={(value) => handleChange("artist", value)}
          />
          <JollyTextField
            isDisabled={disabled}
            name="title"
            label="title"
            value={formData.title}
            onChange={(value) => handleChange("title", value)}
          />
        </div>
        <div className="flex gap-4 *:flex-1">
          <JollyTextField
            isDisabled={disabled}
            name="album artist"
            label="album artist"
            value={formData.albumArtist}
            onChange={(value) => handleChange("albumArtist", value)}
          />
          <JollyTextField
            isDisabled={disabled}
            name="album"
            label="album"
            value={formData.album}
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
          value={formData.comments()}
        />
      </div>
      <div className="flex flex-col gap-4">
        <FileEditorPanelFormImage data={data} />
        <JollyTextField
          isDisabled={disabled}
          onChange={(value) => handleChange("year", value)}
          name="year"
          label="year"
          value={formData.year.toString()}
        />
        <div className="flex gap-4">
          <JollyTextField
            isDisabled={disabled}
            onChange={(value) => handleChange("trackNumber", value)}
            name="track number"
            label="track number"
            value={formData.trackNumber.toString()}
          />
          <JollyTextField
            isDisabled={disabled}
            onChange={(value) => handleChange("totalTracks", value)}
            name="total tracks"
            label="total tracks"
            value={formData.totalTracks.toString()}
          />
        </div>
        <JollyTextField
          isDisabled={disabled}
          onChange={(value) => handleChange("genre", value)}
          name="genre"
          label="genre"
          value={formData.genre()}
        />
        <div className="flex gap-4">
          <JollyTextField
            isDisabled={disabled}
            onChange={(value) => handleChange("discNumber", value)}
            name="disk number"
            label="disk number"
            value={formData.discNumber.toString()}
          />
          <JollyTextField
            isDisabled={disabled}
            onChange={(value) => handleChange("totalDiscs", value)}
            name="total disks"
            label="total disks"
            value={formData.totalDiscs.toString()}
          />
        </div>
      </div>
    </Form>
  );
}
