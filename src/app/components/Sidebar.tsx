import { Button } from "@/components/ui/button";
import {
  SidebarContent,
  SidebarProvider,
  Sidebar as SidebarUI,
} from "@/components/ui/sidebar";

export default function Sidebar() {
  return (
    <SidebarUI>
      <SidebarContent>
        <Button>test</Button>
        <Button>test</Button>
      </SidebarContent>
    </SidebarUI>
  );
}
