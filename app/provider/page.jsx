'use client';

import { AsideProvider, useAside } from '@/components/AsideProvider';

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
  return (
    <AsideProvider>
      <Aside />
    </AsideProvider>
  );
}

export default App;
