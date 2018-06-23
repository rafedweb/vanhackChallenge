import React from 'react'

import '../App.css';

const header = () => {
    return(       
          <header className='page-header App-header '> 
          <nav className='navbar navbar-inverse bg-inverse'>
              <div className='container'>
                  <div className='navbar-header'>
                     <a className='navbar-brand' href='#/home'>                     
                       <i></i>
                     </a>
                  </div>
                 <div id='navbar' className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                      <li><a href='#/home'>Home</a></li>
                       <li><a href='#/dishes'>Dishes</a></li>
                       <li><a href='#/myBag'>My Order </a></li>                       
                   </ul>
                 </div>                      
              </div>
          </nav>                                 
      </header> 
    )
}

export default header;