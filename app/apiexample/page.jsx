'use client';

import { useState, useEffect } from 'react';

export default function APIExample() {
    const [message, setMessage] = useState({});

    const fetchMessage = async () => {
        const resp = await fetch('/api/todos');
        const message = await resp.json();
        console.log('message', message);
        setMessage(message);
    };

    useEffect(() => {
        const fetchMessage = async () => {
            const resp = await fetch('/api/todos');
            const message = await resp.json();
            console.log('message', message);
            setMessage(message);
        };
        fetchMessage();
    }, []);

    return (
        <main>
            <div>hello</div>
            <button onClick={fetchMessage}>fetch!</button>
        </main>
    );
}
