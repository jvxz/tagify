import { Button } from "@/components/ui/button";
import useFileStore from "@/lib/store/files";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function FileEditorPanelModeArrows() {
  const { selectedFile, files, setSelectedFile } = useFileStore();

  function getNextFile() {
    if (selectedFile) {
      const index = files.findIndex((e) => {
        return e.name === selectedFile.name;
      });
      if (index >= 0 && index + 1 < files.length) {
        const nextFile = index + 1;
        if (files[nextFile]) {
          setSelectedFile({
            name: files[nextFile].name,
            file: files[nextFile].file,
            tags: null,
          });
        }
      }
    }
  }

  function getPreviousFile() {
    if (selectedFile) {
      const index = files.findIndex((e) => {
        return e.name === selectedFile.name;
      });
      if (index >= 0 && index + 1 <= files.length) {
        const previousFile = index - 1;
        if (files[previousFile]) {
          setSelectedFile({
            name: files[previousFile].name,
            file: files[previousFile].file,
            tags: null,
          });
        }
      }
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        onPress={getPreviousFile}
        isDisabled={!selectedFile}
        variant="outline"
        size="icon"
      >
        <ArrowLeft />
      </Button>
      <Button
        onPress={getNextFile}
        isDisabled={!selectedFile}
        variant="outline"
        size="icon"
      >
        <ArrowRight />
      </Button>
    </div>
  );
}
