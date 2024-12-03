import { JollyTextField } from "@/components/ui/textfield";
import useFileStore from "@/lib/store/files";
import { useEffect, useRef, useState } from "react";
import { Form } from "react-aria-components";
import FileEditorPanelFormImage from "./FileEditorPanelFormImage";
import useModeStore from "@/lib/store/mode";
import { Tabs, Tab, TabList } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function FileEditorPanelForm() {
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
  });
  const { selectedFile } = useFileStore();
  const { mode, setMode } = useModeStore();

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

      const composer = () => {
        if (Array.isArray(selectedFile.tags?.common.composer)) {
          return selectedFile.tags?.common.composer.join(", ");
        }
        return selectedFile.tags?.common.composer;
      };

      setFormData({
        artist: selectedFile.tags?.common.artist ?? "",
        title: selectedFile.tags?.common.title ?? "",
        albumArtist: selectedFile.tags?.common.albumartist ?? "",
        album: selectedFile.tags?.common.album ?? "",
        trackNumber: selectedFile.tags?.common.track.no ?? 0,
        totalTracks: selectedFile.tags?.common.track.of ?? 0,
        discNumber: selectedFile.tags?.common.disk.no ?? 0,
        totalDiscs: selectedFile.tags?.common.disk.of ?? 0,
        genre,
        comments,
        composer,
        grouping: selectedFile.tags?.common.grouping ?? "",
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
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile, setMode]);

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
        {/* <Tabs>
          <TabList className="flex *:flex-1" aria-label="Form Type">
            <Tab id="basic">Basic</Tab>
            <Tab id="extended">Extended</Tab>
            <Tab id="raw">Raw</Tab>
          </TabList>
        </Tabs> */}
        <div className="flex gap-4 *:flex-1">
          <JollyTextField
            name="artist"
            label="artist"
            value={formData.artist}
            onChange={(value) => handleChange("artist", value)}
          />
          <JollyTextField
            name="title"
            label="title"
            value={formData.title}
            onChange={(value) => handleChange("title", value)}
          />
        </div>
        <div className="flex gap-4 *:flex-1">
          <JollyTextField
            name="album artist"
            label="album artist"
            value={formData.albumArtist}
            onChange={(value) => handleChange("albumArtist", value)}
          />
          <JollyTextField
            name="album"
            label="album"
            value={formData.album}
            onChange={(value) => handleChange("album", value)}
          />
        </div>
        <JollyTextField
          onChange={(value) => handleChange("composer", value)}
          name="composer"
          label="composer"
          value={formData.composer()}
        />
        <JollyTextField
          onChange={(value) => handleChange("grouping", value)}
          name="grouping"
          label="grouping"
          value={formData.grouping}
        />
        <JollyTextField
          className="max-h-[350px]"
          onChange={(value) => handleChange("comments", value)}
          textArea
          name="comments"
          label="comments"
          value={formData.comments()}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 *:flex-1">
          <Button isDisabled={!mode.edited} size="sm" variant="destructive">
            discard
          </Button>
          <Button isDisabled={!mode.edited} size="sm">
            save
          </Button>
        </div>
        <FileEditorPanelFormImage />
        <div className="flex gap-4">
          <JollyTextField
            onChange={(value) => handleChange("trackNumber", value)}
            name="track number"
            label="track number"
            value={formData.trackNumber.toString()}
          />
          <JollyTextField
            onChange={(value) => handleChange("totalTracks", value)}
            name="total tracks"
            label="total tracks"
            value={formData.totalTracks.toString()}
          />
        </div>
        <JollyTextField
          onChange={(value) => handleChange("genre", value)}
          name="genre"
          label="genre"
          value={formData.genre()}
        />
        <div className="flex gap-4">
          <JollyTextField
            onChange={(value) => handleChange("discNumber", value)}
            name="disk number"
            label="disk number"
            value={formData.discNumber.toString()}
          />
          <JollyTextField
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
