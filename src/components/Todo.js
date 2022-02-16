import { deleteTodo, toggleTodo } from '../features/todosSlice'
import { useSelector, useDispatch } from 'react-redux'

export function Todo(props){
    const dispath = useDispatch();

    const { id } = props;

return <li>
        
        <input 
        type='checkbox' 
        defaultChecked={props.status == 'COMPLETED' ? true : false} 
        id={id}
        onClick={()=>dispath(toggleTodo(id))}
        />
        <label htmlFor={id}>
        {  props.status == 'COMPLETED' ? <del>{props.title}</del> : props.title }
        </label>
        {' '}
        <a href='#' onClick={()=>dispath(deleteTodo(id))}>Удалить</a>
    </li>
}
