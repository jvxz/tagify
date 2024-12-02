import { JollyTextField } from "@/components/ui/textfield";
import useFileStore from "@/lib/store/files";
import { useEffect, useState } from "react";
import { Form } from "react-aria-components";
import FileEditorPanelFormImage from "./FileEditorPanelFormImage";

export default function FileEditorPanelForm() {
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
  });
  const { selectedFile } = useFileStore();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
  }

  useEffect(() => {
    if (selectedFile) {
      const genre = () => {
        if (Array.isArray(selectedFile.tags?.common.genre)) {
          return selectedFile.tags?.common.genre.join(", ");
        }
        return selectedFile.tags?.common.genre;
      };

      const comments = () => {
        if (Array.isArray(selectedFile.tags?.common.comment)) {
          return selectedFile.tags?.common.comment
            .map((comment) => comment.text)
            .join(", ");
        }
        return selectedFile.tags?.common.comment;
      };

      setFormData({
        artist: selectedFile.tags?.common.artist ?? "",
        title: selectedFile.tags?.common.title ?? "",
        albumArtist: selectedFile.tags?.common.albumartist ?? "",
        album: selectedFile.tags?.common.album ?? "",
        trackNumber: selectedFile.tags?.common.track?.no ?? 0,
        totalTracks: selectedFile.tags?.common.track?.of ?? 0,
        totalDiscs: selectedFile.tags?.common.disk.of ?? 0,
        genre: genre,
        discNumber: selectedFile.tags?.common.disk.no ?? 0,
        comments: comments,
      });
    }
  }, [selectedFile]);

  function handleChange(e: string) {
    setFormData({ ...formData, [e]: e });
  }

  return (
    <Form className="flex w-full flex-row gap-4 p-4" onSubmit={handleSubmit}>
      <div className="flex w-full flex-col gap-4">
        <div className="flex gap-4 *:flex-1">
          <JollyTextField
            name="artist"
            label="artist"
            value={formData.artist}
          />
          <JollyTextField name="title" label="title" value={formData.title} />
        </div>
        <div className="flex gap-4 *:flex-1">
          <JollyTextField
            name="album artist"
            label="album artist"
            value={formData.albumArtist}
          />
          <JollyTextField name="album" label="album" value={formData.album} />
        </div>
        <div className="grid w-full grid-cols-2">
          <JollyTextField name="composer" label="composer" />
          <div></div>
        </div>
        <JollyTextField
          textArea
          name="comments"
          label="comments"
          value={formData.comments()}
        />
      </div>
      <div className="flex flex-col gap-4">
        <FileEditorPanelFormImage />
        <div className="flex gap-4">
          <JollyTextField
            name="track number"
            label="track number"
            value={formData.trackNumber.toString()}
          />
          <JollyTextField
            name="total tracks"
            label="total tracks"
            value={formData.totalTracks.toString()}
          />
        </div>
        <JollyTextField name="genre" label="genre" value={formData.genre()} />
        <div className="flex gap-4">
          <JollyTextField
            name="disk number"
            label="disk number"
            value={formData.discNumber.toString()}
          />
          <JollyTextField
            onChange={handleChange}
            name="total disks"
            label="total disks"
            value={formData.totalDiscs.toString()}
          />
        </div>
      </div>
    </Form>
  );
}
