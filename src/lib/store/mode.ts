import { create } from 'zustand'

interface ModeState {
    mode: {
        search: boolean;
        checkbox: boolean;
        edited: boolean;
    }

    setMode: (mode: {
        search: boolean;
        checkbox: boolean;
        edited: boolean;
    }) => void;
}

const useModeStore = create<ModeState>()((set) => ({
    mode: {
        search: false,
        checkbox: false,
        edited: false,
    },
    setMode: (mode) => set({ mode }),
}))

export default useModeStore