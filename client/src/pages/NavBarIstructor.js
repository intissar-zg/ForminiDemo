import {Link} from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom'
import {logout} from '../actions/authAction'
import {useSelector,useDispatch} from 'react-redux'
import AccountCircle from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useHistory()
const isAuth = useSelector(state => state.authReducer.isAuth)
  const role = useSelector(state => state.authReducer.user.role)
const user = useSelector(state => state.authReducer.user)

  return (
    <div>

        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container1 px-4 px-lg-5 bar" >
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              {/* <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="/Profile">Profile</a></li> */}
              <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="/Courses">Courses</a></li>
              <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="/main"> Create Class</a></li>
              
            </ul>
          </div>
        user ? <spam className="navbar-brand" >{user.firstname}</spam> : <></>
           <Button color="inherit" onClick={()=>dispatch(logout(history))}><Link className="link" to='/Register'>Logout</Link></Button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars" />
          </button>
          
        </div>
      </nav>
 
    </div>
  );
}
