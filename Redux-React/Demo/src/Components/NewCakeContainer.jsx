import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  // const handleBuyCake = () => {
  //   if (props.numOfCakes > 0) {
  //     props.buyCake();
  //   } else {
  //     alert("No cakes left to buy!");
  //   }
  // };

  return (
    <div>
      <h2>No of cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)} aria-label="Buy Cake">
        Buy {number} Cakes
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  numOfCakes: state.cake.numOfCakes,
});

const mapDispatchToProps = (dispatch) => ({
  buyCake: (number) => dispatch(buyCake(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
