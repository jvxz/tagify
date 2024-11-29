"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Tree, TreeItem, TreeItemContent } from "@/components/ui/tree";
import useFileStore from "@/lib/store/files";

// const items = [
//   {
//     id: 1,
//     title: "Documents",
//   },
// ];

export default function FileTree() {
  const { files } = useFileStore();
  if (files.length > 0)
    return (
      <Tree
        className="w-full px-8"
        aria-label="Files"
        selectionMode="multiple"
        items={files}
      >
        {function renderItem(item) {
          return (
            <TreeItem textValue={item.name}>
              <TreeItemContent>
                <Checkbox slot="selection" />
                <p className="cursor-default select-none">{item.name}</p>
                {/* <TreeItemInfoButton /> */}
              </TreeItemContent>
              {/* <Collection items={item.children}>{renderItem}</Collection> */}
            </TreeItem>
          );
        }}
      </Tree>
    );
  if (files.length === 0)
    return (
      <div className="flex h-full flex-1 items-center justify-center">
        <p className="text-sm text-muted-foreground">no files loaded</p>
      </div>
    );
}
