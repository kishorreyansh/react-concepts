import React, { useState } from "react";
import './ToDoList.css';

function ToDoListComponent(){

    const [tasks,setTasks] = useState(["Eating","Learning"]);
    const [newTasks, setNewTasks] = useState("");

    function handleInputChange(event){
        setNewTasks(event.target.value);
    }

    function addTask(){
        if(newTasks.trim() !== ""){
            setTasks(t => [...t,newTasks]);
            setNewTasks("");
        }
    }

    function removeTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
        
    }

    function handleMoveUpTask(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
    }

    function handleMoveDownTask(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <>
            <div class="container">
                <h2>To Do List App</h2>
                <div class="d-flex">
                    <input type="text" class="form-control me-2" 
                            value={newTasks}
                            placeholder="Enter Your Task"
                            onChange={handleInputChange}>
                    </input>
                    <button type="submit" 
                        class="btn btn-primary"
                        onClick={addTask}>
                            Add
                    </button>
                </div>
                <ol className="list-group mt-3">
                    {tasks.map((task,index) =>
                        <li className="list-group-item d-flex justify-content-between align-items-center"
                             key={index}>
                            <span>{task}</span>
                            <button type="submit" 
                                class="btn btn-danger btn-sm me-2"
                                onClick={() => removeTask(index)}>
                                    Delete
                            </button>
                            <button type="submit" 
                                class="btn btn-light btn-sm me-2"
                                onClick={() => handleMoveUpTask(index)}>
                                    👆
                            </button>
                            <button type="submit" 
                                class="btn btn-light btn-sm"
                                onClick={() => handleMoveDownTask(index)}>
                                    👇
                            </button>
                        </li>
                        )}
                </ol>
                
            </div>
        </>
    );
}

export default ToDoListComponent;