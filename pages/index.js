
import {addTodo} from '../redux/actions';
import {connect} from 'react-redux'
import {useFormik} from 'formik'
import store from '../redux/store'
import * as Yup from 'yup';
import {useEffect,useState} from 'react';
import TodoList from "../components/TodoList";
import useWindowDimensions from '../utils/windowHook';

 function Home( props) {
  const formik = useFormik({
    initialValues:{
      todo : ''
    },
    validationSchema: Yup.object({
      todo: Yup.string().required('Please this is mandatory')
    }),
    onSubmit: values => {
      props.addTodo(values.todo); 
      alert(JSON.stringify(values.todo));
      console.log(store.getState());
    }
  
  })
 
const {height,width} = useWindowDimensions();   
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1> Welcome</h1>
        <input id ='todo' type='text' {...formik.getFieldProps('todo')}/>
        {formik.errors.todo && formik.touched.todo ? <div>required biatch</div> : null}
        <button type='submit'>Click</button>
      </form>
      <TodoList/>

      <p>{height} and {width}</p>
    </div>
    
    
  )
}

export default connect( null, {addTodo})(Home);