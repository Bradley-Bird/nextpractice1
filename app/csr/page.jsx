'use client';

import { useEffect, useState } from 'react';

export default function CSR() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const resp = await fetch(
                'https://jsonplaceholder.typicode.com/todos'
            );
            const data = await resp.json();
            setTodos(data);
        };
        fetchTodos();
    }, []);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Client side rendering</h1>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h3>{todo.title}</h3>
                </div>
            ))}
        </main>
    );
}
4;
