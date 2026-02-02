import Tooltip from '../../components/Tooltip';
import css from './index.module.scss';
import type { ContactsProps } from './index.types';

const Contacts = ({ links }: ContactsProps) => {
  return (
    <div className={css.container}>
      {links.map((item, index) => (
        <Tooltip key={`link-${index}`} text={item.tooltip}>
          <a href={item.url} target="_blank">
            {item.icon}
          </a>
        </Tooltip>
      ))}
    </div>
  );
};

export default Contacts;
