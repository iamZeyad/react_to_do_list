import { useState, useEffect } from "react";
const Task = () => {
  const [task, setTask] = useState(null);

  const handleClick = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      task: task,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("http://localhost:3003/api/create.php", requestOptions);
  };
  return (
    <>
      <div className="Add-task-container">
        <input
          type="text"
          placeholder="type your task"
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button onClick={handleClick}>Add Task</button>
      </div>
    </>
  );
};
export default Task;
