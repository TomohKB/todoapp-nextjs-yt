import { Task } from "./types";
//Todoという型を./typesからimportしている

export const getAllTodos = async(): Promise<Task[]> => {
    //この関数は、Todo型の配列を返すことを約束します
    const res = await fetch(`http://localhost:3001/tasks`, {
        cache: "no-store",
        //データがリアルタイムで更新される
    });
    const todos = res.json();
    //サーバーから帰ってきたレスポンスデータをJSON形式に変換します

    return todos;
};

export const addTodos = async (todo: Task): Promise<Task> => {
  //この関数は、Todo型の配列を返すことを約束します
  const res = await fetch(`http://localhost:3001/tasks`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  //サーバーから帰ってきたレスポンスデータをJSON形式に変換します

  return newTodo;
};

export const editTodos = async (id: string, newtext: string): Promise<Task> => {
  //この関数は、Todo型の配列を返すことを約束します
  const res = await fetch(`http://localhost:3001/tasks/S{id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newText}),
  });
  const updatedTodo = await res.json();
  //サーバーから帰ってきたレスポンスデータをJSON形式に変換します

  return updatedTodo;
};