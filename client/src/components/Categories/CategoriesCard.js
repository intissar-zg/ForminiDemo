 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { DeleteOutlined } from '@material-ui/icons';
import { CardHeader, IconButton } from '@material-ui/core';
import {useDispatch} from 'react-redux' ;
import { delete_Categorie } from '../../actions/categorieAction';


const useStyles = makeStyles({
  root: {
    height: 200,
    width: 300,
    marginLeft:30,
    marginRight:60,
    marginBottom:30,
   
  },
   media: {
    height: 40,
    paddingTop: '40%'
  }, 
});

export default function CategoriesCard({categorie}) {
  const classes = useStyles();
  const dispatch = useDispatch()
const handleDelete = (id) => {
  let conf = window.confirm("Are you sure to delete");
  if (conf) {
    dispatch(delete_Categorie(id));
   // history.push("/admin-dashboard/users");
  }
};
  return (
    <Card className={classes.root} elevation={3}>
      <CardHeader  title = {categorie.categorieName} 
      action={
        
        <IconButton onClick={() => {handleDelete(categorie._id)}}>
          <DeleteOutlined /> 
        </IconButton> 
            
      }
       
      />
        <CardContent>
        
          <CardMedia
          className={classes.media}  
          image={categorie.categoriePic}
           
        />
        </CardContent>
        
    </Card>
  );
}



