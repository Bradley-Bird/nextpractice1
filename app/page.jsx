export const revalidate = 0;
// every time a page is revisited next is checking if the data is stale
// and will rebuild html file

const fetchTodos = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await resp.json();
    return data;
};

export default async function Home() {
    const todos = await fetchTodos();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Server side generated</h1>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h3>{todo.title}</h3>
                </div>
            ))}
        </main>
    );
}
