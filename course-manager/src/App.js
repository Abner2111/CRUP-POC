import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import NewUser from './NewUser';
import DeleteUser from './DeleteUser';
import UpdateUser from './UpdateUser';

function App() {
  return (
    <Router>
      <div className='App'>
          <Navbar></Navbar>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/new-user">
                <NewUser></NewUser>
              </Route>
              <Route path="/delete-user">
                <DeleteUser></DeleteUser>
              </Route>
              <Route path="/update-user">
                <UpdateUser></UpdateUser>
              </Route>
            </Switch>
          </div>

      </div>
    </Router>
  );
}

export default App;
