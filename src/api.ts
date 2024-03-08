import axios from 'axios';

// 1번 문제
export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  createdAt: Date;
};

export type Todos = Array<Todo>;

// 2.1번 문제

const getTodos = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/todo`);
  return res.data;
};

const createTodo = async (todo: Todo): Promise<Todo> => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/todo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const data = await res.json();

  return data;
};

const toggleIsDone = async (todo: Todo): Promise<Todo> => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/todo/${todo.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      isDone: !todo.isDone,
    }),
  });
  const data = await res.json();

  return data;
};

const deleteTodo = async (todo: Todo): Promise<Todo> => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/todo/${todo.id}`, {
    method: 'DELETE',
  });
  const data = await res.json();

  return data;
};

export { getTodos, createTodo, toggleIsDone, deleteTodo };
