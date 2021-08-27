import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal} from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import { add_Categorie } from '../../actions/categorieAction';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
     
      margin: theme.spacing(1),
      width: '75ch',
      alignContent:'center'
    },
  },
  button :{
    width: '30ch',
    alignContent: 'right',
  },
  paper: {
    position: 'relative',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px  #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4,6, 2),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch()
  const [input, setInput] = useState(
    {
      categorieName:'',
      categoriePic:'',
     
    }
  )
  const id = useSelector(state => state.authReducer.user._id)
  const handleChange = (e) => {
    setInput({...input,[e.target.name]:e.target.value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add_Categorie(input,id));
    handleClose();
  }
  
  return (
    <div>
      <br/>
      <div style ={{marginLeft:1100}}>
      <Button  type="button" onClick={handleOpen} variant="contained" className=" btn login_btn classes.button" style={{width:200}}>
        Add Category
      </Button></div><br></br>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        
    <div style={modalStyle} className={classes.paper}>
     <div>
     <h2 style={{textAlign:'center'}}>Add new category</h2><br/>
     
      </div>
          <form className={classes.root} noValidate autoComplete="off" style={{textAlign:'center'}}>
      <TextField name="categorieName" label="categorieName" variant="outlined" onChange={handleChange}/><br/>
      <TextField name="categoriePic" label="categoriePic" variant="outlined" onChange={handleChange} /><br/>
       
      <Button className={classes.button} type='submit' onClick={handleSubmit} variant="contained" className="btn login_btn">Add</Button>
      <Button className={classes.button} type='reset' variant="contained">Cancel</Button>

   </form>
    </div>
    
    </Modal>
    </div>
  );
}