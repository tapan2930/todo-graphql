import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import { GETTODOS,ADDTODOMUTATION } from '../queries/query'
import spinner from '../assets/spinner.svg'

const AddTodo = () => {
    const [todo, settodo] = useState("")
    const [isprocessed, setIsProcessed] = useState(true)
    const [addTodo, { loading, error }] = useMutation(ADDTODOMUTATION);

    const onAddtodobtnClickHandler = (e)=>{
        e.preventDefault();
        if (todo.length === 0){
            alert("Empty Field...")
            return null
        }
        setIsProcessed(!isprocessed)
        addTodo( {
            variables: {todo: todo},
            refetchQueries:  [{query: GETTODOS}],
        })

        return null
    }
  return (
  <div className="p-1 bg-gray-900 rounded-md mb-8 flex justify-between">
      <input className="p-2 bg-gray-900 text-gray-200 outline-none" placeholder="Add todos..." value={todo} onChange={(e)=> settodo(e.target.value)}  />
      <button onClick={(e)=> onAddtodobtnClickHandler(e)} className="text-green-400 uppercase text-xl p-2  outline-none focus:outline-none  ">Add</button>
      {!loading ? null: (<img className="w-5" src={spinner} />)}
  </div> );
};

export default AddTodo;
