import { create } from 'zustand'

interface FileState {
    files: string[]
    addFile: (file: string) => void
    addFiles: (files: string[]) => void
}

const useFileStore = create<FileState>((set) => ({
    files: [],
    addFile: (file) => set((state) => ({ files: [...state.files, file] })),
    addFiles: (files) => set((state) => ({ files: [...state.files, ...files] })),
}))

export default useFileStore
