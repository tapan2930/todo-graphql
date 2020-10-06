import React from "react";
import AddTodo from "./addTodo";
import Todo from "./todo";
import { useQuery } from "@apollo/client";
import { GETTODOS } from "../queries/query";
import spinner from '../assets/spinner.svg'


const TodoLayout = () => {
  const { loading, error, data } = useQuery(GETTODOS);

  return (
    <div className=" border p-5 border-gray-700 rounded-md shadow-lg">
      
      <AddTodo />
      <div  className="">
        {loading ? (
          <div className="flex justify-center"><img className="w-5 mx-2" src={spinner} /> <p className="text-gray-400">Loading...</p></div>
        ) : (
          data.todo.map((task) => {
            return <Todo todo={task} key={task.id} />;
          })
        )}
      </div>
    </div>
  );
};

export default TodoLayout;
