import { Link } from 'react-router-dom';

const Navbar= ()=>{

    return(
        <nav className="navbar">
            <h1>USER MANAGER</h1>
            <div className= "links">
                <Link to="/">Home</Link>
                <Link to="/new-user">New User</Link>
                <Link to="/delete-user">Delete User</Link>
                <Link to="update-user">Update User</Link>
             </div>
        </nav>
    );
}

export default Navbar;