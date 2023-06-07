import React from 'react'
import Paper from '@material-ui/core/Paper'

const Header = () => {
  return (
    <>
      
      <Paper style={{display:"flex", justifyContent:"center"}} elevation={3}>
        <h1 style={{margin:"10px"}}>To-Do-List</h1>
      </Paper>
    </>
  );
}

export default Header