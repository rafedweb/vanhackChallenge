import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToMyBag } from '../actions/myBagActions';

class Dishes extends Component {

  render() {   
    const dishesList = this.props.dishes.map( (item,index)  => {
      return <div key={index} className='card'>
         <div>        
            <p style={{ color: "#767676"}}>{item.name} - {item.price} $ </p>
          </div>
        <button className="button"
                onClick={() => this.props.addToMyBag(item)}>
          Add To My Order
        </button> 
      </div>
    });

    return (
      <div>
        <p>Just chose one or more options and go to My Order for finish your order! </p> 
          <div className= "dishes"> 
            { dishesList }        
          </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        dishes: state.dishes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToMyBag: item => dispatch(addToMyBag(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dishes);