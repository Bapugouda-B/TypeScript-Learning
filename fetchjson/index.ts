import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

//interface used to define structure of object properties, help us to catch development errors
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

//catching more errors
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
The Todo with id: ${id}
Has a title of : ${title}
Is it finished? ${completed}
`);
};
