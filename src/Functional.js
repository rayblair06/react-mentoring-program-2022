import { useState } from 'react';

const todoList = [
    'Do React course',
    'Go Shopping',
    'Read',
];

function Functional() {
    const [todo, setTodo] = useState(false);

    const handleChange = (event) => {
        setTodo(event.target.value);
    } 

    return (
        <div style={{margin: '5px', padding: '5px'}}>
            <h2>Todo List</h2>
            {todoList.map((item, key) => {
                return (
                    <>
                        <input
                            type="radio"
                            id={item}
                            name="todo"
                            value={key}
                            onChange={handleChange}
                        />

                        <label for={item}>{item}</label><br />
                    </>
                )
            })}

            {todo && (
                <h3>Today I will {todoList[todo]}</h3>
            )}
        </div>
    );
  }
  
  export default Functional;
  