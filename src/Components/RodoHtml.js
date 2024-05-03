import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'

function RodoHtml() {
  return (
   <>
   
   <div className='app'>

<h1>MY Todos</h1>
<div className='wraperr'>
    <div className='inputBox'>
    <div className='inputBoxItem'>
        <label>Title</label> 
        <input type='text' placeholder="what's the title?"/>
        </div>

        <div className='inputBoxItem'>
        <label>userId</label> 
        <input type='text' placeholder="what's the UserId?"/>
        </div>

        <div className='inputBoxItem'>
       
        {/* <input type='submit' value="ADD" className='primary-btn'/> */}
        <button type='submit' className='primary-btn'>Add</button>
        </div>
        </div>


<div className='todoList'>
    <div className='todoListItem'>
        <div>

        <h3>Task 1</h3>
        <p>Desription</p>
        </div>
<div>

</div>
<AiOutlineDelete className='icon'/>
<BsCheckLg className='check-icon'/>

    </div>
</div>

</div>














   </div

   </>
  )
}

export default RodoHtml