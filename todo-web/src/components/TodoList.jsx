import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;