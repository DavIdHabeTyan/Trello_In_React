import React from 'react';
import Tasks from "../tasks";

const TrelloTasks = ({name, filter,changeDescription, handleChangeTitle}) => {

    return (
        <div className={"container"}>
            <h2>{name}</h2>
            {filter.map(elem => <
               Tasks
               key={elem.id}
               changeDescription={changeDescription}
               handleChangeTitle={handleChangeTitle}
               {...elem}
            />
            )}

        </div>
    );
};

export default TrelloTasks;