import { useState } from "react";

function Form({ handleForm }) {
    const [formData, setFormData] = useState({
        text: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                handleForm();
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newText">
                    Text:
                    <input
                        name="text"
                        type="text"
                        placeholder="enter new text"
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default Form;
