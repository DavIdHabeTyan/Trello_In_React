import React, {useState} from 'react';
import TrelloTasks from "../trelloTasks";
import AddIcon from "./../../assets/add.svg"


const AddNewTrelloTask = ({
                             handleAddNewTrello,
                             name,
                             dataFilter,
                             changeDescription,
                             handleChangeTitle,
                             handleChangeStatus,
                             changeCategory,
                             handleDeleteTrello
                          }) => {

   const [isAdd, setIsAdd] = useState(true)

   const [newTitle, setNewTitle] = useState("");

   const [newCategory, setNewCategory] = useState("JS")

   const [newStatus, setNewStatus] = useState("");

   const [newDescription, setNewDescription] = useState("")


   const handleClickAdd = () => {
      setIsAdd(!isAdd)
   }

   const handleTitleValue = (e) => {
      setNewTitle(e.target.value)
   }

   const handleDescriptionValue = (e) => {
      setNewDescription(e.target.value)
   }

   const handleCategoryValue = (e) => {
      setNewCategory(e.target.value)
   }

   const handleAddTrello = () => {
      handleAddNewTrello(newTitle, newCategory,newDescription, name )
      setNewTitle("")
      setNewDescription("")
      setIsAdd(!isAdd)
   }


   return (
      <div className={"container"}>
         <div className={"trello_block"}>
            <div className={"trello_block_name"}>
            <h2>{name}</h2>
            </div>
            {dataFilter.map(elem => <
                  TrelloTasks
                  key={elem.id}
                  changeDescription={changeDescription}
                  handleChangeTitle={handleChangeTitle}
                  changeCategory={changeCategory}
                  handleChangeStatus={handleChangeStatus}
                  handleDeleteTrello={handleDeleteTrello}
                  {...elem}
               />
            )} { isAdd ?
               <div className={"block_AddIcon"} onClick={handleClickAdd}>
                  <img  className={"icon_Add"} src={AddIcon} alt=""/>
                  <span>Add a card...</span>
               </div>
               :
               <div className={"editMod_box"} >
               <div className={"addBlock"}>

                  <form className={"input"}>
                     <label htmlFor="title">title</label>
                     <input
                        id={"title"}
                        value={newTitle}
                        type="text"
                        onChange={handleTitleValue}
                     />
                  </form>

                  <form >
                     <p>Status {name}</p>
                  </form>

                  <form>
                     <label htmlFor="text">Text</label>
                     <input
                        id={"text"}
                        value={newDescription}
                        type="text"
                        onChange={handleDescriptionValue}
                     />
                  </form>
                  <form>
                     <label htmlFor="category">Category</label>
                     <select
                        value={newCategory}
                        name=""
                        id="category"
                        onChange={handleCategoryValue}
                     >
                        <option>JS</option>
                        <option>ILLUMITY</option>
                        <option>MOLTONIC</option>
                        <option>MITROC</option>
                        <option>SLAMBDA</option>
                        <option>COREPAN</option>
                        <option>PHORMULA</option>
                     </select>
                  </form>
               <div className="button">
                  <button className={"windowButton "} onClick={handleAddTrello}>Done</button>
                  <button className={"windowButton"} onClick={handleClickAdd}>cancel</button>
               </div>
               </div>
               </div>
         }

         </div>
      </div>
   );
};

export default AddNewTrelloTask;