import { Todos } from '../api';
import { TodoItem } from './TodoItem';

export function TodoList({ todos }: { todos: Todos }) {
  if (!todos.length) return <p className="py-3">오늘은 비어있어요.</p>;

  return (
    <ul className="grid grid-cols-2 gap-5">
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        );
      })}
    </ul>
  );
}
