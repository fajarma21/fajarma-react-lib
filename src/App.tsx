import { useCallback, useState } from 'react';

import { Dialog } from '../lib/main';

import Counter from './components/Counter';
import Header from './components/Header';
import Other from './components/Other';

import './App.scss';

function App() {
  const [display, setDisplay] = useState(false);

  const toggle = useCallback(() => {
    setDisplay((prev) => !prev);
  }, []);

  return (
    <>
      <Header />
      <div className="card">
        <button onClick={toggle}>Test</button>
      </div>

      <Counter />
      <Other onClick={() => console.log('test')} />

      <Dialog display={display} className="dialogModifier" onClose={toggle}>
        Dialog
      </Dialog>
    </>
  );
}

export default App;
