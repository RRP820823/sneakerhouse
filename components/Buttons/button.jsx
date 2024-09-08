import { Button } from '@mui/material';
import React from 'react';
import "./index.css"
const CustomButton = ({ title ,variant  , color }) => {
    return (

        <div className='button-container'>
<div className='button-inner-container'>


<p></p>
</div>
        </div>
        // <Button style={{borderRadius :"8px" , backgroundColor : color  , color : "white"}} variant={variant}>
           
        //    <div className='button-text'>

        //     {title} 
        //    </div>
        // </Button>
    );
};

export default CustomButton;