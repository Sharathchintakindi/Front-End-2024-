import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../Redux/";

const IceCreamContainer = (props) => {
  const handleBuyIceCream = () => {
    if (props.numOfIceCream > 0) {
      props.buyIceCream();
    } else {
      alert("No IceCream lefts to buy!");
    }
  };

  return (
    <div>
      <h2>No of IceCream - {props.numOfIceCream}</h2>
      <button onClick={handleBuyIceCream} aria-label="Buy IceCream">
        Buy IceCream
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  numOfIceCream: state.iceCream.numOfIceCream,
});

const mapDispatchToProps = (dispatch) => ({
  buyIceCream: () => dispatch(buyIceCream()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
