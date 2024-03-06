import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
import { Todo, createTodo } from '../api';

export function TodoForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitle = (value: string) => {
    setTitle(value);
  };

  const handleContent = (value: string) => {
    setContent(value);
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const addTodo = (e: FormEvent) => {
    e.preventDefault();

    if (!title) {
      alert('제목을 입력해주세요.');
      return;
    }

    if (!content) {
      alert('내용을 입력해주세요.');
      return;
    }

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
      createdAt: new Date(),
    };

    mutate(newTodo);
    setTitle('');
    setContent('');
  };

  return (
    <form className="card bg-base-100 gap-4 p-14 shadow-xl" onSubmit={(e) => addTodo(e)}>
      <section className="flex flex-wrap gap-3">
        <label className="flex-1 basis-40">
          <b>제목</b>
          <input
            type="text"
            className="input input-bordered mt-2 w-full"
            onChange={(e) => handleTitle(e.target.value)}
            value={title}
          />
        </label>

        <label className="flex-1 basis-40">
          <b>내용</b>
          <input
            type="text"
            className="input input-bordered mt-2 w-full"
            onChange={(e) => handleContent(e.target.value)}
            value={content}
          />
        </label>
      </section>

      <button className="btn btn-outline btn-primary">추가</button>
    </form>
  );
}
