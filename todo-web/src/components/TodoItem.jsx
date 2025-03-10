import { Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const TodoItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex justify-between items-center py-2">
      <Checkbox checked={task.completed} onChange={() => onToggle(task.id)}>
        <span className={`text-xl ${task.done ? "line-through" : ""}`}>
          {task.title}
        </span>
      </Checkbox>
      <DeleteOutlined
        className="text-xl text-red-500 cursor-pointer"
        onClick={() => onDelete(task.id)}
      />
    </div>
  );
};

export default TodoItem;