import { create } from 'zustand'

interface ModeState {
    mode: {
        search: boolean;
        checkbox: boolean;
        edited: boolean;
        saving: boolean;
    }

    setMode: (mode: {
        search: boolean;
        checkbox: boolean;
        edited: boolean;
        saving: boolean;
    }) => void;
}

const useModeStore = create<ModeState>()((set) => ({
    mode: {
        search: false,
        checkbox: false,
        edited: false,
        saving: false,
    },
    setMode: (mode) => set({ mode }),
}))

export default useModeStore