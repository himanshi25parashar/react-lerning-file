import React from 'react';
import Heading from './Heading';
import Button from './Button';

const Introduction = (props) => {
    return(
        <div className='Introduction'>
            <h2>introduction count : {props.propsCount}</h2>
            <Heading title = "hey! this is introduction heading" name = 'darshit' />
           
            <Button />
        </div>
        
    )
        
}

export default Introduction;