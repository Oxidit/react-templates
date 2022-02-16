export const CHANGE_NEW_TITLE_TODO = 'CHANGE_NEW_TITLE_TODO'
export const ADD_TODO = 'ADD_TODO';
export const FILTER_TODOS = 'FILTER_TODOS'
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODOS = 'DELETE_TODOS';
export const DELETE_TODO = 'DELETE_TODO';

export const STATUS_ACTIVE = 'ACTIVE';
export const STATUS_COMPLETED = 'COMPLETED';

export const FILTER_ALL = 'ALL';
export const FILTER_ACTIVE = 'ACTIVE';
export const FILTER_COMPLETED = 'COMPLETED';

export const changeNewTitleTodo = (title) => ({
  type: CHANGE_NEW_TITLE_TODO,
  title
});

export const addTodo = (title) => ({
  type: ADD_TODO,
  title,
  status: STATUS_ACTIVE
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  filter 
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
});

export const deleteTodos = () => ({
  type: DELETE_TODOS
});
