interface InputTextProps {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  inputText: string;
}

export default function CreateTodo({
  onChange,
  onSubmit,
  inputText,
}: InputTextProps) {
  return (
    <div>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          onChange={(event) => onChange(event)}
          type="text"
          value={inputText}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
