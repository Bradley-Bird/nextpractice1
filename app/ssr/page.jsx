export const revalidate = 60;
//next will check every one minute for stale data

const fetchTodos = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await resp.json();
    return data;
};

export default async function SSR() {
    const todos = await fetchTodos();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Statically generated</h1>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h3>{todo.title}</h3>
                </div>
            ))}
        </main>
    );
}
