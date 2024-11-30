import { create } from 'zustand'
import { type ID3Tag } from 'node_modules/@catamphetamine/id3js/lib/reader/id3Tag';

interface FileState {
    files: {
        name: string;
        file: File;
    }[]
    selectedFile: { name: string; file: File; tags: ID3Tag | null } | null
    addFile: (file: { name: string; file: File }) => void;
    addFiles: (files: { name: string; file: File }[]) => void;
    setSelectedFile: (file: { name: string; file: File; tags: ID3Tag | null }) => void;
}

const useFileStore = create<FileState>((set) => ({
    files: [],
    selectedFile: null,
    addFile: (file) => set((state) => ({ files: [...state.files, file] })),
    addFiles: (files) => set((state) => ({ files: [...state.files, ...files] })),
    setSelectedFile: (file) => set(() => ({ selectedFile: file })),
}));

export default useFileStore
