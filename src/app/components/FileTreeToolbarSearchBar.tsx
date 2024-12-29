"use client";
import { Input } from "@/components/ui/input";
import useFileStore from "@/lib/store/files";
import useSearchStore from "@/lib/store/search";
import { useEffect, useRef } from "react";

export default function FileTreeToolbarSearchBar() {
  const { files } = useFileStore();
  const { setSearch } = useSearchStore();
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "p" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        e.stopPropagation();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", down);

    return () => {
      document.removeEventListener("keydown", down);
    };
  }, []);

  return (
    <Input
      ref={inputRef}
      placeholder="Search"
      disabled={files.length === 0}
      className="h-10"
      onChange={handleSearch}
    />
  );
}
