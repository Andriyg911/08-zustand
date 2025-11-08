import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { NoteDraft } from "@/types/note";

interface DraftState {
  draft: NoteDraft;
  setDraft: (note: Partial<NoteDraft>) => void;
  clearDraft: () => void;
}

const initialDraft: NoteDraft = {
  title: "",
  content: "",
  tag: "Todo",
};

export const useNoteStore = create<DraftState>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) =>
        set((prevState) => ({
          draft: { ...prevState.draft, ...note },
        })),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    { name: "note-draft" }
  )
);