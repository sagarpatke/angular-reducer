import TodoAppState from './types';
import { TodoAppActionType } from './actions';

const initialState: TodoAppState = {
  title: "Current App",
  items: []
};

export default function TodoApp(currentState: TodoAppState = initialState, action: TodoAppActionType): TodoAppState {
  switch(action.type) {
    case "@@TodoApp/EDIT_TITLE":
      return Object.assign({}, currentState, {title: action.payload.newTitle});
    case "@@TodoApp/ADD_ITEM":
      return Object.assign({}, currentState, {items: [...currentState.items, {itemId: (Math.random()*1231313221)+"", text: action.payload.newItemText}]});
    case "@@TodoApp/MARK_ITEM_COMPLETE":
    case "@@TodoApp/MARK_ITEM_INCOMPLETE":
    case "@@TodoApp/UPDATE_ITEM":
    case "@@TodoApp/DELETE_ITEM":
    default:
      return currentState;
  }
}
