import { JollyTextField } from "@/components/ui/textfield";
import useFileStore from "@/lib/store/files";
import { useEffect, useState } from "react";
import { Form } from "react-aria-components";

export default function FileEditorPanelForm() {
  const [formData, setFormData] = useState<{
    artist: string;
    title: string;
  }>({
    artist: "",
    title: "",
  });
  const { selectedFile } = useFileStore();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
  }

  useEffect(() => {
    if (selectedFile) {
      setFormData({
        artist: selectedFile.tags?.common.artist ?? "",
        title: selectedFile.tags?.common.title ?? "",
      });
    }
  }, [selectedFile]);

  return (
    <Form className="flex flex-col p-4" onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <JollyTextField name="artist" label="artist" value={formData.artist} />
        <JollyTextField name="title" label="title" value={formData.title} />
      </div>
    </Form>
  );
}
