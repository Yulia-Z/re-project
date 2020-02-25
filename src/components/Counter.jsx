import React, { useState } from 'react';


const Counter = (props) => {

  const [count, setCount] = useState(props.start);

  const countMinusHandler = () => {
    setCount(count - 1);
    props.countChanges( - 1);
  };

  const countPlusHandler = () => {
    setCount(count + 1);
    props.countChanges( + 1);
  };

  return (
      <div>
      <button onClick={countMinusHandler}>-</button>
        {count}
      <button onClick={countPlusHandler}>+</button>
      </div>
  );
};

export default Counter;
