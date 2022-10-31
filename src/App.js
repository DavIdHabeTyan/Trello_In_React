import './App.css';

import {useEffect, useState} from "react";
import {tasksList} from './data/index'
import AddNewTrelloTask from "./components/addNewTrelloTask";

import Context from "./context";

function App() {
   const [data, setData] = useState([]);

   useEffect(() => {
      setData(tasksList)
   }, [])

   const changeDescription = (id, newCategory) => {
      setData(data.map(text => {
         if (id === text.id) {
            text.description = newCategory || text.description
         }
         return text;
      }))
   }

   const changeCategory = (id, newCategory) => {
      setData(data.map(elem => {
         if (elem.id === id) {
            elem.category = newCategory
         }
         return elem
      }))
   }

   const handleChangeTitle = (id, newTitle) => {
      setData(data.map(title => {
         if (id === title.id) {
            title.title = newTitle || title.title
         }
         return title
      }))
   }

   const handleChangeStatus = (id, newStatus) => {
      setData(data.map(elem => {
         if (elem.id === id) {
            elem.status = newStatus
         }
         return elem
      }))
   }

   const handleAddNewTrello = (title, category, description, status,) => {
      setData([...data, {
         id: Math.random(),
         title,
         category,
         description,
         status,
      }])
   }

   const handleDeleteTrello = (id) => {
      setData(prev => prev.filter(elem => elem.id !== id))
   }

   const functionApp = {
      handleAddNewTrello,
      changeDescription,
      handleChangeTitle,
      changeCategory,
      handleChangeStatus,
      handleDeleteTrello,
   }

   return (
      <Context.Provider value={functionApp}>
         <div className="App">
            <div className={"App_header"}>
               <h1>Trello Board</h1>
            </div>
            <div className={"App_trello"}>
               <div className={"test"}>
                  <div className={"App_todo"}>
                     <AddNewTrelloTask
                        name={"todo"}
                        dataFilter={data.filter(elem => elem.status === "todo")}
                     />
                  </div>
                  <AddNewTrelloTask
                     name={"done"}
                     dataFilter={data.filter(elem => elem.status === "done")}
                  />

                  <AddNewTrelloTask
                     name={"blocked"}
                     dataFilter={data.filter(elem => elem.status === "blocked")}
                  />

                  <AddNewTrelloTask
                     name={"inProgress"}
                     dataFilter={data.filter(elem => elem.status === "inProgress")}
                  />
               </div>
            </div>
         </div>
      </Context.Provider>
   );
}

export default App;
