import React , {useEffect} from 'react'
import {useSelector} from 'react-redux'
import CoursesCardStudent from '../components/Courses/CoursesCardStudent'
import {useDispatch} from 'react-redux'
import {get_Course} from '../actions/courseAction'
import NavBar from './Navbar'
import Filter from '../components/Filter'
import { useState } from 'react'


const Courses = () => {
    const id = useSelector(state => state.authReducer.user._id)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( get_Course() );
    },[]);

    const courses = useSelector( (state) => state.courseReducer.courses)
    const [search, setsearch] = useState("")
  const searchhandle=(search)=>{
    setsearch(search)

  } 
    return (

        <div> 
            <NavBar></NavBar>
            <br/>
          <div className="position">
            <h1  style={{ alignText:'center'}}>All Courses</h1>
            <Filter search={search}  placeholder='Type your search' searchkey={searchhandle} className="filter"></Filter><br></br>
           <p style={{ display:'flex', alignContent:'center' ,flexWrap: 'wrap',marginLeft:100}} >
         {courses && courses.filter(el=>el.Description.toLowerCase().includes(search.toLowerCase())).map((course) => <CoursesCardStudent key = {course._id} course = {course} />)} </p>
         </div>
       </div>
      
    );
};

export default Courses;