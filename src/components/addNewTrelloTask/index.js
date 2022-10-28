import React, {useState} from 'react';
import TrelloTasks from "../trelloTasks";


const AddNewTrelloTask = ({
                             handleAddNewTrello,
                             name,
                             dataFilter,
                             changeDescription,
                             handleChangeTitle,
                             handleChangeStatus,
                             changeCategory
                          }) => {

   const [isAdd, setIsAdd] = useState(true)

   const [newTitle, setNewTitle] = useState("");

   const [newCategory, setNewCategory] = useState("")

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

   return (
      <div className={"container"}>
         <div>
            <h2>{name}</h2>
            {dataFilter.map(elem => <
                  TrelloTasks
                  key={elem.id}
                  changeDescription={changeDescription}
                  handleChangeTitle={handleChangeTitle}
                  changeCategory={changeCategory}
                  handleChangeStatus={handleChangeStatus}
                  {...elem}
               />
            )} {
            isAdd ?
               <button onClick={handleClickAdd}>Add</button>
               :
               <div>

                  <form>
                     <label htmlFor="title">title</label>
                     <input
                        id={"title"}
                        value={newTitle}
                        type="text"
                        onChange={handleTitleValue}
                     />
                  </form>
                  <br/>
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

                  <button>Done</button>
                  <button onClick={handleClickAdd}>cancel</button>
               </div>
         }

         </div>
      </div>
   );
};

export default AddNewTrelloTask;