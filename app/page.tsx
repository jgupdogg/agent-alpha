"use client"; // Add this line at the very top

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./globals.css"; // Ensure global styles are imported
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Button } from './components/button';


Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">My todos</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={createTodo}>+ new</button>
      <Button variant="default" size="lg">Default Button</Button>
      <Button variant="destructive" size="sm">Destructive Button</Button>
      <Button variant="outline">Outline Button</Button>
      <div className="mt-4">
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/" className="text-blue-500 underline">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}
