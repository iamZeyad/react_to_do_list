import { useState, useEffect } from "react";

const Task = ({data}) => {
    const [list, setList] = useState(null);
    if(!list){
        getList();
    }
    useEffect(() => {
        // Fetch the list when the component mounts
        setList(data)
    }, [data]);

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
            {list ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Task</th>
                            <th>Date Added</th>
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(task => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.task}</td>
                                <td>{task.date_added}</td>
                                <td>{task.done}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                (<h1>No lists!</h1>)
            )}
        </>
    );
}

export default Task;