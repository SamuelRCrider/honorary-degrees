import { create } from "zustand";

interface DegreeState {
  name: string;
  title: string;
  description: string;
  university: string;
  date: string;
  trustee: string;
  setName: (name: string) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setTrustee: (trustee: string) => void;
  reset: () => void;
}

export const useDegreeStore = create<DegreeState>((set) => ({
  name: "",
  title: "",
  description: "",
  university: "Margarita Tech",
  date: new Date().toISOString().split("T")[0],
  trustee: "",
  setName: (name) => set({ name }),
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setTrustee: (trustee) => set({ trustee }),
  reset: () =>
    set({
      name: "",
      title: "",
      description: "",
      university: "Margarita Tech",
      date: new Date().toISOString().split("T")[0],
      trustee: "",
    }),
}));
