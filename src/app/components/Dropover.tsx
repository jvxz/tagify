"use client";
import { useState, useEffect } from "react";
import useFilesStore from "@/lib/store/files";

export default function DropHandler() {
  const [isDragging, setIsDragging] = useState(false);
  const { addFile } = useFilesStore();

  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isDragging) setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (
        e.clientY <= 0 ||
        e.clientX <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight
      ) {
        setIsDragging(false);
      }
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      console.log(e.dataTransfer?.files);
      if (e.dataTransfer?.files) {
        const items = Array.from(e.dataTransfer.files);
        items.forEach((file) => {
          addFile({ name: file.name, file });
        });
      }
    };

    window.addEventListener("dragover", handleDragOver);
    window.addEventListener("dragleave", handleDragLeave);
    window.addEventListener("drop", handleDrop);

    return () => {
      window.removeEventListener("dragover", handleDragOver);
      window.removeEventListener("dragleave", handleDragLeave);
      window.removeEventListener("drop", handleDrop);
    };
  }, [addFile, isDragging]);

  if (!isDragging) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 transition-all"
      style={{ pointerEvents: "none" }}
    >
      <div className="rounded-lg bg-background p-8 text-center shadow-lg">
        <p className="text-xl font-bold">release to add files</p>
      </div>
    </div>
  );
}
