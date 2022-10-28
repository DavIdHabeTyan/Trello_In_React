import './App.css';
import TrelloTasks from "./components/trelloTask";
import {useEffect, useState} from "react";
import {tasksList} from './data/index'

function App() {
    const [task, setTask] = useState([]);

    useEffect(() => {
        setTask(tasksList)
    }, [])

    const changeDescription = (id, newCategory) => {
        setTask(task.map(text=> {
            if(id===text.id){
                text.description=  newCategory || text.description
            }
            return text;
        }))
    }

const handleChangeTitle = (id, newTitle) => {
   setTask(task.map(title => {
      if(id === title.id) {
         title.title = newTitle
      }
      return title
   }))

}


    return (
        <div className="App">
            <TrelloTasks
               handleChangeTitle={handleChangeTitle}
               changeDescription={changeDescription}
                name={"Todo"}
                filter={task.filter(elem => elem.status === "todo")}
            />
            <TrelloTasks
               handleChangeTitle={handleChangeTitle}
               changeDescription={changeDescription}
                name={"Done"}
                filter={task.filter(elem => elem.status === "done")}
            />

            <TrelloTasks
               handleChangeTitle={handleChangeTitle}
               changeDescription={changeDescription}
                name={"Blocked"}
                filter={task.filter(elem => elem.status === "blocked")}
            />

            <TrelloTasks
               handleChangeTitle={handleChangeTitle}
               changeDescription={changeDescription}
                name={"InProgress"}
                filter={task.filter(elem=> elem.status === "inProgress")}
            />
        </div>
    );
}

export default App;
