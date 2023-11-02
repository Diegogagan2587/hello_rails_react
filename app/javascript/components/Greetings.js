import React from 'react';
import { useSelector } from 'react-redux';

function Greetings() {
  // we get the greeting from the store
  const message = useSelector((state) => state.greetings.greetings.greeting);
  return (
    <>
      <p>Message: </p>
      <p>{message}</p>
    </>
  );
}

export default Greetings;
