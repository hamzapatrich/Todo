import { addTodo } from "../redux/actions";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import TodoList from "../components/TodoList";


function Home(props) {
  const formik = useFormik({
    initialValues: {
      todo: "",
    },
    validationSchema: Yup.object({
      todo: Yup.string().required("Please this is mandatory"),
    }),
    onSubmit: (values) => {
      props.addTodo(values.todo);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1> Welcome</h1>
        <input id="todo" type="text" {...formik.getFieldProps("todo")} />
        {formik.errors.todo && formik.touched.todo ? (
          <div>required biatch</div>
        ) : null}
        <button type="submit">Click</button>
      </form>
      <TodoList />
    </div>
  );
}

export default connect(null, { addTodo })(Home);
