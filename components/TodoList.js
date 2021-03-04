
import {connect} from 'react-redux';
import {deleteTodo,switchState} from '../redux/actions';


 function TodoList(props){
    
    return (
        <div>
           {
               props.todos && props.todos.length
               ? props.todos.map(item => {
                   return (
                    <div key={`todo-#-${item.id}`}>
                        <li>{item.content}</li>
                        <button onClick={()=> props.deleteTodo(item.id)}> Delete </button>
                        <button onClick={()=> props.switchState(item.id)}> done </button>
                    </div>
                   )
               }) : null
           } 
           
        </div>
    )
}


const mapStateToProps = state => {
    const todos = state;
    return(todos)
}
export default connect(mapStateToProps, {deleteTodo,switchState})(TodoList);