'use client';

import { AsideProvider, useAside } from '@/components/AsideProvider';
import { useGlobalContext } from '@/components/GlobalContextProvider';
import { useEffect } from 'react';

function Aside() {
  const { isOpen, toggleAside } = useAside();
  return (
    <div>
      <button onClick={toggleAside}>Toggle Aside</button>
      {isOpen && <div className="aside-content">This is the aside content!</div>}
    </div>
  );
}

function App() {
  const {globalContext, decrementCounter, incrementCounter } = useGlobalContext();


  useEffect(() => {
    if (globalContext.total == 0) {
      // console.log("globalContext", globalContext);
      // debugger;
      // incrementCounter();
    }
  }, []); // Runs only once after the initial render


  return (
    <AsideProvider>
      <Aside />
      <button onClick={incrementCounter}>카트 추가</button>
      <br></br>
      <button onClick={decrementCounter}>카트 삭제</button>
    </AsideProvider>
  );
}

export default App;
