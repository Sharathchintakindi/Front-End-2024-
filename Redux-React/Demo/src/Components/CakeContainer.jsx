import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux";

const CakeContainer = (props) => {
  const handleBuyCake = () => {
    if (props.numOfCakes > 0) {
      props.buyCake();
    } else {
      alert("No cakes left to buy!");
    }
  };

  return (
    <div>
      <h2>No of cakes - {props.numOfCakes}</h2>
      <button onClick={handleBuyCake} aria-label="Buy Cake">
        Buy Cakes
      </button>
    </div>
  ); 
};

const mapStateToProps = (state) => ({
  numOfCakes: state.cake.numOfCakes,
});

const mapDispatchToProps = (dispatch) => ({
  buyCake: () => dispatch(buyCake()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
