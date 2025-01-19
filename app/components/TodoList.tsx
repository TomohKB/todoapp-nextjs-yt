import React from 'react'
//Reactを使うための宣言
import { Task } from '../types';
import Todo from "./Todo";

interface TodoListProps {
    //このコンポーネントがどんなデータを受け取るかを定義
    todos: Task[];
    //Todosはtodo型の配列であることを意味する
}

const TodoList = ({todos}: TodoListProps) => {
    //todosがtodo[]であることを示す
  return (
    <ul className="space-y-3">
        {todos.map((todo) => (
            //todos.map():todosのリストを一つずつ取り出して処理する方法
            <Todo key={todo.id} todo={todo}/>
            
        ))}
      
      {/* <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
        <span>散歩</span>
        <div>
          <button className="text-green-500 mr-3">edit</button>
          <button className="text-red-500">Delete</button>
        </div>
      </li>
      <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
        <span>散歩</span>
        <div>
          <button className="text-green-500 mr-3">edit</button>
          <button className="text-red-500">Delete</button>
        </div>
      </li> */}
    </ul>
  );
}

export default TodoList