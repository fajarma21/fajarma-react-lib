import { useState } from 'react';

import { Dialog } from '../lib/main';
import Nav from '../lib/fajarma/Nav';

import './App.scss';

function App() {
  const [display, setDisplay] = useState(false);

  const toggle = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <Nav />
      </header>
      <div className="card">
        <button onClick={toggle}>Test</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Dialog display={display} className="dialogModifier" onClose={toggle}>
        Dialog
      </Dialog>
    </>
  );
}

export default App;
