import { useCallback, useState } from 'react';

import { Dialog } from '../lib/main';

import Card from './components/Card';
import Counter from './components/Counter';
import Header from './components/Header';

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

      <Card />

      <Dialog display={display} className="dialogModifier" onClose={toggle}>
        Dialog
      </Dialog>
    </>
  );
}

export default App;
