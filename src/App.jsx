import './index.css'
import './App.css'

import { useState } from 'react';
const App = () => {
  
  const [title, settitle] = useState("")
  const [Details, setDetails] = useState("")
  const [Task, setTask] = useState([])

  const submithandler = (e) => {
    console.log("form submitted");
    e.preventDefault();

    const newTask =[...Task];
    newTask.push({title:title,Details:Details});
    setTask(newTask);
    
    settitle("");
    setDetails("");
  }

  const deleteNote = (idx) =>{
    const newTask = [...Task];
    newTask.splice(idx,1);
    setTask(newTask);
  }


  return (
    <div className='text-white h-screen flex flex-col lg:flex-row w-full bg-[url("https://plus.unsplash.com/premium_photo-1720192861594-5a562bb7be2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870")] bg-cover bg-filled'>
      <form onSubmit={(e) => {
        submithandler(e)
      }} className='lg:w-1/2 flex flex-col gap-4 p-10 items-start'>
        <h1 className='text-3xl font-bold'>Add Your Notes Here!</h1>
        <input className='font-medium w-full px-5 py-2 border-2 rounded-2xl outline-none' type="text" placeholder="Enter Note Heading"  value={title} onChange={(e)=>{
          settitle(e.target.value);
        }}/>
        <textarea className='font-medium flex items-start flex-row w-full h-20 px-5 py-2 border-2 rounded-2xl outline-none' type="text" placeholder="Don't forgot to write..." value={Details} onChange={(e)=>{
          setDetails(e.target.value);
          
        }} />
        <button className='bg-white active:bg-gray-300 w-full text-black px-5 py-2 rounded outline-none' type='submit'>Add Note</button>
      </form>
      <div className='lg:1/2 lg:border-l-2  p-10 w-full'>
        <h1 className='text-xl font-bold'>Your Recent notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-screen  '>
          {Task.map(function(elem,idx){
            return<div key={idx} className='flex flex-col justify-between items-start h-52 p-4 w-40 rounded-xl overflow-hidden text-black bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8UoY1H5Gz_7dJ6XGuqq14-48n4YUGbcKgQ&s")] bg-cover bg-center  bg-fixed'>
              <div>
              <h3 className='leading-tight text-lg font-bold py-5'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-xs text-gray-500'>{elem.Details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
                }}className='w-full bg-red-400 cursor-pointer active:scale-95 py-1 px-1 font-bold text-xs text-white rounded'>Delete</button>
            </div>
            
          })}
        </div>
      </div>
    </div>
  )
}

export default App
