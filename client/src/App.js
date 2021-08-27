import './App.css';
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

import Navbar from './pages/Navbar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import InstructorRoute from './components/PrivateRoute/InstructorRoute';
import AdminRoute from './components/PrivateRoute/AdminRoute';
import Room from './components/Room/Room';
import Main from './components/Main/Main';
import Users from './pages/Users';
import Courses from './pages/Courses'
import Courses_Student from './pages/Courses_Student'
import Categories from './pages/Categories';
import Index from './pages/Index';
import Contact from './components/Home/Contact';


function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Login' component={Login}/>
      <AdminRoute exact path='/Users' component={Users}/>
     {/*  <Route exact path='/Register' component={Register}/> */}
      <Route exact path='/Register/:role' component={Register}/>
      <AdminRoute exact path='/Categories' component={Categories}/>
      <PrivateRoute exact path="/Room/:roomId" component={Room} />
      <PrivateRoute exact path="/Main" component={Main} />
      <AdminRoute exact path="/Allusers" component={Users}/>
      <InstructorRoute exact path='/Courses' component={Courses}/>
      <PrivateRoute exact path='/Courses_Student' component={Courses_Student}/>
      <PrivateRoute exact path='/Profile' component={Profile}/>
      <Route exact path='/contact' component={Contact}/>
      
      

      </Switch>


      
    </div>
  );
}

export default App;
