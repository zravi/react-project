import './Test.css';
import { useState } from 'react';

function Test(props)
{
    return(
    <div>
      <h1>Welcome To Test Component</h1>  
      <h2>Add Result</h2>
      <p>a = {props.a}</p>
      <p>b = {props.b}</p>
    </div>
    );
}

export default Test;
