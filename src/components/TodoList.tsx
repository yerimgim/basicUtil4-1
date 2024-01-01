import { useState } from 'react';
import CreateTodo from './CreateTodo';
import TodoItems from './TodoItems';

export interface TodoInfo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [inputText, setInputText] = useState<string>('');
  const [todoList, setTodoList] = useState<TodoInfo[]>([]);

  const checkList = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.target.value);
  };

  const addTodoList = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newTodo: TodoInfo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setInputText('');
  };

  const deleteList = (id: number) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  };

  const updateList = (newTodo: TodoInfo): void => {
    const newTodoList = todoList.map((item) => {
      if (item.id === newTodo.id) {
        return newTodo;
      } else {
        return item;
      }
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="todoList">
      <h3>Todo List</h3>
      {todoList.map((item) => (
        <TodoItems
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
          onClickDelete={deleteList}
          onClickUpdate={updateList}
        />
      ))}
      <CreateTodo
        onChange={checkList}
        onSubmit={addTodoList}
        inputText={inputText}
      />
    </div>
  );
};

export default TodoList;
