 import React from 'react';

 const SearchBox = ({ searchfield, searchChange}) =>{
 	return (   <div className='pa2 tc'>
               <input className=' pa3 ba --bg bg-lightest-blue' type='search' placeholder='Search robots' onChange={searchChange}/>
               </div>
 			)

 }

 export default SearchBox; 
