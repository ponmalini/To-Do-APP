import React from 'react';

function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => updateTask(task._id, { completed: !task.completed })}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : '' }}>{task.title}</span>
          <button onClick={() => deleteTask(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
