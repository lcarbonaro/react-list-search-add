import "./App.css";
import { useState, useEffect } from "react";

import TodoTable from "./components/TodoTable";
import Filter from "./components/Filter";
import Form from "./components/Form";

export default function App() {
    const [todos, setTodos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3000/todos?text_like=${searchTerm}`)
            .then((resp) => resp.json())
            .then((data) => setTodos(data))
            .catch((error) => console.log(error));
    }, [searchTerm, refresh]);

    const handleFilter = (searchTerm) => {
        //console.log('in handleFilter with:'+searchTerm);
        setSearchTerm(searchTerm);
    };

    const handleForm = () => {
        console.log("in handleForm ");
        setRefresh((prev) => !prev);
    };

    return (
        <div>
            <Filter handleFilter={handleFilter} />
            <TodoTable todos={todos} />
            <Form handleForm={handleForm} />
        </div>
    );
} // function App()
