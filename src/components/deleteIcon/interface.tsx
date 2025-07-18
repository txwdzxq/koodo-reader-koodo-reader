import Book from "../../models/Book";
import BookmarkModel from "../../models/Bookmark";
import NoteModel from "../../models/Note";
export interface DeleteIconProps {
  bookmarks: BookmarkModel[];
  notes: NoteModel[];
  mode: string;
  index: number;
  tagName: string;
  isReading: boolean;
  itemKey: string;
  handleFetchNotes: () => void;
  handleFetchBookmarks: () => void;
  renderHighlighters: () => void;
  handleShowDelete: (Deletekey: string) => void;
  t: (title: string) => string;
  handleShowBookmark: (isShowBookmark: boolean) => void;
  handleChangeTag: (index: number) => void;
  htmlBook: any;
  currentBook: Book;
}
export interface DeleteIconStates {
  deleteIndex: number;
  isOpenDelete: boolean;
}
