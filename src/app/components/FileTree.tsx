"use client";

import { Collection } from "react-aria-components";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Tree,
  TreeItem,
  TreeItemContent,
  TreeItemExpandButton,
  TreeItemInfoButton,
} from "@/components/ui/tree";

const items = [
  {
    id: 1,
    title: "Documents",
  },
];

export default function FileTree() {
  return (
    <Tree
      className="w-full px-8"
      aria-label="Files"
      selectionMode="multiple"
      items={items}
    >
      {function renderItem(item) {
        return (
          <TreeItem textValue={item.title}>
            <TreeItemContent>
              <Checkbox slot="selection" />
              <p className="cursor-default select-none">{item.title}</p>
              {/* <TreeItemInfoButton /> */}
            </TreeItemContent>
            {/* <Collection items={item.children}>{renderItem}</Collection> */}
          </TreeItem>
        );
      }}
    </Tree>
  );
}
