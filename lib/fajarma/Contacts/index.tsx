import Tooltip from '../../components/Tooltip';
import css from './index.module.scss';
import type { ContactsProps } from './index.types';

const Contacts = ({ links, tooltipOffset }: ContactsProps) => {
  return (
    <div className={css.container}>
      {links.map(({ icon, tooltip, url }, index) =>
        tooltip ? (
          <Tooltip key={`link-${index}`} text={tooltip} offset={tooltipOffset}>
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
