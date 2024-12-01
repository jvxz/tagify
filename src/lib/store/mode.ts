import { create } from 'zustand'

interface ModeState {
    mode: {
        search: boolean;
        checkbox: boolean;
    }

    setMode: (mode: {
        search: boolean;
        checkbox: boolean;
    }) => void;
}

const useModeStore = create<ModeState>()((set) => ({
    mode: {
        search: false,
        checkbox: false,
    },
    setMode: (mode) => set({ mode }),
}))

export default useModeStore