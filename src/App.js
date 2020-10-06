import React from 'react';
import TodoLayout from './components/todoLayout';


function App() {
  return (

    <div className="bg-gray-800 h-screen flex flex-col items-center pt-20 overflow-y-scroll">
      <h1 className="text-4xl text-green-400 mb-5">Todo List</h1>
      <TodoLayout />
    </div>
  );
}

export default App;
