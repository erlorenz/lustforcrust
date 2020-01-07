import React, { FC } from 'react';

interface AppProps {
  name: string;
}

const App: FC<AppProps> = ({ name }) => {
  return <h1>{name}</h1>;
};

export default App;
