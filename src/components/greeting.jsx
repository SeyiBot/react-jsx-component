import React from 'react';
import Profilepic from '../assets/pp.jpg';


const firstName = "SEYI";

const Greeting = () => {
    return (
        <div>
        <p style={{color:'white', marginLeft:'45%',fontSize:'30px', fontWeight:'bold'}}>Hello, {firstName ? firstName : "there"}!</p>
        {/* Display an image if the first name is provided */}
        {firstName && <img style={{width:'70px', marginLeft:'50%', paddingBottom:'0.5%'}} src={Profilepic} alt="profilePhoto" />}
        </div>
    );
}

export default Greeting;