import React from 'react'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Nav,Container,Navbar} from 'react-bootstrap'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const NavBarHome = () => {
    return (
        <div className="flex">
          <Toolbar  className="bar">
        <img className="logo" src ="logo.png" alt="image"/>
        <div>
          <Button color="inherit"><Link to='/login'className="link">LOGIN</Link></Button>
            <Button color="inherit"><Link to='/Register/student' className="link" >REGISTER</Link></Button>
            <Button color="inherit"><Link to='/Register/instructor' className="link" >INSTRUCTOR</Link></Button>
            </div></Toolbar>

        </div>
    )
}

export default NavBarHome
