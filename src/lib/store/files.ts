import { create } from 'zustand'
import { type Tags } from '../types';

interface FileState {
    files: {
        name: string;
        file: File;
    }[]
    selectedFile: { name: string; file: File; tags: Tags | null } | null
    addFile: (file: { name: string; file: File }) => void;
    addFiles: (files: { name: string; file: File }[]) => void;
    removeFile: (file: { name: string; file: File }) => void;
    removeFiles: (files: { name: string; file: File }[]) => void;
    clearFiles: () => void;
    setSelectedFile: (file: { name: string; file: File; tags: Tags | null } | null) => void;
}

const useFileStore = create<FileState>((set) => ({
    files: [],
    selectedFile: null,
    addFile: (file) => set((state) => ({ files: [...state.files, file] })),
    addFiles: (files) => set((state) => ({ files: [...state.files, ...files] })),
    removeFile: (file) => set((state) => ({ files: state.files.filter(f => f.name !== file.name) })),
    removeFiles: (files) => set((state) => ({ files: state.files.filter(f => !files.includes(f)) })),
    clearFiles: () => set(() => ({ files: [] })),
    setSelectedFile: (file) => set(() => ({ selectedFile: file })),
}));

export default useFileStore
