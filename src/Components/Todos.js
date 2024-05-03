import React, { useEffect, useState } from 'react'

import axios from 'axios'
import {AiOutlineDelete } from 'react-icons/ai'
import { BsCheckLg, BsX } from 'react-icons/bs'


function Todos() {

const[data,setData]=useState({title:"",userId:0})

const[todo,setTodo]=useState([])
// const[completed,setcompleted]=useState(false)

useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/todos")
.then((response)=>{
  console.log(response.data)
setTodo(response.data)})
.catch(err=>{console.log("error in api",err)})
},[])








    const handleChange=(e)=>{
      const{name,value}=e.target
if(name==="userId" &&value<0 ){
  setData({...data,[name]:0})
    }


else{
    setData({...data,[name]:value})
    console.log(data)
}

    }


    const handleSubmit=async(e)=>{
      e.preventDefault()

try{
      const newTodo={...data,id:todo.length+1}
    setTodo([...todo,newTodo])
   
    setData({ title: "", completed: false });
    console.log("newtodos",newTodo)
   
    // axios.post("https://jsonplaceholder.typicode.com/todos",newTodo)

    // const response= await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
    // console.log("Todo added:", response.data);

}
catch(err){
  console.log("eroror occured",err)
}

    
    }
    




const handlechecked = (ind) => {
  
  const updatedTodo = [...todo];
  updatedTodo[ind].completed = !updatedTodo[ind].completed;
  setTodo(updatedTodo);
};

      const handleDelete=(ind)=>{
      const newtodo= todo.filter((val,id)=>{return ind!==id})
      setTodo(newtodo)
      }

    useEffect(() => {
      console.log("Updated todo:", todo);
    }, [todo]);
    
  return (
    <>

 
    {/* <form onSubmit={handleSubmit}>

<input type='text' name="title" value={data.title}  onChange={handleChange} placeholder='Enter title...'/>

<input type='number' name="userId" value={data.userId}  onChange={handleChange} placeholder='Enter title...'/>

<input type='submit' value="SUBMIT"/>

   </form> */}
    
  {/* <hr></hr> */}
  {/* <ul></ul> */}

  {/* { todo??todo.length>0? todo.map((val,ind)=>{

  return <li key={ind} style={{color:val.completed?"red":"green"}}>{val.title}

  <ButtonComponent  name="delete" fun={()=>handleDelete(ind)}/>
  <input type='checkbox' checked={val.completed}  onChange={()=>handlechecked(ind)} />

  </li> 

  })  :null} */}



<div className='app'>

<h1>MY Todos</h1>
<div className='wraperr'>
<form onSubmit={handleSubmit}>

    <div className='inputBox'>
    <div className='inputBoxItem'>
        <label>Title</label> 
        <input type='text'    name="title" value={data.title}  onChange={handleChange}  placeholder="what's the title?"/>
        </div>

        <div className='inputBoxItem'>
        <label>userId</label> 
        <input type='number'   name="userId" value={data.userId}  onChange={handleChange}  placeholder="what's the UserId?"/>
        </div>

        <div className='inputBoxItem'>
       
        {/* <input type='submit' value="ADD" className='primary-btn'/> */}
        <button type='submit' className='primary-btn'>Add</button>
        </div>
        </div>

        </form>


<div className='todoList'> 

{ todo??todo.length>0? todo.map((val,ind)=>{

return <li key={ind} >

    <div   className={val.completed ?"todoListItem":"completed"}  >
        <div>

        <h3> User ID: {val.userId} </h3>
        <p>{val.title}</p>
        </div>
<div>

</div>
<AiOutlineDelete className='icon' onClick={()=>handleDelete(ind)}/>
{/* <BsCheckLg className='check-icon'/> */}
{val.completed ? <BsCheckLg className='check-icon'  onClick={()=>handlechecked(ind)}/>:<BsX className='check-icon'  onClick={()=>handlechecked(ind)} />}

    </div>


</li> 

})  :null}


</div>
</div>
   </div>  
    </>
  )
}

export default Todos