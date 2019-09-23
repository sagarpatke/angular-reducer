export enum TodoAppActionEnum {
  EDIT_TITLE = "@@TodoApp/EDIT_TITLE",
  ADD_ITEM = "@@TodoApp/ADD_ITEM",
  UPDATE_ITEM = "@@TodoApp/UPDATE_ITEM",
  DELETE_ITEM = "@@TodoApp/DELETE_ITEM",
  MARK_ITEM_COMPLETE = "@@TodoApp/MARK_ITEM_COMPLETE",
  MARK_ITEM_INCOMPLETE = "@@TodoApp/MARK_ITEM_INCOMPLETE",
  INIT = "@@TodoApp/INIT"
}

export interface TodoAppActionType {
  type: TodoAppActionEnum,
  payload: any
}

export const editTitle: (newTitle: string) => TodoAppActionType = (newTitle: string) => ({type: TodoAppActionEnum.EDIT_TITLE, payload: {newTitle}});
export const addItem: (newItemText: string) => TodoAppActionType = (newItemText: string) => ({type: TodoAppActionEnum.ADD_ITEM, payload: {newItemText}});
export const updateItem: (itemId: string, newText: string) => TodoAppActionType = (itemId: string, newText: string) => ({type: TodoAppActionEnum.UPDATE_ITEM, payload: {itemId, newText}});
export const deleteItem: (itemId: string) => TodoAppActionType = (itemId: string) => ({type: TodoAppActionEnum.DELETE_ITEM, payload: {itemId}});
export const markItemComplete: (itemId: string) => TodoAppActionType = (itemId: string) => ({type: TodoAppActionEnum.MARK_ITEM_COMPLETE, payload: {itemId}});
export const markItemIncomplete: (itemId: string) => TodoAppActionType = (itemId: string) => ({type: TodoAppActionEnum.MARK_ITEM_INCOMPLETE, payload: {itemId}});
