import { create } from 'zustand'
import { type MP3TagTags } from 'mp3tag.js/types/tags';

interface FileState {
    files: {
        name: string;
        file: File;
    }[]
    selectedFile: { name: string; file: File; tags: MP3TagTags | undefined } | null
    addFile: (file: { name: string; file: File }) => void;
    addFiles: (files: { name: string; file: File }[]) => void;
    setSelectedFile: (file: { name: string; file: File; tags: MP3TagTags | undefined }) => void;
}

const useFileStore = create<FileState>((set) => ({
    files: [],
    selectedFile: null,
    addFile: (file) => set((state) => ({ files: [...state.files, file] })),
    addFiles: (files) => set((state) => ({ files: [...state.files, ...files] })),
    setSelectedFile: (file) => set(() => ({ selectedFile: file })),
}));

export default useFileStore
