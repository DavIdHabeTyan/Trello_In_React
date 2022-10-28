import React, {useState} from 'react';

const Tasks = (props) => {
   const {status, description, title, changeDescription, handleChangeTitle, id} = props;
   const [isAdd, setIsAdd] = useState(true)
   const [editDescription, setEditeDescription] = useState(description)
   const [editTitle, setEditTitle] = useState(title)

   function addToggle() {
      setIsAdd(!isAdd)
   }
   const handelCancel = () => {
      addToggle()
   }
   const handelDone = () => {
      changeDescription(id, editDescription)
      handleChangeTitle(id, editTitle)
      addToggle()
   }
   const handleDescription = (e) => {
      setEditeDescription(e.target.value)
   }
   const handleTitleChange = (e) => {
      setEditTitle(e.target.value)
   }
   return (

      <div className={"task_block"}>
         <div className={"task_block"}>
            <p>{description}</p>
            <p>{title}</p>
         </div>
         {isAdd ? <div>
               <button onClick={addToggle}>Edit</button>
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
                  <select name="" id="status">
                     <option value="">todo</option>
                     <option value="">done</option>
                     <option value="">blocked</option>
                     <option value="">inProgress</option>
                  </select>
                  <br/>
               </form>

               <form>
                  <label htmlFor="category">Category</label>
                  <select name="" id="category">
                     <option id={"status"} value="">JS</option>
                     <option value="">ILLUMITY</option>
                     <option value="">MOLTONIC</option>
                     <option value="">MITROC</option>
                     <option value="">SLAMBDA</option>
                     <option value="">COREPAN</option>
                     <option value="">PHORMULA</option>
                  </select>
               </form>
               <button onClick={handelDone}>Done</button>
               <button onClick={handelCancel}>cancel</button>

            </div>
         }


      </div>

   );
};

export default Tasks;