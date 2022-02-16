import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './features/filterSlice'
import titleReducer from './features/titleSlice'
import todosReducer from './features/todosSlice'

const persistedState = localStorage.getItem('todos') 
                    ? JSON.parse(localStorage.getItem('todos'))
                    : {filter: 'ALL'}

// export const store = createStore(combineReducers({
//   filter: filterReducer, 
//   title: titleReducer, 
//   todos: todosReducer}), persistedState)

export const store = configureStore({reducer:{
    filter: filterReducer, 
    title: titleReducer, 
    todos: todosReducer}},persistedState)

// store.dispatch(toggleTodo('84eaf061-d517-4e3a-bdbf-83977b62eefd'))
// store.dispatch(changeNewTitleTodo('Выучить redux'))

// store.dispatch(addTodo('Добавить'))

// store.dispatch(filterTodos(STATUS_ACTIVE))
// store.dispatch(deleteTodos())