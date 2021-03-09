import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const User = (props) => {
  const familiar = props.familiar;

  //below this is call ternary operator.. means writting conditional operator in a single line called ternary operator.
  const greetings = familiar ? (
    <h3>Welcome my friend!</h3>
  ) : (
    <h3>Who are you? How can i help you?</h3>
  );
  const greetings2 = familiar ? (
    <h3>Today I will treat you brother, let me pay for food.</h3>
  ) : (
    <h3>Lets eat his his whose whose.</h3>
  );
  return (
    <div>
      <div className="m-5 text-success">
        <h1>Greetings:</h1>
        {greetings}
      </div>
      <div className="m-5 text-warning">
        <h1>Food:</h1>
        {greetings2}
      </div>
      <div className="m-5 text-info">
        <h1>Connection:</h1>
        {familiar ? (
          <h3>Lets join my facebook and instagram.</h3>
        ) : (
          <h3>I dont add strangers.</h3>
        )}
      </div>
    </div>
  );
};

export default User;
