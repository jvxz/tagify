import { create } from 'zustand'
import { type IAudioMetadata } from 'music-metadata';

interface FileState {
    files: {
        name: string;
        file: File;
    }[]
    selectedFile: { name: string; file: File; tags: IAudioMetadata | null } | null
    addFile: (file: { name: string; file: File }) => void;
    addFiles: (files: { name: string; file: File }[]) => void;
    setSelectedFile: (file: { name: string; file: File; tags: IAudioMetadata | null } | null) => void;
}

const useFileStore = create<FileState>((set) => ({
    files: [],
    selectedFile: null,
    addFile: (file) => set((state) => ({ files: [...state.files, file] })),
    addFiles: (files) => set((state) => ({ files: [...state.files, ...files] })),
    setSelectedFile: (file) => set(() => ({ selectedFile: file })),
}));

export default useFileStore
