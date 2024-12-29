"use client";
import useFileStore from "@/lib/store/files";
import { Toggle } from "@/components/ui/toggle";
import { Checkbox } from "@/components/ui/checkbox";
import useModeStore from "@/lib/store/mode";
import useSearchStore from "@/lib/store/search";

export default function FileTree() {
  const {
    files,
    setSelectedFile,
    selectedFile,
    setCheckedFiles,
    checkedFiles,
  } = useFileStore();
  const { mode } = useModeStore();
  const { search } = useSearchStore();

  async function handleToggle(
    pressed: boolean,
    file: { name: string; file: File },
  ) {
    if (pressed) {
      setSelectedFile({ name: file.name, file: file.file, tags: null });
    } else {
      setSelectedFile(null);
    }
  }

  function handleSearch(file: { name: string; file: File }) {
    return file.name.toLowerCase().includes(search.toLowerCase());
  }

  console.log(checkedFiles);

  return search !== ""
    ? files.map((file) => {
        if (handleSearch(file)) {
          return (
            <div key={file.name} className="mx-4 flex items-center gap-2">
              {mode.checkbox && (
                <Checkbox
                  onChange={(e) => {
                    if (e) {
                      setCheckedFiles([
                        ...checkedFiles,
                        { name: file.name, file: file.file, tags: null },
                      ]);
                    } else {
                      setCheckedFiles(
                        checkedFiles.filter((f) => f.name !== file.name),
                      );
                    }
                  }}
                />
              )}
              <Toggle
                isSelected={selectedFile?.name === file.name}
                onChange={(pressed) => handleToggle(pressed, file)}
                className="motion-preset-slide-down-sm h-fit w-full cursor-pointer select-none justify-normal px-2 py-1 text-left text-sm text-foreground"
              >
                {file.name}
              </Toggle>
            </div>
          );
        }
      })
    : files.map((file) => {
        return (
          <div key={file.name} className="mx-4 flex items-center gap-2">
            {mode.checkbox && (
              <Checkbox
                onChange={(e) => {
                  if (e) {
                    setCheckedFiles([
                      ...checkedFiles,
                      { name: file.name, file: file.file, tags: null },
                    ]);
                  } else {
                    setCheckedFiles(
                      checkedFiles.filter((f) => f.name !== file.name),
                    );
                  }
                }}
              />
            )}
            <Toggle
              isSelected={selectedFile?.name === file.name}
              onChange={(pressed) => {
                handleToggle(pressed, file).catch(console.error);
              }}
              className="motion-preset-slide-down-sm h-fit w-full cursor-pointer select-none justify-normal px-2 py-1 text-left text-sm text-foreground"
            >
              {file.name}
            </Toggle>
          </div>
        );
      });
}
