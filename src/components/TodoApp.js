import { useState } from 'react'
import './Todo.css'
function To() {
    
    
    const [nextId, setNextId] = useState(3);

      let [todoInput, updateInput] = useState()

      let [todoList, updateTodos] = useState(
            [
                  {
                        id: 1,
                        task: 'Learn React'

                  },
                  {
                        id: 2,
                        task: 'Learn Angulr'

                  }
            ]
      )
      
      function addNewTodo() {

            if (todoInput === "") {
                  alert("Add some task")
            }
            else {
                setNextId(nextId + 1);
                let newTodos = [
                        ...todoList,
                        {
                              id: nextId,
                              task: todoInput

                        }
                  ]
                  console.log("ddddd=="+JSON.stringify(newTodos));
                  updateTodos(newTodos);
                  updateInput("")
                  
            }

      }

      function deleteTodo(id) {
            let filteredTodos = todoList.filter(
                  (todo) => todo.id !== id
            )
            updateTodos(filteredTodos)
            setNextId(nextId-1);
         }

      return (
            <div className="container mt-5 w-50">
                  <h3 className='text-center'>Todo App using React</h3>
                  <div className="input-group">
                        <input className="form-control" onChange={(e) => {
                              let task = e.target.value;
                              updateInput(task)

                        }} type='text' value={todoInput} />
                        <button onClick={() => {
                              addNewTodo()
                        }} className="btn btn-primary">Add</button>
                  </div>
                  <ul className="list-group mt-4">
                        {
                              todoList.map(
                                    (todo) => {
                                          return (
                                                <li key={todo.id}  className="list-group-item">
                                                      <p>{todo.task}</p>
                                                      <button onClick={() => {
                                                            deleteTodo(todo.id)
                                                      }} className="btn"> ❌</button>
                                                </li>
                                          )
                                    }
                              )
                        }


                  </ul>
            </div>
       )

}

export default To