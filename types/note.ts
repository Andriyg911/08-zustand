export interface Note {
  id: string;
  title: string;
  content: string;
  tag: Tag;
  createdAt: string;
  updatedAt: string;
}

export type Tag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export const tagList: Tag[] = [
  "Todo",
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
];

// Тип для чернетки (без id, дат)
export interface NoteDraft {
  title: string;
  content: string;
  tag: Tag;
}