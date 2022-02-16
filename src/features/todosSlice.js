import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
import {
ADD_TODO,
DELETE_TODO,
DELETE_TODOS,
TOGGLE_TODO,
STATUS_ACTIVE,
STATUS_COMPLETED} from '../actions'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    value: []
  },
  reducers: {
     addTodo: function (state, action) {
            state.value = [
            ...state.value,
            {
              title: action.payload,
              status: STATUS_ACTIVE,
              id: uuidv4()
            }     
           ];
      },
      deleteTodo: function (state, action) {
        state.value = state.value.filter(item => item.id != action.payload)
      },
      deleteTodos: function (state) {
        state.value = []
      },
      toggleTodo: function (state, action) {
        let newTodos = [
          ...state.value
        ]
        const index = newTodos.findIndex(item => item.id == action.payload);
        if(newTodos[index].status == STATUS_ACTIVE){
          newTodos[index].status = STATUS_COMPLETED
        }else{
          newTodos[index].status = STATUS_ACTIVE
        }
        state.value = newTodos 
      }

    }
  }
)
export const { addTodo, deleteTodo, deleteTodos, toggleTodo } = todosSlice.actions

export default todosSlice.reducer