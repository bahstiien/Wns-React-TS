import axios from "axios";
import { useState } from "react";

interface IProps {
    onWilderCreated : () => void,
    onError: () => void,
}

function Form(props : IProps) {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');

    const submitForm = async (event : any) => {
        try {
            event.preventDefault();

            const data = {
                name: name,
                city: city,
                skills: []
            };

            console.log("Wilder to create: ", data);

            const result = await axios.post('http://localhost:3001/api/wilders', data);
            console.log(result.data);

            setName('');
            setCity('');

            if (props.onWilderCreated) {
                props.onWilderCreated();
            }
        } catch {
            if (props.onError) {
                props.onError();
            }
        }
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input type="text" name="name" onChange={(event) => setName(event.target.value)} value={name} />
            <label htmlFor='city'>City</label>
            <input type="text" name="city" onChange={(event) => setCity(event.target.value)} value={city} />
            <button type="submit">Go!</button>
        </form>
    );
};

export default Form