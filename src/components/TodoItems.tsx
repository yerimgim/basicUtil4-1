import { useState } from 'react';
import { TodoInfo } from './TodoList';
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCheck,
  AiOutlineClose,
} from 'react-icons/ai';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onClickDelete(id: number): void;
  onClickUpdate(updatedTodoItem: TodoInfo): void;
}

const TodoItems = ({
  id,
  text,
  completed,
  onClickDelete,
  onClickUpdate,
}: TodoItemProps) => {
  // 수정 유무
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [updatedText, setUpdatedText] = useState<string>(text);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedTodoItem = {
      id: id,
      text: updatedText,
      completed: completed,
    };
    onClickUpdate(updatedTodoItem);
    setIsUpdating(false);
  };

  const handleComplete = () => {
    const updatedTodoItem = {
      id: id,
      text: text,
      completed: !completed,
    };
    onClickUpdate(updatedTodoItem);
  };

  return (
    <div>
      {!isUpdating ? (
        <li className="todoContainer">
          <button className="completeBtn" onClick={handleComplete}>
            {completed ? '✓' : null}
          </button>
          <div className="itemContainer">
            <p
              style={completed ? { textDecoration: 'line-through' } : undefined}
            >
              {text}
            </p>
            <div>
              <button type="button" onClick={() => setIsUpdating(true)}>
                <AiOutlineEdit size="15" />
              </button>
              <button type="button" onClick={() => onClickDelete(id)}>
                <AiOutlineDelete size="15" />
              </button>
            </div>
          </div>
        </li>
      ) : (
        <li className="todoContainer">
          <button className="completeBtn" onClick={handleComplete}>
            {completed ? '✓' : null}
          </button>
          <form onSubmit={handleSubmit} className="itemContainer">
            <input
              type="text"
              value={updatedText}
              onChange={handleInputChange}
            />
            <div>
              <button type="submit">
                <AiOutlineCheck size="15" />
              </button>
              <button type="button" onClick={() => setIsUpdating(false)}>
                <AiOutlineClose size="15" />
              </button>
            </div>
          </form>
        </li>
      )}
    </div>
  );
};

export default TodoItems;
