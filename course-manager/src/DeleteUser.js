import { useState } from "react";

const DeleteUser = () => {
    const [name, setName] = useState('');
    const handleDelete=(e)=>{

        fetch('http://localhost:3000/api/deleteUser/'+name, {
            method:'DELETE'
        })
    }
    return(
        <div className="delete-user">
            <h2>Delete User</h2>
            <form onSubmit={handleDelete}>
            <label>
                    User's Name:

                    <input type="text" required 
                    value = {name} onChange={(e)=>setName(e.target.value)}/>
                    
                </label>

                <button>DELETE USER</button>
            </form>
        </div>

    );
}

export default DeleteUser;