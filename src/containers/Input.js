import { useState, useEffect } from "react";
import Task from "./Task";
const Input = () => {
  const [input, setInput] = useState(null);
  const [list, setList] = useState(null);

  const handleDelete = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "id": input
    });

    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    await fetch("http://localhost:3000/api/delete.php", requestOptions)
    //update the list
    getList()
  };

  const handleAdd = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      task: input,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("http://localhost:3000/api/create.php", requestOptions);
    //update the list
    getList()

  };
  async function getList() {
    try {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      const response = await fetch("http://localhost:3000/api/readAll.php", requestOptions);
      const data = await response.json();

      // Update the state with the fetched list
      setList(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  return (
    <>
      <div className="Add-task-container">
        <input
          type="text"
          placeholder="id to delete, task to add"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button onClick={handleAdd}>Add Task</button>
        <button onClick={handleDelete}>Delete task</button>

      </div>
      <Task data={list} />
    </>
  );
};
export default Input;
