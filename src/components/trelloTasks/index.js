import React, {useState} from 'react';


const TrelloTasks = (props) => {
   const {status, description, title, changeDescription, handleChangeTitle, changeCategory, handleChangeStatus, id, category} = props;

   const [isClickedEdit, setIsClickedEdit] = useState(true)
   const [editDescription, setEditeDescription] = useState(description)
   const [editTitle, setEditTitle] = useState(title)
   const [editCategory, setEditCategory] = useState(category)
   const [changeStatus, setChangeStatus] = useState(status)


   function handleEdit() {
      setIsClickedEdit(!isClickedEdit)

   }

   const handelCancel = () => {
      handleEdit()
   }

   const handelDone = () => {
      changeDescription(id, editDescription)
      handleChangeTitle(id, editTitle)
      changeCategory(id, editCategory)
      handleChangeStatus(id, changeStatus)
      handleEdit()
   }

   const handleDescription = (e) => {
      setEditeDescription(e.target.value)
   }

   const handleTitleChange = (e) => {
      setEditTitle(e.target.value)
   }

   const HandleChangeCategory = (e) => {
      setEditCategory(e.target.value)
   }
   const ChangeStatus = (e) => {
      setChangeStatus(e.target.value)
   }

   return (
      <div className={"task_block"}>
         <div className={"task_block"}>
            <p>{title}</p>
            <p>{description}</p>
            <p className={"category"}>{category}</p>
         </div>
         {isClickedEdit ? <div>
               <button onClick={handleEdit}>Edit</button>
            </div>
            :
            <div className={"select_Window"}>
               <form>
                  <label htmlFor="title">title</label>
                  <input
                     id={"title"}
                     type="text"
                     defaultValue={title}
                     onChange={handleTitleChange}
                  />
               </form>
               <br/>
               <form>
                  <label htmlFor="text">Text</label>
                  <input
                     id={"text"}
                     type="text"
                     defaultValue={description}
                     onChange={handleDescription}
                  />
               </form>
               <br/>
               <form>
                  <label htmlFor="status">Status</label>
                  <select
                     name=""
                     id="status"
                     defaultValue={changeStatus}
                     onChange={ChangeStatus}
                  >
                     <option value="todo">todo</option>
                     <option value="done">done</option>
                     <option value="blocked">blocked</option>
                     <option value="inProgress">inProgress</option>
                  </select>
                  <br/>
               </form>

               <form>
                  <label htmlFor="category">Category</label>
                  <select
                     name=""
                     id="category"
                     defaultValue={editCategory}
                     onChange={HandleChangeCategory}
                  >
                     <option  value="JS">JS</option>
                     <option value="ILLUMITY">ILLUMITY</option>
                     <option value="MOLTONIC">MOLTONIC</option>
                     <option value="MITROC">MITROC</option>
                     <option value="SLAMBDA">SLAMBDA</option>
                     <option value="COREPAN">COREPAN</option>
                     <option value="PHORMULA">PHORMULA</option>
                  </select>
               </form>
               <button onClick={handelDone}>Done</button>
               <button onClick={handelCancel}>cancel</button>

            </div>
         }

      </div>

   );
};

export default TrelloTasks;