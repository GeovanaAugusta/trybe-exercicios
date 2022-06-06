import React from 'react'

function Todo({ tasks }) {
    return (
      <div>    
        <ul>
        { tasks.map((todo, index) => <li key={ index }>{ todo }</li>) }
       </ul>
       </div>
    )
}

export default Todo