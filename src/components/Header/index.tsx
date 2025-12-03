import { memo } from 'react';
import Nav from '../../../lib/fajarma/Nav';

const Header = () => {
  return (
    <header className="header">
      <Nav />
    </header>
  );
};

export default memo(Header);
