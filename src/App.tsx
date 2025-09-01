import { useState } from 'react';
import { Dialog } from '../lib/main';

import './App.scss';

function App() {
  const [display, setDisplay] = useState(false);

  const toggle = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <>
      <div className="card">
        <button onClick={toggle}>Test</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Dialog display={display} onClose={toggle}>
        Dialog
      </Dialog>
    </>
  );
}

export default App;
