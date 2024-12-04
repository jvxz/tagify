import { Toggle } from "@/components/ui/toggle";
import useFileStore from "@/lib/store/files";
import useModeStore from "@/lib/store/mode";
import { SquareMousePointer } from "lucide-react";

export default function FileTreeToolbarCheckboxToggle() {
  const { files } = useFileStore();
  const { mode, setMode } = useModeStore();

  return (
    <Toggle
      isDisabled={files.length === 0}
      variant="outline"
      isSelected={mode.checkbox}
      className="aspect-square ring-foreground transition-all data-[selected]:ring-2"
      onChange={(e) => setMode({ ...mode, checkbox: e })}
    >
      <SquareMousePointer className="size-5" />
    </Toggle>
  );
}
