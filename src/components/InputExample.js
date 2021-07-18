import {useState} from 'react'


function InputExample() {

    // const [name, setName] = useState("");
    // const [surname, setSurname] = useState("");
    const [form, setForm] = useState({name:"", surname:""});
    
    // const onChangeName = (event) => setName(event.target.value);
    // const onChangeSurname = (event) => setSurname(event.target.value);

    const onChangeInput = (event) => setForm({...form, [event.target.name]: event.target.value});

    return (
        <div>
            Name
            <br/>
            <input name="name" value={form.name} onChange={onChangeInput}/>
            <br />
            {/* {name} */}
            <br/>
            Surname
            <br/>
            <input name="surname" value={form.surname} onChange={onChangeInput}/>
            <br />
            {/* {surname} */}

            {form.name} {form.surname}

        </div>
    )
}

export default InputExample
