const UserList = ({users}) =>{
    return (
        <div className="user-list">
            {users.map((user)=>(
                <div className="user-preview">
                    <h2>{user.name}</h2>
                    <p>Age: {user.age}</p>
                    <p>City: {user.city}</p>
                </div>
            ))}
        </div>
    );   
}

export default UserList;