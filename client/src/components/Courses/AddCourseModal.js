import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal} from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import { add_course } from '../../actions/courseAction';
import { get_Categorie } from '../../actions/categorieAction';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';





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
      width: '80ch',
      height: '10ch',
      alignContent:'center'
    },
  },
  button :{
    width: '40ch',
   display:'flex',
    justifyContent: 'space-between',
    marginLeft:200,
    marginRight:30, 
    padding: theme.spacing(2,2, 2),
  },
  paper: {
    position: 'relative',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px  #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4,6, 2),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  useEffect(()=>
{
  dispatch(get_Categorie())
},[])
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
      Title:'',
      Description:'',
      Content:'',
      Categorie :'',
    }
   
  )
 

  const id = useSelector(state => state.authReducer.user._id)
  const {categories} = useSelector(state => state.categorieReducer)

  const handleChange = (e) => {
    setInput({...input,[e.target.name]:e.target.value});

  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add_course(input,id,input.Categorie));
    handleClose();
  }
  const handleCancel = (e) => {
    setInput({...input});
  }
  
  return (
    <div>
      <div className="ButtonMargin" style ={{marginLeft:1150}}>
      <Button type="button" onClick={handleOpen} variant="contained" className=" btn login_btn classes.button" style={{width:150}} >
        Add Course
      </Button></div><br></br>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        
    <div style={modalStyle} className={classes.paper}>
     <div>
     <h2 style={{textAlign:'center'}}>Add new course</h2><br/>
     
      </div>
          <form className={classes.root} noValidate autoComplete="off" style={{textAlign:'center'}}>
            
      <TextField name="Title" label="Title" variant="outlined" onChange={handleChange}/><br/>
      <TextField name="Description" label="Description" variant="outlined" onChange={handleChange} /><br/>
      <TextField name="Content" label="Content" multiline rows={3} variant="outlined" onChange={handleChange} /><br/><br/>
      <select className={classes.root} name="Categorie" value="Choose category..." onChange={handleChange}>
      

            {categories.map((cat) => (
              <option name="Categorie" value={cat._id} onChange={handleChange}>{cat.categorieName}</option>
              
            ))}
          </select>
          
 
<div style={{ display:'flex', alignContent:'center'  }} className={classes.button}>
      <Button  type='submit' onClick={handleSubmit} variant="contained" className="btn float-right login_btn">Add</Button>
      <Button  type='reset' onClick={handleCancel} variant="contained">Cancel</Button></div>
      
    </form>
    </div>
    
    </Modal>
    </div>
  );
}