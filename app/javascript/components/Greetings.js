import React from 'react';
import { useSelector } from 'react-redux';

function Greetings() {
  const randomGreeting = useSelector((state) => state);
  return (
    <>
      <p>Message: </p>
      <p>{message}</p>
    </>
  );
}

export default Greetings;
