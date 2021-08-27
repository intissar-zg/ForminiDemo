import React from 'react'

const Filter = (props) => {
    const getsearch =(e) =>{
        props.searchkey(e.target.value);
    }  
    return (
        <div className="filter">
            
            <input
				className='form-control'
				onChange={getsearch}
				placeholder='Type your search'></input>
            
     
        </div>
    )
}

export default Filter

