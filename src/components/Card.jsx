import React from 'react';
import Loader from './Loader';
import DividerMB from '../images/pattern-divider-mobile.svg';
// import DividerDS from '../images/pattern-divider-desktop.svg';
import Dice from '../images/icon-dice.svg';

const Card = ({ data, loading, genAdvice }) => {
  const { id, advice } = data;

  if (loading) {
    <Loader />;
  }

  return (
    <div className="bg-dark_grayish_blue relative px-6 py-8 pb-12 rounded-lg text-light_cyan shadow-2xl max-w-sm mx-auto">
      <h1 className="text-neon_green uppercase tracking-widest mb-4 text-sm text-center">
        Advice #<span>{id}</span>
      </h1>
      <p className="text-lg text-center sm:text-2xl md:text-3xl">"{advice}"</p>
      <div className="mt-6 text-center">
        <img src={DividerMB} alt="divider" className="w-full" />
      </div>
      <button
        onClick={genAdvice}
        className="bg-neon_green p-4 rounded-full absolute top-[100%] left-[50%] -translate-x-[50%] -translate-y-[50%] hover:shadow-neon_green hover:shadow-xl active:rotate-180"
      >
        <img src={Dice} alt="dice" />
      </button>
    </div>
  );
};

export default Card;
