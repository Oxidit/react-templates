import { useState } from "react"
import { Todo } from "./Todo"
import {
  FILTER_ACTIVE,
  FILTER_ALL,
  FILTER_COMPLETED
} from '../actions'

import { useSelector, useDispatch } from 'react-redux'
import { changeTitle } from '../features/titleSlice'
import { changeFilter } from '../features/filterSlice'
import { addTodo, deleteTodos } from '../features/todosSlice'
import {Button, Form } from 'react-bootstrap'
export default function Todos(props){

    const titleValue = useSelector((state) => state.title.value)
    const filterValue = useSelector((state) => state.filter.value)
    const todosValue = useSelector((state) => state.todos.value)

    const dispath = useDispatch();

    return <div>
        <h1>Список дел</h1>
        <form class ="mx-auto row g-3" style={{width: 300+'px'}}>
        <div class="col-auto">
    <label for="title" class="visually-hidden">Название</label>
    <Form.Control />
  </div>
  <div class="col-auto">
    <Button >Add</Button>
  </div>
</form>


        <input value={titleValue} onChange={(e)=>{dispath(changeTitle(e.target.value))}} />
        <Form.Control type="text" value={titleValue} onChange={(e)=>{dispath(changeTitle(e.target.value))}}  />
        <Button variant="primary" onClick={()=>{dispath(addTodo(titleValue));dispath(changeTitle('')) }} >Add</Button>{' '}
        <hr />
        <a href='#' onClick={e => {dispath(changeFilter(FILTER_ALL)); e.preventDefault()}}>Все</a> &nbsp;
        <a href='#' onClick={e => {dispath(changeFilter(FILTER_ACTIVE)); e.preventDefault()}}>Активные</a> &nbsp;
        <a href='#' onClick={e => {dispath(changeFilter(FILTER_COMPLETED)); e.preventDefault()}}>Выполненные</a> &nbsp;
        {/* <a href='#' onClick={e => {deleteTodos(); e.preventDefault()}}>Удалить все</a> &nbsp; */}
        <hr />
        <ul>
            {/* <pre>{JSON.stringify(todosValue)}</pre> */}
            {todosValue
            .filter(item => {
                if( filterValue == FILTER_ALL ) return item;
                return item.status == filterValue ? item: false
            })
            .map(item => (
              <Todo 
                key={item.id}
                {...item}               
                />
            ))}
        </ul>        
    </div>
}
