import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [task, setTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        setTitle('')
        setDetails('')
    const copyTask = [...task];
    
    copyTask.push({title, details})
    setTask(copyTask)
}

const deleteNotes = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
    
}
  return (
    <div className='h-screen bg-black text-white lg:flex overflow-auto'>
        <form className='p-10 pb-3 flex items-start flex-col gap-4 lg:w-1/2' onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <h1 className='text-3xl font-bold'>Add Notes</h1>

    {/* FIRT INPUT FOR HEADING */}
            <input type="text" placeholder='Enter Heading' 
            className='px-5 py-2 border-2 rounded w-full outline-none font-medium' value={title} onChange={(e)=>{
                setTitle(e.target.value)
            }}/>

    {/* SECOND INPUT FOR DESCRIPTION */}
            <textarea type="text" placeholder='Write Details' 
            className='h-35 w-full px-5 py-2 border-2 rounded outline-none font-medium'
            value={details} onChange={(e)=>{
                setDetails(e.target.value)
            }}/>

            <button className='bg-white text-black px-5 py-2 w-full outline-none font-medium active:bg-gray-300'>Add Notes</button>
        </form>
        <div className='lg:p-10 lg:w-1/2 lg:border-l-2 pl-9 pb-5'>
         <h1 className='text-3xl font-bold pb-3'>Recent Notes</h1>
             <div className='flex flex-wrap items-start justify-start gap-5 overflow-auto h-[90%]'>
                   {
                    task.map(function(elem, idx){
                        return <div  key={idx}className=' relative text-black rounded h-45 w-35 p-3 pb-2 bg-[url(https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg)] bg-cover flex flex-col items-start justify-between'>
                        <div id="notes-scroll" className='flex-1 min-h-0 w-full overflow-y-auto overflow-x-hidden pr-1'>
                           <h1 className='leading-tight text-xl font-bold leading-tight text-xl font-bold break-words break-all'>{elem.title}</h1>

                            <p className='leading-tight text-sm text-gray-500 break-words break-all'>{elem.details}</p>
                        </div> 
                            <button onClick={()=>{
                               deleteNotes(idx)
                            }} 
                            className='w-full bg-red-500 text-white p-1 text-xs rounded font-bold cursor-pointer active:scale-95'>Delete</button>
                        </div>
                    })
                   }
             </div>  
        </div>
    </div>
  )
}

export default App