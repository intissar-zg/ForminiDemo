import React , {useEffect} from 'react'
import {useSelector} from 'react-redux'
import CategoriesCard from '../components/Categories/CategoriesCard'
import {useDispatch} from 'react-redux'
import {get_Categorie} from '../actions/categorieAction'
import AddCategorie from '../components/Categories/AddCategorie'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import NavbarAdmin from './NavBarAdmin'

const useStyles = makeStyles((theme) => ({
   
    marge :
    {
      display: 'flex',
      justifyContent:'space-around',
      margin: theme.spacing(10),
      padding: theme.spacing(2,2, 2),
      width: '120ch'

    }
    
  }));

const Categories = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( get_Categorie() );

    },[]);

    const categories = useSelector( (state) => state.categorieReducer.categories)
    const classes = useStyles();

    return (
<div>
<NavbarAdmin/>
            <div className="position">
            <h1 style={{ alignText:'center'}}>All Categories</h1>
            <AddCategorie/> 
             <p className="cards" style={{ display:'flex', alignContent:'center' ,flexWrap: 'wrap' }}>
           
         {categories && categories.map((categorie) => <CategoriesCard className={classes.marge} key = {categorie._id} categorie = {categorie} />)} </p>
         </div>
      </div>
    );
};

export default Categories;