import React from 'react';
import logo from '../assets/img/restaurante.jpg';

const home = () =>{
    return(
        <div>
           <h1>Wellcome to your online delivery food </h1>
            <img src={logo} alt="VanHack" />
            <p>your food, delivered!</p>
        </div>
    )
}


export default home;