import { LINKS } from './index.constants';
import css from './index.module.scss';
import type { NavProps } from './index.types';

const Nav = ({ links }: NavProps) => {
  return (
    <>
      <a className={css.title} href="/">
        <h1>
          <span>fajarmaulana</span>
          <span>
            fajar<span>maulana</span>
          </span>
        </h1>
      </a>

      {(links || LINKS).map((link) => (
        <a key={link.title} className={css.menu} href={link.url}>
          {link.title}
        </a>
      ))}
    </>
  );
};

export default Nav;
