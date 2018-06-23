import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromMyBag } from '../actions/myBagActions';

class MyBag extends Component {
  render() {   
    const myBagList = this.props.myBag.map(( item, index) =>{
      return <div key={index} className='card'>
        <div clasName='container'> 
              <p style={{ color: "#767676"}}>{item.name} - {item.price} $ </p>
        </div>
        <button className="button" 
                onClick={ () => this.props.removeFromMyBag(item)} > 
          Remove 
        </button>
      </div>;
    });

    return (
      <div>
        <h1>My Order</h1>
        <div  className="bag">
          {myBagList}          
        </div>
           <div>                     
               <button className="button">Finish Order</button>               
          </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        myBag: state.myBag
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromMyBag: item => dispatch(removeFromMyBag(item))      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBag);