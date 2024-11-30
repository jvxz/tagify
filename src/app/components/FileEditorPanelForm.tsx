import useFileStore from "@/lib/store/files";

export default function FileEditorPanelForm() {
  const { selectedFile } = useFileStore();

  return <div>{selectedFile?.tags?.common.title}</div>;
}
