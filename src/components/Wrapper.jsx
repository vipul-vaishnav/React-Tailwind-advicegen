import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-dark_blue px-4 font-default">
      {children}
    </div>
  );
};

export default Wrapper;
