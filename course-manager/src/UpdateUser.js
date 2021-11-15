import { useState } from "react";

const UpdateUser = () =>{
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [city, setCity] = useState('');

    const handlePost = (e)=>{
        e.preventDefault();
        const UserObj = {age, city};
        fetch('http://localhost:3000/api/updateUser/'+name, {
            method:'PUT',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(UserObj),
        })
        .then(()=>{
            console.log("USER UPDATED")
        })

    }
    return( 
        <div className="update-user">
            <h2>Update an user</h2>
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

                <button>UPDATE USER</button>
            </form>
        </div>
    );
}

export default UpdateUser;