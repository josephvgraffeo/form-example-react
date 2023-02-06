import { useState } from "react";
import Greeting from "./Greeting";

export default function FormDemo() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleEmail = e => {
        setEmail(e.target.value)
        console.log(email)
    }

    const handleForm = (e) => {
        e.preventDefault()
        alert(`Hello ${name} ${email}`)
    }

    return (
        <form onSubmit={handleForm}>
            <Greeting name={name} />
            <label htmlFor="name">
                Name: 
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <label htmlFor="email">
                Email: 
                <input 
                    type="text" 
                    name="email" 
                    value={email}
                    onChange={handleEmail}
                />
            </label>
            <br/>
                <input type="submit" value="Login" />
        </form>
    )
}