import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import {deleteTodo,switchState} from '../redux/actions';


 function TodoList(props){

    // const Todo = props => {
    //         return (
    //             <div>
    //                 <li>{props.item.content}</li>
    //                 <button onClick={props.deleteTodo(props.item.id)}>Delete</button>
    //                 <button onClick={props.switchState(props.item.id)}>done</button>
    //             </div>
    //         )
    // } 

    // return (
    //     <ul>
    //         {
    //             props.todos && props.todos.length
    //             ? props.todos.map(item => {
    //                 return (
    //                     <Todo  key = {`todo-${item.id}`} item={item} deleteTodo={props.deleteTodo} switchState={props.switchState}/>
                        
    //                 )
    //             }) : <div> No Todos</div>
    //         }
    //     </ul>

    // )

        
    

    
    
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