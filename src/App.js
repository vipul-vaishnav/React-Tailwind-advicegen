import React, { useState, useEffect } from 'react';
import Wrapper from './components/Wrapper';
import Card from './components/Card';

const url = `https://api.adviceslip.com/advice`;

const App = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchAdvice = async () => {
    const res = await fetch(url);
    const { slip } = await res.json();
    setData(slip);
    setLoading(false);
  };

  const genAdvice = () => {
    fetchAdvice();
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <Wrapper>
        <Card data={data} loading={loading} genAdvice={genAdvice} />
      </Wrapper>
    </>
  );
};

export default App;
