function TodoTable({ todos }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Text</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.text}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TodoTable;
