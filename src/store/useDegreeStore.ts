import { create } from "zustand";

interface DegreeState {
  name: string;
  title: string;
  description: string;
  university: string;
  date: string;
  setName: (name: string) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setUniversity: (university: string) => void;
  setDate: (date: string) => void;
  reset: () => void;
}

export const useDegreeStore = create<DegreeState>((set) => ({
  name: "",
  title: "",
  description: "",
  university: "",
  date: new Date().toISOString().split("T")[0],
  setName: (name) => set({ name }),
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setUniversity: (university) => set({ university }),
  setDate: (date) => set({ date }),
  reset: () =>
    set({
      name: "",
      title: "",
      description: "",
      university: "",
      date: new Date().toISOString().split("T")[0],
    }),
}));
