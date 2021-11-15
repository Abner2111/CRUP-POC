import { useState } from "react";

const NewUser = () =>{
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [city, setCity] = useState('');

    const handlePost = (e)=>{
        e.preventDefault();
        const newUserObj = {name, age, city};
        fetch('http://localhost:3000/api/addUser', {
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newUserObj),
        })
        .then(()=>{
            console.log("NEW USER POSTED")
        })

    }
    return( 
        <div className="new-user">
            <h2>Add an user</h2>
            <form onSubmit={handlePost}>
                <label>
                    User's Name:

                    <input type="text" required 
                    value = {name} onChange={(e)=>setName(e.target.value)}/>
                    
                </label>

                <label>
                    User's Age:

                    <input type="number" required 
                    value = {age} onChange={(e)=>setAge(e.target.value)}/>
                    
                </label>

                <label>
                    User's City:

                    <input type="text" required 
                    value = {city} onChange={(e)=>setCity(e.target.value)}/>
                    
                </label>

                <button>ADD USER</button>
            </form>
        </div>
    );
}

export default NewUser;