import { create } from 'zustand';

interface Llanta {
    ancho: number;
    altura: number;
    rin: number;
    marcaimg: string;
    precio: number;
    foto: string;
}

interface LlantasStore {
    llantas: Llanta[] | null;
    llantasToDisplay: Llanta[] | null;
    setLlantas: (llantas: Llanta[] | null) => void;
    setFilteredLlantas: (llantasToDisplay: Llanta[] | null) => void;
}

const useLlantasStore = create<LlantasStore>((set) => ({
    llantas: null,
    llantasToDisplay: null,
    setLlantas: (llantas) => set({ llantas }),
    setFilteredLlantas: (llantasToDisplay) => set({ llantasToDisplay }),
}));

export default useLlantasStore;