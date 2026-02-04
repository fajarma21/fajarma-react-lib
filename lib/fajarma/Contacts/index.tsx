import classNames from '../../utils/classNames';
import Tooltip from '../../components/Tooltip';

import css from './index.module.scss';
import type { ContactsProps } from './index.types';

const Contacts = ({ className = '', links }: ContactsProps) => {
  return (
    <div className={classNames(css.container, className)}>
      {links.map(({ icon, tooltip, url }, index) =>
        tooltip ? (
          <Tooltip key={`link-${index}`} text={tooltip}>
            <a href={url} target="_blank">
              {icon}
            </a>
          </Tooltip>
        ) : (
          <a key={`link-${index}`} href={url} target="_blank">
            {icon}
          </a>
        ),
      )}
    </div>
  );
};

export default Contacts;
