import { JollySelect, SelectItem } from "@/components/ui/select";

export default function FileEditorPanelModeDropdown() {
  return (
    <JollySelect
      className="w-[200px]"
      isRequired
      placeholder="Basic"
      defaultSelectedKey="basic"
      //   items={["Basic", "Extended", "Raw"]}
    >
      <SelectItem key="basic">Basic</SelectItem>
      <SelectItem key="extended">Extended</SelectItem>
      <SelectItem key="raw">Raw</SelectItem>
    </JollySelect>
  );
}
