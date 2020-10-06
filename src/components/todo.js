import React, {useState, useEffect} from "react";
import {useMutation} from '@apollo/client'
import {DELETETODOMUTATION, GETTODOS, ISCOMPLETEDMUTATION} from '../queries/query'
import spinner from '../assets/spinner.svg'

const Todo = ({todo}) => {
  const tick = (
    <svg className="w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
</svg>
  );

  const close = (
    <svg className="w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
  );

  const [isCompleted, setIsCompleted] = useState(false)
  
  const [deleteTodo, { loading: loadingdeleted, errorCompleted } ] = useMutation(DELETETODOMUTATION);
  const [todoCompleted, { loading: loadingCompleted, error }] = useMutation(ISCOMPLETEDMUTATION);


  const onCompletedHandler = (id)=>{
      setIsCompleted(!isCompleted)
      todoCompleted({
        variables: {id, isCompleted: !isCompleted},
        refetchQueries:  [{query: GETTODOS}],
       
      })
     
  }

  const onDeletedHandler = (id) =>{
   deleteTodo({
     variables: {id},
     refetchQueries:  [{query: GETTODOS}],
   })
  }

  useEffect(()=>{
    setIsCompleted(todo.isCompleted)
  },[]);



  return (
          <div className={"flex justify-between hover:bg-gray-900 p-2 transition duration-300 ease-out border-b border-gray-700"}>
  <span className={`text-gray-200 mr-12 font-thin text-2xl ${isCompleted? "line-through": null }`}>{todo.todos}</span>
            <div className="flex">
            
           
              {loadingCompleted || loadingdeleted ? (<img className="w-5" src={spinner} />): null }
            <button className="outline-none border focus:outline-none border-green-400 text-green-400 p-1 mx-1 " onClick={(e)=> onCompletedHandler(todo.id)}> {tick} </button>
            <button className="outline-none focus:outline-none text-red-400 p-1  border border-red-400" onClick={()=> onDeletedHandler(todo.id)}> {close} </button>
            </div>
          </div>
  );
};

export default Todo;