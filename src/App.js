import React from 'react';

import { GlobalStyle, Wrapper } from './styles/global';
import Header from './components/Header';
import Banner from './components/Banner';
import Bar from './components/Bar';
import Content from './components/Content';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Banner />
        <Bar />
        <Content />
      </Wrapper>
    </>
  );
}

export default App;
