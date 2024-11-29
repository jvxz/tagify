import { create } from 'zustand'

interface File {
    id: string;
    name: string;
}

interface FileState {
    files: File[]
    selectedFile: string | null
    addFile: (file: File) => void;
    addFiles: (files: File[]) => void;
}

const useFileStore = create<FileState>((set) => ({
    files: [],
    selectedFile: null,
    addFile: (file) => set((state) => ({ files: [...state.files, file] })),
    addFiles: (files) => set((state) => ({ files: [...state.files, ...files] })),
}));

export default useFileStore
