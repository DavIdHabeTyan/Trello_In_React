import './App.css';

import {useEffect, useState} from "react";
import {tasksList} from './data/index'

import AddNewTrelloTask from "./components/addNewTrelloTask";

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


   const handleAddNewTrello = ( title, category, status, description) => {
      setData(data => [...data, {
         id: Math.random(),
         title,
         category,
         status,
         description,
      }])
   }

   return (
      <div className="App">
         <AddNewTrelloTask
            handleAddNewTrello={handleAddNewTrello}
            handleChangeTitle={handleChangeTitle}
            changeDescription={changeDescription}
            changeCategory={changeCategory}
            handleChangeStatus={handleChangeStatus}
            name={"Todo"}
            dataFilter={data.filter(elem => elem.status === "todo")}
         />
         <AddNewTrelloTask
            // handleAddNewTrello={handleAddNewTrello}
            handleChangeTitle={handleChangeTitle}
            changeDescription={changeDescription}
            changeCategory={changeCategory}
            handleChangeStatus={handleChangeStatus}
            name={"Done"}
            dataFilter={data.filter(elem => elem.status === "done")}
         />

         <AddNewTrelloTask
            handleAddNewTrello={handleAddNewTrello}
            handleChangeTitle={handleChangeTitle}
            changeDescription={changeDescription}
            changeCategory={changeCategory}
            handleChangeStatus={handleChangeStatus}
            name={"Blocked"}
            dataFilter={data.filter(elem => elem.status === "blocked")}
         />

         <AddNewTrelloTask
            handleAddNewTrello={handleAddNewTrello}
            handleChangeTitle={handleChangeTitle}
            changeDescription={changeDescription}
            changeCategory={changeCategory}
            handleChangeStatus={handleChangeStatus}
            name={"InProgress"}
            dataFilter={data.filter(elem => elem.status === "inProgress")}
         />

      </div>
   );
}

export default App;
