import { Todos } from "../components/Todos";
import { connect } from "react-redux";

import { 
    addTodo,
    changeNewTitleTodo,
    toggleTodo,
    deleteTodo,
    deleteTodos,
    filterTodos
 } from "../actions";

function mapStateToProps(state) {
    return {
        items: state.todos,
        title: state.title,
        filter: state.filter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (title) => dispatch(addTodo(title)),
        changeNewTitleTodo: (title) => dispatch(changeNewTitleTodo(title)),
        toggleTodo: (id) => dispatch(toggleTodo(id)),
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        deleteTodos: () => dispatch(deleteTodos()),
        filterTodos: (filter) => dispatch(filterTodos(filter)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
