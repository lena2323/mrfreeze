import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './Components/NavbarComponent/Navbar';
import FreezersList from './Components/FreezersListComponent/FreezersList';
import EditFreezer from './Components/EditFreezerComponent/EditFreezers';
import CreateFreezer from './Components/CreateFreezerComponent/CreateFreezer';
import CreateUsers from './Components/CreateUsersComponent/CreateUsers';


function MrFreezeApp() {
  return (
    <Router>
      <Navbar title= 'navbar' />
      <Routes>
      <Route path="/"  element={<FreezersList />} exact />
      <Route path="/edit/:id" element={<EditFreezer/>}/>
      <Route path="/create" element={<CreateFreezer/>}/>
      <Route path="/user" element={<CreateUsers/>}/>
      </Routes>
    </Router>
  );
}

export default MrFreezeApp;
