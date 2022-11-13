import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from './Components/NavbarComponent/Navbar';
import FreezersList from './Components/FreezersListComponent/FreezersList';
import EditFreezer from './Components/EditFreezerComponent/EditFreezer';
import CreateFreezer from './Components/CreateFreezerComponent/CreateFreezer';
import CreateUser from './Components/CreateUserComponent/CreateUser';


function MrFreezeApp() {
  return (
    <Router>
      <div className="App">
        <Navbar title= 'navbar' />
      </div>
      <Route path="/" exact component={FreezersList}/>
      <Route path="/edit/:id" component={EditFreezer}/>
      <Route path="/create" component={CreateFreezer}/>
      <Route path="/user" component={CreateUser}/>
    </Router>
  );
}

export default MrFreezeApp;
