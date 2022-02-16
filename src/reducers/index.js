import{
  CHANGE_NEW_TITLE_TODO,
ADD_TODO,
FILTER_TODOS,
TOGGLE_TODO,
DELETE_TODOS,
DELETE_TODO,
STATUS_ACTIVE,
STATUS_COMPLETED,
FILTER_ALL,
FILTER_ACTIVE,
FILTER_COMPLETED,
changeNewTitleTodo,
addTodo,
filterTodos,
toggleTodo,
deleteTodo,
deleteTodos
} from '../actions'
import { v4 as uuidv4 } from 'uuid';

export function todosReducer(state = [], action) {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            title: action.title,
            status: action.status,
            id: uuidv4()
          }     
         ];
      case DELETE_TODO:
        return state.filter(item => item.id != action.id)
      case DELETE_TODOS:
        return []
      case TOGGLE_TODO:
        let newTodos = [
          ...state
        ]
        const index = newTodos.findIndex(item => item.id == action.id);
        if(newTodos[index].status == STATUS_ACTIVE){
          newTodos[index].status = STATUS_COMPLETED
        }else{
          newTodos[index].status = STATUS_ACTIVE
        }
        return newTodos 
      default:
        return state
    }
  }
  
  export function filterReducer(state = '', action) {
    switch (action.type) {
      case FILTER_TODOS:
        return action.filter;
      default:
        return state
    }
  }
  
  export function titleReducer(state = '', action) {
    switch (action.type) {
      case CHANGE_NEW_TITLE_TODO:
        return action.title;
      default:
        return state
    }
  }